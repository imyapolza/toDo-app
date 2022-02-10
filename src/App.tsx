import React from 'react';

import { Form } from './components/Form';
import { Sort } from './components/Sort';
import { Task } from './components/Task';
import { useTypedSelector } from './redux/hooks/useTypedSelector';
import { useActions } from './redux/hooks/useActions';

function App() {
  const { addTask, completeTask, removeTask, setSort } = useActions();
  const type = useTypedSelector(({ filter }) => filter);
  const items = useTypedSelector(({ tasks }) => filterTasks(tasks, type));
  const count = useTypedSelector(({ tasks }: any) => tasks.length);

  function filterTasks(tasks: any, activeFilter: string) {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(
          (task: { id: number; text: string; isCompleted: boolean }) => task.isCompleted,
        );

      case 'noCompleted':
        return tasks.filter(
          (task: { id: number; text: string; isCompleted: boolean }) => !task.isCompleted,
        );

      default:
        return tasks;
    }
  }

  const takeTask = (input: string): void => {
    const id: number = new Date().valueOf();

    if (input) {
      addTask(id, input, false);
    }
  };

  const deleteTask = (id: number): void => {
    const newItems = items.filter((obj: any) => obj.id !== id);

    removeTask(newItems);
  };

  const handleTask = (id: number): void => {
    const newItems = items.map((obj: any) =>
      obj.id === id ? { ...obj, isCompleted: !obj.isCompleted } : { ...obj },
    );

    completeTask(newItems);
  };

  const onSelectSortType = (type: string) => {
    setSort(type);
  };

  return (
    <div className="container">
      <header>
        <h1>TODO LIST</h1>
        <h2>Всего задач: {count}</h2>
      </header>

      <Sort onClickSortType={onSelectSortType}></Sort>
      <Form takeTask={takeTask}></Form>
      {items &&
        items.map((obj: any, index: any) => (
          <Task
            key={`${obj.id}_${index}`}
            task={obj}
            id={obj.id}
            deleteTask={deleteTask}
            handleTask={handleTask}></Task>
        ))}
    </div>
  );
}

export default App;
