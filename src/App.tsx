import useTranslation from './hooks/useTranslation';

export default function App() {
  const { t, language, changeLanguage } = useTranslation();
  return (
    <div className="flex flex-col min-h-screen" dir={language === 'ar' ? 'rtl' : 'ltr'} lang={language}>
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-2">
          
            <h1 className="text-2xl font-bold">Altajer Almopdea</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => changeLanguage('en')} 
              className={`px-3 py-1 rounded ${language === 'en' ? 'bg-white text-blue-600' : 'text-white hover:bg-blue-500'}`}
            >
              EN
            </button>
            <button 
              onClick={() => changeLanguage('ar')}
              className={`px-3 py-1 rounded ${language === 'ar' ? 'bg-white text-blue-600' : 'text-white hover:bg-blue-500'}`}
            >
              عربي
            </button>
          </div>
          <nav className="space-x-6">
            <a href="#home" className="hover:underline">
              {t('home')}
            </a>
            <a href="#about" className="hover:underline">
              {t('about')}
            </a>
          </nav>
        </div>
      </header>

      {/* Body */}
      <main
        id="home"
        className="flex-grow flex flex-col justify-center items-center text-center p-10 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            {t('welcome')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('tagline')}
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg text-left space-y-6">
            <p className="text-gray-700">
              {t('description')}
            </p>
            {/* Transportation Image */}
            <div className="my-8 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/src/assets/image.png"
                alt="Altajer Almopdea transportation services"
                className="w-full h-auto object-cover"
               
              />
              <p className="text-sm text-gray-500 text-center mt-2">Our latest fleet of imported transportation vehicles</p>
            </div>
            <div className="flex space-x-4 my-6">
              <a 
                href="tel:+218922000629" 
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{t('call')}</span>
              </a>
              <a 
                href="mailto:mohamed.iphone202017@gmail.com" 
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{t('email')}</span>
              </a>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{t('contact')}</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Vehicle Import & Export</li>
                  <li>Transportation Equipment Supply</li>
                  <li>Customs Clearance</li>
                  <li>After-Sales Support</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-2">{t('whyChooseUs')}</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Years of Industry Experience</li>
                  <li>Competitive Pricing</li>
                  <li>Wide Range of Vehicles</li>
                  <li>Exceptional Customer Service</li>
                </ul>
              </div>
            </div>
           
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer id="about" className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-4 text-center space-y-2">
          <h3 className="text-xl font-bold text-white mb-4">Altajer Almopdea</h3>
          <p className="max-w-2xl mx-auto">Leading importer of common transportation vehicles and equipment, providing reliable solutions for businesses worldwide.</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Contact</h4>
              <p className="flex items-start">
                <span className="mr-2">📍</span>
                <span>{t('location')}</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📱</span>
                <span>{t('phone')}</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>{t('emailAddress')}</span>
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Quick Links</h4>
              <a href="#home" className="block hover:text-white">Home</a>
              <a href="#services" className="block hover:text-white">Services</a>
              <a href="#about" className="block hover:text-white">About Us</a>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-white">Business Hours</h4>
              <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
              <p>Friday - Saturday: Closed</p>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm mt-8 pt-4 border-t border-gray-700">
            © {new Date().getFullYear()} Altajer Almopdea. {t('rights')}
          </p>
        </div>
      </footer>
    </div>
  );
}