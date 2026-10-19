import { Ship, Users, Box, Target, Waves, Phone, ArrowRight, Anchor, ShieldCheck, Compass, Activity } from 'lucide-react'
import { company } from '../data/site'

const team = [
  {
    name: 'Harsharan Singh Dharni',
    role: 'Managing Director',
    img: '/img/Harsharan-Singh-Dharni.jpg',
    bio: 'An experienced dredging expert with 30+ years of industry knowledge, successfully managing projects and introducing advanced equipment like the backhoe dredger in India.',
  },
  {
    name: 'Manish Shah',
    role: 'Director - Supply Chain',
    img: '/img/Manish-Shaha.png',
    bio: 'Comes from a family of marine entrepreneurs with over 50 years in the industry. Responsible for Supply Chain, having a strong vendor network in India.',
  },
  {
    name: 'Parminder Singh Dharni',
    role: 'Director - Operations',
    img: '/img/parminder.png',
    bio: 'Recognized in the dredging industry for completing challenging projects, he is the operational genius behind the company’s success, ensuring timely project completion and a strong track record.',
  },
  {
    name: 'Gurudayal Singh Dhanotra',
    role: 'Director - Engineering',
    img: '/img/Mr.-Gurudayal-Singh-Dhanotra.jpg',
    bio: 'The expert in shipbuilding has 30 years of experience managing projects constructing various marine vessels and dredging equipment, showcasing high expertise in the field.',
  },
]

export default function AboutPage() {
  return (
    <main className="ab-exact page">
      {/* ── 1. Hero Section ── */}
      <section className="ab-exact-hero">
        <div className="ab-exact-hero-bg">
          <img src="/img/Banner-Image.jpg" alt="Rock and Reef Dredger" />
          <div className="ab-exact-hero-scrim" />
        </div>

        <div className="wrap ab-exact-hero-grid">
          <div className="ab-exact-hero-copy">
            <span className="ab-exact-kicker">— ABOUT US</span>
            <h1 className="ab-exact-hero-title">
              ENABLING INDIA’S MARITIME GROWTH
            </h1>
            <p className="ab-exact-hero-subtitle">
              Through wider channels and a stronger tomorrow.
            </p>
            <p className="ab-exact-hero-lede">
              Rock and Reef Dredging & Marine Works is a leading dredging and marine infrastructure company in India,
              delivering reliable, innovative and sustainable solutions that support India’s growing maritime economy
              and coastal development.
            </p>
          </div>

          <div className="ab-exact-hero-slogan">
            <span>DREDGE</span>
            <span>DEVELOP</span>
            <span>STRENGTHEN</span>
            <span>FOR INDIA</span>
          </div>
        </div>

        {/* Hero Bottom Stats Bar */}
        <div className="ab-exact-stats-bar">
          <div className="wrap ab-exact-stats-grid">
            <div className="ab-exact-stat-item">
              <div className="ab-exact-stat-icon">
                <Ship size={28} strokeWidth={1.5} />
              </div>
              <div className="ab-exact-stat-body">
                <span className="ab-exact-stat-num">100+</span>
                <span className="ab-exact-stat-label">PROJECTS COMPLETED ACROSS INDIA</span>
              </div>
            </div>

            <div className="ab-exact-stat-item">
              <div className="ab-exact-stat-icon">
                <Users size={28} strokeWidth={1.5} />
              </div>
              <div className="ab-exact-stat-body">
                <span className="ab-exact-stat-num">30+</span>
                <span className="ab-exact-stat-label">YEARS OF INDUSTRY EXPERTISE</span>
              </div>
            </div>

            <div className="ab-exact-stat-item">
              <div className="ab-exact-stat-icon">
                <Box size={28} strokeWidth={1.5} />
              </div>
              <div className="ab-exact-stat-body">
                <span className="ab-exact-stat-num">25 MILLION+</span>
                <span className="ab-exact-stat-label">CUBIC METERS DREDGED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. About Our Company Section ── */}
      <section className="ab-exact-who">
        <div className="wrap ab-exact-who-grid">
          <div className="ab-exact-who-copy">
            <span className="ab-exact-kicker dark">— ABOUT OUR COMPANY</span>
            <h2 className="ab-exact-who-title">
              About Our Company
            </h2>
            <p className="ab-exact-who-p">
              Rock and Reef Dredging Pvt. Ltd. was established in 2006 to specialize in niche services like capital and maintenance dredging, deep dredging and desilting of dams, underwater trenching, rock blasting, and building breakwaters using heavy marine equipment. However, since its inception, the company has expanded beyond these activities such as other inland dredging and ship building. Rock and Reef&apos;s shipyard has the ability to build specialized vessels up to a length of 100 metres. Run by a group of seasoned professionals with over three decades of marine project experience, the company has earned a strong reputation in the market by successfully completing numerous projects.
            </p>
            <p className="ab-exact-who-p">
              Led by Mr. Harsharan Singh Dharni, the company is backed by a team of skilled professionals focused on delivering efficient and high-quality services at competitive prices. With a strong commitment to staying abreast of the latest technologies, the company is well-prepared to offer services in marine and port infrastructure. Its operations span across the Indian coastlines.
            </p>
            <a href="/services" className="ab-exact-btn-dark">
              OUR SERVICES &amp; FLEET <ArrowRight size={16} />
            </a>
          </div>

          <div className="ab-exact-who-media">
            <div className="ab-exact-who-img-wrap">
              <div className="ab-exact-img-accent" aria-hidden="true" />
              <img src="/img/fleet/rockstar.jpg" alt="Rockstar tug vessel - Rock and Reef Dredging" />
              <div className="ab-exact-who-overlay-bar">
                <div className="ab-exact-who-feature">
                  <Anchor size={20} />
                  <span>CAPITAL &amp; MAINTENANCE</span>
                </div>
                <div className="ab-exact-who-feature">
                  <Waves size={20} />
                  <span>DAMS &amp; TRENCHING</span>
                </div>
                <div className="ab-exact-who-feature">
                  <Compass size={20} />
                  <span>SHIPBUILDING UP TO 100M</span>
                </div>
                <div className="ab-exact-who-feature">
                  <ShieldCheck size={20} />
                  <span>PAN-INDIA COASTLINES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Mission & Vision Section ── */}
      <section className="ab-mv">
        <div className="wrap">
          <div className="ab-mv-badge">
            Mission &amp; Vision
          </div>

          <div className="ab-mv-grid">
            <div className="ab-mv-col">
              <p className="ab-mv-label">
                <Target size={18} strokeWidth={1.8} /> Our Mission
              </p>
              <p className="ab-mv-text">
                Our mission is to conquer the most challenging dredging and marine projects with precision and expertise. Founded on the belief that no task is too formidable, we specialize in capital dredging solutions that push the boundaries of innovation and excellence. We welcome challenging projects and are fully committed to our clients.
              </p>
            </div>
            <div className="ab-mv-col">
              <p className="ab-mv-label">
                <Compass size={18} strokeWidth={1.8} /> Our Vision
              </p>
              <p className="ab-mv-text">
                Our vision extends beyond excellence in capital dredging. We aspire to become a leading force in the marine infrastructure sector, diversifying our expertise to encompass a comprehensive range of services including offshore installations, coastal protection, and marine engineering. With a focus on vertical expansion and continuous innovation, we aim to establish ourselves as the go-to solution provider for all maritime development needs.
              </p>
            </div>
          </div>

          <div className="ab-mv-media">
            <img src="/img/mission-team.png" alt="Rock and Reef marine infrastructure team meeting" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ── 4. Team Section ── */}
      <section className="ab-exact-founders">
        <div className="wrap">
          <div className="ab-exact-founders-head">
            <span className="ab-exact-kicker-center">— LEADERSHIP —</span>
            <h2 className="ab-exact-team-title">Team</h2>
            <p className="ab-exact-founders-sub">
              Decades of specialized dredging, supply chain, operations, and marine shipbuilding expertise.
            </p>
          </div>

          <div className="ab-exact-team-grid">
            {team.map((f) => (
              <div className="ab-exact-team-card" key={f.name}>
                <div className="ab-exact-team-photo">
                  <img src={f.img} alt={f.name} loading="lazy" />
                </div>
                <div className="ab-exact-team-info">
                  <h3 className="ab-exact-team-name">{f.name}</h3>
                  <span className="ab-exact-team-role">{f.role}</span>
                  <p className="ab-exact-team-bio">{f.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Let's Work Together CTA ── */}
      <section className="ab-exact-cta">
        <div className="ab-exact-cta-bg">
          <img src="/img/deep-dredging-service.png" alt="Dredging pipe background" />
          <div className="ab-exact-cta-scrim" />
        </div>

        <div className="wrap ab-exact-cta-grid">
          <div className="ab-exact-cta-copy">
            <span className="ab-exact-kicker">— LET’S WORK TOGETHER</span>
            <h2 className="ab-exact-cta-title">
              LET’S BUILD A STRONGER TOMORROW
            </h2>
            <p className="ab-exact-cta-lede">
              From ports to coastlines, we partner with you to deliver innovative, sustainable dredging
              solutions for a stronger, more connected India.
            </p>
            <div className="ab-exact-cta-buttons">
              <a href="/#contact" className="ab-exact-btn-cyan">
                DISCUSS A PROJECT <ArrowRight size={16} />
              </a>
              <a href={company.phoneHref} className="ab-exact-btn-phone">
                <Phone size={16} /> +91 98202 45630
              </a>
            </div>
          </div>

          <div className="ab-exact-cta-slogan">
            <span>CLEANER WATERS</span>
            <span>SAFER PORTS</span>
            <span>STRONGER COMMUNITIES</span>
            <span>A BRIGHTER TOMORROW</span>
          </div>
        </div>
      </section>
    </main>
  )
}
