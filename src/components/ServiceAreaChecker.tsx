import { useState, type FormEvent } from 'react';
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleanProsData';

interface ServiceAreaCheckerProps {
  onOpenQuote?: () => void;
}

export function ServiceAreaChecker({ onOpenQuote }: ServiceAreaCheckerProps) {
  const [locationInput, setLocationInput] = useState('');
  const [submittedLocation, setSubmittedLocation] = useState<string | null>(
    null
  );
  const [error, setError] = useState('');

  function handleCheck(event: FormEvent) {
    event.preventDefault();
    const trimmed = locationInput.trim();
    if (!trimmed) {
      setError('Please enter a city name or 5-digit ZIP code.');
      return;
    }
    setError('');
    setSubmittedLocation(trimmed);
  }

  const isNorman =
    submittedLocation &&
    (submittedLocation.toLowerCase().includes('norman') ||
      ['73019', '73026', '73069', '73070', '73071', '73072'].some((zip) =>
        submittedLocation.includes(zip)
      ));

  const mailtoSubject = encodeURIComponent(
    `Service Area Availability Inquiry — ${submittedLocation || 'Oklahoma'}`
  );
  const mailtoBody = encodeURIComponent(
    `Hello Clean Pros,\n\nI would like to confirm service availability for:\nCity / ZIP Code: ${submittedLocation || ''}\nService Needed: \n\nThank you.`
  );

  return (
    <div className="rounded-2xl bg-[#EAF0F4]/75 border border-[#17232D]/10 p-6 sm:p-8 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-[#1687D9]">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>Confirmed Home Base: Norman, Oklahoma</span>
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#17232D] [text-wrap:balance]">
            Proudly Serving Norman and Nearby Communities.
          </h3>
          <p className="text-sm sm:text-base text-[#344957] leading-relaxed">
            Not sure whether we serve your neighborhood? Send us your city or
            ZIP code and we’ll help confirm availability before scheduling.
          </p>
        </div>

        <div className="lg:col-span-6">
          <form onSubmit={handleCheck} noValidate className="space-y-3">
            <label
              htmlFor="service-area-input"
              className="block text-sm font-semibold text-[#17232D]"
            >
              Check Your City or ZIP Code
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="service-area-input"
                type="text"
                value={locationInput}
                onChange={(e) => {
                  setLocationInput(e.target.value);
                  if (error) setError('');
                }}
                placeholder="e.g., Norman or 73072"
                className="flex-1 min-h-12 px-4 py-3 rounded-lg bg-white border border-[#17232D]/20 text-sm text-[#17232D] placeholder:text-[#344957]/60 focus:border-[#1687D9]"
              />
              <button
                type="submit"
                className="min-h-12 px-6 py-3 rounded-lg bg-[#1687D9] hover:bg-[#1273BA] text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Check Availability
              </button>
            </div>
            {error && (
              <p role="alert" className="text-xs font-medium text-red-700">
                {error}
              </p>
            )}
          </form>

          {submittedLocation && (
            <div className="mt-4 rounded-xl bg-white border border-[#17232D]/12 p-5 space-y-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle2
                  className="w-5 h-5 text-[#1687D9] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div className="text-sm text-[#17232D]">
                  {isNorman ? (
                    <p>
                      <span className="font-semibold">{submittedLocation}</span>{' '}
                      is within Clean Pros’ confirmed Norman, Oklahoma home
                      service area.
                    </p>
                  ) : (
                    <p>
                      Clean Pros serves Norman and surrounding communities.
                      Because coverage outside Norman depends on route
                      scheduling and service scope, please confirm{' '}
                      <span className="font-semibold">{submittedLocation}</span>{' '}
                      directly with Clean Pros.
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-1">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#17232D] text-white text-xs font-semibold hover:bg-[#233442] transition-colors font-mono tabular-nums"
                >
                  <Phone className="w-3.5 h-3.5 text-[#57C5EA]" aria-hidden="true" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${BUSINESS_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#17232D]/15 text-[#17232D] text-xs font-semibold hover:bg-[#EAF0F4] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#1687D9]" aria-hidden="true" />
                  <span>Email Availability Inquiry</span>
                </a>
                {onOpenQuote && (
                  <button
                    type="button"
                    onClick={onOpenQuote}
                    className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-semibold text-[#1687D9] hover:underline cursor-pointer"
                  >
                    Continue to Quote Builder
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
