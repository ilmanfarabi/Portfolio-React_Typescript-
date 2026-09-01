import { useEffect, useState, FC } from 'react'
import heroImage from '../Image/hero_sec.jpg'
import './App.css'

interface Project {
  title: string
  category: string
  description: string
  language: string
  repo: string
  demo: string | null
}

interface ContactDetail {
  label: string
  value: string
  href: string
  icon: string
}

interface SkillGroup {
  title: string
  items: string[]
}

interface Stat {
  value: string
  label: string
}

interface ContactIconProps {
  type: string
}

const featuredProjects: Project[] = [
  {
    title: 'ECOMMERCE',
    category: 'PHP storefront',
    description:
      'An e-commerce system with customer, admin, cart, checkout, and product management flows.',
    language: 'PHP',
    repo: 'https://github.com/ilmanfarabi/ECOMMERCE',
    demo: null,
  },
  {
    title: 'Food-Order',
    category: 'Restaurant ordering site',
    description:
      'A food ordering web app with categories, search, and order-related pages built in PHP.',
    language: 'PHP',
    repo: 'https://github.com/ilmanfarabi/Food-Order',
    demo: null,
  },
  {
    title: 'Football-World-Cup-2022',
    category: 'Tournament landing page',
    description:
      'A World Cup themed static site with HTML and CSS focused on presentation and layout.',
    language: 'HTML / CSS',
    repo: 'https://github.com/ilmanfarabi/Football-World-Cup-2022',
    demo: 'https://ilmanfarabi.github.io/Football-World-Cup-2022/',
  },
  {
    title: 'Leader-Board',
    category: 'Leaderboard layout',
    description:
      'A clean HTML and CSS leaderboard project with responsive presentation and simple visual hierarchy.',
    language: 'HTML / CSS',
    repo: 'https://github.com/ilmanfarabi/Leader-Board',
    demo: 'https://ilmanfarabi.github.io/Leader-Board/',
  },
  {
    title: 'My-Portfolio',
    category: 'Personal portfolio',
    description:
      'An earlier portfolio site showing experience, footer sections, and animated presentation blocks.',
    language: 'HTML / CSS',
    repo: 'https://github.com/ilmanfarabi/My-Portfolio',
    demo: 'https://ilmanfarabi.github.io/My-Portfolio/',
  },
  {
    title: 'Running-Car',
    category: 'CSS animation project',
    description:
      'A CSS-driven animated car scene with a lightweight HTML structure and motion-focused styling.',
    language: 'CSS / HTML',
    repo: 'https://github.com/ilmanfarabi/Running-Car',
    demo: 'https://ilmanfarabi.github.io/Running-Car/',
  },
]

const capabilities: string[] = [
  'Responsive React interfaces',
  'Reusable component systems',
  'Accessible navigation and states',
  'Fast-loading single-page sites',
]

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'React'],
  },
  {
    title: 'Programming',
    items: ['C', 'C++', 'Java', 'Python', 'PHP'],
  },
  {
    title: 'Data and Tools',
    items: ['MySQL', 'JSON', 'XML', 'Git', 'Figma', 'AutoCAD'],
  },
]

const stats: Stat[] = [
  { value: '5+', label: 'Years building UI systems' },
  { value: '20+', label: 'Shipped product pages' },
  { value: '98', label: 'Lighthouse-ready mindset' },
]

const process: string[] = [
  'Discover the goal, audience, and visual direction.',
  'Design the page hierarchy before adding motion or detail.',
  'Build reusable sections, then tune spacing and polish.',
]

const contactDetails: ContactDetail[] = [
  {
    label: 'Email',
    value: 'ilmanfarabi@gmail.com',
    href: 'mailto:ilmanfarabi@gmail.com',
    icon: 'email',
  },
  {
    label: 'Phone',
    value: '01853823669',
    href: 'tel:+8801853823669',
    icon: 'phone',
  },
  {
    label: 'WhatsApp',
    value: '01853823669',
    href: 'https://wa.me/8801853823669',
    icon: 'whatsapp',
  },
]

const ContactIcon: FC<ContactIconProps> = ({ type }) => {
  if (type === 'phone') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#10b981" d="M6.6 2.9c.5-.5 1.2-.7 1.8-.5l2.4.7c.7.2 1.1.7 1.2 1.4l.4 2.4c.1.6-.1 1.2-.5 1.6l-1.3 1.3c.9 1.8 2.3 3.2 4.1 4.1l1.3-1.3c.4-.4 1-.6 1.6-.5l2.4.4c.7.1 1.2.5 1.4 1.2l.7 2.4c.2.7 0 1.3-.5 1.8l-1.7 1.7c-.8.8-2 1.1-3.1.8-3.4-1-6.5-2.8-9-5.3-2.5-2.5-4.3-5.6-5.3-9-.3-1.1 0-2.3.8-3.1L6.6 2.9z" />
      </svg>
    )
  }

  if (type === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  }

  if (type === 'whatsapp') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#25D366" d="M17.6915026,13.4744748 C17.4788064,13.3836464 16.3430139,12.8915502 16.1272231,12.8174044 C15.9114322,12.7462962 15.7515722,12.7121513 15.5894123,12.9383464 C15.4272524,13.1644379 14.9946707,13.688499 14.8474308,13.8505788 C14.7001909,14.0126587 14.5529510,14.0347457 14.3402548,13.9449495 C14.1275585,13.8531225 13.5153899,13.6460212 12.7750893,13.0028467 C12.2197811,12.5057316 11.8642459,11.8849077 11.7170060,11.6587962 C11.5697661,11.4326839 11.7040394,11.2873898 11.8191261,11.1975933 C11.9252204,11.1186963 12.0567607,10.9823887 12.1670544,10.8310503 C12.2773482,10.6797119 12.3194071,10.5644425 12.4424197,10.4014627 C12.5654323,10.2384828 12.5232734,10.0871444 12.4556166,9.9953174 C12.3879598,9.9024589 12.0342968,9.1284249 11.8471107,8.6963635 C11.6685048,8.2837441 11.4851158,8.3479825 11.3432396,8.3479825 C11.2060539,8.3479825 11.0461939,8.3479825 10.8863339,8.3479825 C10.7264739,8.3479825 10.4629125,8.4127318 10.2471216,8.6348533 C10.0313308,8.8589602 9.47133942,9.3520164 9.47133942,10.1270103 C9.47133942,10.9010623 10.2629335,11.6409625 10.3732272,11.8050145 C10.4845209,11.9690665 11.8594625,14.3560097 13.9314461,15.2448384 C14.3491323,15.4227871 14.6662941,15.5185988 14.8989722,15.5809869 C15.3219883,15.6892055 15.7147054,15.6648011 16.0151426,15.6009048 C16.3503342,15.5267589 17.0375026,15.1437277 17.2234791,14.7115664 C17.4074223,14.2794050 17.4074223,13.916447 17.3407656,13.8126135 C17.2741088,13.7087799 17.1140488,13.6169529 16.9013526,13.5051539" />
      </svg>
    )
  }

  if (type === 'email') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#EA4335" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M4 5.5h16c.6 0 1 .4 1 1v11c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-11c0-.6.4-1 1-1zm0 2.1V17h16V7.6l-8 5-8-5zm1.1-1.1L12 11l6.9-4.5H5.1z" />
    </svg>
  )
}

type Theme = 'light' | 'dark'

const App: FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="page-shell">
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#home" onClick={handleNavClick}>
          <span className="brand-mark">P</span>
          <span>A.B.M. Ilman Farabi</span>
        </a>

        <div className="topbar-actions">
          <button
            className="mobile-menu-toggle"
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-navigation"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="hamburger-icon" aria-hidden="true">
              {isMobileMenuOpen ? '✕' : '☰'}
            </span>
          </button>

          <div className={`nav-wrapper ${isMobileMenuOpen ? 'is-open' : ''}`}>
            <nav className="nav" id="primary-navigation" aria-label="Primary">
              <a href="#about" onClick={handleNavClick}>
                About
              </a>
              <a href="#skills" onClick={handleNavClick}>
                Skills
              </a>
              <a href="#work" onClick={handleNavClick}>
                Work
              </a>
              <a href="#process" onClick={handleNavClick}>
                Process
              </a>
              <a href="#contact" onClick={handleNavClick}>
                Contact
              </a>
            </nav>

            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy reveal">
            <p className="eyebrow">Welcome To</p>
            <h1>Ilman Farabi World!</h1>
            <p className="lede">
              <strong>World class-professional web developer</strong>
            </p>
            <p>
              Hello! I'm A.B.M. Ilman Farabi a Computer Science and Engineering (CSE) student at East West University and a passionate web developer. My academic background has equipped me with a solid foundation in computer science principles, and my practical experiences have honed my skills in both frontend and backend web development.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View work
              </a>
              <a className="button button-secondary" href="#contact">
                Contact me
              </a>
            </div>

            <dl className="stats-grid">
              {stats.map((item) => (
                <div className="stat-card" key={item.label}>
                  <dt>{item.value}</dt>
                  <dd>{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="hero-panel reveal delay-1" aria-label="Profile summary">
            <div className="hero-image-shell">
              <img
                className="hero-image"
                src={heroImage}
                alt="Portfolio hero illustration preview"
              />
              <div className="hero-badge hero-badge-top">Available for freelance</div>
              <div className="hero-badge hero-badge-bottom">React + UI Design</div>
            </div>

            <div className="profile-card">
              <h2>React developer focused on modern, polished interfaces.</h2>
              <p>
                I help turn ideas into focused, high-quality web experiences that
                are easy to maintain and pleasant to use.
              </p>

              <div className="profile-meta">
                <span>Frontend</span>
                <span>UI systems</span>
                <span>Accessibility</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="section about-grid" id="about">
          <div className="section-heading reveal">
            <p className="eyebrow">About</p>
            <h2>Simple structure, strong typography, and thoughtful detail.</h2>
          </div>

          <div className="feature-card reveal delay-1">
            <p>
              This portfolio starter gives you a clean foundation for your name,
              links, and projects. It already includes a homepage structure that
              works well for a developer, designer, or freelancer portfolio.
            </p>
            <ul className="bullet-list">
              {capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading reveal">
            <p className="eyebrow">Skills</p>
            <h2>Your full technical stack, grouped for a clean portfolio display.</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card reveal delay-1" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-heading reveal">
            <h2 className="eyebrow">GitHub projects</h2>
           
          </div>

          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <article className="project-card reveal" key={project.title}>
                <div className="project-copy">
                  <span className="project-index">0{index + 1}</span>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <span className="project-language">{project.language}</span>
                  <p>{project.description}</p>
                  <div className="project-links">
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      GitHub repo
                    </a>
                    {project.demo ? (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        Live demo
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-grid" id="process">
          <div className="section-heading reveal">
            <p className="eyebrow">Process</p>
            <h2>A clean workflow from idea to launch.</h2>
          </div>

          <div className="timeline reveal delay-1">
            {process.map((step, index) => (
              <div className="timeline-item" key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact-card reveal" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>A.B.M. Ilman Farabi</h2>
            <p>
              Reach out for freelance work, collaboration, or to discuss your next
              React project.
            </p>
            <div className="contact-cta-row">
              <a className="button button-primary" href="https://mail.google.com/mail/?view=cm&fs=1&to=ilmanfarabi@gmail.com" target="_blank" rel="noreferrer">
                Contact me
              </a>
              <a className="button button-secondary" href="tel:+8801853823669">
                Call me
              </a>
              <a className="button button-secondary" href="https://www.facebook.com/brakeless.Tamim" target="_blank" rel="noreferrer" title="Facebook">
                <ContactIcon type="facebook" />
              </a>
            </div>
          </div>

          <div className="contact-details">
            <div className="contact-links">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  className="contact-link"
                  href={item.href}
                  target={item.label === 'Facebook' || item.label === 'WhatsApp' ? '_blank' : undefined}
                  rel={item.label === 'Facebook' || item.label === 'WhatsApp' ? 'noreferrer' : undefined}
                >
                  <span className="contact-link-icon" aria-hidden="true">
                    <ContactIcon type={item.icon} />
                  </span>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
