import { fleet, fleetDetail, projects, company } from '../data/site'
import { navigate } from '../router'
import { scrollToId } from '../hooks'

/**
 * Fleet register: seven vessel classes on a 4-up card grid, the eighth cell a
 * "not sure which vessel" card that hands the choice to us.
 */
export default function Fleet({ onOpenService }) {
  const vessels = Object.values(fleet)
  const deployments = (f) => projects.filter((p) => p.vessels.includes(f.id))
  const go = (e, path) => {
    e.preventDefault()
    navigate(path)
  }

  return (
    <section id="fleet" className="section-dark pad-y">
      <div className="wrap">
        <div className="fleet-head reveal">
          <div>
            <p className="eyebrow on-dark">Owned and operated</p>
            <h2 className="section-title">The Fleet</h2>
          </div>
          <p className="fleet-head-note">
            {vessels.length} vessel classes: dredgers, haulage, towage, crew and survey
          </p>
        </div>

        <ul className="fleet-grid reveal">
          {vessels.map((f) => {
            const used = deployments(f)
            const page = fleetDetail[f.id] ? `/fleet/${f.id}` : null
            const count = fleetDetail[f.id]?.vessels.length || 1
            return (
              <li className="fl-card" key={f.id}>
                <div className="fl-plate">
                  <img src={f.img} alt="" loading="lazy" decoding="async" />
                  <span className="fl-badge">{f.role}</span>
                </div>
                <div className="fl-body">
                  <h3>{f.name}</h3>
                  <p className="fl-spec">{f.spec}</p>
                  <div className="fl-meta">
                    <span className="fl-count">
                      <b>{count}</b> {count === 1 ? 'vessel' : 'vessels'}
                    </span>
                    {used.length > 0 && (
                      <button
                        className="fl-detail"
                        onClick={() => onOpenService(used[0].services[0], used[0].id)}
                        title={`Deployed on ${used[0].title}`}
                      >
                        Deployed at {used[0].place.split(',')[0]}
                      </button>
                    )}
                  </div>
                  {page ? (
                    <a className="btn btn-primary fl-cta" href={page} onClick={(e) => go(e, page)}>
                      View {count === 1 ? 'vessel' : `${count} vessels`} <Arrow />
                    </a>
                  ) : (
                    <a className="btn btn-primary fl-cta" href="#contact" onClick={(e) => { e.preventDefault(); scrollToId('contact') }}>
                      Enquire about this class <Arrow />
                    </a>
                  )}
                </div>
              </li>
            )
          })}

          {/* Eighth cell: hand the vessel choice to us. */}
          <li className="fl-card fl-ask">
            <div className="fl-body">
              <h3>Not sure which vessel?</h3>
              <p className="fl-spec">
                Tell us the depth, geology and site constraints and we will match the plant to the
                job, and say what it will take to mobilise.
              </p>
              <a className="btn btn-primary fl-cta" href="#contact" onClick={(e) => { e.preventDefault(); scrollToId('contact') }}>
                Talk to our team <Arrow />
              </a>
              <a className="fl-call" href={company.phoneHref}>or call {company.phone}</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

function Arrow() {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
      <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
