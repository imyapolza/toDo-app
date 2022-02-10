import React from 'react';
//{id: 1644498188781, text: 'dfdf', isCompleted: false}
interface TaskProps {
  task: { id: number; text: string; isCompleted: boolean };
  id: number;
  deleteTask: (input: number) => void;
  handleTask: (input: number) => void;
}

export const Task: React.FC<TaskProps> = ({
  task,
  id,
  deleteTask,
  handleTask,
}: TaskProps): React.ReactElement => {
  return (
    <div className="item-task">
      <div
        className={task.isCompleted ? 'task-text completed' : 'task-text'}
        onClick={() => handleTask(task.id)}>
        {task.text}
      </div>
      <div className="delete-btn" onClick={() => deleteTask(id)}>
        ❌
      </div>
    </div>
  );
};
