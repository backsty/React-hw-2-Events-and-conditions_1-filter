import { FC } from 'react';
import { ProjectListProps } from '../../types';

export const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <img key={index} src={project.img} alt={project.category} className="project-image" />
      ))}
    </div>
  );
};
