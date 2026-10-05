export interface Project {
  id: string;
  name: string;
  category: 'RTL' | 'Verification' | 'ASIC' | 'FPGA' | 'Processor' | 'CDC';
  categoryLabel: string;
  description: string;
  keyHighlights: string[];
  techTags: string[];
  githubUrl?: string;
  diagramType: 'css-phy' | 'riscv' | 'spi' | 'sync-fifo' | 'async-fifo' | 'dsp48a1';
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  mentors: string;
  period: string;
  badge: string;
  content: string[];
  type: 'FPGA / ASIC' | 'RTL / STA';
}

export interface CourseItem {
  id: string;
  title: string;
  instructor: string;
  category: string;
  tag: string;
}

export interface SkillCategory {
  title: string;
  badge: string;
  skills: string[];
}

export interface ToolItem {
  name: string;
  category: string;
  description: string;
  badge: string;
}
