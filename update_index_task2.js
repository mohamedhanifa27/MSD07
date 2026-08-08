const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html);

// Add progress line to timeline
if ($('#timelineProgress').length === 0) {
    $('.dhoni-timeline').prepend('<div class="dhoni-timeline__progress" id="timelineProgress"></div>');
}

// Append JavaScript logic if not already present
let scriptContent = $('script').html();
if (!scriptContent.includes('timelineProgress')) {
    const jsToAdd = `
      // Timeline scroll progress
      const timeline = document.querySelector('.dhoni-timeline');
      const timelineProgress = document.getElementById('timelineProgress');
      
      if (timeline && timelineProgress) {
        window.addEventListener('scroll', () => {
          const rect = timeline.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Start filling when the top of timeline reaches the middle of the screen
          const start = rect.top - (windowHeight / 2);
          const totalHeight = rect.height;
          
          let progress = (Math.abs(Math.min(0, start)) / totalHeight) * 100;
          progress = Math.max(0, Math.min(100, progress)); // Clamp between 0 and 100
          
          timelineProgress.style.height = progress + '%';
        });
      }
    `;
    
    // We insert the logic right before the end of DOMContentLoaded callback
    scriptContent = scriptContent.replace('});', jsToAdd + '\n    });');
    $('script').html(scriptContent);
}

fs.writeFileSync('index.html', $.html());
console.log('index.html updated successfully with JS and progress line.');
