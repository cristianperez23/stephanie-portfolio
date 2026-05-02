"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import stephanieProfile from "../../stephanie_profile.png";
import rockyProfile from "../../rocky_profile.png";

const profile = {
  email: "stephaniemariapinos@gmail.com",
  linkedin: "https://www.linkedin.com/in/stephanie-maria-pinos/",
};

const highlights = [
  {
    title: "Foundations",
    items: [
      "B.A. in Public Relations & Social Media",
      "Fashion PR",
      "Luxury Brand Communications",
      "Brand Storytelling",
      "Strategic Thinking"
    ],
    icon: "flower",
  },
  {
    title: "Skills",
    items: [
      "Sample Trafficking",
      "Press Logistics",
      "Showroom Operations",
      "Merchandising",
      "Media Relations",
      "Event Support",
      "Press Release Writing",
      "Influencer Research",
      "Social Media Analytics"
    ],
    icon: "sparkle",
  },
  {
    title: "Tools",
    items: [
      "Launchmetrics",
      "Photoshop",
      "Microsoft Suite",
      "Adobe Premiere Pro",
      "Canva",
      "Social Media Platforms",
      "Keyhole",
      "Influencity"
    ],
    icon: "heart",
  },
];

const internshipDetails = {
  company: "Purple PR",
  role: "Fashion Showroom Intern",
  location: "New York City",
  clients: [
    "DSQUARED2",
    "Willy Chavarria",
    "David Koma",
    "Canali",
    "Golden Goose",
    "Ferrari",
    "MCM"
  ],
  responsibilities: [
    "Maintained, organized, and updated sample inventory of a 25+ client showroom",
    "Assisted the Showroom Manager with logistics projects, including sample returns, RTVs, and the setup and breakdown of Fall 2025 Press Day",
    "Supported PR account executives and the VIP Department with sample send-outs",
    "Communicated effectively to ensure accurate and timely sample information across teams",
    "Managed the tracking of press samples for PR opportunities using Launch Metrics (Fashion GPS)",
    "Assisted in onboarding and training new interns, ensuring a seamless transition into showroom operations",
    "Maintained the showroom floor, ensuring displays were merchandised and racks replenished to uphold brand presentation standards"
  ]
};

const projects = [
  {
    title: "PURPLE PR — Showroom Intern Project",
    category: "Internship Experience",
    description:
      "A seasonal intern project documenting showroom internship experience, Blumarine's creative direction, a merchandised rack, and a conceptual press day with mood board and budget breakdown.",
    label: "Featured",
    link: "https://canva.link/vuvh14y5qlzbczh",
    embedUrl: "https://www.canva.com/design/DAGcJB1fsy0/su6merGUjjB7vIYf_AGoJQ/view?embed",
    image: "/sp_port-imgs/SHOWROOM INTERN PROJCT- 2025.png",
  },
  {
    title: "Influencer Research & Analysis",
    category: "Social Media Strategy",
    description:
      "An analysis of two fashion influencers evaluating engagement rates, audience demographics, and brand alignment using Keyhole and Influencity, resulting in strategic brand partnership recommendations focused on campaign ROI.",
    label: "Research",
    link: "https://canva.link/916u10jco3dt8ql",
    embedUrl: "https://www.canva.com/design/DAF_3upZT8E/XGjQGXBBuXphDPQWilaDtA/view?embed",
    image: "/sp_port-imgs/the INFLUENCERS.png",
  },
  {
    title: "Stephanie Maria — Brand & IMC Campaign",
    category: "Brand Development",
    description:
      "An original luxury accessories brand built from concept to campaign including full brand identity, audience segmentation, press release, print ads, and a promotional event.",
    label: "The Maria Bag",
    link: "https://canva.link/k5h3nesmiwgefyt",
    embedUrl: "https://www.canva.com/design/DAGZL55eAq8/FzBGnqwDVsKCTNSO8ywSOg/view?embed",
    image: "/sp_port-imgs/Stephanie Maria Portfolio.png",
  },
  {
    title: "Dior x Rosalía — Lady Dior PR Campaign",
    category: "PR Campaign",
    description:
      "A PR campaign analysis built around an existing Dior x Rosalía collaboration, including a campaign breakdown and deliverables such as an original press release, corporate backgrounder, and media pitch developed to showcase strategic PR thinking and luxury brand storytelling.",
    label: "Campaign Analysis",
    link: "https://canva.link/3tg1p5g3oeqimgh",
    embedUrl: "https://www.canva.com/design/DAGY3vXoPKU/pMlzYssgN0LSYtUjZVw5qg/view?embed",
    image: "/sp_port-imgs/Final Project Dior X Rosalia Campagin .png",
  },
  {
    title: "Office of Greek Life — PR Campaign",
    category: "Social Strategy",
    description:
      "A full PR campaign for Montclair State University's Office of Greek Life, delivering primary research, a press release, and a social media strategy that generated 10,000+ impressions.",
    label: "Group Project",
    link: "https://canva.link/3nu8b8s3wmrdpvb",
    embedUrl: "https://www.canva.com/design/DAHHWOWWfG4/qdYP928Ne4A4mi554kWpag/view?embed",
    image: "/sp_port-imgs/Office of Greek Life Final Presentation.png",
  },
];

// Icon Components
function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="highlight-icon">
      <path d="M12 2.5l1.65 5.85L19.5 10l-5.85 1.65L12 17.5l-1.65-5.85L4.5 10l5.85-1.65L12 2.5z" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="collaboration-icon">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 8l9 6 9-6" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="highlight-icon">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function FlowerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="highlight-icon">
      <path d="M12 8.2c.9-1.7 1.9-3.1 3.7-3.1 1.8 0 3.2 1.5 3.2 3.2 0 1.8-1.4 2.8-3.1 3.7 1.7.9 3.1 1.9 3.1 3.7 0 1.8-1.5 3.2-3.2 3.2-1.8 0-2.8-1.4-3.7-3.1-.9 1.7-1.9 3.1-3.7 3.1-1.8 0-3.2-1.5-3.2-3.2 0-1.8 1.4-2.8 3.1-3.7-1.7-.9-3.1-1.9-3.1-3.7 0-1.8 1.5-3.2 3.2-3.2 1.8 0 2.8 1.4 3.7 3.1z" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProjectIndex, setModalProjectIndex] = useState(0);

  // Carousel navigation
  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProjectIndex(index);
  };

  // Get adjacent indices for preview cards
  const getPrevIndex = () => (currentProjectIndex - 1 + projects.length) % projects.length;
  const getNextIndex = () => (currentProjectIndex + 1) % projects.length;

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      setShowScrollTop(window.scrollY > 400);
      
      // Trigger fade-in animations on scroll
      const fadeElements = document.querySelectorAll('.fade-up');
      fadeElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Body scroll lock when mobile menu or modal is open
  useEffect(() => {
    if (mobileMenuOpen || modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, modalOpen]);

  // Close mobile menu or modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (modalOpen) {
          setModalOpen(false);
        } else if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen, modalOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const openModal = (index: number) => {
    setModalProjectIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextModalProject = () => {
    setModalProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevModalProject = () => {
    setModalProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const refreshAndScrollToTop = () => {
    window.location.href = '/';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mzdydwyy', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="boutique-container">
      {/* Background Elements */}
      <div className="bg-gradient-orb orb-1" />
      <div className="bg-gradient-orb orb-2" />
      <div className="bg-gradient-orb orb-3" />
      <div className="paper-texture" />

      {/* Header */}
      <header className={`boutique-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-inner">
          <div className="header-content">
            <div className="header-left">
              <div className="header-season">Spring/Summer 2026</div>
            </div>

            <button className="brand-logo" onClick={refreshAndScrollToTop} aria-label="Go to home">
              <div className="brand-name">Stephanie Pinos</div>
            </button>

            <div className="header-right">
              <nav className="nav-links">
                <a href="#about" className="nav-link">My Story</a>
                <a href="#experience" className="nav-link">Experience</a>
                <a href="#collection" className="nav-link">Collection</a>
                <a href="#contact" className="nav-link">Contact</a>
              </nav>

              <button
                className={`menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu}>
        <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <div className="mobile-menu-brand">Stephanie Pinos</div>
            <button
              className="mobile-menu-close"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="mobile-menu-links">
            <a href="#about" className="mobile-menu-link" onClick={closeMobileMenu}>
              <span className="mobile-menu-link-number">01</span>
              <span className="mobile-menu-link-text">My Story</span>
            </a>
            <a href="#experience" className="mobile-menu-link" onClick={closeMobileMenu}>
              <span className="mobile-menu-link-number">02</span>
              <span className="mobile-menu-link-text">Experience</span>
            </a>
            <a href="#collection" className="mobile-menu-link" onClick={closeMobileMenu}>
              <span className="mobile-menu-link-number">03</span>
              <span className="mobile-menu-link-text">Collection</span>
            </a>
            <a href="#contact" className="mobile-menu-link" onClick={closeMobileMenu}>
              <span className="mobile-menu-link-number">04</span>
              <span className="mobile-menu-link-text">Contact</span>
            </a>
          </div>

          <div className="mobile-menu-footer">
            <div className="mobile-menu-season">Spring/Summer 2026</div>
            <div className="mobile-menu-social">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mobile-menu-social-link"
                aria-label="LinkedIn Profile"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content fade-up">
            <div className="hero-greeting">Welcome to my world.</div>
            <h1 className="hero-title">
              Public Relations rooted in storytelling, strategy, <span className="accent">and cultural relevance.</span>
            </h1>
            <p className="hero-description">A collection of moments, experiences, and the story of Stephanie Pinos.</p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                aria-label="LinkedIn Profile"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="icon-linkedin">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper fade-up delay-2">
            <div className="hero-image-frame">
              <Image
                src={stephanieProfile}
                alt="Stephanie Pinos"
                className="hero-image"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="section-header fade-up">
            <h2 className="section-title">
              My Story
              <span className="script">crafted with intention</span>
            </h2>
          </div>

          <div className="story-grid">
            <div className="story-card fade-up delay-1">
              <div className="story-section">
                <h3 className="story-subheading">Background</h3>
                <p className="story-text">Stephanie Pinos is a Public Relations graduate focused on luxury fashion, beauty, and brand storytelling.</p>
              </div>
              
              <div className="story-section">
                <h3 className="story-subheading">Approach</h3>
                <p className="story-text">After transitioning into Public Relations during her junior year, she quickly immersed herself in the industry, securing a showroom internship and developing strategic campaign projects that sharpened her execution skills and industry awareness. She understands how to build narratives that resonate across audiences. She's eager to contribute to brands that are building something meaningful, where strategy and storytelling work hand in hand.</p>
              </div>
              
              <div className="story-section">
                <h3 className="story-subheading">Experience</h3>
                <p className="story-text">Her work centers on brand positioning, ambassador partnerships, and how storytelling shapes perception and cultural impact. With experience at PURPLE PR supporting sample management and showroom operations across 25+ luxury brands, she's developed both strategic instincts and operational precision.</p>
              </div>
            </div>

            <div className="story-highlights">
              {highlights.map((highlight, index) => (
                <div key={highlight.title} className={`highlight-card fade-up delay-${index + 2}`}>
                  <div className="highlight-header">
                    {highlight.icon === "flower" && <FlowerIcon />}
                    {highlight.icon === "sparkle" && <SparkleIcon />}
                    {highlight.icon === "heart" && <HeartIcon />}
                    <h3 className="highlight-title">{highlight.title}</h3>
                  </div>
                  <div className="highlight-badges">
                    {highlight.items.map((item) => (
                      <span key={item} className="highlight-badge">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section section-compact">
          <div className="section-header fade-up">
            <h2 className="section-title">
              Experience
              <span className="script">moments that shaped my craft</span>
            </h2>
          </div>

          <div className="experience-editorial fade-up delay-1">
            {/* Header with Company Info */}
            <div className="experience-header-compact">
              <div className="header-main">
                <h3 className="company-name">{internshipDetails.company}</h3>
                <div className="role-location">
                  <span className="role-name">{internshipDetails.role}</span>
                  <span className="location-dot">•</span>
                  <span className="location-name">{internshipDetails.location}</span>
                </div>
              </div>
            </div>

            {/* Stacked Layout */}
            <div className="experience-content-stacked">
              {/* Clients Section */}
              <div className="clients-section">
                <h4 className="column-title">Featured Clients</h4>
                <div className="clients-list">
                  {internshipDetails.clients.map((client) => (
                    <span key={client} className="client-badge">{client}</span>
                  ))}
                </div>
              </div>

              {/* Key Contributions Section */}
              <div className="highlights-section">
                <h4 className="column-title">Key Contributions</h4>
                <div className="highlights-list">
                  {internshipDetails.responsibilities.map((responsibility, index) => (
                    <div key={index} className="highlight-item">
                      <span className="highlight-bullet">✦</span>
                      <span className="highlight-text">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collection Section - Carousel */}
        <section id="collection" className="section collection-section-compact">
          <div className="section-header fade-up">
            <h2 className="section-title">
              The Collection
              <span className="script">a curated portfolio</span>
            </h2>
          </div>

          <div className="collection-carousel-wrapper fade-up delay-1">
            <div className="collection-carousel">
              {/* Carousel Track with Preview Cards */}
              <div className="carousel-track-preview">
                {/* Previous Card (Blurred) */}
                <article
                  className="project-card-preview prev"
                  onClick={prevProject}
                >
                  <div className="project-image">
                    <Image
                      src={projects[getPrevIndex()].image}
                      alt={projects[getPrevIndex()].title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{projects[getPrevIndex()].title}</h3>
                    <p className="project-description">{projects[getPrevIndex()].description}</p>
                  </div>
                </article>

                {/* Current Card (Active) */}
                <article
                  className="project-card-preview active"
                  key={currentProjectIndex}
                >
                  <div className="project-image" onClick={() => openModal(currentProjectIndex)}>
                    <Image
                      src={projects[currentProjectIndex].image}
                      alt={projects[currentProjectIndex].title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'contain' }}
                      priority
                    />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{projects[currentProjectIndex].title}</h3>
                    <p className="project-description">{projects[currentProjectIndex].description}</p>
                    <button
                      onClick={() => openModal(currentProjectIndex)}
                      className="btn btn-secondary"
                    >
                      View Piece
                    </button>
                  </div>
                </article>

                {/* Next Card (Blurred) */}
                <article
                  className="project-card-preview next"
                  onClick={nextProject}
                >
                  <div className="project-image">
                    <Image
                      src={projects[getNextIndex()].image}
                      alt={projects[getNextIndex()].title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{projects[getNextIndex()].title}</h3>
                    <p className="project-description">{projects[getNextIndex()].description}</p>
                  </div>
                </article>
              </div>

              {/* Navigation Arrows */}
              <button
                className="carousel-nav carousel-nav-prev"
                onClick={prevProject}
                aria-label="Previous project"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="carousel-nav carousel-nav-next"
                onClick={nextProject}
                aria-label="Next project"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              {/* Indicators */}
              <div className="carousel-indicators">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-indicator ${index === currentProjectIndex ? 'active' : ''}`}
                    onClick={() => goToProject(index)}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="section-header fade-up">
            <h2 className="section-title">
              Let's Connect
              <span className="script">"Keep your heels, head, and standards high." - Coco Chanel</span>
            </h2>
          </div>

          <div className="contact-wrapper fade-up delay-1">
            <form
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="_subject"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  rows={5}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-submit"
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send'}
              </button>

              {formStatus === 'success' && (
                <div className="form-message form-success">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="form-message form-error">
                  ✗ Something went wrong. Please try again.
                </div>
              )}
            </form>

            <div className="contact-info">
              <h3 className="contact-info-title">I'd love to hear from you!</h3>
              <p className="contact-info-text">
                If you have any inquiries or just want to say hi, please use the contact form!
              </p>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <EnvelopeIcon />
                  <a href={`mailto:${profile.email}`} className="contact-detail-link">
                    {profile.email}
                  </a>
                </div>

                <div className="contact-detail-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="contact-detail-icon">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span className="contact-detail-link">+1 (609) 787-0905</span>
                </div>
                
                <div className="contact-social-icons">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-icon-link" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <Image
                    src={rockyProfile}
                    alt="Rocky"
                    width={250}
                    height={250}
                    className="contact-rocky-image"
                    priority={false}
                  />
                </div>
              </div>
              
              <p className="contact-location-text">
                Public relations professional based in the NYC Metropolitan area.
                Excited for opportunities to bring brands to life through strategic PR 
                and compelling storytelling.
              </p>
              
              <div className="contact-logo-wrapper fade-up delay-2">
                <Image
                  src="/SP_logo5.png"
                  alt="Stephanie Pinos Logo"
                  width={300}
                  height={300}
                  className="contact-logo"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-top ${showScrollTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>

      {/* Project Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-title-section">
                <h3 className="modal-title">{projects[modalProjectIndex].title}</h3>
                <span className="modal-category">{projects[modalProjectIndex].category}</span>
              </div>
              <button
                className="modal-close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content - Canva Embed */}
            <div className="modal-content">
              <div className="modal-slide-wrapper">
                <iframe
                  src={projects[modalProjectIndex].embedUrl}
                  allowFullScreen
                  allow="fullscreen"
                  className="modal-iframe"
                  title={projects[modalProjectIndex].title}
                  loading="lazy"
                />
              </div>
              <div className="modal-footer-link">
                <a
                  href={projects[modalProjectIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-external-link"
                >
                  <span>Open in Canva</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Modal Navigation */}
            <div className="modal-navigation">
              <button
                className="modal-nav-btn modal-nav-prev"
                onClick={prevModalProject}
                aria-label="Previous project"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                <span>Previous</span>
              </button>
              
              <div className="modal-indicators">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`modal-indicator ${index === modalProjectIndex ? 'active' : ''}`}
                    onClick={() => setModalProjectIndex(index)}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>

              <button
                className="modal-nav-btn modal-nav-next"
                onClick={nextModalProject}
                aria-label="Next project"
              >
                <span>Next</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
