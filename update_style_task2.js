const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

const bgVideoRegex = /\.bg-video-overlay\s*\{[^}]+\}/m;
css = css.replace(bgVideoRegex, `.bg-video-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 70% 20%, rgba(20, 13, 2, 0.5) 0%, rgba(5, 5, 5, 0.70) 55%);
  pointer-events: none;
}`);

const heroBgRegex = /\.hero\s*\{\s*background:[^}]+!important;\s*\}/m;
css = css.replace(heroBgRegex, `.hero {
  background: transparent !important;
}`);

const sectionsBgRegex = /\.about, \.stats, \.gallery, \.timeline-section\s*\{\s*background: [^}]+;\s*backdrop-filter: [^}]+;\s*-webkit-backdrop-filter: [^}]+;\s*\}/g;
css = css.replace(sectionsBgRegex, `.about, .stats, .gallery, .timeline-section {
  background: transparent;
}`);

const sectionsBg2Regex = /\.career, \.awards, \.quotes, \.footer\s*\{\s*background: [^}]+;\s*backdrop-filter: [^}]+;\s*-webkit-backdrop-filter: [^}]+;\s*\}/g;
css = css.replace(sectionsBg2Regex, `.career, .awards, .quotes, .footer {
  background: transparent;
}`);

const leftWrapper = `.dhoni-timeline__item--left .dhoni-timeline__content-wrapper {
  padding-right: 3rem;
  justify-content: flex-end;
}`;
css = css.replace(leftWrapper, `.dhoni-timeline__item--left .dhoni-timeline__content-wrapper {
  padding-right: 5rem;
  justify-content: flex-end;
}`);

const rightWrapper = `.dhoni-timeline__item--right .dhoni-timeline__content-wrapper {
  padding-left: 3rem;
  justify-content: flex-start;
}`;
css = css.replace(rightWrapper, `.dhoni-timeline__item--right .dhoni-timeline__content-wrapper {
  padding-left: 5rem;
  justify-content: flex-start;
}`);

const leftTime = `.dhoni-timeline__item--left .dhoni-timeline__time {
  padding-left: 3rem;
  text-align: left;
  transform-origin: left center;
}`;
css = css.replace(leftTime, `.dhoni-timeline__item--left .dhoni-timeline__time {
  padding-left: 5rem;
  text-align: left;
  transform-origin: left center;
}`);

const rightTime = `.dhoni-timeline__item--right .dhoni-timeline__time {
  padding-right: 3rem;
  text-align: right;
  transform-origin: right center;
}`;
css = css.replace(rightTime, `.dhoni-timeline__item--right .dhoni-timeline__time {
  padding-right: 5rem;
  text-align: right;
  transform-origin: right center;
}`);

css += `
.dhoni-timeline__progress {
  position: absolute;
  top: 0;
  left: 50%;
  width: 4px;
  height: 0%;
  transform: translateX(-50%);
  background: var(--gradient-flame);
  z-index: 2;
  box-shadow: 0 0 15px rgba(255, 138, 0, 0.6);
  border-radius: 4px;
  transition: height 0.1s ease-out;
}
`;

fs.writeFileSync('style.css', css);
console.log('style.css modified successfully!');
