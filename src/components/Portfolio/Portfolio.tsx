import { useState } from 'react';
import { Toolbar } from '../Toolbar/Toolbar';
import { ProjectList } from '../ProjectList/ProjectList';
import { projects } from '../../data/project';

export const Portfolio = () => {
  const [selected, setSelected] = useState('All');
  const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];

  const handleSelectFilter = (filter: string) => {
    setSelected(filter);
  };

  const filteredProjects =
    selected === 'All' ? projects : projects.filter((project) => project.category === selected);

  return (
    <div className="portfolio">
      <Toolbar filters={filters} selected={selected} onSelectFilter={handleSelectFilter} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
};
