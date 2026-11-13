import { useEffect, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Check,
  Edit3,
  Info,
  Mail,
  Phone,
} from 'lucide-react';
import { BUSINESS_INFO, CARPET_PACKAGES } from '../data/cleanProsData';
import type { PageRoute, QuotePrefill, QuoteServiceOption } from '../types';

interface QuoteBuilderProps {
  prefill?: QuotePrefill;
  onNavigate: (route: PageRoute) => void;
}

const SERVICE_OPTIONS: QuoteServiceOption[] = [
  'Carpet Cleaning',
  'Upholstery Cleaning',
  'Rug Cleaning',
  'Tile & Grout Cleaning',
  'Commercial Carpet Cleaning',
  'Specialty Floor Care',
  'Other Service',
];

const STEP_LABELS = [
  'Service',
  'Job Details',
  'Location',
  'Contact',
  'Review',
];

export function QuoteBuilder({ prefill, onNavigate }: QuoteBuilderProps) {
  const [step, setStep] = useState(1);
  const [submittedDemo, setSubmittedDemo] = useState(false);

  // Step 1
  const [selectedService, setSelectedService] = useState<QuoteServiceOption>(
    prefill?.service || 'Carpet Cleaning'
  );

  // Step 2 — conditional fields
  const [carpetAreas, setCarpetAreas] = useState('');
  const [carpetPackage, setCarpetPackage] = useState(
    prefill?.packageChoice || 'Undecided — help me choose'
  );
  const [carpetPetConcerns, setCarpetPetConcerns] = useState('');

  const [upholsteryType, setUpholsteryType] = useState('');
  const [upholsteryPieces, setUpholsteryPieces] = useState('');
  const [upholsteryFabric, setUpholsteryFabric] = useState('');

  const [tileSqFt, setTileSqFt] = useState('');
  const [tileSurface, setTileSurface] = useState('');
  const [tileConcerns, setTileConcerns] = useState('');

  const [commercialType, setCommercialType] = useState('');
  const [commercialArea, setCommercialArea] = useState('');
  const [commercialTiming, setCommercialTiming] = useState('');

  const [generalJobNotes, setGeneralJobNotes] = useState('');

  // Step 3 — location
  const [cityOrZip, setCityOrZip] = useState('');
  const [streetAddress, setStreetAddress] = useState('');

  // Step 4 — contact
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [contactMethod, setContactMethod] = useState<'Phone Call' | 'Text Message' | 'Email'>('Phone Call');
  const [preferredTiming, setPreferredTiming] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (prefill?.service) {
      setSelectedService(prefill.service);
    }
    if (prefill?.packageChoice) {
      setCarpetPackage(prefill.packageChoice);
    }
  }, [prefill]);

  function validateStep(currentStep: number): boolean {
    const nextErrors: Record<string, string> = {};

    if (currentStep === 2) {
      if (selectedService === 'Upholstery Cleaning' && !upholsteryType.trim()) {
        nextErrors.upholsteryType = 'Please enter the furniture type (e.g., sofa, sectional, armchair).';
      }
      if (selectedService === 'Tile & Grout Cleaning' && !tileSurface.trim()) {
        nextErrors.tileSurface = 'Please describe the tile or hard-surface area (e.g., kitchen, bathroom).';
      }
      if (selectedService === 'Commercial Carpet Cleaning' && !commercialType.trim()) {
        nextErrors.commercialType = 'Please enter your business or facility type.';
      }
    }

    if (currentStep === 3) {
      if (!cityOrZip.trim()) {
        nextErrors.cityOrZip = 'Please provide your city or ZIP code so Clean Pros can confirm service availability.';
      }
    }

    if (currentStep === 4) {
      if (!fullName.trim()) {
        nextErrors.fullName = 'Please enter your full name.';
      }
      const digits = phone.replace(/\D/g, '');
      if (digits.length < 10) {
        nextErrors.phone = 'Please enter a valid 10-digit phone number.';
      }
      if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        nextErrors.email = 'Please enter a valid email address or leave this optional field blank.';
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function goNext() {
    if (validateStep(step)) {
      setStep((prev) => Math.min(5, prev + 1));
    }
  }

  function goBack() {
    setErrors({});
    setStep((prev) => Math.max(1, prev - 1));
  }

  function buildSummaryLines(): { label: string; value: string }[] {
    const lines: { label: string; value: string }[] = [
      { label: 'Service Selected', value: selectedService },
    ];

    if (selectedService === 'Carpet Cleaning') {
      lines.push({ label: 'Package Interest', value: carpetPackage });
      if (carpetAreas.trim()) {
        lines.push({ label: 'Estimated Areas', value: carpetAreas.trim() });
      }
      if (carpetPetConcerns.trim()) {
        lines.push({
          label: 'Pet Odor / Stain Notes',
          value: carpetPetConcerns.trim(),
        });
      }
    } else if (selectedService === 'Upholstery Cleaning') {
      lines.push({ label: 'Furniture Type', value: upholsteryType.trim() || 'Not specified' });
      if (upholsteryPieces.trim()) {
        lines.push({ label: 'Number of Pieces', value: upholsteryPieces.trim() });
      }
      if (upholsteryFabric.trim()) {
        lines.push({ label: 'Fabric Details', value: upholsteryFabric.trim() });
      }
    } else if (selectedService === 'Tile & Grout Cleaning') {
      lines.push({ label: 'Surface Type', value: tileSurface.trim() || 'Not specified' });
      if (tileSqFt.trim()) {
        lines.push({ label: 'Approximate Sq. Ft.', value: tileSqFt.trim() });
      }
      if (tileConcerns.trim()) {
        lines.push({ label: 'Main Concerns', value: tileConcerns.trim() });
      }
    } else if (selectedService === 'Commercial Carpet Cleaning') {
      lines.push({ label: 'Business Type', value: commercialType.trim() || 'Not specified' });
      if (commercialArea.trim()) {
        lines.push({ label: 'Approximate Area', value: commercialArea.trim() });
      }
      if (commercialTiming.trim()) {
        lines.push({ label: 'Desired Timing', value: commercialTiming.trim() });
      }
    } else if (generalJobNotes.trim()) {
      lines.push({ label: 'Project Details', value: generalJobNotes.trim() });
    }

    lines.push({ label: 'City or ZIP Code', value: cityOrZip.trim() });
    if (streetAddress.trim()) {
      lines.push({ label: 'Address (Optional)', value: streetAddress.trim() });
    }

    lines.push({ label: 'Full Name', value: fullName.trim() });
    lines.push({ label: 'Phone Number', value: phone.trim() });
    if (email.trim()) {
      lines.push({ label: 'Email (Optional)', value: email.trim() });
    }
    lines.push({ label: 'Preferred Contact Method', value: contactMethod });
    if (preferredTiming.trim()) {
      lines.push({ label: 'Preferred Timing', value: preferredTiming.trim() });
    }

    return lines;
  }

  function createMailtoHref(): string {
    const summaryText = buildSummaryLines()
      .map((item) => `${item.label}: ${item.value}`)
      .join('\n');
    const subject = encodeURIComponent(
      `Cleaning Quote Inquiry — ${selectedService} (${cityOrZip.trim() || 'Norman Area'})`
    );
    const body = encodeURIComponent(
      `Hello Clean Pros,\n\nI would like to request a cleaning quote with the following details:\n\n${summaryText}\n\nThank you!`
    );
    return `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
  }

  if (submittedDemo) {
    const summaryLines = buildSummaryLines();
    return (
      <div className="rounded-2xl bg-white border border-[#17232D]/15 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="rounded-xl bg-[#EAF0F4] border border-[#1687D9]/25 p-5 flex items-start gap-3">
          <Info className="w-5 h-5 text-[#1687D9] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1.5 text-sm text-[#17232D]">
            <p className="font-display font-bold text-base">
              Interactive Demonstration Notice — Not Sent Automatically
            </p>
            <p className="text-[#344957] leading-relaxed">
              This website redesign concept does not connect to Clean Pros’
              live dispatch backend, so no inquiry was transmitted automatically.
              To send your prepared quote details directly to Clean Pros LLC,
              use the pre-filled email button or call below.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-xl text-[#17232D] mb-4">
            Prepared Quote Summary
          </h3>
          <dl className="divide-y divide-[#17232D]/10 border-y border-[#17232D]/10">
            {summaryLines.map((row) => (
              <div
                key={row.label}
                className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 text-sm"
              >
                <dt className="font-medium text-[#344957]">{row.label}</dt>
                <dd className="sm:col-span-2 font-semibold text-[#17232D]">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={createMailtoHref()}
            className="min-h-12 px-6 py-3 rounded-lg bg-[#1687D9] hover:bg-[#1273BA] text-white text-sm font-semibold inline-flex items-center gap-2 transition-colors"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span>Send Quote Summary via Email</span>
          </a>
          <a
            href={BUSINESS_INFO.phoneHref}
            className="min-h-12 px-6 py-3 rounded-lg bg-[#17232D] hover:bg-[#233442] text-white text-sm font-semibold inline-flex items-center gap-2 transition-colors font-mono tabular-nums"
          >
            <Phone className="w-4 h-4 text-[#57C5EA]" aria-hidden="true" />
            <span>Call {BUSINESS_INFO.phoneDisplay}</span>
          </a>
          <button
            type="button"
            onClick={() => setSubmittedDemo(false)}
            className="min-h-12 px-4 py-3 text-sm font-semibold text-[#344957] hover:text-[#17232D] cursor-pointer"
          >
            Edit Quote Details
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white border border-[#17232D]/15 shadow-sm overflow-hidden">
      {/* Progress Header */}
      <div className="bg-[#17232D] text-white px-6 sm:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
          <div>
            <p className="text-xs font-medium text-[#57C5EA]">
              Step {step} of 5 · Interactive Quote Demonstration
            </p>
            <h2 className="font-display font-bold text-xl sm:text-2xl mt-0.5">
              {STEP_LABELS[step - 1]}
            </h2>
          </div>
          <p className="text-xs text-[#EAF0F4]/75">
            Clean Pros reviews details to confirm scope, pricing, and availability.
          </p>
        </div>

        <ol className="grid grid-cols-5 gap-2" aria-label="Quote progress">
          {STEP_LABELS.map((label, idx) => {
            const stepNum = idx + 1;
            const completed = stepNum < step;
            const active = stepNum === step;
            return (
              <li key={label} className="space-y-1.5">
                <div
                  className={`h-1.5 rounded-full transition-colors ${
                    completed || active ? 'bg-[#1687D9]' : 'bg-white/15'
                  }`}
                />
                <span
                  className={`block text-[11px] sm:text-xs truncate ${
                    active
                      ? 'text-white font-semibold'
                      : completed
                      ? 'text-[#57C5EA]'
                      : 'text-white/55'
                  }`}
                >
                  <span className="font-mono tabular-nums mr-1">
                    0{stepNum}
                  </span>
                  <span className="hidden sm:inline">{label}</span>
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Form Body */}
      <div className="p-6 sm:p-8 space-y-6">
        {/* Emergency Water Damage Notice */}
        <div className="rounded-xl bg-[#EAF0F4] border border-[#17232D]/10 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17232D]">
            <AlertTriangle
              className="w-4 h-4 text-[#1687D9] shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p>
              <span className="font-semibold">
                Urgent water damage or flooding?
              </span>{' '}
              Do not wait for a quote form—call Clean Pros’ emergency line
              directly.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="text-xs font-semibold text-[#1687D9] hover:underline font-mono tabular-nums whitespace-nowrap"
            >
              Call {BUSINESS_INFO.phoneDisplay}
            </a>
            <button
              type="button"
              onClick={() => onNavigate('water-damage')}
              className="text-xs font-semibold text-[#17232D] hover:underline whitespace-nowrap cursor-pointer"
            >
              Water Restoration Info
            </button>
          </div>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <fieldset className="space-y-4">
            <legend className="font-display font-semibold text-lg text-[#17232D]">
              Which specialty cleaning service do you need?
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICE_OPTIONS.map((option) => {
                const isSelected = selectedService === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedService(option)}
                    aria-pressed={isSelected}
                    className={`min-h-12 px-4 py-3.5 rounded-xl border text-left text-sm font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                      isSelected
                        ? 'border-[#1687D9] bg-[#1687D9]/8 text-[#17232D]'
                        : 'border-[#17232D]/15 bg-white text-[#344957] hover:border-[#17232D]/35 hover:text-[#17232D]'
                    }`}
                  >
                    <span>{option}</span>
                    {isSelected && (
                      <Check
                        className="w-4 h-4 text-[#1687D9] shrink-0"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </fieldset>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <h3 className="font-display font-semibold text-lg text-[#17232D]">
                Tell us about your {selectedService} project
              </h3>
              <p className="text-xs text-[#344957] mt-1">
                Optional fields help Clean Pros prepare an accurate scope
                conversation.
              </p>
            </div>

            {selectedService === 'Carpet Cleaning' && (
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="carpet-package"
                    className="block text-sm font-semibold text-[#17232D] mb-1.5"
                  >
                    Package of interest
                  </label>
                  <select
                    id="carpet-package"
                    value={carpetPackage}
                    onChange={(e) => setCarpetPackage(e.target.value)}
                    className="w-full min-h-11 px-3.5 py-2.5 rounded-lg border border-[#17232D]/20 bg-white text-sm text-[#17232D]"
                  >
                    <option value="Undecided — help me choose">
                      Undecided — help me choose
                    </option>
                    {CARPET_PACKAGES.map((pkg) => (
                      <option
                        key={pkg.id}
                        value={`${pkg.name} ($${pkg.pricePerArea} per area)`}
                      >
                        {pkg.name} (${pkg.pricePerArea} per area)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="carpet-areas"
                    className="block text-sm font-semibold text-[#17232D] mb-1.5"
                  >
                    Number of areas (optional)
                  </label>
                  <input
                    id="carpet-areas"
                    type="text"
                    value={carpetAreas}
                    onChange={(e) => setCarpetAreas(e.target.value)}
                    placeholder="e.g., 3 bedrooms and 1 living room"
                    className="w-full min-h-11 px-3.5 py-2.5 rounded-lg border border-[#17232D]/20 text-sm text-[#17232D]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="carpet-pet"
                    className="block text-sm font-semibold text-[#17232D] mb-1.5"
                  >
                    Pet odor or stain concerns (optional)
                  </label>
                  <textarea
                    id="carpet-pet"
                    rows={3}
                    value={carpetPetConcerns}
                    onChange={(e) => setCarpetPetConcerns(e.target.value)}
                    placeholder="Share any specific pet spots, high-traffic lanes, or odor concerns"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#17232D]/20 text-sm text-[#17232D]"
                  />
                </div>
              </div>
            )}

            {selectedService === 'Upholstery Cleaning' && (
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="upholstery-type"
                    className="block text-sm font-semibold text-[#17232D] mb-1.5"
                  >
                    Furniture type <span className="text-[#1687D9]">*</span>
                  </label>
                  <input
                    id="upholstery-type"
                    type="text"
                    value={upholsteryType}
                    onChange={(e) => setUpholsteryType(e.target.value)}
                    placeholder="e.g., 3-seat sofa, L-shaped sectional, recliner"
                    className="w-full min-h-11 px-3.5 py-2.5 rounded-lg border border-[#17232D]/20 text-sm text-[#17232D]"
                  />
                  {errors.upholsteryType && (
                    <p role="alert" className="text-xs text-red-700 mt-1">
                      {errors.upholsteryType}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="upholstery-pieces"
                    className="block text-sm font-semibold text-[#17232D] mb-1.5"
                  >
                    Number of pieces (optional)
                  </label>
                  <input
                    id="upholstery-pieces"
                    type="text"
                    value={upholsteryPieces}
                    onChange={(e) => setUpholsteryPieces(e.target.value)}
                    placeholder="e.g., 1 sofa and 2 accent chairs"
                    className="w-full min-h-11 px-3.5 py-2.5 rounded-lg border border-[#17232D]/20 text-sm text-[#17232D]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="upholstery-fabric"
                    className="block text-sm font-semibold text-[#17232D] mb-1.5"
                  >
                    Fabric details, if known (optional)
                  </label>
                  <input
                    id="upholstery-fabric"
                    type="text"
                    value={upholsteryFabric}
                    onChange={(e) => setUpholsteryFabric(e.target.value)}
                    placeholder="e.g., Microfiber, linen blend, cotton, or tag code W / S"
                    className="w-full min-h-11 px-3.5 py-2.5 rounded-lg border border-[#17232D]/20 text-sm text-[#17232D]"
                  />
                </div>
              </div>
            )}

            {selectedService === 'Tile & Grout Cleaning' && (
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="tile-surface"
                    className="block text-sm font-semibold text-[#17232D] mb-1.5"
                  >
                    Surface type & rooms <span className="text-[#1687D9]">*</span>
                  </label>
                  <input
                    id="tile-surface"
                    type="text"
                    value={tileSurface}
                    onChange={(e) => setTileSurface(e.target.value)}
                    placeholder="e.g., Kitchen and entryway ceramic tile"
                    className="w-full min-h-11 px-3.5 py-2.5 rounded-lg border border-[#17232D]/20 text-sm text-[#17232D]"
                  />
                  {errors.tileSurface && (
                    <p role="alert" className="text-xs text-red-700 mt-1">
                      {errors.tileSurface}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="tile-sqft"
                    className="block text-sm font-semibold text-[#17232D] mb-1.5"
                  >
                    Approximate square footage (optional)
                  </label>
                  <input
                    id="tile-sqft"
                    type="text"
                    value={tileSqFt}
                    onChange={(e) => setTileSqFt(e.target.value)}
                    placeholder="e.g., Roughly 450 sq. ft."
                    className="w-full min-h-11 px-3.5 py-2.5 rounded-lg border border-[#17232D]/20 text-sm text-[#17232D]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tile-concerns"
                    className="block text-sm font-semibold text-[#17232D] mb-1.5"
                  >
                    Main concerns (optional)
                  </label>
                  <textarea
                    id="tile-concerns"
                    rows={3}
                    value={tileConcerns}
                    onChange={(e) => setTileConcerns(e.target.value)}
                    placeholder="e.g., Darkened kitchen grout lines, residue buildup"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#17232D]/20 text-sm text-[#17232D]"
                  />
                </div>
              </div>
            )}

            {selectedService === 'Commercial Carpet Cleaning' && (
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="commercial-type"
                    className="block text-sm font-semibold text-[#17232D] mb-1.5"
                  >
                    Business type <span className="text-[#1687D9]">*</span>
                  </label>
                  <input
                    id="commercial-type"
                    type="text"
                    value={commercialType}
                    onChange={(e) => setCommercialType(e.target.value)}
                    placeholder="e.g., Medical office, law suite, retail storefront"
                    className="w-full min-h-11 px-3.5 py-2.5 rounded-lg border border-[#17232D]/20 text-sm text-[#17232D]"
                  />
                  {errors.commercialType && (
                    <p role="alert" className="text-xs text-red-700 mt-1">
                      {errors.commercialType}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="commercial-area"
                    className="block text-sm font-semibold text-[#17232D] mb-1.5"
                  >
                    Approximate area (optional)
                  </label>
                  <input
                    id="commercial-area"
                    type="text"
                    value={commercialArea}
                    onChange={(e) => setCommercialArea(e.target.value)}
                    placeholder="e.g., 2,000 sq. ft. or 6 offices + lobby"
                    className="w-full min-h-11 px-3.5 py-2.5 rounded-lg border border-[#17232D]/20 text-sm text-[#17232D]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="commercial-timing"
                    className="block text-sm font-semibold text-[#17232D] mb-1.5"
                  >
                    Desired service timing (optional)
                  </label>
                  <input
                    id="commercial-timing"
                    type="text"
                    value={commercialTiming}
                    onChange={(e) => setCommercialTiming(e.target.value)}
                    placeholder="e.g., Friday afternoon or weekend window"
                    className="w-full min-h-11 px-3.5 py-2.5 rounded-lg border border-[#17232D]/20 text-sm text-[#17232D]"
                  />
                </div>
              </div>
            )}

            {(selectedService === 'Rug Cleaning' ||
              selectedService === 'Specialty Floor Care' ||
              selectedService === 'Other Service') && (
              <div>
                <label
                  htmlFor="general-notes"
                  className="block text-sm font-semibold text-[#17232D] mb-1.5"
                >
                  Describe your surface, dimensions, or cleaning goals (optional)
                </label>
                <textarea
                  id="general-notes"
                  rows={4}
                  value={generalJobNotes}
                  onChange={(e) => setGeneralJobNotes(e.target.value)}
                  placeholder="Share rug size/fiber, hard-surface material, strip-and-wax needs, or questions"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#17232D]/20 text-sm text-[#17232D]"
                />
              </div>
            )}
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <h3 className="font-display font-semibold text-lg text-[#17232D]">
                Where is the cleaning needed?
              </h3>
              <p className="text-xs text-[#344957] mt-1">
                Only your city or ZIP code is required to qualify service area
                availability.
              </p>
            </div>

            <div>
              <label
                htmlFor="quote-city-zip"
                className="block text-sm font-semibold text-[#17232D] mb-1.5"
              >
                City or ZIP code <span className="text-[#1687D9]">*</span>
              </label>
              <input
                id="quote-city-zip"
                type="text"
                value={cityOrZip}
                onChange={(e) => setCityOrZip(e.target.value)}
                placeholder="e.g., Norman, OK or 73072"
                className="w-full min-h-11 px-3.5 py-2.5 rounded-lg border border-[#17232D]/20 text-sm text-[#17232D]"
              />
              {errors.cityOrZip && (
                <p role="alert" className="text-xs text-red-700 mt-1">
                  {errors.cityOrZip}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="quote-address"
                className="block text-sm font-semibold text-[#17232D] mb-1.5"
              >
                Street address (optional)
              </label>
              <input
                id="quote-address"
                type="text"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                placeholder="Optional for initial quote inquiry"
                className="w-full min-h-11 px-3.5 py-2.5 rounded-lg border border-[#17232D]/20 text-sm text-[#17232D]"
              />
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="space-y-4">
            <div>
              <h3 className="font-display font-semibold text-lg text-[#17232D]">
                How should Clean Pros reach you?
              </h3>
              <p className="text-xs text-[#344957] mt-1">
                Clean Pros will review your details to confirm scope, pricing,
                and scheduling availability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="quote-fullname"
                  className="block text-sm font-semibold text-[#17232D] mb-1.5"
                >
                  Full name <span className="text-[#1687D9]">*</span>
                </label>
                <input
                  id="quote-fullname"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full min-h-11 px-3.5 py-2.5 rounded-lg border border-[#17232D]/20 text-sm text-[#17232D]"
                />
                {errors.fullName && (
                  <p role="alert" className="text-xs text-red-700 mt-1">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="quote-phone"
                  className="block text-sm font-semibold text-[#17232D] mb-1.5"
                >
                  Phone number <span className="text-[#1687D9]">*</span>
                </label>
                <input
                  id="quote-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(405) 555-0199"
                  className="w-full min-h-11 px-3.5 py-2.5 rounded-lg border border-[#17232D]/20 text-sm text-[#17232D] font-mono tabular-nums"
                />
                {errors.phone && (
                  <p role="alert" className="text-xs text-red-700 mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="quote-email"
                  className="block text-sm font-semibold text-[#17232D] mb-1.5"
                >
                  Email address (optional)
                </label>
                <input
                  id="quote-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full min-h-11 px-3.5 py-2.5 rounded-lg border border-[#17232D]/20 text-sm text-[#17232D]"
                />
                {errors.email && (
                  <p role="alert" className="text-xs text-red-700 mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="quote-timing"
                  className="block text-sm font-semibold text-[#17232D] mb-1.5"
                >
                  Preferred timing (optional)
                </label>
                <input
                  id="quote-timing"
                  type="text"
                  value={preferredTiming}
                  onChange={(e) => setPreferredTiming(e.target.value)}
                  placeholder="e.g., Next Tuesday morning"
                  className="w-full min-h-11 px-3.5 py-2.5 rounded-lg border border-[#17232D]/20 text-sm text-[#17232D]"
                />
              </div>
            </div>

            <fieldset>
              <legend className="block text-sm font-semibold text-[#17232D] mb-2">
                Preferred contact method
              </legend>
              <div className="grid grid-cols-3 gap-2.5">
                {(['Phone Call', 'Text Message', 'Email'] as const).map(
                  (method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setContactMethod(method)}
                      aria-pressed={contactMethod === method}
                      className={`min-h-11 px-3 py-2 rounded-lg border text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                        contactMethod === method
                          ? 'border-[#1687D9] bg-[#1687D9]/10 text-[#17232D]'
                          : 'border-[#17232D]/15 text-[#344957] hover:border-[#17232D]/35'
                      }`}
                    >
                      {method}
                    </button>
                  )
                )}
              </div>
            </fieldset>
          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div className="space-y-5">
            <div>
              <h3 className="font-display font-semibold text-lg text-[#17232D]">
                Review Your Quote Request
              </h3>
              <p className="text-sm text-[#344957] mt-1">
                Clean Pros will review these details and contact you to confirm
                scope, pricing, and availability.
              </p>
            </div>

            <div className="rounded-xl border border-[#17232D]/12 divide-y divide-[#17232D]/10">
              <div className="p-4 flex items-center justify-between bg-[#EAF0F4]/50">
                <span className="text-xs font-semibold text-[#17232D]">
                  Summary Details
                </span>
                <div className="flex flex-wrap gap-3 text-xs">
                  {[
                    { label: 'Service', target: 1 },
                    { label: 'Job', target: 2 },
                    { label: 'Location', target: 3 },
                    { label: 'Contact', target: 4 },
                  ].map((editBtn) => (
                    <button
                      key={editBtn.label}
                      type="button"
                      onClick={() => setStep(editBtn.target)}
                      className="inline-flex items-center gap-1 text-[#1687D9] font-semibold hover:underline cursor-pointer"
                    >
                      <Edit3 className="w-3 h-3" aria-hidden="true" />
                      <span>Edit {editBtn.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {buildSummaryLines().map((row) => (
                <div
                  key={row.label}
                  className="px-4 py-3 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 text-sm"
                >
                  <span className="text-[#344957] font-medium">
                    {row.label}
                  </span>
                  <span className="sm:col-span-2 text-[#17232D] font-semibold">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#344957]">
              Demonstration notice: This redesign preview prepares your quote
              summary locally and does not connect to a live submission server.
            </p>
          </div>
        )}

        {/* Navigation Controls */}
        <div className="pt-4 border-t border-[#17232D]/10 flex items-center justify-between gap-4">
          {step > 1 ? (
            <button
              type="button"
              onClick={goBack}
              className="min-h-11 px-5 py-2.5 rounded-lg border border-[#17232D]/20 text-sm font-semibold text-[#17232D] hover:bg-[#EAF0F4] inline-flex items-center gap-2 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 5 ? (
            <button
              type="button"
              onClick={goNext}
              className="min-h-11 px-6 py-2.5 rounded-lg bg-[#1687D9] hover:bg-[#1273BA] text-white text-sm font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setSubmittedDemo(true)}
              className="min-h-12 px-7 py-3 rounded-lg bg-[#1687D9] hover:bg-[#1273BA] text-white text-sm font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>Request My Cleaning Quote</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
