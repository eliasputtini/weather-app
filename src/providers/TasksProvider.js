import React, {useContext, useState, useEffect, useRef} from 'react';
import Realm from 'realm';
import {Weather} from '../schemas';
import {useAuth} from './AuthProvider';

const TasksContext = React.createContext(null);

const TasksProvider = ({children, projectPartition}) => {
  const [tasks, setTasks] = useState([]);
  const {user} = useAuth();

  const realmRef = useRef(null);

  useEffect(() => {
    const OpenRealmBehaviorConfiguration = {
      type: 'openImmediately',
    };
    const config = {
      schema: [Weather.schema],
      sync: {
        user: user,
        partitionValue: projectPartition,
        newRealmFileBehavior: OpenRealmBehaviorConfiguration,
        existingRealmFileBehavior: OpenRealmBehaviorConfiguration,
      },
    };
    Realm.open(config).then(projectRealm => {
      realmRef.current = projectRealm;

      const syncTasks = projectRealm.objects('Weather');
      let sortedTasks = syncTasks.sorted('name');
      setTasks([...sortedTasks]);
      sortedTasks.addListener(() => {
        setTasks([...sortedTasks]);
      });
    });

    return () => {
      const projectRealm = realmRef.current;
      if (projectRealm) {
        projectRealm.close();
        realmRef.current = null;
        setTasks([]);
      }
    };
  }, [user, projectPartition]);

  const createTask = (newTaskName, temperature) => {
    const projectRealm = realmRef.current;
    projectRealm.write(() => {
      projectRealm.create(
        'Weather',
        new Weather({
          name: newTaskName || 'New Task',
          partition: projectPartition || 'New Task',
          temp: temperature || 0,
        }),
      );
    });
  };

  const setTaskStatus = (task, status) => {
    if (
      ![
        Weather.STATUS_OPEN,
        Weather.STATUS_IN_PROGRESS,
        Weather.STATUS_COMPLETE,
      ].includes(status)
    ) {
      throw new Error(`Invalid status: ${status}`);
    }
    const projectRealm = realmRef.current;

    projectRealm.write(() => {
      task.status = status;
    });
  };

  const deleteTask = task => {
    const projectRealm = realmRef.current;
    projectRealm.write(() => {
      projectRealm.delete(task);
      setTasks([...projectRealm.objects('Weather').sorted('name')]);
    });
  };

  return (
    <TasksContext.Provider
      value={{
        createTask,
        deleteTask,
        setTaskStatus,
        tasks,
      }}>
      {children}
    </TasksContext.Provider>
  );
};

const useTasks = () => {
  const task = useContext(TasksContext);
  if (task == null) {
    throw new Error('useTasks() called outside of a TasksProvider?'); // an alert is not placed because this is an error for the developer not the user
  }
  return task;
};

export {TasksProvider, useTasks};
