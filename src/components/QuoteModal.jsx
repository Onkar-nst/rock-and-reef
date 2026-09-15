import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { company, services, fleet } from '../data/site'

/**
 * Quick quote request, opened from the header button. Same mailto hand-off as
 * the full contact form, with a fleet picker so the enquiry lands with the
 * spread the client has in mind.
 */
export default function QuoteModal({ open, onClose }) {
  const [sent, setSent] = useState(false)
  const firstField = useRef(null)
  const vessels = Object.values(fleet)

  useEffect(() => {
    if (!open) return
    setSent(false)
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => firstField.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const onSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const data = Object.fromEntries(fd)
    const fleetPicked = fd.getAll('fleet')
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service: ${data.service}`,
      `Fleet required: ${fleetPicked.length ? fleetPicked.join(', ') : 'Not sure / advise'}`,
      '',
      data.message,
    ].join('\n')
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      `Quote request: ${data.service}`
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return createPortal(
    <div className="qm-backdrop" onClick={onClose}>
      <div
        className="qm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="qm-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="qm-close" type="button" aria-label="Close" onClick={onClose}>
          <X size={20} />
        </button>

        {sent ? (
          <div className="qm-ok">
            <p className="eyebrow">Request sent</p>
            <h2 id="qm-title">Thanks, we&apos;re on it</h2>
            <p>
              Your email client should have opened with the request ready to send. If it
              didn&apos;t, write to <a href={`mailto:${company.email}`}>{company.email}</a> or
              call <a href={company.phoneHref}>{company.phone}</a>.
            </p>
            <button className="btn btn-dark" type="button" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <div className="qm-head">
              <p className="eyebrow">Get a quote</p>
              <h2 id="qm-title">Tell us what you need</h2>
            </div>

            <div className="field">
              <label htmlFor="qm-name">Name</label>
              <input id="qm-name" name="name" required autoComplete="name" ref={firstField} />
            </div>
            <div className="two">
              <div className="field">
                <label htmlFor="qm-email">Email</label>
                <input id="qm-email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="qm-phone">Phone</label>
                <input id="qm-phone" name="phone" type="tel" autoComplete="tel" />
              </div>
            </div>

            <div className="field">
              <span className="qm-label">Fleet required</span>
              <div className="qm-fleet">
                {vessels.map((v) => (
                  <label className="qm-chip" key={v.id}>
                    <input type="checkbox" name="fleet" value={v.name} />
                    <span>{v.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="field">
              <label htmlFor="qm-service">Service required</label>
              <select id="qm-service" name="service" defaultValue={services[0].name}>
                {services.map((s) => (
                  <option key={s.id}>{s.name}</option>
                ))}
                <option>Other / not sure</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="qm-message">Site &amp; scope</label>
              <textarea id="qm-message" name="message" rows="2" placeholder="Location, volumes, depths, dates…" />
            </div>

            <div className="qm-foot">
              <button className="btn btn-primary" type="submit">Send request</button>
              <p className="qm-note">We reply within one working day.</p>
            </div>
          </form>
        )}
      </div>
    </div>,
    document.body
  )
}
