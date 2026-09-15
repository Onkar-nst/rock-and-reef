import { useEffect, useRef, useState } from 'react'

/**
 * Horizontal scroll-snap track with a dot per child underneath. Sizing of the
 * children is left to the caller's CSS; this only owns scrolling and the dots.
 *
 * The active dot follows the child nearest the track's left edge, so it stays
 * right whether the user swipes, drags, or taps a dot.
 */
export default function SnapRow({ className = '', children, ariaLabel, counter = false }) {
  const track = useRef(null)
  const [active, setActive] = useState(0)
  const count = Array.isArray(children) ? children.filter(Boolean).length : 1

  useEffect(() => {
    const el = track.current
    if (!el) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const kids = [...el.children]
        const left = el.scrollLeft
        let best = 0
        let dist = Infinity
        kids.forEach((k, i) => {
          const d = Math.abs(k.offsetLeft - left)
          if (d < dist) {
            dist = d
            best = i
          }
        })
        setActive(best)
      })
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      el.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  const goTo = (i) => {
    const el = track.current
    const kid = el?.children[i]
    if (!kid) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollTo({ left: kid.offsetLeft, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <div className={`snap ${className}`}>
      <div className="snap-track" ref={track} aria-label={ariaLabel}>
        {children}
      </div>
      {count > 1 && counter && (
        <div className="snap-counter" aria-live="polite">
          <span className="snap-counter-n">{String(active + 1).padStart(2, '0')}</span>
          <span className="snap-counter-bar" aria-hidden="true">
            <span style={{ width: `${((active + 1) / count) * 100}%` }} />
          </span>
          <span className="snap-counter-t">{String(count).padStart(2, '0')}</span>
        </div>
      )}
      {count > 1 && !counter && (
        <div className="snap-dots" role="tablist" aria-label="Slides">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Slide ${i + 1} of ${count}`}
              className={i === active ? 'on' : ''}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
