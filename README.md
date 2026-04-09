# Rock Paper Scissors Game

A simple Rock Paper Scissors game built with **TypeScript**, **HTML**, and **CSS**. Click Rock/Paper/Scissors to play against the computer; the score updates instantly.

## Demo
Open `index.html` in your browser (or serve the folder with any static server) and start playing.

## Features
- Play against the computer (random choice each round)
- Live score tracking for you vs. computer
- Instant result message (win/lose/draw)
- Clean UI with clickable choices

## Tech Stack
- TypeScript (source in `src/app.ts`)
- Compiled JavaScript output in `dist/`
- HTML/CSS frontend

## Project Structure
- `index.html` — UI markup
- `style.css` — styling
- `src/app.ts` — game logic
- `dist/app.js` — compiled script loaded by the page
- `images/` — icons used for choices

## Getting Started (Local)
### 1) Clone
```bash
git clone https://github.com/prashantmore45/Rock-Paper-Scissors-Game.git
cd Rock-Paper-Scissors-Game
```

### 2) Install dependencies
```bash
npm install
```

### 3) Compile TypeScript
This project uses TypeScript and outputs to `dist/`. If you have a build script, run it; otherwise compile directly:
```bash
npx tsc
```

### 4) Run
Open `index.html` in your browser (make sure `dist/app.js` exists).

## How to Play
1. Click **Rock**, **Paper**, or **Scissors**.
2. The computer picks randomly.
3. Rules:
   - Rock beats Scissors
   - Scissors beats Paper
   - Paper beats Rock

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

## License
ISC (see `package.json`).
