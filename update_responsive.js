const fs = require('fs');
let css = fs.readFileSync('responsive.css', 'utf8');

const oldTimelineMobile = `
  .dhoni-timeline {
    grid-template-columns: 24px 1fr;
    padding: 0 1rem 3rem;
  }
  .dhoni-timeline::before {
    left: 12px;
  }
  .dhoni-timeline__era-label {
    text-align: left;
    margin-left: 2rem;
  }
  .dhoni-timeline__item--left, .dhoni-timeline__item--right {
    grid-column: 1 / 3;
    justify-content: flex-start;
    padding-left: 40px;
    padding-right: 0;
    transform: translateX(30px);
  }
  .dhoni-timeline__item--left .dhoni-timeline__dot,
  .dhoni-timeline__item--right .dhoni-timeline__dot {
    left: 4px;
    right: auto;
  }`;

const newTimelineMobile = `
  .dhoni-timeline {
    flex-direction: column;
    padding: 0 1rem 3rem;
    gap: 3rem;
  }
  .dhoni-timeline::before {
    left: 16px;
  }
  .dhoni-timeline__era-label {
    align-self: flex-start;
    margin-left: 2rem;
  }
  .dhoni-timeline__item {
    flex-direction: column !important;
    align-items: flex-start;
    transform: translateY(30px);
  }
  .dhoni-timeline__content-wrapper {
    width: 100% !important;
    padding: 0 0 0 40px !important;
    justify-content: flex-start !important;
  }
  .dhoni-timeline__time {
    width: 100% !important;
    padding: 0 0 0.5rem 40px !important;
    text-align: left !important;
    font-size: 2.2rem;
    opacity: 0.3;
  }
  .dhoni-timeline__item:hover .dhoni-timeline__time {
    transform: none;
  }
  .dhoni-timeline__dot {
    left: 16px !important;
    top: 40px !important;
    width: 18px;
    height: 18px;
  }`;

if (css.includes('.dhoni-timeline {') && css.includes('grid-template-columns: 24px 1fr;')) {
    // Attempt string replacement
    // using regex to match the old block more reliably
    const regex = /\.dhoni-timeline\s*\{\s*grid-template-columns[^]*?right:\s*auto;\s*\}/m;
    css = css.replace(regex, newTimelineMobile);
    fs.writeFileSync('responsive.css', css);
    console.log('responsive.css updated successfully.');
} else {
    console.log('Could not find the block to replace.');
}
