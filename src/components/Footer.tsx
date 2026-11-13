import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO, SPECIALTY_SERVICES } from '../data/cleanProsData';
import type { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#17232D] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="font-display font-bold text-2xl tracking-tight text-white hover:text-[#57C5EA] transition-colors cursor-pointer"
              >
                Clean Pros
              </button>
              <p className="text-sm text-[#EAF0F4]/80 mt-2 max-w-sm leading-relaxed">
                Locally owned, family-operated specialty surface cleaning and
                water restoration serving Norman, Oklahoma and nearby
                communities.
              </p>
            </div>

            <div className="space-y-2.5 text-sm text-[#EAF0F4]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#57C5EA] shrink-0" aria-hidden="true" />
                <span>{BUSINESS_INFO.cityState}</span>
              </div>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center gap-2.5 hover:text-[#57C5EA] transition-colors font-mono tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#57C5EA] shrink-0" aria-hidden="true" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <a
                href={BUSINESS_INFO.emailHref}
                className="flex items-center gap-2.5 hover:text-[#57C5EA] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#57C5EA] shrink-0" aria-hidden="true" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('quote')}
                className="px-4 py-2.5 rounded-lg bg-[#1687D9] hover:bg-[#1273BA] text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Request a Quote
              </button>
              <a
                href={BUSINESS_INFO.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-white/20 hover:border-white/40 text-white text-xs font-semibold transition-colors"
              >
                <span>Book Online</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-semibold text-sm text-white mb-4">
              Specialty Services
            </h3>
            <ul className="space-y-2.5 text-sm text-[#EAF0F4]/80">
              {SPECIALTY_SERVICES.map((service) => (
                <li key={service.route}>
                  <button
                    type="button"
                    onClick={() => onNavigate(service.route)}
                    className="hover:text-[#57C5EA] transition-colors text-left cursor-pointer"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('water-damage')}
                  className="text-[#57C5EA] hover:underline font-medium text-left cursor-pointer"
                >
                  Water Damage Restoration
                </button>
              </li>
            </ul>
          </div>

          {/* Explore Column */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-sm text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-[#EAF0F4]/80">
              {(
                [
                  ['home', 'Home'],
                  ['packages', 'Carpet Packages'],
                  ['process', 'Our Cleaning Process'],
                  ['service-areas', 'Service Areas'],
                  ['reviews', 'Customer Reviews'],
                  ['faqs', 'FAQs'],
                  ['about', 'About Clean Pros'],
                  ['contact', 'Contact'],
                ] as [PageRoute, string][]
              ).map(([route, label]) => (
                <li key={route}>
                  <button
                    type="button"
                    onClick={() => onNavigate(route)}
                    className="hover:text-[#57C5EA] transition-colors text-left cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Water Pathway */}
          <div className="lg:col-span-3">
            <div className="rounded-xl bg-white/5 border border-white/10 p-5 space-y-3">
              <p className="text-xs font-medium text-[#57C5EA]">
                24/7 Emergency Water Restoration
              </p>
              <p className="font-display font-semibold text-lg text-white leading-snug">
                Standing water or sudden leak? Call directly.
              </p>
              <p className="text-xs text-[#EAF0F4]/75 leading-relaxed">
                Emergency water extraction inquiries are handled by phone rather
                than web forms.
              </p>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-white text-[#17232D] hover:bg-[#EAF0F4] text-sm font-semibold transition-colors font-mono tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#1687D9]" aria-hidden="true" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#EAF0F4]/65">
          <p>
            {BUSINESS_INFO.legalName} · {BUSINESS_INFO.cityState} · Licensed
            and insured as published by the business.
          </p>
          <p>{BUSINESS_INFO.redesignDisclosure}</p>
        </div>
      </div>
    </footer>
  );
}
