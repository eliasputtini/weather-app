import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthProvider} from './src/providers/AuthProvider';
import {TasksProvider} from './src/providers/TasksProvider';

import {Auth} from './src/views/Auth';
import {ProjectsView} from './src/views/ProjectView';
import {TasksView} from './src/views/TasksView';
import {Details} from './src/views/Details';

import {Logout} from './src/components/Logout';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome View"
            component={Auth}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Projects"
            component={ProjectsView}
            headerBackTitle="log out"
            options={{
              title: `Home`,
              headerLeft: function Header() {
                return <Logout />;
              },
            }}
          />
          <Stack.Screen name="Task List">
            {props => {
              const {navigation, route} = props;
              const {user, projectPartition} = route.params;
              return (
                <TasksProvider user={user} projectPartition={projectPartition}>
                  <TasksView navigation={navigation} route={route} />
                </TasksProvider>
              );
            }}
          </Stack.Screen>
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              title: `Detalhes`,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
