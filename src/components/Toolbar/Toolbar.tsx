import { FC } from 'react';
import { ToolbarProps } from '../../types';

export const Toolbar: FC<ToolbarProps> = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={filter === selected ? 'active' : ''}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
