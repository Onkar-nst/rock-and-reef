import { useEffect } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Clock, FileText } from 'lucide-react'
import { company } from '../data/site'
import { navigate } from '../router'
import Contact from './Contact'

/**
 * Standalone contact page at /contact: image hero, the direct ways to reach us
 * as cards, the shared dark enquiry form, then the office on a map.
 */
export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact — Rock and Reef Dredging'
    return () => {
      document.title = 'Rock and Reef Dredging — Capital Dredging & Marine Works in India'
    }
  }, [])

  const ways = [
    {
      icon: Phone,
      k: 'Call us',
      v: company.phone,
      d: 'Monday to Saturday, 9am to 7pm IST. For urgent site matters, call any time.',
      href: company.phoneHref,
    },
    {
      icon: MessageCircle,
      k: 'WhatsApp',
      v: 'Message the team',
      d: 'Send drawings, survey files or a quick brief and we will pick it up the same day.',
      href: company.whatsapp,
      ext: true,
    },
    {
      icon: Mail,
      k: 'Email',
      v: company.email,
      d: 'Tender documents, RFQs and procurement queries. We reply within one working day.',
      href: `mailto:${company.email}`,
    },
    {
      icon: MapPin,
      k: 'Registered office',
      v: 'Nerul, Navi Mumbai',
      d: company.address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`,
      ext: true,
    },
  ]

  return (
    <main className="page cp">
      <section className="page-hero has-img">
        <img className="page-hero-img" src="/img/hero-still.jpg" alt="Rock and Reef dredger at work" />
        <div className="wrap">
          <p className="crumb">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/') }}>Home</a>
            <span aria-hidden="true">/</span> Contact
          </p>
          <h1 className="page-title">
            Let&apos;s talk about <em>your</em> seabed
          </h1>
          <p className="page-lede">
            Whether you are scoping a tender, comparing methods or need a spread mobilised at short
            notice, the fastest route is a direct conversation with the people who will run the job.
          </p>
        </div>
      </section>

      {/* Direct channels, one card each. */}
      <section className="cp-ways">
        <div className="wrap">
          <div className="cp-ways-grid">
            {ways.map(({ icon: Icon, k, v, d, href, ext }) => (
              <a
                className="cp-way"
                key={k}
                href={href}
                target={ext ? '_blank' : undefined}
                rel={ext ? 'noreferrer' : undefined}
              >
                <span className="cp-way-ic" aria-hidden="true"><Icon size={22} strokeWidth={1.8} /></span>
                <span className="cp-way-k">{k}</span>
                <span className="cp-way-v">{v}</span>
                <span className="cp-way-d">{d}</span>
              </a>
            ))}
          </div>

          <div className="cp-notes">
            <div className="cp-note">
              <Clock size={18} strokeWidth={1.8} aria-hidden="true" />
              <p>
                <b>Response time.</b>
                <span className="cp-note-full">
                  {' '}Tender and procurement enquiries are answered within one working day; a
                  method statement and indicative programme typically follow within a week of
                  receiving the scope.
                </span>
                <span className="cp-note-short">{' '}Enquiries answered within one working day.</span>
              </p>
            </div>
            <div className="cp-note">
              <FileText size={18} strokeWidth={1.8} aria-hidden="true" />
              <p>
                <b>What to send.</b>
                <span className="cp-note-full">
                  {' '}Design depths, estimated volumes, any geotechnical or bathymetric data,
                  site constraints and target dates. Partial information is fine; we will ask
                  for the rest.
                </span>
                <span className="cp-note-short">{' '}Depths, volumes, survey data and dates. Partial is fine.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The shared enquiry form, same as the home page. */}
      <Contact />

      {/* Office on the map. */}
      <section className="cp-map">
        <div className="wrap cp-map-grid">
          <div className="cp-map-copy">
            <p className="eyebrow">Visit us</p>
            <h2 className="rn-h2">Navi Mumbai office</h2>
            <p>{company.address}</p>
            <a
              className="rn-link"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="cp-map-frame">
            <iframe
              title="Rock and Reef office location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
