export interface Project {
  img: string;
  category: string;
}

export interface ToolbarProps {
  filters: string[];
  selected: string;
  onSelectFilter: (filter: string) => void;
}

export interface ProjectListProps {
  projects: Project[];
}
