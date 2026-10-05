import React from 'react';
import { BookOpen, User, CheckCircle2, Award } from 'lucide-react';
import { coursesData } from '../data/courses';

export const Courses: React.FC = () => {
  return (
    <section id="courses" className="relative py-24 border-t border-[#00A8FF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071426] border border-[#00A8FF]/30 text-xs font-mono text-[#00E5FF] mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#00A8FF]" />
            <span>SPECIALIZED CERTIFIED CURRICULUM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Courses &amp; Training
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] mt-3 font-sans">
            Targeted professional training programs under distinguished semiconductor industry instructors.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl bg-[#05070D]/90 border border-[#00A8FF]/25 hover:border-[#00E5FF] p-6 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,168,255,0.06)] hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#071426] text-[#00E5FF] border border-[#00A8FF]/30 font-semibold">
                    {course.tag}
                  </span>
                  <Award className="w-4 h-4 text-[#00A8FF] group-hover:text-[#00E5FF] transition-colors" />
                </div>

                <span className="text-[11px] font-mono text-[#94A3B8] block mb-1">
                  {course.category}
                </span>

                <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#00E5FF] transition-colors leading-snug mb-4">
                  {course.title}
                </h3>
              </div>

              <div>
                <div className="pt-4 border-t border-[#00A8FF]/15 flex items-center gap-2 text-xs font-mono text-[#00E5FF]">
                  <User className="w-3.5 h-3.5 text-[#00A8FF]" />
                  <span>{course.instructor}</span>
                </div>

                <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-[#94A3B8]">
                  <span>STATUS</span>
                  <span className="text-white flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#00E5FF]" />
                    Completed
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
