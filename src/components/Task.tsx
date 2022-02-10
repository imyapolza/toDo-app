import React from 'react';
import { useTypedSelector } from '../redux/hooks/useTypedSelector';

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
  const type = useTypedSelector(({ filter }) => filter);
  return (
    <div className="item-task">
      <div
        className={task.isCompleted ? 'task-text completed' : 'task-text'}
        onClick={() => handleTask(task.id)}>
        {task.text}
      </div>
      {type === 'completed' || type === 'noCompleted' ? (
        <></>
      ) : (
        <div className="delete-btn" onClick={() => deleteTask(id)}>
          ❌
        </div>
      )}
    </div>
  );
};
