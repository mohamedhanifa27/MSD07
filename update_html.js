const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html);

// Remove Love Life link in navbar
$('a[href="#love-life"]').parent().remove();

// Remove Love Life section
$('#love-life').remove();

// Modify timeline items
$('.dhoni-timeline__item').each((i, el) => {
    const $item = $(el);
    const $card = $item.find('.dhoni-timeline__card');
    const $yearSpan = $item.find('.dhoni-timeline__year');
    const yearText = $yearSpan.text();
    
    // Remove the year span from the card so it doesn't duplicate
    $yearSpan.remove();
    
    // Wrap the card
    $card.wrap('<div class="dhoni-timeline__content-wrapper"></div>');
    
    // Add the big time display
    $item.prepend(`<div class="dhoni-timeline__time">${yearText}</div>`);
});

fs.writeFileSync('index.html', $.html());
console.log('HTML updated successfully.');
