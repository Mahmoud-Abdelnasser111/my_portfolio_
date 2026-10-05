import React, { useState } from 'react';
import { Cpu } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../types';

type FilterType = 'All' | 'RTL' | 'Verification' | 'ASIC' | 'FPGA' | 'Processor' | 'CDC';

const filterCategories: FilterType[] = [
  'All',
  'RTL',
  'Verification',
  'ASIC',
  'FPGA',
  'Processor',
  'CDC'
];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filteredProjects = projectsData.filter((project: Project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'RTL') {
      return (
        project.category === 'RTL' ||
        project.categoryLabel.includes('RTL') ||
        project.techTags.includes('Verilog HDL') ||
        project.techTags.includes('RTL Verification')
      );
    }
    if (activeFilter === 'Verification') {
      return (
        project.category === 'Verification' ||
        project.categoryLabel.includes('Verification') ||
        project.techTags.includes('UVM') ||
        project.techTags.includes('RTL Verification') ||
        project.techTags.includes('Testbench')
      );
    }
    if (activeFilter === 'ASIC') {
      return project.category === 'ASIC' || project.techTags.includes('ASIC Flow');
    }
    if (activeFilter === 'FPGA') {
      return project.category === 'FPGA' || project.techTags.includes('FPGA Architecture');
    }
    if (activeFilter === 'Processor') {
      return project.category === 'Processor' || project.techTags.includes('Processor Architecture');
    }
    if (activeFilter === 'CDC') {
      return project.category === 'CDC' || project.techTags.includes('CDC');
    }
    return true;
  });

  return (
    <section id="projects" className="relative py-24 border-t border-[#00A8FF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071426] border border-[#00A8FF]/30 text-xs font-mono text-[#00E5FF] mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#00A8FF]" />
            <span>HARDWARE IMPLEMENTATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Engineering Projects
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] mt-3 font-sans">
            RTL implementations, processors, verification environments and digital systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((filter) => {
            const isSelected = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#071426] text-[#00E5FF] border border-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                    : 'bg-[#030712] text-[#94A3B8] border border-[#00A8FF]/20 hover:text-white hover:border-[#00A8FF]/50'
                }`}
              >
                <span>{filter}</span>
                {isSelected && <span className="ml-1.5 text-[10px] text-[#00A8FF]">[{filteredProjects.length}]</span>}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Status bar */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#071426]/60 border border-[#00A8FF]/20 font-mono text-xs text-[#94A3B8]">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
            <span>ALL PROJECTS SYNTHESIZABLE &amp; VERIFIED IN QUESTA-SIM / VIVADO</span>
          </div>
        </div>
      </div>
    </section>
  );
};
