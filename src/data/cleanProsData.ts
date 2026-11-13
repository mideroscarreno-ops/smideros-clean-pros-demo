import type {
  CarpetPackage,
  FaqItem,
  ProcessStep,
  ServiceDetail,
} from '../types';

export const BUSINESS_INFO = {
  legalName: 'Clean Pros LLC',
  brandName: 'Clean Pros',
  tagline: 'Deep Clean. Real Results.',
  cityState: 'Norman, Oklahoma',
  phoneDisplay: '(405) 541-3811',
  phoneHref: 'tel:+14055413811',
  email: 'info@callcleanpros.com',
  emailHref: 'mailto:info@callcleanpros.com',
  officialWebsite: 'https://www.callcleanpros.com/',
  bookingNote:
    'Online appointment scheduling is hosted on Clean Pros’ official website.',
  redesignDisclosure: 'Independent website redesign concept by S.Mideros Agency.',
};

export const HERO_MEDIA = {
  image: '/images/hero-carpet-restoration.webp',
  alt: 'Freshly steam-cleaned plush neutral residential carpet with crisp grooming lines in a sunlit Norman living room',
};

export const CARPET_PACKAGES: CarpetPackage[] = [
  {
    id: 'basic',
    name: 'Basic',
    pricePerArea: 50,
    summary:
      'Essential truck-mounted steam extraction for routine residential carpet maintenance and light traffic lanes.',
    steps: ['Inspection', 'Pre-spray', 'Steam cleaning', 'Rinse'],
  },
  {
    id: 'odor',
    name: 'Odor',
    pricePerArea: 70,
    summary:
      'Added dry soil removal, mechanical agitation, and targeted topical treatment for homes with odor or pet traffic concerns.',
    steps: [
      'Inspection',
      'Pre-vacuum',
      'Pre-spray',
      'Agitation',
      'Steam cleaning',
      'Rinse',
      'Topical spray',
    ],
    featured: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    pricePerArea: 90,
    summary:
      'Complete multi-step carpet care combining deep agitation, topical treatment, hot-water extraction, and post-clean protector.',
    steps: [
      'Inspection',
      'Pre-vacuum',
      'Pre-spray',
      'Agitation',
      'Topical spray',
      'Steam cleaning',
      'Rinse',
      'Protector',
    ],
  },
];

export const PACKAGE_PRICING_DISCLOSURES = [
  'Prices shown are published by Clean Pros LLC on a per-area basis.',
  'Final scope, area count, and appointment availability are confirmed directly with Clean Pros.',
  'Additional specialty treatments or heavy soil conditions may affect the final quote.',
  'Specific room-size exceptions are evaluated during scheduling or on-site inspection rather than assumed online.',
];

export const SPECIALTY_SERVICES: ServiceDetail[] = [
  {
    route: 'carpet-cleaning',
    indexNumber: '01',
    name: 'Carpet Cleaning',
    shortTitle: 'Carpet Cleaning',
    categoryLabel: 'Residential Extraction',
    headline: 'Truck-mounted hot-water extraction built for deeper fiber recovery.',
    summary:
      'Professional carpet steam cleaning using truck-mounted equipment, tailored across published Basic, Odor, and Pro care levels.',
    ctaLabel: 'Explore Carpet Cleaning',
    image: '/images/hero-carpet-restoration.webp',
    imageAlt: 'Freshly cleaned residential living room carpet with uniform grooming texture',
    overview:
      'Residential carpet traps fine abrasive grit, allergens, and household spills deep below the surface pile. Clean Pros uses truck-mounted hot-water extraction to deliver high heat, thorough rinsing, and strong vacuum recovery without leaving heavy detergent residue behind.',
    methodologyTitle: 'How Clean Pros Approaches Carpet Care',
    methods: [
      {
        title: 'Truck-Mounted Steam Extraction',
        detail:
          'High-temperature water and deep suction flush suspended soil and cleaning solutions out of the carpet backing.',
      },
      {
        title: 'Package-Matched Preparation',
        detail:
          'Depending on your chosen Basic, Odor, or Pro package, service may include pre-vacuuming, mechanical agitation, topical spray, and fiber protector.',
      },
      {
        title: 'Pet Stain & Odor Treatments',
        detail:
          'Targeted treatments help address pet-related spots and lingering odors during fiber evaluation.',
      },
    ],
    surfacesCovered: [
      'Living rooms, bedrooms, and hallways',
      'Stairways and high-traffic corridors',
      'Plush, Berber, and synthetic residential pile',
    ],
    honestExpectations: [
      'Permanent dye changes, wear patterns, and bleached fibers cannot always be fully reversed.',
      'Pre-appointment vacuuming and moving small items help maximize technician focus on extraction.',
    ],
    quoteServiceKey: 'Carpet Cleaning',
  },
  {
    route: 'upholstery-cleaning',
    indexNumber: '02',
    name: 'Upholstery Cleaning',
    shortTitle: 'Upholstery',
    categoryLabel: 'Fabric & Furniture Care',
    headline: 'Measured moisture and fabric-specific evaluation for sofas and seating.',
    summary:
      'Professional cleaning for sofas, chairs, and upholstered furniture, beginning with fabric-specific evaluation before treatment.',
    ctaLabel: 'Explore Upholstery Cleaning',
    image: '/images/service-upholstery-care.webp',
    imageAlt: 'Precision stainless-steel upholstery extraction hand tool cleaning a woven gray sofa cushion',
    overview:
      'Upholstered furniture collects body oils, dust, and everyday spills on delicate weaves that behave very differently from floor carpet. Clean Pros evaluates each piece’s fabric characteristics before selecting cleaning chemistry and extraction pressure.',
    methodologyTitle: 'Fabric-First Upholstery Methodology',
    methods: [
      {
        title: 'Fabric Identification & Testing',
        detail:
          'We evaluate weave sensitivity, colorfastness, and backing construction prior to applying moisture.',
      },
      {
        title: 'Controlled Hand-Tool Extraction',
        detail:
          'Precision upholstery tools limit over-wetting while lifting soil from cushions, armrests, and backrests.',
      },
      {
        title: 'Targeted Spot Attention',
        detail:
          'High-contact areas such as headrests and seat fronts receive careful pre-conditioning.',
      },
    ],
    surfacesCovered: [
      'Sofas, sectionals, and loveseats',
      'Accent armchairs and dining chairs',
      'Ottomans and upholstered headboards',
    ],
    honestExpectations: [
      'Delicate natural fibers and manufacturer cleaning codes determine the safest cleaning method.',
      'Complete removal of aged ink, dye transfer, or sun fading cannot be guaranteed.',
    ],
    quoteServiceKey: 'Upholstery Cleaning',
  },
  {
    route: 'rug-cleaning',
    indexNumber: '03',
    name: 'Rug Cleaning',
    shortTitle: 'Rug Cleaning',
    categoryLabel: 'Area & Specialty Rugs',
    headline: 'On-site and off-site rug cleaning matched to construction and dye stability.',
    summary:
      'Thoughtful rug care offering both on-site and off-site cleaning methods depending on your rug’s fibers, backing, and condition.',
    ctaLabel: 'Explore Rug Cleaning',
    image: '/images/hero-carpet-restoration.webp',
    imageAlt: 'Clean textile flooring inside a modern sunlit Norman home',
    overview:
      'Area rugs range from durable synthetic weaves to sensitive wool or natural-fiber pieces that can bleed or shrink under standard carpet protocols. Clean Pros determines whether on-site maintenance or off-site cleaning is appropriate for each rug.',
    methodologyTitle: 'Rug Evaluation & Cleaning Pathways',
    methods: [
      {
        title: 'On-Site Rug Cleaning',
        detail:
          'Suitable for stable synthetic area rugs that can be safely evaluated and extracted in place with subfloor protection.',
      },
      {
        title: 'Off-Site Rug Care',
        detail:
          'Recommended when rugs require controlled drying, deeper flushing, or specialized attention away from hardwood or delicate subfloors.',
      },
      {
        title: 'Fiber & Fringe Inspection',
        detail:
          'We check backing integrity, dye stability, and odor concentration before recommending an approach.',
      },
    ],
    surfacesCovered: [
      'Synthetic and polypropylene living area rugs',
      'Wool and blended-fiber decorative rugs',
      'Runners and entryway mats',
    ],
    honestExpectations: [
      'Final method selection (on-site vs. off-site) is confirmed after inspecting the rug’s label, weave, and backing.',
      'Existing pet urine damage may require specialized odor steps that vary by fiber type.',
    ],
    quoteServiceKey: 'Rug Cleaning',
  },
  {
    route: 'tile-grout',
    indexNumber: '04',
    name: 'Tile & Grout Cleaning',
    shortTitle: 'Tile & Grout',
    categoryLabel: 'Hard Surface Restoration',
    headline: 'Specialized chemistry, agitation, and enclosed extraction for porous grout.',
    summary:
      'Detailed tile and grout cleaning using purpose-built solutions, mechanical agitation, and high-pressure extraction equipment.',
    ctaLabel: 'Explore Tile & Grout',
    image: '/images/service-tile-grout.webp',
    imageAlt: 'Bright, spotless porcelain tile floor with clean uniform grout lines in a modern kitchen and foyer',
    overview:
      'Routine mopping pushes dirty water into recessed, porous grout lines, leaving floors looking dull even right after cleaning. Clean Pros pairs targeted tile solutions with mechanical agitation and contained extraction to lift embedded soil out of grout pores.',
    methodologyTitle: 'Multi-Stage Tile & Grout Process',
    methods: [
      {
        title: 'Targeted Alkaline or Neutral Pre-Treatment',
        detail:
          'Solutions dwell on the floor to break down kitchen grease, soap residue, and tracked-in soil.',
      },
      {
        title: 'Grout-Line Agitation',
        detail:
          'Focused agitation loosens compacted grime along grout joints and textured tile surfaces.',
      },
      {
        title: 'Contained Hot-Water Extraction',
        detail:
          'Enclosed rotary extraction rinses and vacuums simultaneously, leaving surfaces clean without messy overspray.',
      },
    ],
    surfacesCovered: [
      'Kitchen, hallway, and foyer porcelain or ceramic tile',
      'Bathroom floors and tiled utility areas',
      'High-traffic residential and commercial tile corridors',
    ],
    honestExpectations: [
      'Permanent grout staining, cracked grout, or missing sealer cannot be fixed by cleaning alone.',
      'Surface type is verified beforehand so stone or specialty finishes receive compatible solutions.',
    ],
    quoteServiceKey: 'Tile & Grout Cleaning',
  },
  {
    route: 'commercial-carpet',
    indexNumber: '05',
    name: 'Commercial Carpet Cleaning',
    shortTitle: 'Commercial Carpet',
    categoryLabel: 'Business & Office Care',
    headline: 'Low-moisture encapsulation and hot-water extraction for working spaces.',
    summary:
      'Commercial carpet maintenance and restorative deep cleaning built around business foot traffic and scheduling needs.',
    ctaLabel: 'Explore Commercial Cleaning',
    image: '/images/service-commercial-floor.webp',
    imageAlt: 'Contemporary commercial office suite with freshly cleaned low-pile patterned carpet tiles and polished flooring',
    overview:
      'Commercial glue-down carpet and modular carpet tiles endure concentrated rolling chair wear, coffee spills, and heavy entry traffic. Clean Pros supports Norman-area offices and commercial spaces with both rapid-dry encapsulation and deep hot-water extraction.',
    methodologyTitle: 'Dual Commercial Methods',
    methods: [
      {
        title: 'Low-Moisture Encapsulation',
        detail:
          'Ideal for routine commercial maintenance where fast drying and minimal downtime matter between workdays.',
      },
      {
        title: 'Truck-Mounted Hot-Water Extraction',
        detail:
          'Restorative flushing for heavily soiled breakrooms, corridors, and entry lanes requiring deeper soil removal.',
      },
      {
        title: 'Schedule-Conscious Coordination',
        detail:
          'Service timing is planned through direct quote consultation to align with office hours and building access.',
      },
    ],
    surfacesCovered: [
      'Executive suites and conference rooms',
      'Modular commercial carpet tiles and broadloom',
      'Reception areas, hallways, and professional offices',
    ],
    honestExpectations: [
      'Commercial pricing and timing are quoted per facility based on layout, access, and soil load.',
      'Clean Pros focuses on specialty carpet and floor care rather than generic nightly maid checklists.',
    ],
    quoteServiceKey: 'Commercial Carpet Cleaning',
  },
  {
    route: 'specialty-floor-care',
    indexNumber: '06',
    name: 'Specialty Floor Care',
    shortTitle: 'Specialty Floor Care',
    categoryLabel: 'Hard Surfaces & Strip-and-Wax',
    headline: 'Dedicated hard-surface restoration and commercial strip-and-wax maintenance.',
    summary:
      'Confirmed hard-surface cleaning and strip-and-wax floor care designed to protect finishes and restore uniform sheen.',
    ctaLabel: 'Explore Floor Care',
    image: '/images/service-commercial-floor.webp',
    imageAlt: 'Polished commercial reception hard flooring alongside crisp office carpet tiles',
    overview:
      'Hard flooring surfaces lose luster and develop traffic scuffs when old finish layers trap grit or improper cleaners leave film behind. Clean Pros provides hard-surface cleaning and strip-and-wax services tailored to each floor’s material.',
    methodologyTitle: 'Hard-Surface & Strip-and-Wax Care',
    methods: [
      {
        title: 'Surface & Finish Assessment',
        detail:
          'Identify floor material and existing coating condition before selecting stripping or deep-scrubbing chemistry.',
      },
      {
        title: 'Strip-and-Wax Restoration',
        detail:
          'Remove worn, discolored finish buildup on VCT and compatible floors, neutralize thoroughly, and apply fresh protective coats.',
      },
      {
        title: 'Hard-Surface Deep Cleaning',
        detail:
          'Targeted scrubbing and extraction for non-carpeted areas requiring thorough soil removal without harsh residue.',
      },
    ],
    surfacesCovered: [
      'VCT and waxed commercial hard flooring',
      'Resilient hard surfaces and luxury vinyl areas',
      'Entryways and high-traffic hard corridors',
    ],
    honestExpectations: [
      'Deep scratches or physical gouges in flooring substrate remain visible beneath fresh finish.',
      'Cure times and foot-traffic restrictions are reviewed before work begins.',
    ],
    quoteServiceKey: 'Specialty Floor Care',
  },
];

export const WATER_DAMAGE_SERVICE = {
  indexNumber: '07',
  name: 'Water Damage Restoration',
  headline: 'Water Damage Doesn’t Wait. Neither Should You.',
  publishedClaim:
    'Clean Pros advertises 24/7 emergency water-restoration response for Norman and surrounding areas.',
  summary:
    'Emergency water extraction, structural drying assistance, moisture assessment, restoration consultation, and insurance coordination as published by Clean Pros.',
  image: '/images/water-restoration-equipment.webp',
  imageAlt:
    'Commercial restoration air movers and dehumidifier positioned neatly on protective mats inside a residential hallway',
  capabilities: [
    {
      title: 'Emergency Water Extraction',
      detail:
        'Rapid removal of standing water from carpet, pad, and hard flooring surfaces to help limit further migration.',
    },
    {
      title: 'Structural Drying Assistance',
      detail:
        'Commercial air movers and dehumidification equipment placed strategically to support controlled evaporation.',
    },
    {
      title: 'Moisture Assessment',
      detail:
        'Evaluations to locate damp areas beneath flooring, baseboards, and adjacent structures.',
    },
    {
      title: 'Restoration Consultation & Insurance Coordination',
      detail:
        'Clear documentation and communication support for homeowners navigating restoration steps and insurance coordination.',
    },
  ],
  importantNotices: [
    'Emergency water restoration is a dedicated phone pathway—call (405) 541-3811 directly rather than waiting on a web quote form.',
    'While Clean Pros advertises 24/7 emergency water-restoration response, routine carpet, upholstery, and hard-surface cleanings are scheduled appointments.',
    'Arrival times, drying duration, and insurance coverage decisions depend on real-world conditions and your insurer’s policy terms.',
  ],
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Inspect',
    description:
      'Walk the space with you, evaluate fiber type and traffic patterns, note specific spots or pet areas, and confirm realistic expectations before equipment comes inside.',
    packageNote: 'Included in Basic, Odor, and Pro packages.',
  },
  {
    number: '02',
    title: 'Prepare',
    description:
      'Apply targeted pre-spray conditioning to suspend embedded soils, paired with pre-vacuuming and mechanical agitation when included in your selected package.',
    packageNote:
      'Pre-spray in all packages; pre-vacuum & agitation in Odor and Pro.',
  },
  {
    number: '03',
    title: 'Extract',
    description:
      'Flush carpet fibers using truck-mounted hot-water extraction engineered for strong heat and deep vacuum recovery across traffic lanes and rooms.',
    packageNote: 'Core steam cleaning stage across all packages.',
  },
  {
    number: '04',
    title: 'Rinse & Finish',
    description:
      'Complete a balanced fiber rinse—plus topical odor spray or carpet protector where selected—and review post-cleaning drying and care guidance.',
    packageNote:
      'Rinse in all packages; topical spray in Odor & Pro; protector in Pro.',
  },
];

export const PRE_APPOINTMENT_CHECKLIST = [
  {
    title: 'Move small furniture before arrival',
    detail:
      'Please clear light items, floor lamps, dining chairs, and breakables from carpeted areas prior to your appointment window.',
  },
  {
    title: 'Vacuum the cleaning areas',
    detail:
      'A quick pre-visit vacuum helps remove loose surface debris (note: Odor and Pro packages also include technician pre-vacuuming).',
  },
  {
    title: 'Clear driveway access for the service vehicle',
    detail:
      'Truck-mounted extraction hoses run from our service vehicle; open driveway or curbside access helps keep setup smooth.',
  },
  {
    title: 'Secure pets away from the work area',
    detail:
      'Because doors may stay slightly cracked for vacuum and solution lines, please keep pets safely in another room or yard.',
  },
];

export const SURFACE_EXPERTISE_PILLARS = [
  {
    title: 'Surface Evaluation',
    detail:
      'Every job begins by reading the material—carpet pile, upholstery weave, grout porosity, or floor finish—before choosing chemistry.',
  },
  {
    title: 'Matched Techniques',
    detail:
      'Truck-mounted steam extraction, low-moisture commercial encapsulation, and enclosed rotary tile rinsing each solve different soil problems.',
  },
  {
    title: 'Professional Equipment',
    detail:
      'High-heat truck-mounted systems and commercial drying gear deliver consistent recovery that portable rental units cannot match.',
  },
  {
    title: 'Honest Expectations',
    detail:
      'No unrealistic guarantees—we explain what deep cleaning can lift and where permanent wear or dye loss may remain.',
  },
];

export const EDITORIAL_GALLERY_ITEMS = [
  {
    title: 'Residential Carpet Grooming & Extraction',
    surface: 'Plush Residential Pile',
    method: 'Truck-Mounted Hot-Water Extraction',
    caption:
      'Illustrative surface showcase: high-temperature extraction removes compacted traffic-lane grit and restores uniform pile lift.',
    image: '/images/hero-carpet-restoration.webp',
    alt: 'Illustrative residential carpet extraction result showing clean uniform pile texture',
  },
  {
    title: 'Precision Upholstery Detailing',
    surface: 'Woven Sofa & Cushions',
    method: 'Low-Moisture Hand-Tool Extraction',
    caption:
      'Illustrative surface showcase: controlled stainless extraction lifts surface oils without saturating cushion cores.',
    image: '/images/service-upholstery-care.webp',
    alt: 'Illustrative upholstery extraction detailing a woven gray sofa cushion',
  },
  {
    title: 'Porcelain Tile & Grout Brightening',
    surface: 'Kitchen & Foyer Tile',
    method: 'Agitation & Enclosed Rotary Rinse',
    caption:
      'Illustrative surface showcase: pre-treatment and contained rinsing pull embedded discoloration out of recessed grout joints.',
    image: '/images/service-tile-grout.webp',
    alt: 'Illustrative tile and grout cleaning result showing crisp uniform grout lines',
  },
  {
    title: 'Commercial Suite & Hard-Surface Maintenance',
    surface: 'Modular Office Carpet & Reception Flooring',
    method: 'Encapsulation & Specialty Floor Care',
    caption:
      'Illustrative surface showcase: coordinated carpet and hard-floor maintenance keeps working offices crisp with minimal disruption.',
    image: '/images/service-commercial-floor.webp',
    alt: 'Illustrative commercial carpet tile and polished reception floor maintenance showcase',
  },
];

export const REVIEW_HIGHLIGHTS = {
  auditNote:
    'At the time of the public website audit, Clean Pros’ official site displayed a 5.0 Google rating based on 239 reviews. Independent search listings (Google & Trustindex) reflect a 4.9–5.0 average across hundreds of customer reviews. Live review counts continue to change—please verify current ratings directly on Google or Clean Pros’ official site.',
  verifiedThemes: [
    {
      topic: 'Deep Carpet & Pet Odor Results',
      source: 'Public Google & Trustindex Review Summaries',
      summary:
        'Customers repeatedly report carpets looking refreshed after service, highlighting effective removal of stubborn pet spots and urine odors.',
    },
    {
      topic: 'Punctual, Polite Communication',
      source: 'Public Google & Trustindex Review Summaries',
      summary:
        'Reviewers frequently mention team member Taylor Chapman and technicians arriving on time, texting ahead, and working carefully inside clients’ homes.',
    },
    {
      topic: 'Transparent, Fair Local Pricing',
      source: 'Public Google & Trustindex Review Summaries',
      summary:
        'Homeowners and local businesses note clear upfront package pricing and fast quote follow-up compared with national franchises.',
    },
    {
      topic: 'Tile, Grout & Hard-Surface Versatility',
      source: 'Public Google & Trustindex Review Summaries',
      summary:
        'Reviews also praise tile and grout restoration and hard-surface floor care alongside traditional carpet steam cleaning.',
    },
  ],
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'Carpet Cleaning Packages',
    question: 'What is included in the published $50, $70, and $90 carpet packages?',
    answer:
      'Basic ($50/area) includes Inspection, Pre-spray, Steam cleaning, and Rinse. Odor ($70/area) adds Pre-vacuum, Agitation, and Topical spray. Pro ($90/area) includes all Odor steps plus carpet Protector. Final availability, scope, and any specialty treatments are confirmed directly with Clean Pros.',
  },
  {
    category: 'Preparation',
    question: 'Do I need to move furniture or vacuum before technicians arrive?',
    answer:
      'Clean Pros asks customers to move small furniture, vacuum cleaning areas beforehand, clear driveway access for the truck-mounted service vehicle, and secure pets away from the work area. Clean Pros does not promise full heavy furniture moving.',
  },
  {
    category: 'Stains & Expectations',
    question: 'Can every carpet or upholstery stain be completely removed?',
    answer:
      'No honest specialty cleaner can guarantee 100% removal of every stain. Permanent dye changes, bleach spots, fiber wear, or aged damage may remain visible even after deep extraction. Clean Pros evaluates surfaces up front and sets realistic expectations.',
  },
  {
    category: 'Water Damage',
    question: 'How do I reach Clean Pros for emergency water damage restoration?',
    answer:
      'Call (405) 541-3811 directly. Clean Pros advertises 24/7 emergency water-restoration response. Please do not rely on an email or web quote form for urgent standing water.',
  },
  {
    category: 'Service Areas',
    question: 'Which areas outside Norman do you service?',
    answer:
      'Clean Pros is based in Norman, Oklahoma and serves Norman and surrounding communities. Because neighborhood eligibility can depend on scheduling and job scope, share your city or ZIP code via our Service Area Inquiry or call (405) 541-3811 to confirm.',
  },
  {
    category: 'Booking vs. Quote',
    question: 'Should I Book Online or Request a Quote?',
    answer:
      'Use Book Online on Clean Pros’ official website (callcleanpros.com) when scheduling standard supported services. Use Request a Quote when you have custom upholstery, area rugs, tile square footage, commercial spaces, or specialty floor care needs that benefit from scope review.',
  },
];
