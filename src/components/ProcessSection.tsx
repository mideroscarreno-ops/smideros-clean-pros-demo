import { CheckSquare, ClipboardList } from 'lucide-react';
import {
  PRE_APPOINTMENT_CHECKLIST,
  PROCESS_STEPS,
} from '../data/cleanProsData';

interface ProcessSectionProps {
  compact?: boolean;
}

export function ProcessSection({ compact = false }: ProcessSectionProps) {
  return (
    <section
      className={`${compact ? 'py-12' : 'py-20 lg:py-24'} bg-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-medium text-[#1687D9] mb-2">
            Our Cleaning Process
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#17232D] [text-wrap:balance]">
            Professional Equipment. A Thoughtful Process.
          </h2>
          <p className="mt-4 text-base text-[#344957] leading-relaxed">
            Every surface responds differently to heat, agitation, moisture, and
            rinsing. Here is how Clean Pros structures residential carpet
            extraction—with specific preparation and finishing steps matched to
            your selected package.
          </p>
        </div>

        {/* 01 - 04 Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-[#17232D]/10 bg-[#EAF0F4]/40 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between border-b border-[#17232D]/10 pb-4 mb-4">
                  <span className="font-mono text-sm font-medium text-[#1687D9] tabular-nums">
                    {step.number}
                  </span>
                  <span className="text-xs text-[#344957]">Stage</span>
                </div>
                <h3 className="font-display font-bold text-xl text-[#17232D]">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#344957] leading-relaxed">
                  {step.description}
                </p>
              </div>
              <p className="mt-5 pt-4 border-t border-[#17232D]/8 text-xs font-medium text-[#17232D]">
                {step.packageNote}
              </p>
            </div>
          ))}
        </div>

        {/* Customer Pre-Appointment Checklist */}
        <div className="mt-14 rounded-2xl bg-[#17232D] text-white p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#57C5EA]">
                <ClipboardList className="w-4 h-4" aria-hidden="true" />
                <span>Pre-Appointment Preparation</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white [text-wrap:balance]">
                How to Prepare Before Your Technician Arrives
              </h3>
              <p className="text-sm text-[#EAF0F4]/80 leading-relaxed">
                Taking a few minutes to prepare helps keep hoses unobstructed
                and allows technicians to focus directly on surface extraction.
                Clean Pros does not promise heavy furniture-moving services.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {PRE_APPOINTMENT_CHECKLIST.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-white/5 border border-white/10 p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckSquare
                      className="w-5 h-5 text-[#57C5EA] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="font-display font-semibold text-base text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-[#EAF0F4]/75 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
