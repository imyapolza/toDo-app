export const addTask = (id: number, text: string, isCompleted: boolean) => ({
  type: 'ADD_TASK',
  id,
  text,
  isCompleted,
});
export const completeTask = (tasks: { id: number; text: string; isCompleted: boolean }) => ({
  type: 'COMPLETE_TASK',
  payload: tasks,
});

export const removeTask = (tasks: { id: number; text: string; isCompleted: boolean }) => ({
  type: 'REMOVE_TASK',
  payload: tasks,
});
