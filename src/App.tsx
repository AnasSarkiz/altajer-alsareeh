import { useState, useEffect } from 'react';
import './App.css';

// Translation content
const translations = {
  en: {
    home: 'Home',
    about: 'About Us',
    companyName: 'Altajer Alsareeh',
    heroTitle: 'Your Trusted Partner in Vehicle Imports',
    heroSubtitle: 'Quality vehicles from around the world, delivered to your doorstep',
    aboutTitle: 'About Our Company',
    aboutText: 'Altajer Alsareeh is a leading company specializing in importing high-quality vehicles, transports, and cars. With years of experience in the industry, we provide our customers with the best selection of vehicles at competitive prices. Our commitment to excellence and customer satisfaction sets us apart in the market.',
    contactUs: 'Contact Us',
    address: 'West Azawiah, Azzawia, Libya',
    phone: '+218 922243465',
    email: 'altajerAlsareeh@gmail.com',
    rights: 'All Rights Reserved',
  },
  ar: {
    home: 'الرئيسية',
    about: 'من نحن',
    companyName: 'التاجر الصريح',
    heroTitle: 'شريكك الموثوق في استيراد المركبات',
    heroSubtitle: 'سيارات عالية الجودة من جميع أنحاء العالم، تصل إلى عتبة داركم',
    aboutTitle: 'عن شركتنا',
    aboutText: 'شركة التاجر السريع هي شركة رائدة متخصصة في استيراد المركبات والنقل بجودة عالية. مع سنوات من الخبرة في المجال، نقدم لعملائنا أفضل تشكيلة من المركبات بأسعار تنافسية. التزامنا بالتميز ورضا العملاء يميزنا في السوق.',
    contactUs: 'اتصل بنا',
    address: 'الزاوية الغربية،الزاويه، ليبيا',
    phone: '+218 922243465',
    email: 'altajerAlsareeh@gmail.com',
    rights: 'جميع الحقوق محفوظة',
  }
};

function App() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const t = translations[language];

  const handleCall = () => {
    window.location.href = language === 'ar' ? 'tel:+218922243465' : 'tel:+218922243465';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:altajerAlsareeh@gmail.com';
  };

  const openContactDialog = () => {
    setIsContactDialogOpen(true);
  };

  const closeContactDialog = () => {
    setIsContactDialogOpen(false);
  };

  // Apply RTL for Arabic
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">{t.companyName}</div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#home" className="hover:text-blue-200 transition">{t.home}</a>
            <a href="#about" className="hover:text-blue-200 transition">{t.about}</a>
            <button 
              onClick={toggleLanguage}
              className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md transition"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-3">
            <a 
              href="#home" 
              className="block py-2 hover:bg-blue-800 px-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.home}
            </a>
            <a 
              href="#about" 
              className="block py-2 hover:bg-blue-800 px-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.about}
            </a>
            <button 
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="w-full text-left py-2 hover:bg-blue-800 px-2 rounded"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gray-100 py-20 flex-grow">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{t.heroTitle}</h1>
            <p className="text-xl text-gray-600 mb-8">{t.heroSubtitle}</p>
            <button 
              onClick={openContactDialog}
              className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition inline-block"
            >
              {t.contactUs}
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-80 flex items-center justify-center p-4">
              <img 
                src="/image.png" 
                alt={t.companyName}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.aboutTitle}</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <p className="text-gray-700 leading-relaxed mb-6">
                {t.aboutText}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{t.companyName}</h3>
              <p className="text-gray-400">{t.aboutText.split('.').slice(0, 2).join('.')}.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.contactUs}</h4>
              <address className="not-italic">
                <p className="mb-2">{t.address}</p>
                <a 
                  href={language === 'ar' ? 'tel:+218922243465' : 'tel:+218922243465'} 
                  className="mb-2 block hover:text-blue-400 transition-colors"
                >
                  {t.phone}
                </a>
                <a 
                  href="mailto:altajerAlsareeh@gmail.com" 
                  className="hover:text-blue-400 transition-colors"
                >
                  {t.email}
                </a>
              </address>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition">{t.home}</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition">{t.about}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
            <p> {new Date().getFullYear()} {t.companyName}. {t.rights}.</p>
          </div>
        </div>
      </footer>

      {/* Contact Dialog */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isContactDialogOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={closeContactDialog}
      >
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <div 
          className={`relative w-full max-w-md transform rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 ${
            isContactDialogOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">{t.contactUs}</h3>
            <button 
              onClick={closeContactDialog}
              className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            <button
              onClick={handleCall}
              className="flex w-full items-center justify-center space-x-3 rounded-xl bg-green-500 px-6 py-4 text-lg font-medium text-white transition-all hover:bg-green-600 active:scale-95 active:bg-green-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{language === 'ar' ? 'اتصل بنا' : 'Call Us'}</span>
            </button>
            <button
              onClick={handleEmail}
              className="flex w-full items-center justify-center space-x-3 rounded-xl bg-blue-500 px-6 py-4 text-lg font-medium text-white transition-all hover:bg-blue-600 active:scale-95 active:bg-blue-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{language === 'ar' ? 'إرسال بريد إلكتروني' : 'Send Email'}</span>
            </button>
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            {language === 'ar' 
              ? 'سنسعد بمساعدتك في أي استفسار لديك' 
              : 'We\'re happy to help with any questions'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
