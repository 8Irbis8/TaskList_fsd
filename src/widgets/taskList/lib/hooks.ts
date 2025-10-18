import type { Task } from 'entities/Task';

import { useCallback, useMemo, useState } from 'react';

import { FILTER_TYPES } from '../model/constants';
import { type FilterType } from '../model/types';

const mock: Task[] = [
  {
    id: '1',
    title: 'Изучить TypeScript',
    completed: true,
  },
  {
    id: '2',
    title: 'Разобраться с React Hooks',
    completed: false,
  },
  {
    id: '3',
    title: 'Настроить ESLint и Prettier',
    completed: true,
  },
  {
    id: '4',
    title: 'Создать компонент TaskCard',
    completed: false,
  },
  {
    id: '5',
    title: 'Реализовать фильтрацию задач',
    completed: true,
  },
  {
    id: '6',
    title: 'Добавить возможность удаления задач',
    completed: false,
  },
  {
    id: '7',
    title: 'Написать unit-тесты',
    completed: false,
  },
  {
    id: '8',
    title: 'Оптимизировать производительность',
    completed: true,
  },
  {
    id: '9',
    title: 'Сделать адаптивный дизайн',
    completed: false,
  },
  {
    id: '10',
    title: 'Деплой проекта на хостинг',
    completed: false,
  },
];

export const useTaskList = () => {
  const [allTasks, setAllTasks] = useState<Task[]>(mock);
  const [filter, setFilter] = useState<FilterType>(FILTER_TYPES.ALL);

  const incompleteTasks: Task[] = useMemo(
    () => allTasks.filter(task => !task.completed),
    [allTasks]
  );
  const completedTasks: Task[] = useMemo(() => allTasks.filter(task => task.completed), [allTasks]);

  const filteredTasks: Task[] = useMemo(() => {
    let filteredTasksNew: Task[];
    switch (filter) {
      case FILTER_TYPES.INCOMPLETE:
        filteredTasksNew = incompleteTasks;
        break;
      case FILTER_TYPES.COMPLETED:
        filteredTasksNew = completedTasks;
        break;
      default:
        filteredTasksNew = allTasks;
    }
    return filteredTasksNew;
  }, [incompleteTasks, completedTasks, allTasks, filter]);

  const handleSetFilter = useCallback((newFilter: FilterType) => {
    setFilter(newFilter);
  }, []);

  const handleRemoveTask = useCallback(
    (taskId: string) => {
      const newTaskList = allTasks.filter(task => task.id !== taskId);
      setAllTasks(newTaskList);
    },
    [allTasks]
  );

  return {
    tasks: filteredTasks,
    filter,
    setFilter: handleSetFilter,
    removeTask: handleRemoveTask,
  };
};
