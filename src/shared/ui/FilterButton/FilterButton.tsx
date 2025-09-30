import React from "react";
import classes from "./FilterButton.module.css";

export interface FilterButtonProps {
  filterOptions: { value: string ; label: string }[];
  /** Текущий активный фильтр */
  currentFilter: string;
  /** Callback при изменении фильтра */
  onFilterChange: (filter: string) => void;
}

/**
 * Кнопка-переключатель фильтра задач
 * Позволяет переключаться между режимами отображения задач
 */
export const FilterButton: React.FC<FilterButtonProps> = ({
  filterOptions,
  currentFilter,
  onFilterChange,
}) => {
  return (
    <div className={`${classes.container}`}>
      {filterOptions.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`${classes.button} ${
            currentFilter === option.value ? classes.active : ""
          }`}
          onClick={() => onFilterChange(option.value)}
          aria-pressed={currentFilter === option.value}
          aria-label={`Показать ${option.label.toLowerCase()} задачи`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

