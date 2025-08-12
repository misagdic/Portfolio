import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  Phone,
  Mail,
  MapPin,
  Download,
  ArrowRight,
  Menu,
  X,
  Globe,
  Linkedin,
  Twitter,
  Instagram,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import './App.css'




function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [language, setLanguage] = useState('tr') // Default to Turkish
  const [scrollProgress, setScrollProgress] = useState(0)

  const [initialized, setInitialized] = useState(false);
const swiperRef = useRef(null);
const [activeIndex, setActiveIndex] = useState(0);
const totalSlides = 6;

useEffect(() => {
  if (!swiperRef.current) return;

  let step = 0;

  // 2 saniye bekle sonra otomatik geçişi başlat
  const startTimeout = setTimeout(() => {
    setInitialized(true);
  }, 2000);

  let interval;
  if (initialized) {
    interval = setInterval(() => {
      if (!swiperRef.current) return;

      if (step === 0) {
        swiperRef.current.slideTo(activeIndex + 1, 0);
        step = 1;
      } else {
        swiperRef.current.slideTo(activeIndex + 2, 500);
        setActiveIndex((prev) => (prev + 1) % totalSlides);
        step = 0;
      }
    }, 3000);
  }

  return () => {
    clearTimeout(startTimeout);
    clearInterval(interval);
  };
}, [activeIndex, initialized]);

  // Turkish translations
  const translations = {
    tr: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      projects: 'Projeler',
      education: 'Eğitim',
      testimonials: 'Referanslar',
      partners: 'Ortaklar',
      blog: 'Blog',
      contact: 'İletişim',
      fullStackDeveloper: 'Bilgisayar Mühendisi',
      heroDescription: [
        'Selam, ben İkbal.',
        'Kod yazıyorum, fikir geliştiriyorum, projelere ruh katıyorum.',
        'Flutter, Python, C#… hepsi sadece araç — asıl mesele üretmek.',
        'Sıfırdan bir şeyler var etmeyi seviyorum.'
      ],
      years: 'Yıl',
      experience: 'Deneyim',
      working: 'Çalışma',
      greatExperience: 'Yetkinliklerim',
      seeProject: 'Projeyi Gör',
      ecommercePlatform: 'Market Fiyatları',
      mobileApp: 'CodeMania',
      dashboardSystem: 'Petfix',
      downloadResume: 'Özgeçmiş İndir',
      techLead: 'Teknik Lider',
      productManager: 'Ürün Müdürü',
      ceo: 'CEO',
      recentNews: 'Son Haberler',
      modernWebDev: 'Modern Web Geliştirme Trendleri',
      reactPerformance: 'React Performans Optimizasyonu',
      fullStackGuide: 'Full Stack Geliştirme Rehberi',
      readMore: 'Devamını Oku',
      contactTitle: 'İletişim',
      letsGrabCoffee: 'Bir kahve içelim ve sorularınıza yanıt arayalım.',
      yourName: 'Muhammet İkbal Sağdıç',
      yourEmail: 'muhammet.ikbal.sagdic@gmail.com',
      yourMessage: 'Mesajınız',
      contactMe: 'Benimle İletişime Geç',
      portfolio: 'Portföy',

    },
    en: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      education: 'Education',
      testimonials: 'Testimonials',
      partners: 'Partners',
      blog: 'Blog',
      contact: 'Contact',
      fullStackDeveloper: 'Full Stack Developer',
      heroDescription: 'Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage.',
      years: 'Years',
      experience: 'Experience',
      working: 'Working',
      greatExperience: 'Great Experience',
      aboutDescription: 'Fill appear won\'t may make moveth signs. Fourth. Good own. Green you\'re moveth us, lesser.',
      webDesign: 'Web Design',
      react: 'React',
      nodejs: 'Node.js',
      seeProject: 'See Project',
      ecommercePlatform: 'E-Commerce Platform',
      mobileApp: 'Mobile App',
      dashboardSystem: 'Dashboard System',
      downloadResume: 'Download Resume',
      creativeDedicated: 'Creative & dedicated is things that portfolio brings for your business.',
      techLead: 'Tech Lead',
      productManager: 'Product Manager',
      ceo: 'CEO',
      recentNews: 'Recent News',
      modernWebDev: 'Modern Web Development Trends',
      reactPerformance: 'React Performance Optimization',
      fullStackGuide: 'Full Stack Development Guide',
      readMore: 'Read More',
      contactTitle: 'Contact',
      contactDescription: 'You\'ll called for yielding male, so lights Stars abundantly, is their.',
      letsGrabCoffee: 'Let\'s grab a coffee and jump on conversation chat with me.',
      yourName: 'Muhammet İkbal Sağdıç',
      yourEmail: 'muhammet.ikbal.sagdic@gmail.com',
      yourMessage: 'Your Message',
      contactMe: 'Contact Me',
      portfolio: 'Portfolio',

    }
  }

  const t = translations[language]


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Get current scroll position
      const currentScroll = window.pageYOffset
      const targetScroll = element.offsetTop - 100 // 100px offset for header

      // Determine scroll direction
      const scrollDirection = targetScroll > currentScroll ? 'down' : 'up'

      // Add slide animation class
      document.body.classList.add(`slide-${scrollDirection}`)

      // Smooth scroll to target
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })

      // Remove animation class after scroll
      setTimeout(() => {
        document.body.classList.remove(`slide-${scrollDirection}`)
      }, 1000)
    }
    setIsMenuOpen(false)
  }

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr')
  }





  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'education', 'testimonials', 'partners', 'blog', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
        
      }

      // Calculate scroll progress
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Drawer Menu */}
      <div className={`drawer ${isMenuOpen ? 'drawer-open' : ''}`}>
        <div className="drawer-header">
          <div className="logo">
            <h2>{t.portfolio}</h2>
          </div>

          <div className="drawer-actions">
            <button
              className="language-switcher"
              onClick={toggleLanguage}
              title={language === 'tr' ? 'Switch to English' : 'Türkçe\'ye Geç'}
            >
              <Globe size={16} />
              <span>{language.toUpperCase()}</span>
            </button>

            <button
              className="drawer-close-btn"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <nav className="drawer-nav">
          <ul className="drawer-nav-list">
            <li><button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>{t.home}</button></li>
            <li><button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>{t.about}</button></li>
            <li><button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>{t.projects}</button></li>
            <li><button onClick={() => scrollToSection('education')} className={activeSection === 'education' ? 'active' : ''}>{t.education}</button></li>
            <li><button onClick={() => scrollToSection('testimonials')} className={activeSection === 'testimonials' ? 'active' : ''}>{t.testimonials}</button></li>
            <li><button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>{t.contact}</button></li>
          </ul>
        </nav>

        <div className="drawer-contact">
          <div className="contact-info">
            <Phone size={16} />
            <span>+90 (545) 552-39-29</span>
          </div>
        </div>
      </div>

      {/* Menu Toggle Button */}
      <button
        className="menu-toggle-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar" style={{ height: `${scrollProgress}%` }}></div>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>{t.portfolio}</h1>
              <p className="hero-subtitle">{t.fullStackDeveloper}</p>
              <p className="hero-description">
                {t.heroDescription}
              </p>


            </motion.div>

            <motion.div
              className="hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="profile-image">
                <img src="/src/assets/graduation-photo.jpg" alt="Mezuniyet Fotoğrafı" />
              </div>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              className="social-media-icons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="social-line"></div>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/muhammet-ikbal-sağdıç-38515a178" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com/misagdic" target="_blank" rel="noopener noreferrer" className="social-icon" title="Twitter/X">
                  <Twitter size={20} />
                </a>
                <a href="https://instagram.com/misagdic" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://github.com/misagdic" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
              <div className="social-line"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
  <div className="container about-container">
    
    {/* Soldaki New Graduation kutusu */}
    <div className="about-left">
      <div className="experience-box">
        <h1 className="experience-number">New</h1>
        <p className="experience-text">Graduation</p>
      </div>
    </div>

    {/* Sağdaki mevcut içerik */}
    <motion.div
      className="about-content"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

            <h2>{t.greatExperience}</h2>

            <div className="skills-bars">
              <div className="skill-bar">
                <div className="label">
                  <span>Python</span>
                  <span></span>
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: '75%' }}></div>
                </div>
              </div>

              <div className="skill-bar">
                <div className="label">
                  <span>React</span>
                  <span></span>
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="skill-bar">
                <div className="label">
                  <span>Dart</span>
                  <span></span>
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="skill-bar">
                <div className="label">
                  <span>C#</span>
                  <span></span>
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="skill-bar">
                <div className="label">
                  <span>C</span>
                  <span></span>
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="skill-bar">
                <div className="label">
                  <span>Java</span>
                  <span></span>
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: '62%' }}></div>
                </div>
              </div>
            </div>


            <p className="about-description">
              {t.aboutDescription}
            </p>


          </motion.div>
        </div>
      </section>


{/*  *****************************************Projects Section************************** */}

<section id="projects" className="projects">
  <Swiper
    modules={[Navigation]}
    spaceBetween={20}
    slidesPerView={3}
    centeredSlides={true}
    navigation
    loop={false} // loop kapalı
    onSwiper={(swiper) => {
      swiperRef.current = swiper;
    }}
    onSlideChange={(swiper) => {
      setActiveIndex(swiper.activeIndex % totalSlides);
    }}
  >
    {[

      {
        img: "https://images.unsplash.com/photo-1560350824-8828864cdef1?q=80&w=1374&auto=format&fit=crop",
        title: t.ecommercePlatform,
        desc: "Market Fiyatları, farklı marketlerin ürün fiyatlarını kolayca karşılaştırmanı sağlayan pratik bir uygulamadır. Zamandan ve paradan tasarruf et, en uygun fiyatları tek ekranda gör!"
      },
      {
        img: "https://images.unsplash.com/photo-1587573578335-9672da4d0292?w=600&auto=format&fit=crop&q=60",
        title: t.mobileApp,
        desc: "Codemania, Dart programlama dilini oyunlaştırılmış görevlerle öğreten eğlenceli bir eğitim uygulamasıdır. Kod yazmayı keyifli ve etkileşimli hale getirir."
      },
      {
        img: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1886&auto=format&fit=crop",
        title: t.dashboardSystem,
        desc: "Petfix, evcil hayvan sahiplerinin ihtiyaç duyduğu tüm hizmetleri tek bir uygulamada toplar. Aşı takibi, mama hatırlatıcıları, veteriner randevuları ve daha fazlası!"
      },
      {
        img: "https://images.unsplash.com/photo-1597392582469-a697322d5c16?q=80&w=2070&auto=format&fit=crop",
        title: "Words Pool",
        desc: "İngilizce kelimeleri eğlenceli ve kalıcı şekilde öğrenmeni sağlayan kişisel kelime havuzun. Öğren, tekrar et, test et!"
      },
      {
        img: "https://images.unsplash.com/photo-1629603819085-aaca50d00443?w=600&auto=format&fit=crop&q=60",
        title: "Drone Controller",
        desc: "Drone Controller, mobil cihaz üzerinden dronunu kolayca kontrol etmeni sağlar. Bluetooth ile eşleşme, yön kontrolü, hız ayarı ve acil durdurma özellikleri sunar."
      },
      {
        img: "https://plus.unsplash.com/premium_photo-1723914053035-ceee99f45912?q=80&w=1160&auto=format&fit=crop",
        title: "Resistor Cutting",
        desc: "Argema Teknoloji’de stajımda, mobil uygulama ile kontrol edilen ve Bluetooth ile komut gönderilen Arduino destekli otomatik direnç kesme makinası geliştirdim."
      },
      
    ].map(({ img, title, desc }, i) => (
      <SwiperSlide
        key={i}
        style={{
          filter: i === activeIndex ? 'none' : 'blur(3px)',
          transition: 'filter 0.3s ease',
        }}
      >
        <div className="project-card">
          <div className="project-image">
            <img src={img} alt={`Proje ${i + 1}`} />
          </div>
          <div className="project-content">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>



      {/* -------------------------------------------Experience Section ---------------------------------------------------------------------*/}


      <section id="experience" className="myexp-section">
        <div className="myexp-container">
          <motion.div
            className="myexp-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="myexp-header">
              <h2>Deneyimlerim</h2>
            </div>

            <div className="myexp-timeline">
              {/* Argema Teknoloji Yazılım Stajı */}
              <div className="myexp-timeline-item">
                <div className="myexp-content">
                  <h4>Makine Öğrenmesi ve Gömülü Sistem Stajyeri</h4>
                  <p className="myexp-company">Argema Teknoloji - Yazılım Stajı</p>
                  <p>
                    Argema Teknoloji’de makine öğrenmesi, gömülü sistemler ve yapay zeka alanlarında
                    çalıştım. Yolov8 ve Python kullanarak görüntü işleme ve veri analizi projeleri geliştirdim.
                    Fish detection modeli üzerinde kart kullanarak model eğitimi ve optimizasyon yaptım.
                    Ayrıca sensör verilerinin analizi, model eğitimi ve gömülü donanım optimizasyonu konularında
                    projeler yürüttüm. Gerçek dünya problemlerine yönelik çözümler üreterek üretim sürecine katkı sağladım.
                  </p>
                  <p>
                    “Resistor Cutting” isimli makine için Flutter ve Dart ile mobil uygulama geliştirdim.
                    Bu uygulama, istenilen direnç miktarına göre makinenin otomatik kesim yapmasını sağlıyor.
                  </p>
                </div>
              </div>

              {/* Argema Teknoloji Donanım Stajı */}
              <div className="myexp-timeline-item">
                <div className="myexp-content">
                  <h4>Donanım Stajyeri</h4>
                  <p className="myexp-company">Argema Teknoloji - Donanım Stajı</p>
                  <p>
                    “Resistor Cutting” adlı makineyi detaylı şekilde geliştirdim. Makine,
                    direnç şeritlerini istenen ölçü ve miktarda otomatik olarak kesebiliyor.
                    Step motorlar ve Arduino kullanılarak kontrol edilen makine,
                    Bluetooth üzerinden mobil uygulamadan aldığı komutlarla çalışıyor.
                    Bu sayede üretim hattında insan müdahalesi minimuma indirilip
                    yüksek hassasiyetle kesim işlemi gerçekleştirilmekte.
                  </p>
                </div>
              </div>

              {/* Oyun ve Uygulama Akademisi */}
              <div className="myexp-timeline-item">
                <div className="myexp-content">
                  <h4>Bursiyer & Proje Geliştirici</h4>
                  <p className="myexp-company">Oyun ve Uygulama Akademisi</p>
                  <p>
                    1 yıl süren eğitim programında farklı yazılım metodolojileri, takım yönetimi,
                    proje geliştirme ve kullanıcı deneyimi konularında kapsamlı eğitimler aldım.
                    Ayrıca proje yöneticiliği sertifikası kazandım ve sprint planlama süreçlerine aktif olarak katıldım.
                  </p>
                  <p>
                    Eğitim sürecinde “CodeMania” adlı takım tabanlı mobil oyun projesi üzerinde çalıştım.
                    Bu projede takım içi iletişim, görev dağılımı ve sürüm yönetimi gibi
                    proje yönetimi becerilerimi geliştirdim.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <motion.div
            className="education-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="education-header">
              <h2>{t.education}</h2>
              <button className="download-btn">
                <Download size={16} />
                {t.downloadResume}
              </button>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2021 - 2025</div>
                <div className="timeline-content">
                  <h4>Süleyman Demirel Üniversitesi</h4>
                  <p>Bilgisayar Mühendisliği</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">2020 - 2021</div>
                <div className="timeline-content">
                  <h4>Akdeniz Üniversitesi</h4>
                  <p>Makine Mühendisliği </p></div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">2016 - 2020</div>
                <div className="timeline-content">
                  <h4>Tuzla Anadolu Lisesi</h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <motion.div
            className="testimonials-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="testimonials-header">
              <h2>{t.creativeDedicated}</h2>
            </div>

            <div className="testimonials-grid">
              <div className="testimonial-card">
                <p>"Kod yazmayı, yeni şeyler öğrenmeyi asla bırakmayan, tam bir işine tutkuyla bağlı genç mühendistir.
                  "</p>
                <div className="testimonial-author">
                  <h4>Zehra Gültekin</h4>
                  <span> Mobil Yazılım Geliştirici</span>
                </div>
              </div>

              <div className="testimonial-card">
                <p>"Projeleri sadece yönetmekle kalmaz, ekibin enerjisini yükseltir, zorluklarda çözüm bulur.
                  Sakin, güvenilir ve her zaman işleri yoluna koyan biri."</p>
                <div className="testimonial-author">
                  <h4>İclal Çetin</h4>
                  <span>Web Geliştirici</span>
                </div>
              </div>

              <div className="testimonial-card">
                <p>"İkbal ile bitirme projemizde birlikte çalıştık. Karşılaştığımız zorlukları beraber çözdük ve iş birliği içinde süreci yürüttük.
                  Takım olarak birbirimizi tamamladık .
                  Onunla çalışmak keyifliydi, beraber iyi bir ekip olduk."

                </p>
                <div className="testimonial-author">
                  <h4>Ethem Sabah</h4>
                  <span>Gömülü Sistem Geliştirici</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="contact-info">
              <h2>{t.contactTitle}</h2>
              <p>{t.contactDescription}</p>

              <div className="contact-details">
                <div className="contact-item">
                  <MapPin size={20} />
                  <span>İstanbul, Türkiye</span>
                </div>
                <div className="contact-item">
                  <Phone size={20} />
                  <span>+90 (545) 552-39-29</span>
                </div>
                <div className="contact-item">
                  <Mail size={20} />
                  <span>muhammet.ikbal.sagdic@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h3>{t.letsGrabCoffee}</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder={t.yourName} />
                </div>
                <div className="form-group">
                  <input type="email" placeholder={t.yourEmail} />
                </div>
                <div className="form-group">
                  <textarea placeholder={t.yourMessage} rows="5"></textarea>
                </div>
                <button type="submit" className="contact-btn">
                  {t.contactMe}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-nav">
              <button onClick={() => scrollToSection('home')}>{t.home}</button>
              <button onClick={() => scrollToSection('about')}>{t.about}</button>
              <button onClick={() => scrollToSection('projects')}>{t.projects}</button>
              <button onClick={() => scrollToSection('contact')}>{t.contact}</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
