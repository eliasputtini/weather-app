import {ObjectId} from 'bson';

class Weather {
  /**
   *
   * @param {string} name The name of the task
   * @param {string status The status of the task. Default value is "Open"
   * @param {ObjectId} id The ObjectId to create this task with
   */
  constructor({
    name,
    partition,
    status = Weather.STATUS_OPEN,
    id = new ObjectId(),
    temp,
  }) {
    this._partition = partition;
    this._id = id;
    this.name = name;
    this.temp = temp;
  }

  static STATUS_OPEN = 'Aberto';
  static STATUS_IN_PROGRESS = 'Em Progresso';
  static STATUS_COMPLETE = 'Completo';
  static schema = {
    name: 'Weather',
    properties: {
      _id: 'objectId',
      _partition: 'string?',
      name: 'string',
      temp: 'double?',
    },
    primaryKey: '_id',
  };
}

export {Weather};
