import React, { useState, useEffect, useRef } from 'react';
import { Globe2, ChevronDown, Users, DollarSign, BarChart3, BookOpen, Check, ArrowRight, Gift, Target, Trophy, Rocket } from 'lucide-react';
import { translations } from './translations';
import ReactGA from 'react-ga4';
ReactGA.initialize('G-LFEH3KYBRZ'); 
ReactGA.set({ debug: true });
window.gtag('event', 'اسم_الحدث', {
  event_category: 'category',
  event_label: 'label',
  value: 123,
});

type Language = 'ar' | 'en' | 'ku';

function App() {

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-LFEH3KYBRZ', {
        page_path: location.pathname,
      });
    } else {
      console.error("Google Analytics is not loaded correctly.");
    }
  }, [location]);

  const [language, setLanguage] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const adsInitializedRef = useRef(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.dir = ['ar'].includes(language) ? 'rtl' : 'ltr';
    document.title = translations[language].title;
  }, [language]);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Improved AdSense initialization with retry mechanism
  useEffect(() => {
    if (!adsInitializedRef.current) {
      let retryCount = 0;
      const maxRetries = 3;

      const initializeAds = () => {
        const adElements = document.getElementsByClassName('adsbygoogle');
        
        Array.from(adElements).forEach((ad) => {
          if (ad instanceof HTMLElement && 
              ad.offsetWidth > 0 && 
              !ad.getAttribute('data-adsbygoogle-initialized')) {
            try {
              (window.adsbygoogle = window.adsbygoogle || []).push({});
              ad.setAttribute('data-adsbygoogle-initialized', 'true');
            } catch (err) {
              console.error('AdSense initialization error:', err);
              if (retryCount < maxRetries) {
                retryCount++;
                setTimeout(initializeAds, 1000);
              }
            }
          }
        });
      };

      // Initial delay to ensure DOM is ready
      setTimeout(() => {
        initializeAds();
        
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
              initializeAds();
            }
          });
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true
        });

        adsInitializedRef.current = true;
      }, 1000);

      return () => {
        adsInitializedRef.current = false;
      };
    }
  }, []);

  const phases = [
    { 
      icon: Gift,
      image: "https://i.imgur.com/m1iu1pJ.jpeg",
      content: translations[language].phases.intro 
    },
    { 
      icon: Target,
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80",
      content: translations[language].phases.registration 
    },
    { 
      icon: BarChart3,
      image: "https://i.imgur.com/7lrkase.png",
      content: translations[language].phases.sales 
    },
    { 
      icon: Users,
      image: "https://i.imgur.com/6MB5g8V.png",
      content: translations[language].phases.team 
    },
    { 
      icon: Trophy,
      image: "https://i.imgur.com/ZEH1vHp.png",
      content: translations[language].phases.outcome 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Language Switcher - Fixed for mobile */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-2 flex justify-end">
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 active:bg-gray-100"
            >
              <Globe2 className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {isMenuOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg overflow-hidden min-w-[120px] border border-gray-100">
                {Object.keys(translations).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang as Language);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 hover:bg-gray-50 active:bg-gray-100 text-sm font-medium ${language === lang ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hero Section - Mobile optimized */}
      <div className="relative bg-blue-600 text-white pt-20 pb-12 px-4 sm:pt-32 sm:pb-24 sm:px-6 lg:px-8" 
           style={{
             backgroundImage: 'url(https://i.imgur.com/I3VglOZ.png)',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundBlend: 'overlay'
           }}>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            {translations[language].title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {translations[language].phases.intro.description}
          </p>
          <a
            href="https://www.dxnarabia.com/pws/149025889"
            className="inline-flex items-center bg-white text-blue-600 px-5 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
          >
            {translations[language].cta}
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Top Banner Ad - After Hero */}
      <div className="container mx-auto px-4 py-6">
        <div className="w-full h-[90px] sm:h-[100px] bg-gray-50 rounded-lg overflow-hidden">
          
 <ins className="adsbygoogle"
     style={{ display: 'block' }}
     data-ad-client="ca-pub-9135473927777985"
     data-ad-slot="7064115100"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
        </div>
      </div>

      {/* Main Content with Side Ad */}
      <main className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Desktop Sidebar Ad */}
          <div className="hidden xl:block fixed right-4 top-32 w-[160px]">
            <div className="sticky top-32">
              

<ins className="adsbygoogle"
      style={{ display: 'block', width: '160px', height: '600px' }}
     data-ad-client="ca-pub-9135473927777985"
     data-ad-slot="6285385907"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
            </div>
          </div>

          {/* Success Story Card */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-full md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80"
                  alt="Success Story"
                  className="rounded-lg w-full aspect-video object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold mb-3">{translations[language].successStory.title}</h2>
                <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">{translations[language].successStory.description}</p>
                <div className="flex items-center gap-3 bg-white/50 rounded-lg p-3">
                  <Rocket className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base">{translations[language].successStory.achievement}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mid-Content Ad */}
          <div className="my-8 sm:my-12">
            <div className="w-full h-[250px] bg-gray-50 rounded-lg overflow-hidden">
              

<ins className="adsbygoogle"
     style={{ display: 'block' }}
     data-ad-client="ca-pub-9135473927777985"
     data-ad-slot="1733974798"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
            </div>
          </div>

          {/* Phases Grid */}
          <div className="space-y-8 sm:space-y-12">
            {phases.map((phase, index) => (
              <React.Fragment key={index}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2">
                      <img 
                        src={phase.image}
                        alt={phase.content.title}
                        className="w-full h-48 sm:h-64 lg:h-full object-cover"
                      />
                    </div>
                    <div className="p-4 sm:p-6 lg:p-8 lg:w-1/2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <phase.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">{phase.content.title}</h2>
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                        {phase.content.description}
                      </p>
                      <div className="grid gap-3">
                        {(phase.content.points || phase.content.steps || phase.content.tips || phase.content.benefits || phase.content.results)?.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* In-between Phases Ad - Every 2 phases */}
                {index % 2 === 1 && index < phases.length - 1 && (
                  <div className="my-8 sm:my-12">
                    <div className="w-full h-[250px] bg-gray-50 rounded-lg overflow-hidden">
                      

    <ins className="adsbygoogle"
     style={{ display: 'block' }}
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-9135473927777985"
     data-ad-slot="3718808603"></ins>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Final CTA Section */}
          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 sm:p-8 lg:p-12 text-white">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-4">
                {translations[language].phases.outcome.title}
              </h2>
              <p className="text-base sm:text-lg mb-6 opacity-90">
                {translations[language].phases.outcome.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {translations[language].phases.outcome.results.map((result, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-3 sm:p-4">
                    <Check className="w-5 h-5 text-green-400 mb-2 mx-auto" />
                    <p className="text-sm sm:text-base">{result}</p>
                  </div>
                ))}
              </div>
              <a
                href="https://www.dxnarabia.com/pws/149025889"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
              >
                {translations[language].cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bottom Ad */}
          <div className="mt-12">
            <div className="w-full h-[250px] bg-gray-50 rounded-lg overflow-hidden">
               

    <ins className="adsbygoogle"
     style={{ display: 'block' }}
     data-ad-client="ca-pub-9135473927777985"
     data-ad-slot="4524747529"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Fixed Ad */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg lg:hidden">
        <div className="w-full h-[50px]">
           

<ins className="adsbygoogle"
     style={{ display: 'block' }}
     data-ad-client="ca-pub-9135473927777985"
     data-ad-slot="9581509371"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
        </div>
      </div>
    </div>
  );
}

export default App;