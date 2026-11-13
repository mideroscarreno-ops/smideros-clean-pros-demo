import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, Phone, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, SPECIALTY_SERVICES } from '../data/cleanProsData';
import type { PageRoute } from '../types';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export function Navbar({ currentRoute, onNavigate }: NavbarProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServiceRoute =
    SPECIALTY_SERVICES.some((s) => s.route === currentRoute) ||
    currentRoute === 'water-damage';

  useEffect(() => {
    function handleOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  function navigateTo(route: PageRoute) {
    setServicesOpen(false);
    setMobileOpen(false);
    onNavigate(route);
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#17232D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={() => navigateTo('home')}
          className="font-display font-bold text-xl tracking-tight text-[#17232D] hover:text-[#1687D9] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Clean Pros
        </button>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#344957]"
        >
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 py-2 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                isServiceRoute
                  ? 'text-[#1687D9] font-semibold'
                  : 'hover:text-[#17232D]'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-150 ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-2 w-80 bg-white border border-[#17232D]/12 rounded-xl shadow-xl p-2 z-50"
              >
                <div className="px-3 py-2 border-b border-[#EAF0F4]">
                  <p className="text-xs font-medium text-[#344957]">
                    Specialty Surface Care
                  </p>
                </div>
                <div className="py-1">
                  {SPECIALTY_SERVICES.map((service) => (
                    <button
                      key={service.route}
                      type="button"
                      role="menuitem"
                      onClick={() => navigateTo(service.route)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between cursor-pointer ${
                        currentRoute === service.route
                          ? 'bg-[#EAF0F4] text-[#1687D9] font-semibold'
                          : 'text-[#17232D] hover:bg-[#EAF0F4]/70'
                      }`}
                    >
                      <span>{service.name}</span>
                      <span className="font-mono text-xs text-[#344957]">
                        {service.indexNumber}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="pt-1 mt-1 border-t border-[#EAF0F4]">
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => navigateTo('water-damage')}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors flex items-center justify-between cursor-pointer ${
                      currentRoute === 'water-damage'
                        ? 'bg-[#17232D] text-white font-semibold'
                        : 'bg-[#EAF0F4]/80 text-[#17232D] hover:bg-[#17232D] hover:text-white'
                    }`}
                  >
                    <span>Water Damage Restoration</span>
                    <span className="text-xs font-medium">24/7 Emergency</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => navigateTo('packages')}
            className={`py-2 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentRoute === 'packages'
                ? 'text-[#1687D9] font-semibold'
                : 'hover:text-[#17232D]'
            }`}
          >
            Packages
          </button>

          <button
            type="button"
            onClick={() => navigateTo('process')}
            className={`py-2 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentRoute === 'process'
                ? 'text-[#1687D9] font-semibold'
                : 'hover:text-[#17232D]'
            }`}
          >
            Process
          </button>

          <button
            type="button"
            onClick={() => navigateTo('service-areas')}
            className={`py-2 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentRoute === 'service-areas'
                ? 'text-[#1687D9] font-semibold'
                : 'hover:text-[#17232D]'
            }`}
          >
            Service Areas
          </button>

          <button
            type="button"
            onClick={() => navigateTo('reviews')}
            className={`py-2 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentRoute === 'reviews'
                ? 'text-[#1687D9] font-semibold'
                : 'hover:text-[#17232D]'
            }`}
          >
            Reviews
          </button>

          <button
            type="button"
            onClick={() => navigateTo('contact')}
            className={`py-2 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              currentRoute === 'contact'
                ? 'text-[#1687D9] font-semibold'
                : 'hover:text-[#17232D]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Drawer Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => navigateTo('quote')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#1687D9] hover:bg-[#1273BA] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Get a Free Quote
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#17232D]/15 text-[#17232D] hover:bg-[#EAF0F4] transition-colors cursor-pointer"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#17232D]/10 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-5 space-y-6">
            <div className="grid grid-cols-1 gap-2">
              <button
                type="button"
                onClick={() => navigateTo('quote')}
                className="w-full min-h-11 px-5 py-3 rounded-lg bg-[#1687D9] text-white font-semibold text-sm text-center hover:bg-[#1273BA] transition-colors cursor-pointer"
              >
                Get a Free Quote
              </button>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={BUSINESS_INFO.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-11 px-4 py-2.5 rounded-lg border border-[#17232D]/15 text-[#17232D] font-semibold text-sm flex items-center justify-center gap-1.5 hover:bg-[#EAF0F4] transition-colors"
                >
                  <span>Book Online</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="min-h-11 px-4 py-2.5 rounded-lg bg-[#17232D] text-white font-semibold text-sm flex items-center justify-center gap-1.5 hover:bg-[#233442] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#57C5EA]" aria-hidden="true" />
                  <span>Emergency</span>
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-[#344957] mb-2 px-2">
                Primary Pages
              </p>
              <div className="grid grid-cols-2 gap-1">
                {(
                  [
                    ['home', 'Home'],
                    ['packages', 'Carpet Packages'],
                    ['process', 'Our Process'],
                    ['service-areas', 'Service Areas'],
                    ['reviews', 'Reviews'],
                    ['faqs', 'FAQs'],
                    ['about', 'About Us'],
                    ['contact', 'Contact'],
                  ] as [PageRoute, string][]
                ).map(([route, label]) => (
                  <button
                    key={route}
                    type="button"
                    onClick={() => navigateTo(route)}
                    className={`min-h-11 px-3 py-2 text-left rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      currentRoute === route
                        ? 'bg-[#EAF0F4] text-[#1687D9] font-semibold'
                        : 'text-[#17232D] hover:bg-[#EAF0F4]/60'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-[#344957] mb-2 px-2">
                Specialty Cleaning & Restoration
              </p>
              <div className="space-y-1">
                {SPECIALTY_SERVICES.map((service) => (
                  <button
                    key={service.route}
                    type="button"
                    onClick={() => navigateTo(service.route)}
                    className={`w-full min-h-11 px-3 py-2 text-left rounded-lg text-sm font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      currentRoute === service.route
                        ? 'bg-[#EAF0F4] text-[#1687D9] font-semibold'
                        : 'text-[#17232D] hover:bg-[#EAF0F4]/60'
                    }`}
                  >
                    <span>{service.name}</span>
                    <span className="font-mono text-xs text-[#344957]">
                      {service.indexNumber}
                    </span>
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => navigateTo('water-damage')}
                  className={`w-full min-h-11 px-3 py-2 text-left rounded-lg text-sm font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                    currentRoute === 'water-damage'
                      ? 'bg-[#17232D] text-white'
                      : 'bg-[#EAF0F4] text-[#17232D]'
                  }`}
                >
                  <span>Water Damage Restoration</span>
                  <span className="text-xs text-[#1687D9]">24/7 Phone</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
