import { useCallback, useEffect, useState } from 'react'
import { media, mediaCategories } from '../data/media'
import { navigate } from '../router'

/**
 * The full media library: every photo and video from the previous site,
 * filterable by category. Tiles load 640px thumbnails; the lightbox opens the
 * original file.
 */
const PAGE = 36

// Paths carry WordPress filenames with spaces, dashes and other odd characters.
const url = (p) => encodeURI(p)

// "All" leads with our own fleet and site photography, insights and brand last.
const ORDER = mediaCategories.map((c) => c.id)
const ALL = [...media].sort((a, b) => ORDER.indexOf(a.cat) - ORDER.indexOf(b.cat))

const CATS = mediaCategories
  .map((c) => ({ ...c, count: media.filter((m) => m.cat === c.id).length }))
  .filter((c) => c.count > 0)

export default function GalleryPage() {
  const [filter, setFilter] = useState('all')
  const [shown, setShown] = useState(PAGE)
  const [open, setOpen] = useState(-1)

  const list = filter === 'all' ? ALL : media.filter((m) => m.cat === filter)
  const visible = list.slice(0, shown)

  const pick = (id) => {
    setFilter(id)
    setShown(PAGE)
  }

  return (
    <main className="page gl">
      <section className="page-hero has-img">
        <img className="page-hero-img" src="/img/Banner-Image.jpg" alt="" />
        <div className="wrap">
          <p className="crumb">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/') }}>Home</a>
            <span aria-hidden="true">/</span> Gallery
          </p>
          <h1 className="page-title">Gallery</h1>
          <p className="page-lede">
            The fleet, the sites and the people behind them: {media.length} photos and videos from
            our dredging, trenching and marine works.
          </p>
        </div>
      </section>

      <div className="pj-filters">
        <div className="wrap">
          <div className="pj-filter-row" role="tablist" aria-label="Filter gallery by category">
            <button role="tab" aria-selected={filter === 'all'} className={filter === 'all' ? 'on' : ''} onClick={() => pick('all')}>
              All <span className="gl-count">{media.length}</span>
            </button>
            {CATS.map((c) => (
              <button key={c.id} role="tab" aria-selected={filter === c.id} className={filter === c.id ? 'on' : ''} onClick={() => pick(c.id)}>
                {c.label} <span className="gl-count">{c.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="gl-body">
        <div className="wrap">
          <ul className="gl-grid">
            {visible.map((m, i) => (
              <li key={m.src}>
                <button className="gl-tile" onClick={() => setOpen(i)} aria-label={`Open ${m.title}`}>
                  <img
                    src={url(m.thumb || m.src)}
                    alt={m.alt || m.title}
                    width={m.w}
                    height={m.h}
                    loading="lazy"
                    decoding="async"
                  />
                  {m.type === 'video' && <span className="gl-play" aria-hidden="true" />}
                </button>
              </li>
            ))}
          </ul>
          {shown < list.length && (
            <div className="gl-more">
              <button className="btn btn-dark" onClick={() => setShown((n) => n + PAGE)}>
                Show more ({list.length - shown} left)
              </button>
            </div>
          )}
        </div>
      </section>

      {open >= 0 && <Lightbox items={list} index={open} onIndex={setOpen} onClose={() => setOpen(-1)} />}
    </main>
  )
}

function Lightbox({ items, index, onIndex, onClose }) {
  const m = items[index]
  const step = useCallback((d) => onIndex((index + d + items.length) % items.length), [index, items.length, onIndex])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose, step])

  return (
    <div className="gl-box" role="dialog" aria-modal="true" aria-label={m.title} onClick={onClose}>
      <figure onClick={(e) => e.stopPropagation()}>
        {m.type === 'video' ? (
          <video key={m.src} src={url(m.src)} poster={m.thumb && url(m.thumb)} controls autoPlay playsInline />
        ) : (
          <img key={m.src} src={url(m.src)} alt={m.alt || m.title} />
        )}
        <figcaption>
          <span>{m.alt || m.title}</span>
          <span className="gl-pos">{index + 1} / {items.length}</span>
        </figcaption>
      </figure>
      <button className="gl-nav gl-prev" onClick={(e) => { e.stopPropagation(); step(-1) }} aria-label="Previous">‹</button>
      <button className="gl-nav gl-next" onClick={(e) => { e.stopPropagation(); step(1) }} aria-label="Next">›</button>
      <button className="gl-close" onClick={onClose} aria-label="Close">×</button>
    </div>
  )
}
