import { ArrowRight, ArrowUpRight, Check, Info } from 'lucide-react';
import {
  BUSINESS_INFO,
  CARPET_PACKAGES,
  PACKAGE_PRICING_DISCLOSURES,
} from '../data/cleanProsData';
import type { QuotePrefill } from '../types';

interface PackagesSectionProps {
  onAskPackage: (prefill: QuotePrefill) => void;
  compact?: boolean;
}

export function PackagesSection({
  onAskPackage,
  compact = false,
}: PackagesSectionProps) {
  return (
    <section
      id="carpet-packages"
      className={`${compact ? 'py-12' : 'py-20 lg:py-24'} bg-[#EAF0F4]/65 border-y border-[#17232D]/8`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-medium text-[#1687D9] mb-2">
            Published Carpet-Cleaning Package Prices — Per Area
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#17232D] [text-wrap:balance]">
            Transparent Carpet Packages Tailored to What Your Home Actually Needs
          </h2>
          <p className="mt-4 text-base text-[#344957] leading-relaxed">
            Clean Pros publishes three clear per-area service tiers so you can
            compare every preparation, extraction, and finishing step up front.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {CARPET_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`flex flex-col justify-between rounded-xl p-7 transition-transform duration-200 hover:-translate-y-0.5 ${
                pkg.featured
                  ? 'bg-[#17232D] text-white border border-[#17232D] shadow-lg'
                  : 'bg-white text-[#17232D] border border-[#17232D]/12'
              }`}
            >
              <div>
                <div className="flex items-baseline justify-between gap-4 pb-5 border-b border-current/10">
                  <div>
                    <h3 className="font-display font-bold text-2xl">
                      {pkg.name}
                    </h3>
                    <p
                      className={`text-xs mt-1 ${
                        pkg.featured ? 'text-[#57C5EA]' : 'text-[#344957]'
                      }`}
                    >
                      Published package · Per area
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-medium text-3xl sm:text-4xl tabular-nums">
                      ${pkg.pricePerArea}
                    </span>
                    <span
                      className={`block text-xs ${
                        pkg.featured ? 'text-[#EAF0F4]/75' : 'text-[#344957]'
                      }`}
                    >
                      per area
                    </span>
                  </div>
                </div>

                <p
                  className={`mt-5 text-sm leading-relaxed ${
                    pkg.featured ? 'text-[#EAF0F4]/85' : 'text-[#344957]'
                  }`}
                >
                  {pkg.summary}
                </p>

                <div className="mt-6">
                  <p
                    className={`text-xs font-semibold mb-3 ${
                      pkg.featured ? 'text-[#57C5EA]' : 'text-[#17232D]'
                    }`}
                  >
                    Included Steps ({pkg.steps.length})
                  </p>
                  <ul className="space-y-2.5">
                    {pkg.steps.map((step) => (
                      <li
                        key={step}
                        className="flex items-center gap-2.5 text-sm"
                      >
                        <Check
                          className={`w-4 h-4 shrink-0 ${
                            pkg.featured ? 'text-[#57C5EA]' : 'text-[#1687D9]'
                          }`}
                          aria-hidden="true"
                        />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-current/10 space-y-2.5">
                <button
                  type="button"
                  onClick={() =>
                    onAskPackage({
                      service: 'Carpet Cleaning',
                      packageChoice: `${pkg.name} ($${pkg.pricePerArea} per area)`,
                    })
                  }
                  className={`w-full min-h-11 px-5 py-3 rounded-lg text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                    pkg.featured
                      ? 'bg-[#1687D9] hover:bg-[#1273BA] text-white'
                      : 'bg-[#17232D] hover:bg-[#233442] text-white'
                  }`}
                >
                  <span>Ask About This Package</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <a
                  href={BUSINESS_INFO.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full min-h-10 px-4 py-2 rounded-lg text-xs font-semibold inline-flex items-center justify-center gap-1.5 border transition-colors ${
                    pkg.featured
                      ? 'border-white/20 text-[#EAF0F4] hover:bg-white/10'
                      : 'border-[#17232D]/15 text-[#344957] hover:bg-[#EAF0F4]'
                  }`}
                >
                  <span>Book Online on Official Site</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Scope Disclosure */}
        <div className="mt-8 rounded-xl bg-white border border-[#17232D]/10 p-6">
          <div className="flex items-start gap-3">
            <Info
              className="w-5 h-5 text-[#1687D9] shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <h3 className="font-display font-semibold text-sm text-[#17232D]">
                Pricing Scope & Confirmation Notes
              </h3>
              <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1.5 text-xs text-[#344957] leading-relaxed">
                {PACKAGE_PRICING_DISCLOSURES.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
