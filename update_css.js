const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const startIndex = css.indexOf('/* ==========================================================================\r\n   TIMELINE');
let footIndex = css.indexOf('/* ==========================================================================\r\n   FOOTER');

if (startIndex === -1 || footIndex === -1) {
    // Try without \r
    const start2 = css.indexOf('/* ==========================================================================\n   TIMELINE');
    const foot2 = css.indexOf('/* ==========================================================================\n   FOOTER');
    if (start2 !== -1 && foot2 !== -1) {
        css = css.slice(0, start2) + `/* ==========================================================================
   TIMELINE — vertical rebuild
   ========================================================================== */
.timeline-section { background: var(--bg-panel); }

.dhoni-timeline {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  position: relative;
}

.dhoni-timeline::before {
  content: "";
  position: absolute;
  top: 0; bottom: 0;
  left: 50%;
  width: 2px;
  transform: translateX(-50%);
  background: linear-gradient(to bottom, transparent, var(--orange), transparent);
  opacity: 0.5;
  z-index: 1;
}

.dhoni-timeline__era-label {
  align-self: center;
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--bg-black);
  background: var(--gradient-flame);
  padding: 0.6rem 1.5rem;
  border-radius: 100px;
  margin: 1rem 0;
  position: relative;
  z-index: 2;
  box-shadow: 0 10px 25px -5px rgba(255, 138, 0, 0.4);
}

.dhoni-timeline__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 2;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.dhoni-timeline__item.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.dhoni-timeline__item--left {
  flex-direction: row;
}

.dhoni-timeline__item--right {
  flex-direction: row-reverse;
}

.dhoni-timeline__content-wrapper {
  width: 50%;
  display: flex;
}

.dhoni-timeline__item--left .dhoni-timeline__content-wrapper {
  padding-right: 3rem;
  justify-content: flex-end;
}

.dhoni-timeline__item--right .dhoni-timeline__content-wrapper {
  padding-left: 3rem;
  justify-content: flex-start;
}

.dhoni-timeline__time {
  width: 50%;
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5rem);
  color: var(--white);
  line-height: 1;
  opacity: 0.15;
  transition: opacity 0.4s ease, color 0.4s ease, transform 0.4s ease;
}

.dhoni-timeline__item:hover .dhoni-timeline__time {
  opacity: 0.8;
  color: var(--orange);
  transform: scale(1.05);
}

.dhoni-timeline__item--left .dhoni-timeline__time {
  padding-left: 3rem;
  text-align: left;
  transform-origin: left center;
}

.dhoni-timeline__item--right .dhoni-timeline__time {
  padding-right: 3rem;
  text-align: right;
  transform-origin: right center;
}

.dhoni-timeline__dot {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  background: var(--bg-black);
  border: 4px solid var(--glass-border);
  border-radius: 50%;
  z-index: 3;
  transition: all 0.4s ease;
}

.dhoni-timeline__item:hover .dhoni-timeline__dot {
  border-color: var(--orange);
  background: var(--orange);
  box-shadow: 0 0 20px rgba(255, 138, 0, 0.6);
  transform: translate(-50%, -50%) scale(1.3);
}

.dhoni-timeline__card {
  width: 100%;
  max-width: 480px;
  background: var(--gradient-panel);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  padding: 0;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Ensure interactive card overrides work properly in flex context */
.dhoni-timeline__card.interactive-card {
  max-width: 100%;
}

` + css.slice(foot2);
    }
} else {
    css = css.slice(0, startIndex) + `/* ==========================================================================
   TIMELINE — vertical rebuild
   ========================================================================== */
.timeline-section { background: var(--bg-panel); }

.dhoni-timeline {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  position: relative;
}

.dhoni-timeline::before {
  content: "";
  position: absolute;
  top: 0; bottom: 0;
  left: 50%;
  width: 2px;
  transform: translateX(-50%);
  background: linear-gradient(to bottom, transparent, var(--orange), transparent);
  opacity: 0.5;
  z-index: 1;
}

.dhoni-timeline__era-label {
  align-self: center;
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--bg-black);
  background: var(--gradient-flame);
  padding: 0.6rem 1.5rem;
  border-radius: 100px;
  margin: 1rem 0;
  position: relative;
  z-index: 2;
  box-shadow: 0 10px 25px -5px rgba(255, 138, 0, 0.4);
}

.dhoni-timeline__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 2;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.dhoni-timeline__item.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.dhoni-timeline__item--left {
  flex-direction: row;
}

.dhoni-timeline__item--right {
  flex-direction: row-reverse;
}

.dhoni-timeline__content-wrapper {
  width: 50%;
  display: flex;
}

.dhoni-timeline__item--left .dhoni-timeline__content-wrapper {
  padding-right: 3rem;
  justify-content: flex-end;
}

.dhoni-timeline__item--right .dhoni-timeline__content-wrapper {
  padding-left: 3rem;
  justify-content: flex-start;
}

.dhoni-timeline__time {
  width: 50%;
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5rem);
  color: var(--white);
  line-height: 1;
  opacity: 0.15;
  transition: opacity 0.4s ease, color 0.4s ease, transform 0.4s ease;
}

.dhoni-timeline__item:hover .dhoni-timeline__time {
  opacity: 0.8;
  color: var(--orange);
  transform: scale(1.05);
}

.dhoni-timeline__item--left .dhoni-timeline__time {
  padding-left: 3rem;
  text-align: left;
  transform-origin: left center;
}

.dhoni-timeline__item--right .dhoni-timeline__time {
  padding-right: 3rem;
  text-align: right;
  transform-origin: right center;
}

.dhoni-timeline__dot {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  background: var(--bg-black);
  border: 4px solid var(--glass-border);
  border-radius: 50%;
  z-index: 3;
  transition: all 0.4s ease;
}

.dhoni-timeline__item:hover .dhoni-timeline__dot {
  border-color: var(--orange);
  background: var(--orange);
  box-shadow: 0 0 20px rgba(255, 138, 0, 0.6);
  transform: translate(-50%, -50%) scale(1.3);
}

.dhoni-timeline__card {
  width: 100%;
  max-width: 480px;
  background: var(--gradient-panel);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  padding: 0;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Ensure interactive card overrides work properly in flex context */
.dhoni-timeline__card.interactive-card {
  max-width: 100%;
}

` + css.slice(footIndex);
}

fs.writeFileSync('style.css', css);
console.log('CSS updated successfully.');
