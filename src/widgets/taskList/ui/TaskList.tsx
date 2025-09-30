import type { Task } from 'entities/Task';
import { DeletableTaskCard } from 'features/taskRemove';
import { FilterButton } from 'shared/ui/FilterButton/FilterButton';

import React, { useEffect } from 'react';

import { FILTER_TYPES } from '../lib/constants';
import { useTaskList } from '../lib/hooks';
import { toFilterType } from '../lib/utils';
import { FILTER_OPTIONS } from '../model/constants';
import type { FilterType } from '../model/types';
import classes from './TaskList.module.css';

export const TaskList: React.FC = () => {
  const [currentFilter, setCurrentFilter] = React.useState<FilterType>(FILTER_TYPES.ALL);

  const { tasks, filter, setFilter, removeTask } = useTaskList();

  useEffect(() => {
    if (currentFilter !== filter) {
      setFilter(currentFilter);
    }
  }, [currentFilter, filter, setFilter]);

  const handleFilterChange = (filter: FilterType | string) => {
    const typedFilter = toFilterType(filter);
    setCurrentFilter(typedFilter);
  };

  return (
    <div className={`${classes.container}`}>
      {/* Кнопка-переключатель фильтра */}
      <div className={classes.filterSection}>
        <h3 className={classes.filterTitle}>Фильтр задач:</h3>
        <FilterButton
          filterOptions={FILTER_OPTIONS}
          currentFilter={currentFilter}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div className={classes.list}>
        {tasks.map((task: Task) => (
          <DeletableTaskCard key={task.id} task={task} onClickDelete={removeTask} />
        ))}
      </div>
    </div>
  );
};
