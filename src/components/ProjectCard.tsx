import React from 'react';
import { ExternalLink, Cpu } from 'lucide-react';
import type { Project } from '../types';
import { ProjectDiagram } from './ProjectDiagrams';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="rounded-2xl bg-[#05070D]/90 border border-[#00A8FF]/25 hover:border-[#00E5FF] p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,168,255,0.06)] hover:shadow-[0_0_35px_rgba(0,229,255,0.2)] transition-all duration-300 group relative overflow-hidden">
      {/* Top subtle glow highlight */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A8FF]/30 to-transparent group-hover:via-[#00E5FF] transition-all" />

      <div>
        {/* Top bar with category badge & ID */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-[#071426] border border-[#00A8FF]/30 text-[#00E5FF] font-semibold">
            {project.categoryLabel}
          </span>
          <span className="text-[10px] font-mono text-[#94A3B8] tracking-widest">
            ID: {project.id.toUpperCase()}
          </span>
        </div>

        {/* Project Name */}
        <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white group-hover:text-[#00E5FF] transition-colors leading-tight mb-3">
          {project.name}
        </h3>

        {/* Technical Architecture Visualization Diagram */}
        <div className="my-4">
          <ProjectDiagram type={project.diagramType} />
        </div>

        {/* Description */}
        <p className="text-sm font-sans text-[#94A3B8] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key Highlights */}
        <div className="space-y-2 mb-5">
          {project.keyHighlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-white/90 font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mt-1.5 shrink-0 shadow-[0_0_5px_#00E5FF]" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Technology tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#00A8FF]/15 mb-4">
          {project.techTags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#071426] border border-[#00A8FF]/20 text-[#00A8FF]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Card Footer: GitHub Link & Telemetry */}
        <div className="flex items-center justify-between pt-3 border-t border-[#00A8FF]/15">
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#94A3B8]">
            <Cpu className="w-3 h-3 text-[#00E5FF]" />
            <span>VERIFIED_RTL</span>
          </div>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#071426] border border-[#00A8FF]/30 text-[#F8FAFC] font-mono text-xs hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all group/btn"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>View Repository</span>
              <ExternalLink className="w-3 h-3 text-[#94A3B8] group-hover/btn:text-white" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
