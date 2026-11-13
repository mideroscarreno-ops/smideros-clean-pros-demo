import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { MediaFrame } from '../components/MediaFrame';
import { PackagesSection } from '../components/PackagesSection';
import { ProcessSection } from '../components/ProcessSection';
import { QuoteBuilder } from '../components/QuoteBuilder';
import { ServiceAreaChecker } from '../components/ServiceAreaChecker';
import {
  BUSINESS_INFO,
  FAQ_ITEMS,
  HERO_MEDIA,
  REVIEW_HIGHLIGHTS,
} from '../data/cleanProsData';
import type { PageRoute, QuotePrefill } from '../types';

interface PageNavProps {
  onNavigate: (route: PageRoute) => void;
  onStartQuote: (prefill?: QuotePrefill) => void;
}

function PageHeader({
  eyebrow,
  title,
  description,
  onNavigate,
}: {
  eyebrow: string;
  title: string;
  description: string;
  onNavigate: (route: PageRoute) => void;
}) {
  return (
    <section className="bg-[#EAF0F4]/60 border-b border-[#17232D]/10 py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#344957] hover:text-[#1687D9] mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Back to Home</span>
        </button>
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-medium text-[#1687D9]">{eyebrow}</p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#17232D] [text-wrap:balance]">
            {title}
          </h1>
          <p className="text-base text-[#344957] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export function PackagesPage({ onNavigate, onStartQuote }: PageNavProps) {
  return (
    <div>
      <PageHeader
        eyebrow="Carpet Cleaning Packages"
        title="Published Basic, Odor, and Pro Care Tiers"
        description="Compare Clean Pros’ published per-area carpet cleaning packages side by side, then request a quote or schedule on the official website."
        onNavigate={onNavigate}
      />
      <PackagesSection onAskPackage={(prefill) => onStartQuote(prefill)} />
    </div>
  );
}

export function ProcessPage({ onNavigate, onStartQuote }: PageNavProps) {
  return (
    <div>
      <PageHeader
        eyebrow="Our Cleaning Process"
        title="Four Disciplined Stages from Evaluation to Final Rinse"
        description="See how Clean Pros inspects fibers, prepares traffic lanes, extracts deep soil with truck-mounted equipment, and helps you prepare before arrival."
        onNavigate={onNavigate}
      />
      <ProcessSection />
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#EAF0F4]/65 border border-[#17232D]/10 p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-bold text-2xl text-[#17232D]">
                Ready to discuss your carpet or surface project?
              </h2>
              <p className="text-sm text-[#344957] mt-1">
                Tell us which rooms or surfaces need attention and we’ll help
                match the right method.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onStartQuote()}
              className="min-h-12 px-6 py-3 rounded-lg bg-[#1687D9] hover:bg-[#1273BA] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export function ServiceAreasPage({ onNavigate, onStartQuote }: PageNavProps) {
  return (
    <div>
      <PageHeader
        eyebrow="Service Coverage"
        title="Proudly Serving Norman and Nearby Communities"
        description="Clean Pros operates out of Norman, Oklahoma and serves Norman and surrounding areas. Use the inquiry tool below or call to confirm availability for your neighborhood."
        onNavigate={onNavigate}
      />
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <ServiceAreaChecker onOpenQuote={() => onStartQuote()} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#17232D]/12 p-6 space-y-2.5">
              <p className="text-xs font-medium text-[#1687D9]">
                Confirmed Home Base
              </p>
              <h2 className="font-display font-bold text-xl text-[#17232D]">
                Norman, Oklahoma
              </h2>
              <p className="text-sm text-[#344957] leading-relaxed">
                Clean Pros LLC is locally owned and family operated in Norman,
                providing residential and commercial specialty surface care
                throughout the community.
              </p>
            </div>

            <div className="rounded-xl border border-[#17232D]/12 p-6 space-y-2.5">
              <p className="text-xs font-medium text-[#1687D9]">
                Surrounding Areas
              </p>
              <h2 className="font-display font-bold text-xl text-[#17232D]">
                Direct Availability Confirmation
              </h2>
              <p className="text-sm text-[#344957] leading-relaxed">
                Rather than guessing eligibility across the metro, Clean Pros
                confirms nearby community routes directly by phone at{' '}
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="font-mono font-semibold text-[#17232D] hover:text-[#1687D9]"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>{' '}
                or via quote inquiry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function ReviewsPage({ onNavigate, onStartQuote }: PageNavProps) {
  return (
    <div>
      <PageHeader
        eyebrow="Trust & Customer Reviews"
        title="Verified Reputation Across Hundreds of Local Visits"
        description="Rather than fabricating unverified testimonials, this page summarizes published review themes and directs you to live Google and official listings."
        onNavigate={onNavigate}
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="rounded-2xl bg-[#17232D] text-white p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#57C5EA]">
                <Star className="w-4 h-4 fill-[#57C5EA]" aria-hidden="true" />
                <span>Rating Verification Note</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Check Live Ratings Directly on Official Channels
              </h2>
              <p className="text-sm text-[#EAF0F4]/85 leading-relaxed">
                {REVIEW_HIGHLIGHTS.auditNote}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={BUSINESS_INFO.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-12 px-5 py-3 rounded-lg bg-[#1687D9] hover:bg-[#1273BA] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors"
              >
                <span>Visit callcleanpros.com</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => onStartQuote()}
                className="min-h-12 px-5 py-3 rounded-lg border border-white/25 hover:bg-white/10 text-white text-sm font-semibold transition-colors cursor-pointer"
              >
                Request a Free Quote
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEW_HIGHLIGHTS.verifiedThemes.map((item) => (
              <div
                key={item.topic}
                className="rounded-xl border border-[#17232D]/12 p-6 sm:p-8 space-y-3"
              >
                <p className="text-xs font-medium text-[#1687D9]">
                  {item.source}
                </p>
                <h3 className="font-display font-bold text-xl text-[#17232D]">
                  {item.topic}
                </h3>
                <p className="text-sm text-[#344957] leading-relaxed">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function FaqsPage({ onNavigate, onStartQuote }: PageNavProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      <PageHeader
        eyebrow="Frequently Asked Questions"
        title="Clear Answers on Packages, Preparation, and Scheduling"
        description="Everything homeowners and Norman businesses commonly ask before booking specialty cleaning or water damage assistance."
        onNavigate={onNavigate}
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-[#17232D]/12 overflow-hidden bg-white"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#EAF0F4]/45 transition-colors cursor-pointer"
                >
                  <div>
                    <p className="text-xs font-medium text-[#1687D9] mb-1">
                      {faq.category}
                    </p>
                    <h2 className="font-display font-semibold text-base sm:text-lg text-[#17232D]">
                      {faq.question}
                    </h2>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#344957] shrink-0 transition-transform duration-150 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#344957] leading-relaxed border-t border-[#17232D]/8">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onStartQuote()}
              className="min-h-12 px-6 py-3 rounded-lg bg-[#1687D9] hover:bg-[#1273BA] text-white text-sm font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>Request a Cleaning Quote</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="min-h-12 px-6 py-3 rounded-lg border border-[#17232D]/20 text-[#17232D] text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#EAF0F4] transition-colors font-mono tabular-nums"
            >
              <Phone className="w-4 h-4 text-[#1687D9]" aria-hidden="true" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export function AboutPage({ onNavigate, onStartQuote }: PageNavProps) {
  return (
    <div>
      <PageHeader
        eyebrow="About Clean Pros LLC"
        title="Locally Owned, Family-Operated Surface Care in Norman"
        description="Built around professional equipment, transparent communication, and long-term relationships with Oklahoma homes and businesses."
        onNavigate={onNavigate}
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 space-y-5 flex flex-col justify-center">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#17232D]">
                Specialty Surface Expertise Over Generic Cleaning
              </h2>
              <p className="text-base text-[#344957] leading-relaxed">
                Clean Pros LLC is a locally owned and family-operated business
                based in Norman, Oklahoma. Rather than operating as a general
                housekeeping service, the company centers its work on specialty
                surface extraction—carpet steam cleaning, upholstery, rugs, tile
                and grout, commercial flooring, and emergency water
                restoration.
              </p>
              <p className="text-base text-[#344957] leading-relaxed">
                On its published website, Clean Pros emphasizes truck-mounted
                hot-water extraction, honest communication before work begins,
                and standing behind its licensed and insured service
                operations.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onStartQuote()}
                  className="min-h-12 px-6 py-3 rounded-lg bg-[#1687D9] hover:bg-[#1273BA] text-white text-sm font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="min-h-12 px-6 py-3 rounded-lg border border-[#17232D]/20 text-[#17232D] text-sm font-semibold hover:bg-[#EAF0F4] transition-colors cursor-pointer"
                >
                  Contact Clean Pros
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <MediaFrame
                src={HERO_MEDIA.image}
                alt={HERO_MEDIA.alt}
                fallbackTitle="Clean Pros Norman"
                className="rounded-2xl border border-[#17232D]/10 h-full min-h-[300px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[#17232D]/12 bg-[#EAF0F4]/40 p-7 space-y-3">
              <div className="flex items-center gap-2 text-xs font-medium text-[#1687D9]">
                <HeartHandshake className="w-4 h-4" aria-hidden="true" />
                <span>Community Values</span>
              </div>
              <h3 className="font-display font-bold text-xl text-[#17232D]">
                Faith-Guided Service & Local Giving
              </h3>
              <p className="text-sm text-[#344957] leading-relaxed">
                As published on its official website, Clean Pros is a
                Christian-based company that donates a portion of monthly
                revenue to local nonprofits—reflecting a commitment to giving
                back in the same Norman community where its customers live and
                work.
              </p>
            </div>

            <div className="rounded-xl border border-[#17232D]/12 bg-[#EAF0F4]/40 p-7 space-y-3">
              <div className="flex items-center gap-2 text-xs font-medium text-[#1687D9]">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                <span>Published Credentials</span>
              </div>
              <h3 className="font-display font-bold text-xl text-[#17232D]">
                Clear Expectations & Direct Accountability
              </h3>
              <p className="text-sm text-[#344957] leading-relaxed">
                Clean Pros describes its operations as licensed and insured and
                backs every appointment with straightforward communication—no
                hidden package fees, no unrealistic promises on permanent dye
                damage, and direct local accountability at{' '}
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="font-mono font-semibold text-[#17232D] hover:text-[#1687D9]"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function QuotePage({
  prefill,
  onNavigate,
}: {
  prefill?: QuotePrefill;
  onNavigate: (route: PageRoute) => void;
}) {
  return (
    <div>
      <PageHeader
        eyebrow="Guided Quote Request"
        title="Tell Us About Your Surfaces for a Clear Scope Review"
        description="Complete the five guided steps below to prepare your quote summary. For standard bookings supported online, you may also book directly on Clean Pros’ official site."
        onNavigate={onNavigate}
      />

      <section className="py-12 lg:py-16 bg-[#EAF0F4]/35">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <QuoteBuilder prefill={prefill} onNavigate={onNavigate} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-white border border-[#17232D]/10 p-5 flex items-center justify-between gap-4">
              <div>
                <p className="font-display font-bold text-base text-[#17232D]">
                  Prefer Online Scheduling?
                </p>
                <p className="text-xs text-[#344957] mt-0.5">
                  Supported appointments are booked at callcleanpros.com.
                </p>
              </div>
              <a
                href={BUSINESS_INFO.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg border border-[#17232D]/20 text-xs font-semibold text-[#17232D] hover:bg-[#EAF0F4] inline-flex items-center gap-1.5 shrink-0"
              >
                <span>Book Online</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            <div className="rounded-xl bg-[#17232D] text-white p-5 flex items-center justify-between gap-4">
              <div>
                <p className="font-display font-bold text-base text-white">
                  Emergency Water Damage?
                </p>
                <p className="text-xs text-[#EAF0F4]/75 mt-0.5">
                  24/7 emergency water-restoration phone pathway.
                </p>
              </div>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="px-4 py-2.5 rounded-lg bg-[#1687D9] hover:bg-[#1273BA] text-white text-xs font-semibold font-mono tabular-nums shrink-0"
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function ContactPage({ onNavigate, onStartQuote }: PageNavProps) {
  return (
    <div>
      <PageHeader
        eyebrow="Contact Clean Pros LLC"
        title="Reach Our Team in Norman, Oklahoma"
        description="Choose the pathway that fits your need: call or email directly, request a scoped quote, verify neighborhood availability, or call immediately for emergency water extraction."
        onNavigate={onNavigate}
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-[#17232D]/12 p-7 space-y-3">
              <Phone className="w-6 h-6 text-[#1687D9]" aria-hidden="true" />
              <h2 className="font-display font-bold text-xl text-[#17232D]">
                Phone
              </h2>
              <p className="text-sm text-[#344957]">
                Speak directly with Clean Pros for scheduling questions, carpet
                packages, or 24/7 emergency water restoration.
              </p>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 pt-2 font-mono font-semibold text-base text-[#1687D9] hover:underline tabular-nums"
              >
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            <div className="rounded-xl border border-[#17232D]/12 p-7 space-y-3">
              <Mail className="w-6 h-6 text-[#1687D9]" aria-hidden="true" />
              <h2 className="font-display font-bold text-xl text-[#17232D]">
                Email
              </h2>
              <p className="text-sm text-[#344957]">
                Send project photos, commercial floor inquiries, or service-area
                questions directly by email.
              </p>
              <a
                href={BUSINESS_INFO.emailHref}
                className="inline-flex items-center gap-2 pt-2 font-semibold text-base text-[#1687D9] hover:underline break-all"
              >
                <span>{BUSINESS_INFO.email}</span>
              </a>
            </div>

            <div className="rounded-xl border border-[#17232D]/12 p-7 space-y-3">
              <MapPin className="w-6 h-6 text-[#1687D9]" aria-hidden="true" />
              <h2 className="font-display font-bold text-xl text-[#17232D]">
                Location & Booking
              </h2>
              <p className="text-sm text-[#344957]">
                Based in {BUSINESS_INFO.cityState}, servicing Norman and
                surrounding areas.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onStartQuote()}
                  className="text-sm font-semibold text-[#1687D9] hover:underline cursor-pointer"
                >
                  Request Quote
                </button>
                <span aria-hidden="true" className="text-[#344957]/40">
                  ·
                </span>
                <a
                  href={BUSINESS_INFO.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#17232D] hover:text-[#1687D9]"
                >
                  <span>Book Online</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <ServiceAreaChecker onOpenQuote={() => onStartQuote()} />

          <div className="rounded-2xl bg-[#17232D] text-white p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <p className="text-xs font-medium text-[#57C5EA]">
                Next Steps & Emergency Pathway
              </p>
              <h2 className="font-display font-bold text-2xl text-white">
                Need Urgent Water Extraction? Call Directly.
              </h2>
              <p className="text-sm text-[#EAF0F4]/80 max-w-2xl">
                For non-urgent inquiries, Clean Pros reviews quote details and
                follows up to confirm scope, pricing, and availability. For
                active water damage, call {BUSINESS_INFO.phoneDisplay} right
                away.
              </p>
            </div>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="min-h-12 px-6 py-3 rounded-lg bg-[#1687D9] hover:bg-[#1273BA] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors font-mono tabular-nums whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
