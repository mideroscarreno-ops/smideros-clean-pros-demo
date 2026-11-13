import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Phone,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { MediaFrame } from '../components/MediaFrame';
import { PackagesSection } from '../components/PackagesSection';
import { ProcessSection } from '../components/ProcessSection';
import { ServiceAreaChecker } from '../components/ServiceAreaChecker';
import {
  BUSINESS_INFO,
  EDITORIAL_GALLERY_ITEMS,
  HERO_MEDIA,
  REVIEW_HIGHLIGHTS,
  SPECIALTY_SERVICES,
  SURFACE_EXPERTISE_PILLARS,
  WATER_DAMAGE_SERVICE,
} from '../data/cleanProsData';
import type { PageRoute, QuotePrefill } from '../types';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onStartQuote: (prefill?: QuotePrefill) => void;
}

export function HomePage({ onNavigate, onStartQuote }: HomePageProps) {
  function scrollToServices() {
    const el = document.getElementById('services-overview');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div>
      {/* B. Cinematic Hero */}
      <section className="relative bg-[#17232D] text-white overflow-hidden">
        <div className="absolute inset-0">
          <MediaFrame
            src={HERO_MEDIA.image}
            alt={HERO_MEDIA.alt}
            loading="eager"
            fallbackTitle="Clean Pros Norman"
            className="w-full h-full"
            imgClassName="w-full h-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#17232D]/95 via-[#17232D]/78 to-[#17232D]/35"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs sm:text-sm font-medium text-[#57C5EA] tracking-wide">
              Locally Owned · Professionally Equipped · Norman, Oklahoma
            </p>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight text-white [text-wrap:balance]">
              A Deeper Clean You Can See. A Difference You Can Feel.
            </h1>

            <p className="text-base sm:text-lg text-[#EAF0F4]/90 leading-relaxed max-w-xl">
              Professional carpet, upholstery, tile, rug, and specialty surface
              cleaning for homes and businesses in Norman and surrounding
              communities.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={scrollToServices}
                className="min-h-12 px-7 py-3.5 rounded-lg bg-[#1687D9] hover:bg-[#1273BA] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Explore Cleaning Services</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onStartQuote()}
                className="min-h-12 px-7 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 text-white text-sm font-semibold inline-flex items-center justify-center transition-colors backdrop-blur-sm cursor-pointer"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Distinct Action Pathways Strip */}
      <section
        aria-label="Booking, Quote, and Emergency Options"
        className="bg-[#EAF0F4] border-b border-[#17232D]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href={BUSINESS_INFO.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl bg-white border border-[#17232D]/10 p-5 flex items-center justify-between gap-4 hover:border-[#1687D9]/50 transition-colors"
            >
              <div>
                <p className="text-xs font-medium text-[#1687D9]">
                  Official Scheduling
                </p>
                <p className="font-display font-bold text-base text-[#17232D] mt-0.5">
                  Book Online
                </p>
                <p className="text-xs text-[#344957] mt-1">
                  Supported services via callcleanpros.com
                </p>
              </div>
              <ArrowUpRight
                className="w-5 h-5 text-[#344957] group-hover:text-[#1687D9] shrink-0 transition-colors"
                aria-hidden="true"
              />
            </a>

            <button
              type="button"
              onClick={() => onStartQuote()}
              className="group text-left rounded-xl bg-white border border-[#17232D]/10 p-5 flex items-center justify-between gap-4 hover:border-[#1687D9]/50 transition-colors cursor-pointer"
            >
              <div>
                <p className="text-xs font-medium text-[#1687D9]">
                  Custom Evaluation
                </p>
                <p className="font-display font-bold text-base text-[#17232D] mt-0.5">
                  Request a Quote
                </p>
                <p className="text-xs text-[#344957] mt-1">
                  Upholstery, rugs, tile, commercial & multi-area
                </p>
              </div>
              <ArrowRight
                className="w-5 h-5 text-[#344957] group-hover:text-[#1687D9] shrink-0 transition-colors"
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('water-damage')}
              className="group text-left rounded-xl bg-[#17232D] text-white p-5 flex items-center justify-between gap-4 hover:bg-[#1F2F3D] transition-colors cursor-pointer"
            >
              <div>
                <p className="text-xs font-medium text-[#57C5EA]">
                  24/7 Emergency Phone Line
                </p>
                <p className="font-display font-bold text-base text-white mt-0.5">
                  Emergency Water Damage
                </p>
                <p className="text-xs text-[#EAF0F4]/80 mt-1 font-mono tabular-nums">
                  Call {BUSINESS_INFO.phoneDisplay}
                </p>
              </div>
              <Phone
                className="w-5 h-5 text-[#57C5EA] shrink-0"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </section>

      {/* C. Surface Expertise */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-medium text-[#1687D9]">
                Surface Science & Honest Care
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#17232D] [text-wrap:balance]">
                Every Surface Deserves the Right Treatment.
              </h2>
              <p className="text-base text-[#344957] leading-relaxed">
                Carpet pile, tailored upholstery weaves, porous grout lines, area
                rugs, and commercial flooring cannot be cleaned with one generic
                approach. Clean Pros focuses exclusively on specialty surface
                care and restoration—not routine residential maid checklists.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SURFACE_EXPERTISE_PILLARS.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="border-t border-[#17232D]/15 pt-5 space-y-2"
                >
                  <span className="font-mono text-xs text-[#1687D9] tabular-nums">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#17232D]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#344957] leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* D. Differentiated Primary Services */}
      <section
        id="services-overview"
        className="py-20 lg:py-24 bg-[#EAF0F4]/45 border-t border-[#17232D]/8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-[#1687D9] mb-2">
                Specialty Cleaning Services
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#17232D] [text-wrap:balance]">
                Purpose-Built Equipment for Fabrics, Carpet, and Hard Surfaces
              </h2>
            </div>
            <p className="text-sm text-[#344957] max-w-md">
              Select any specialty service below to review methods, surfaces
              covered, and realistic care expectations.
            </p>
          </div>

          {/* Featured top 2 services (asymmetric 12-col split) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            {SPECIALTY_SERVICES.slice(0, 2).map((service, index) => (
              <article
                key={service.route}
                className={`${
                  index === 0 ? 'lg:col-span-7' : 'lg:col-span-5'
                } rounded-2xl bg-white border border-[#17232D]/10 overflow-hidden flex flex-col justify-between`}
              >
                <div>
                  <MediaFrame
                    src={service.image}
                    alt={service.imageAlt}
                    fallbackTitle={service.name}
                    className="h-60 sm:h-72 w-full"
                  />
                  <div className="p-6 sm:p-8 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[#344957]">
                      <span className="font-mono text-[#1687D9] tabular-nums">
                        {service.indexNumber}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{service.categoryLabel}</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-[#17232D]">
                      {service.name}
                    </h3>
                    <p className="text-sm text-[#344957] leading-relaxed">
                      {service.summary}
                    </p>
                  </div>
                </div>
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <button
                    type="button"
                    onClick={() => onNavigate(service.route)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1687D9] hover:text-[#1273BA] transition-colors cursor-pointer"
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Remaining 4 specialty services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIALTY_SERVICES.slice(2).map((service) => (
              <article
                key={service.route}
                className="rounded-2xl bg-white border border-[#17232D]/10 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <MediaFrame
                    src={service.image}
                    alt={service.imageAlt}
                    fallbackTitle={service.name}
                    className="h-44 w-full"
                  />
                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-[#344957]">
                      <span className="font-mono text-[#1687D9] tabular-nums">
                        {service.indexNumber}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{service.categoryLabel}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#17232D]">
                      {service.name}
                    </h3>
                    <p className="text-sm text-[#344957] leading-relaxed">
                      {service.summary}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate(service.route)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1687D9] hover:text-[#1273BA] transition-colors cursor-pointer"
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Separate Emergency Water Damage Restoration Block */}
          <div className="mt-8 rounded-2xl bg-[#17232D] text-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-5">
                <div className="flex items-center gap-2 text-xs text-[#57C5EA]">
                  <span className="font-mono tabular-nums">
                    {WATER_DAMAGE_SERVICE.indexNumber}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Dedicated Emergency Response</span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white [text-wrap:balance]">
                  Water Damage Restoration — Direct Phone Response
                </h3>
                <p className="text-sm sm:text-base text-[#EAF0F4]/85 leading-relaxed max-w-xl">
                  {WATER_DAMAGE_SERVICE.publishedClaim} Emergency water
                  extraction, moisture assessment, and structural drying
                  assistance are handled separately from scheduled cleanings.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="min-h-12 px-6 py-3 rounded-lg bg-[#1687D9] hover:bg-[#1273BA] text-white text-sm font-semibold inline-flex items-center gap-2 transition-colors font-mono tabular-nums"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>Water Damage? Call Now</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => onNavigate('water-damage')}
                    className="min-h-12 px-5 py-3 rounded-lg border border-white/25 text-white text-sm font-semibold hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    Restoration Details
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5 min-h-64">
                <MediaFrame
                  src={WATER_DAMAGE_SERVICE.image}
                  alt={WATER_DAMAGE_SERVICE.imageAlt}
                  fallbackTitle="Water Damage Equipment"
                  className="w-full h-full min-h-64"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Carpet Packages */}
      <PackagesSection onAskPackage={(prefill) => onStartQuote(prefill)} />

      {/* 6. Editorial Surface Results Gallery */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#17232D]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-[#1687D9] mb-2">
                Illustrative Surface Care Gallery
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#17232D] [text-wrap:balance]">
                See What Professional Cleaning Can Do.
              </h2>
            </div>
            <p className="text-xs text-[#344957] max-w-sm leading-relaxed">
              The gallery below showcases illustrative surface standards across
              residential carpet, upholstery, tile, and commercial environments
              rather than fabricated before-and-after pairs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDITORIAL_GALLERY_ITEMS.map((item) => (
              <figure
                key={item.title}
                className="rounded-2xl border border-[#17232D]/10 overflow-hidden bg-white"
              >
                <MediaFrame
                  src={item.image}
                  alt={item.alt}
                  fallbackTitle={item.title}
                  className="h-64 sm:h-72 w-full"
                />
                <figcaption className="p-6 space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#344957]">
                    <span>{item.surface}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#1687D9] font-medium">
                      {item.method}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#17232D]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#344957] leading-relaxed">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 7. The Cleaning Process & Checklist */}
      <ProcessSection />

      {/* 8. Trust & Customer Reviews */}
      <section className="py-20 lg:py-24 bg-[#EAF0F4]/60 border-t border-[#17232D]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#1687D9]">
                <Star className="w-4 h-4 fill-[#1687D9]" aria-hidden="true" />
                <span>Verified Public Reputation</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#17232D] [text-wrap:balance]">
                Trusted Across Norman Homes and Local Businesses
              </h2>
              <p className="text-sm text-[#344957] leading-relaxed">
                {REVIEW_HIGHLIGHTS.auditNote}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('reviews')}
                  className="px-5 py-2.5 rounded-lg bg-[#17232D] text-white text-sm font-semibold hover:bg-[#233442] transition-colors cursor-pointer"
                >
                  View Review Summary
                </button>
                <a
                  href={BUSINESS_INFO.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg border border-[#17232D]/20 bg-white text-[#17232D] text-sm font-semibold hover:bg-[#EAF0F4] transition-colors"
                >
                  <span>Verify Live Reviews</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {REVIEW_HIGHLIGHTS.verifiedThemes.map((item) => (
                <div
                  key={item.topic}
                  className="rounded-xl bg-white border border-[#17232D]/10 p-6 space-y-2.5"
                >
                  <p className="text-xs text-[#1687D9] font-medium">
                    {item.source}
                  </p>
                  <h3 className="font-display font-bold text-lg text-[#17232D]">
                    {item.topic}
                  </h3>
                  <p className="text-sm text-[#344957] leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-white border border-[#17232D]/10 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3">
              <ShieldCheck
                className="w-5 h-5 text-[#1687D9] shrink-0 mt-0.5 sm:mt-0"
                aria-hidden="true"
              />
              <p className="text-sm text-[#344957]">
                <span className="font-semibold text-[#17232D]">
                  Published Business Standards:
                </span>{' '}
                Clean Pros LLC describes itself as locally owned, family
                operated, and licensed and insured in Norman, Oklahoma.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="text-sm font-semibold text-[#1687D9] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
            >
              About Clean Pros
            </button>
          </div>
        </div>
      </section>

      {/* 9. Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceAreaChecker onOpenQuote={() => onStartQuote()} />
        </div>
      </section>
    </div>
  );
}
