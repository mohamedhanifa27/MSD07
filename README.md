# MS Dhoni | THALA — The Legacy 🏏

A cinematic, highly interactive tribute website celebrating the career, achievements, and legacy of Mahendra Singh Dhoni. Built with a focus on premium aesthetics, dynamic animations, and fluid user experiences.

## 🌟 Features

* **Cinematic Dark Theme:** A visually striking UI with glowing accents, deep radial gradients, and modern typography (Space Grotesk, Manrope, Anton).
* **Fluid Custom Cursor:** A custom-built glowing orange cursor with a trailing, spring-physics ring that reacts when hovering over interactable elements.
* **3D Parallax Tilt Cards:** Interactive glassmorphism cards and bento grid cells that track mouse movements and subtly tilt on their X and Y axes for a tactile feel.
* **Synchronized Scroll Timeline:** A dynamic career timeline where a glowing orange line physically "draws" downwards as you scroll, instantly triggering node animations and card entrances exactly when the line touches them.
* **Background Score:** An embedded local audio player that automatically starts playing the iconic MS Dhoni theme (at 25% volume) upon the user's first interaction with the webpage, bypassing strict browser autoplay restrictions.
* **Fully Responsive:** Perfectly optimized for all devices, from ultra-wide desktop monitors to mobile phones.

## 🛠️ Technologies Used

* **HTML5:** Semantic structuring and accessible markup.
* **CSS3:** Advanced styling using CSS Variables, Flexbox, CSS Grid, Glassmorphism techniques, media queries, and complex keyframe animations (`animations.css`).
* **Vanilla JavaScript:** 
  * Custom cursor coordinate tracking (`requestAnimationFrame`)
  * 3D card tilt math calculations
  * Scroll event listeners and DOM coordinate calculations for the timeline sync.
* **FontAwesome:** For all UI iconography.
* **Google Fonts:** Custom font faces.

## 🚀 Getting Started

Since this project uses entirely static files with no build step required, getting it running locally is incredibly simple.

### Prerequisites

You just need a modern web browser (Google Chrome, Safari, Firefox, or Edge).

### Running Locally

1. Clone the repository to your local machine:
   \`\`\`bash
   git clone https://github.com/mohamedhanifa27/MSD07.git
   \`\`\`
2. Navigate into the project directory:
   \`\`\`bash
   cd MSD07
   \`\`\`
3. Open `index.html` directly in your web browser. 
   *(Alternatively, use a tool like VS Code's "Live Server" extension for hot reloading during development).*

### A Note on Background Audio & Video
* **Video:** The hero section uses a large background video file (`videoplayback.mp4`). Due to its size (~500MB), it is ignored via `.gitignore` and not hosted on this repository. You can place your own `videoplayback.mp4` file in the root directory to see it in action.
* **Audio:** The background score is triggered on the first page interaction (click or scroll) to comply with modern browser autoplay policies.

## 🎨 Design System

* **Primary Colors:** 
  * Flame Orange: \`#ff8a00\`
  * Deep Gold: \`#e52e71\`
* **Backgrounds:** Rich cinematic blacks with subtle radial glows.
* **Typography:** `Anton` (Display Headers), `Space Grotesk` (Subheaders), `Manrope` (Body).
