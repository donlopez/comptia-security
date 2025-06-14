# 🛡️ CompTIA Security+ Practice Test

This is a React-based interactive quiz application that simulates the CompTIA Security+ exam experience. It randomly selects 30 questions from a pool of over 500 and provides instant feedback, score tracking, and motivational messages.

## Features

- ✅ 30 random questions per attempt
- 🎯 Immediate feedback with correct/incorrect highlighting
- 📈 Score display with percentage and emojis
- 🔁 Retake or quit options
- 🎨 Simple, responsive design

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Install

1. Clone the repo:
   ```bash
   git clone https://github.com/donlopez/comptia-security.git
   cd comptia-security
   
## 📁 Directory Structure

```bash
├── certification_test.py           # Python script for CLI-based quiz (non-React)
├── public
│   ├── index.html
│   └── images
│       ├── credit-card-mask.png
│       ├── incident-response-cycle.png
│       ├── ms17-010-vulnerability.png
│       └── vestibule.png
├── src
│   ├── App.js                      # Root React component
│   ├── index.js                   # Entry point for React DOM rendering
│   ├── components
│   │   └── Quiz.js                # Main quiz component
│   ├── styles
│   │   └── Quiz.css               # Styles for the quiz
│   ├── data
│   │   ├── all_questions.js       # JavaScript question pool
│   │   └── __pycache__            # Python bytecode cache (ignore)
│   └── utils
│       └── quiz_runner.js         # Handles quiz logic (used in Python/JS)
├── package.json
├── package-lock.json
├── webpack.config.js
├── .babelrc
├── .gitignore
└── README.md
```