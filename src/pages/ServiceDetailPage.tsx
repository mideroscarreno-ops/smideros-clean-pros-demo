import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Info } from 'lucide-react';
import { MediaFrame } from '../components/MediaFrame';
import { PackagesSection } from '../components/PackagesSection';
import { BUSINESS_INFO } from '../data/cleanProsData';
import type { PageRoute, QuotePrefill, ServiceDetail } from '../types';

interface ServiceDetailPageProps {
  service: ServiceDetail;
  onNavigate: (route: PageRoute) => void;
  onStartQuote: (prefill?: QuotePrefill) => void;
}

export function ServiceDetailPage({
  service,
  onNavigate,
  onStartQuote,
}: ServiceDetailPageProps) {
  return (
    <div>
      {/* Hero Header */}
      <section className="bg-[#EAF0F4]/60 border-b border-[#17232D]/10 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#344957] hover:text-[#1687D9] mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to Home</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
              <div className="flex items-center gap-2 text-xs text-[#344957]">
                <span className="font-mono text-[#1687D9] tabular-nums">
                  {service.indexNumber}
                </span>
                <span aria-hidden="true">·</span>
                <span>{service.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>Norman, Oklahoma</span>
              </div>

              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#17232D] [text-wrap:balance]">
                {service.name}
              </h1>

              <p className="text-lg font-medium text-[#17232D]/85 [text-wrap:balance]">
                {service.headline}
              </p>

              <p className="text-base text-[#344957] leading-relaxed">
                {service.overview}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    onStartQuote({ service: service.quoteServiceKey })
                  }
                  className="min-h-12 px-6 py-3 rounded-lg bg-[#1687D9] hover:bg-[#1273BA] text-white text-sm font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Request a {service.shortTitle} Quote</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <a
                  href={BUSINESS_INFO.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-12 px-5 py-3 rounded-lg border border-[#17232D]/20 bg-white hover:bg-[#EAF0F4] text-[#17232D] text-sm font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Book Online</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <MediaFrame
                src={service.image}
                alt={service.imageAlt}
                fallbackTitle={service.name}
                loading="eager"
                className="rounded-2xl border border-[#17232D]/10 h-full min-h-[280px] lg:min-h-[380px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Methodology & Surfaces */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#17232D]">
                {service.methodologyTitle}
              </h2>
              <div className="space-y-4">
                {service.methods.map((method, idx) => (
                  <div
                    key={method.title}
                    className="rounded-xl border border-[#17232D]/10 bg-[#EAF0F4]/35 p-6"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-[#1687D9] tabular-nums">
                        0{idx + 1}
                      </span>
                      <h3 className="font-display font-bold text-lg text-[#17232D]">
                        {method.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-[#344957] leading-relaxed pl-7">
                      {method.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-xl border border-[#17232D]/12 p-6 space-y-4">
                <h3 className="font-display font-bold text-lg text-[#17232D]">
                  Commonly Serviced Surfaces
                </h3>
                <ul className="space-y-3">
                  {service.surfacesCovered.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[#344957]"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-[#1687D9] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-[#17232D] text-white p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-medium text-[#57C5EA]">
                  <Info className="w-4 h-4" aria-hidden="true" />
                  <span>Honest Expectations</span>
                </div>
                <ul className="space-y-2.5 text-sm text-[#EAF0F4]/85 leading-relaxed">
                  {service.honestExpectations.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Show Carpet Packages directly when viewing Carpet Cleaning */}
      {service.route === 'carpet-cleaning' && (
        <PackagesSection
          compact
          onAskPackage={(prefill) => onStartQuote(prefill)}
        />
      )}
    </div>
  );
}
