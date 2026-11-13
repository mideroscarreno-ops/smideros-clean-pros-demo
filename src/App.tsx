import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { SPECIALTY_SERVICES } from './data/cleanProsData';
import { HomePage } from './pages/HomePage';
import {
  AboutPage,
  ContactPage,
  FaqsPage,
  PackagesPage,
  ProcessPage,
  QuotePage,
  ReviewsPage,
  ServiceAreasPage,
} from './pages/SecondaryPages';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { WaterDamagePage } from './pages/WaterDamagePage';
import type { PageRoute, QuotePrefill } from './types';

const VALID_ROUTES: PageRoute[] = [
  'home',
  'carpet-cleaning',
  'packages',
  'upholstery-cleaning',
  'rug-cleaning',
  'tile-grout',
  'commercial-carpet',
  'specialty-floor-care',
  'water-damage',
  'process',
  'service-areas',
  'reviews',
  'faqs',
  'about',
  'quote',
  'contact',
];

function parseHashRoute(): PageRoute {
  const hash = window.location.hash.replace(/^#\/?/, '') as PageRoute;
  return VALID_ROUTES.includes(hash) ? hash : 'home';
}

export default function App() {
  const [route, setRoute] = useState<PageRoute>(() => parseHashRoute());
  const [quotePrefill, setQuotePrefill] = useState<QuotePrefill | undefined>(
    undefined
  );

  useEffect(() => {
    function handleHashChange() {
      setRoute(parseHashRoute());
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  function navigate(nextRoute: PageRoute) {
    if (nextRoute === 'home') {
      window.history.pushState(null, '', '#');
    } else {
      window.history.pushState(null, '', `#${nextRoute}`);
    }
    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function startQuote(prefill?: QuotePrefill) {
    setQuotePrefill(prefill);
    navigate('quote');
  }

  const matchedService = SPECIALTY_SERVICES.find((s) => s.route === route);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#17232D]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#17232D] focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      <Navbar currentRoute={route} onNavigate={navigate} />

      <main id="main-content" className="flex-1">
        {route === 'home' && (
          <HomePage onNavigate={navigate} onStartQuote={startQuote} />
        )}
        {matchedService && (
          <ServiceDetailPage
            service={matchedService}
            onNavigate={navigate}
            onStartQuote={startQuote}
          />
        )}
        {route === 'water-damage' && <WaterDamagePage onNavigate={navigate} />}
        {route === 'packages' && (
          <PackagesPage onNavigate={navigate} onStartQuote={startQuote} />
        )}
        {route === 'process' && (
          <ProcessPage onNavigate={navigate} onStartQuote={startQuote} />
        )}
        {route === 'service-areas' && (
          <ServiceAreasPage onNavigate={navigate} onStartQuote={startQuote} />
        )}
        {route === 'reviews' && (
          <ReviewsPage onNavigate={navigate} onStartQuote={startQuote} />
        )}
        {route === 'faqs' && (
          <FaqsPage onNavigate={navigate} onStartQuote={startQuote} />
        )}
        {route === 'about' && (
          <AboutPage onNavigate={navigate} onStartQuote={startQuote} />
        )}
        {route === 'quote' && (
          <QuotePage prefill={quotePrefill} onNavigate={navigate} />
        )}
        {route === 'contact' && (
          <ContactPage onNavigate={navigate} onStartQuote={startQuote} />
        )}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
