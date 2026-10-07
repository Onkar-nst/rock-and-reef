import { useState } from 'react'
import { fleet, fleetDetail, keyFigures, projects, company } from '../data/site'
import { navigate } from '../router'

const go = (path, hash) => (e) => {
  e.preventDefault()
  navigate(path, hash ? { hash } : undefined)
}

/**
 * Fleet pages read like a vessel register. /fleet/<class> introduces the class
 * and lists its vessels as cards; /fleet/<class>/<vessel> is one vessel's sheet:
 * photo, description, headline figures and the full particulars.
 */
export default function FleetPage({ id, vesselId }) {
  const cls = fleet[id]
  const detail = fleetDetail[id]
  if (!cls || !detail) return <NotFound what="vessel class" />

  if (vesselId) {
    const vessel = detail.vessels.find((v) => v.id === vesselId)
    if (!vessel) return <NotFound what="vessel" back={`/fleet/${id}`} backLabel={`Back to ${cls.name.toLowerCase()}`} />
    return <VesselPage cls={cls} detail={detail} v={vessel} />
  }

  return <ClassPage cls={cls} detail={detail} />
}

function ClassPage({ cls, detail }) {
  const count = detail.vessels.length
  return (
    <main className="page fp">
      <section className="page-hero">
        <div className="wrap">
          <p className="crumb">
            <a href="/" onClick={go('/')}>Home</a>
            <span aria-hidden="true">/</span>
            <a href="/#fleet" onClick={go('/', 'fleet')}>Fleet</a>
            <span aria-hidden="true">/</span> {cls.name}
          </p>
          <div className="fp-hero-grid">
            <div>
              <h1 className="page-title">{cls.name}</h1>
              <p className="page-lede">{cls.spec}</p>
              <p className="fp-hero-meta">
                <span>{cls.role}</span>
                <span>{count} {count === 1 ? 'vessel' : 'vessels'} on the register</span>
              </p>
            </div>
            <HeroImage photo={detail.hero} plate={cls.img} name={cls.name} />
          </div>
        </div>
      </section>

      <section className="fp-intro">
        <div className="wrap fp-intro-grid">
          <h2>{detail.headline}</h2>
          <div className="fp-intro-copy">
            {detail.intro.map((t) => <p key={t}>{t}</p>)}
          </div>
        </div>
      </section>

      <section className="fp-vessels" id="vessels">
        <div className="wrap">
          <div className="fv-list-head">
            <p className="eyebrow">On the register</p>
            <h2 className="section-title">Choose a vessel</h2>
          </div>
          <VesselGrid cls={cls} vessels={detail.vessels} />
        </div>
      </section>

      <Deployments classId={cls.id} />
      <ActFoot />
    </main>
  )
}

function VesselPage({ cls, detail, v }) {
  const figures = keyFigures(cls.id, v, 4)
  const others = detail.vessels.filter((o) => o.id !== v.id)
  const base = `/fleet/${cls.id}`

  return (
    <main className="page fp">
      <section className="page-hero">
        <div className="wrap">
          <p className="crumb">
            <a href="/" onClick={go('/')}>Home</a>
            <span aria-hidden="true">/</span>
            <a href="/#fleet" onClick={go('/', 'fleet')}>Fleet</a>
            <span aria-hidden="true">/</span>
            <a href={base} onClick={go(base)}>{cls.name}</a>
            <span aria-hidden="true">/</span> {v.name}
          </p>
          <div className="fp-hero-grid">
            <div>
              <p className="eyebrow">{v.type}</p>
              <h1 className="page-title">{v.name}</h1>
              <p className="fp-hero-meta">
                <span>{cls.name}</span>
                <span>{cls.role}</span>
              </p>
            </div>
            <HeroImage key={v.id} photo={v.img} plate={cls.img} name={`${v.name}, ${v.type}`} />
          </div>
        </div>
      </section>

      <section className="fv-detail">
        <div className="wrap fv-detail-grid">
          <div className="fv-overview">
            <h2>Overview</h2>
            {v.summary.map((t) => <p key={t}>{t}</p>)}
            <dl className="fp-headline">
              {figures.map((h) => (
                <div key={h.k}>
                  <dt>{h.k}</dt>
                  <dd>{h.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="fv-particulars">
            <table className="fv-specs">
              <caption>Particulars</caption>
              <tbody>
                {v.specs.map(([k, val]) => (
                  <tr key={k}>
                    <th scope="row">{k}</th>
                    <td>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {v.pdf && (
              <a className="fp-download" href={v.pdf} target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3v12M7 10l5 5 5-5M4 19h16" />
                </svg>
                Download specifications
                <span className="fp-download-type">PDF</span>
              </a>
            )}
          </div>
        </div>

        {(v.features || v.output) && (
          <div className="wrap fv-extra">
            {v.features && (
              <div className="fp-features">
                <h3>Other features</h3>
                <ul>
                  {v.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </div>
            )}
            {v.output && <PumpOutput output={v.output} />}
          </div>
        )}
      </section>

      {others.length > 0 && (
        <section className="fv-others">
          <div className="wrap">
            <div className="fv-list-head">
              <p className="eyebrow">{cls.name}</p>
              <h2 className="section-title">Other vessels in this class</h2>
            </div>
            <VesselGrid cls={cls} vessels={others} />
          </div>
        </section>
      )}

      <Deployments classId={cls.id} />
      <ActFoot />
    </main>
  )
}

/** Card per vessel; the whole card opens the vessel's page. */
function VesselGrid({ cls, vessels }) {
  return (
    <ul className="fv-grid">
      {vessels.map((v) => {
        const path = `/fleet/${cls.id}/${v.id}`
        return (
          <li key={v.id}>
            <a className="fv-card" href={path} onClick={go(path)}>
              <div className={v.img ? 'fv-photo' : 'fl-plate'}>
                <img src={v.img || cls.img} alt="" loading="lazy" decoding="async" />
              </div>
              <div className="fv-body">
                <p className="fv-type">{v.type}</p>
                <h3>{v.name}</h3>
                <dl className="fv-figs">
                  {keyFigures(cls.id, v, 3).map((h) => (
                    <div key={h.k}>
                      <dt>{h.k}</dt>
                      <dd>{h.v}</dd>
                    </div>
                  ))}
                </dl>
                <span className="fv-more">
                  View vessel
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
                    <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </div>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

function PumpOutput({ output }) {
  return (
    <div className="fp-output">
      <div className="fp-output-head">
        <h3>Pump output</h3>
        <p>{output.basis}</p>
      </div>
      <div className="fp-output-table-wrap">
        <table className="fp-output-table">
          <thead>
            <tr>
              <th>Soil type</th>
              <th>Decisive grain size</th>
              <th>In situ density</th>
              <th>Peak output</th>
              <th>Effective discharge length</th>
            </tr>
          </thead>
          <tbody>
            {output.soils.map((s) => (
              <tr key={s.key}>
                <th scope="row"><b>{s.key}</b> {s.type}</th>
                <td>{s.grain}</td>
                <td>{s.density}</td>
                <td>{s.peak}</td>
                <td>up to {s.reach}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="fp-output-note">{output.note}</p>
    </div>
  )
}

function Deployments({ classId }) {
  const deployments = projects.filter((p) => p.vessels.includes(classId))
  if (deployments.length === 0) return null
  return (
    <section className="fp-projects">
      <div className="wrap">
        <p className="eyebrow">Deployed on</p>
        <h2 className="section-title">Featured projects</h2>
        <ul className="fp-project-list">
          {deployments.map((p) => (
            <li key={p.id}>
              <a href={`/projects/${p.id}`} onClick={go(`/projects/${p.id}`)}>
                <span className="fp-project-title">{p.title}</span>
                <span className="fp-project-meta">{p.place}{p.year ? ` · ${p.year}` : ''}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ActFoot() {
  return (
    <section className="act-foot">
      <div className="wrap">
        <h2>Talk to us about your next project</h2>
        <p>
          Depth, deadline, geology, discharge distance: send what you have and we will come back
          with a method and an indicative programme.
        </p>
        <div className="act-foot-actions">
          <a className="btn btn-primary" href="/#contact" onClick={go('/', 'contact')}>Request a quote</a>
          <a className="btn btn-outline" href={company.phoneHref}>{company.phone}</a>
        </div>
      </div>
    </section>
  )
}

function NotFound({ what, back = '/#fleet', backLabel = 'Back to the fleet' }) {
  const onBack = back === '/#fleet' ? go('/', 'fleet') : go(back)
  return (
    <main className="page">
      <section className="page-hero">
        <div className="wrap">
          <p className="crumb">
            <a href="/" onClick={go('/')}>Home</a>
            <span aria-hidden="true">/</span>
            <a href="/#fleet" onClick={go('/', 'fleet')}>Fleet</a>
          </p>
          <h1 className="page-title">{what[0].toUpperCase() + what.slice(1)} not found</h1>
          <p className="page-lede">That link does not match a {what} on our register.</p>
          <a className="btn btn-dark" href={back} style={{ marginTop: 24 }} onClick={onBack}>
            {backLabel}
          </a>
        </div>
      </section>
    </main>
  )
}

/** Photo when one is published; otherwise the class silhouette plate. */
function HeroImage({ photo, plate, name }) {
  const [failed, setFailed] = useState(false)
  if (photo && !failed) {
    return (
      <figure className="fp-hero-photo">
        <img src={photo} alt={name} onError={() => setFailed(true)} decoding="async" />
      </figure>
    )
  }
  return (
    <span className="fp-hero-plate" aria-hidden="true">
      <img src={plate} alt="" />
    </span>
  )
}
