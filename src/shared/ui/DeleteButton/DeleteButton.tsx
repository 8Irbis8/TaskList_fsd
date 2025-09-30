import React from 'react';
import classes from './DeleteButton.module.css';

export interface DeleteButtonProps {
  onClick: () => void;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <button
      type="button"
      className={classes.button}
      onClick={handleClick}
      title="Удалить"
      aria-label="Удалить"
    >
      ×
    </button>
  );
};