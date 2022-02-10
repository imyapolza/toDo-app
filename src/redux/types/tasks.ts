export enum TasksActionTypes {
  ADD_TASK = 'ADD_TASK',
  REMOVE_TASK = 'REMOVE_TASK',
  COMPLETE_TASK = 'COMPLETE_TASK',
}

interface AddTaskAction {
  type: TasksActionTypes.ADD_TASK;
  id: number;
  text: string;
  isCompleted: boolean;
}
interface RemoveTaskAction {
  type: TasksActionTypes.REMOVE_TASK;
  payload: any[];
}
interface CompleteTaskAction {
  type: TasksActionTypes.COMPLETE_TASK;
  payload: any[];
}

export type TasksAction = AddTaskAction | RemoveTaskAction | CompleteTaskAction;
