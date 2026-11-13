import { AlertCircle, ArrowLeft, Phone, ShieldAlert } from 'lucide-react';
import { MediaFrame } from '../components/MediaFrame';
import { BUSINESS_INFO, WATER_DAMAGE_SERVICE } from '../data/cleanProsData';
import type { PageRoute } from '../types';

interface WaterDamagePageProps {
  onNavigate: (route: PageRoute) => void;
}

export function WaterDamagePage({ onNavigate }: WaterDamagePageProps) {
  return (
    <div>
      {/* Urgent Dark Hero */}
      <section className="bg-[#17232D] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EAF0F4]/75 hover:text-[#57C5EA] mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to Home</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#57C5EA]">
                <ShieldAlert className="w-4 h-4" aria-hidden="true" />
                <span>24/7 Emergency Water-Restoration Pathway</span>
              </div>

              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white [text-wrap:balance]">
                {WATER_DAMAGE_SERVICE.headline}
              </h1>

              <p className="text-base text-[#EAF0F4]/90 leading-relaxed">
                {WATER_DAMAGE_SERVICE.publishedClaim} Fast water extraction and
                controlled structural drying help limit secondary floor and
                subfloor damage.
              </p>

              <div className="rounded-xl bg-white/8 border border-white/15 p-5 space-y-3">
                <p className="text-xs font-medium text-[#57C5EA]">
                  Emergency Service Phone Pathway
                </p>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="w-full sm:w-auto min-h-12 px-7 py-3.5 rounded-lg bg-[#1687D9] hover:bg-[#1273BA] text-white text-base font-semibold inline-flex items-center justify-center gap-2.5 transition-colors font-mono tabular-nums"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
                <p className="text-xs text-[#EAF0F4]/75">
                  Please call directly for standing water, burst pipes, or
                  overflow emergencies—do not wait on an online quote form.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <MediaFrame
                src={WATER_DAMAGE_SERVICE.image}
                alt={WATER_DAMAGE_SERVICE.imageAlt}
                fallbackTitle="Structural Drying & Water Extraction"
                loading="eager"
                className="rounded-2xl border border-white/15 h-full min-h-[280px] lg:min-h-[380px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-medium text-[#1687D9] mb-2">
              Published Restoration Capabilities
            </p>
            <h2 className="font-display font-bold text-3xl text-[#17232D]">
              Extraction, Drying Assistance, and Clear Communication
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WATER_DAMAGE_SERVICE.capabilities.map((cap, idx) => (
              <div
                key={cap.title}
                className="rounded-xl border border-[#17232D]/12 bg-[#EAF0F4]/35 p-6 space-y-2"
              >
                <span className="font-mono text-xs text-[#1687D9] tabular-nums">
                  0{idx + 1}
                </span>
                <h3 className="font-display font-bold text-xl text-[#17232D]">
                  {cap.title}
                </h3>
                <p className="text-sm text-[#344957] leading-relaxed">
                  {cap.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Transparent Notices */}
          <div className="mt-10 rounded-xl border border-[#17232D]/15 bg-[#EAF0F4]/60 p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <AlertCircle
                className="w-5 h-5 text-[#1687D9] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div className="space-y-3">
                <h3 className="font-display font-bold text-lg text-[#17232D]">
                  Important Service & Scheduling Notes
                </h3>
                <ul className="space-y-2 text-sm text-[#344957] leading-relaxed">
                  {WATER_DAMAGE_SERVICE.importantNotices.map((notice) => (
                    <li key={notice}>{notice}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
