import { TasksAction, TasksActionTypes } from '../types/tasks';

const tasks = (state = [], action: TasksAction) => {
  switch (action.type) {
    case TasksActionTypes.ADD_TASK:
      return [...state, { id: action.id, text: action.text, isCompleted: action.isCompleted }];

    case TasksActionTypes.REMOVE_TASK:
      return action.payload;

    case TasksActionTypes.COMPLETE_TASK:
      return action.payload;

    default:
      return state;
  }
};

export default tasks;
