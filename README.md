# automatic-guacamole

A fun, real-time **text transformation tool** that converts English text into a stylized format using Japanese-inspired characters. This lightweight, browser-based utility creates playful visual transformations for creative writing, social media posts, or just having fun with text.

## 🎯 Features

- **Real-time Conversion**: As you type, the tool instantly transforms English characters to Japanese-style equivalents
- **Simple & Intuitive UI**: Clean, minimalist interface that's easy to use for anyone
- **Customizable Mapping**: Character mappings can be easily modified or extended in the JavaScript file
- **Browser-Based**: No installation required, works in any modern browser
- **Instant Feedback**: Visual transformation happens in real-time as you type

## 🛠️ Tech Stack

- **Language:** JavaScript (Vanilla)
- **Format:** Single HTML file with embedded script
- **Pattern:** Client-side text transformation
- **Use Case:** Fun utility, creative writing tool, social media content

## 📁 Project Structure

```
automatic-guacamole/
├── index.html                    # Main HTML file with UI
├── script.js                     # Character mapping and conversion logic
├── README.md                     # This file
└── package.json                  # npm dependencies (if any)
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Node.js (if using npm for development)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd automatic-guacamole

# Open index.html in a browser
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### Usage

1. **Open the HTML file** in your browser
2. **Type English text** in the input area
3. **Watch the transformation** happen instantly in the output area

## 📖 Demo

![automatic-guacamole Demo](https://github.com/user-attachments/assets/a487b59e-0053-4235-be96-8d85bee95295)

**Example:**
- **Input:** "Hello World"
- **Output:** "卄乇ㄥㄥㄖ 山ㄖ尺ㄥ刀"

The conversion map (from `script.js`):

```javascript
const conversionMap = {
    'A': '卂', 'B': '乃', 'C': '匚', 'D': '刀', 'E': '乇',
    'F': '下', 'G': '厶', 'H': '卄', 'I': '丨', 'J': 'ﾌ',
    'K': 'Ҝ', 'L': 'ㄥ', 'M': '爪', 'N': '几', 'O': 'ㄖ',
    'P': '卩', 'Q': 'Ɋ', 'R': '尺', 'S': '丂', 'T': 'ㄒ',
    'U': '凵', 'V': 'リ', 'W': '山', 'X': '乂', 'Y': 'ㄚ',
    'Z': '乙',
    // ... and lowercase variants
    'a': '卂', 'b': '乃', 'c': '匚', 'd': '刀', 'e': '乇',
    // ... and so on
};
```

## 🎨 Customization

### Character Mapping

Edit `script.js` to customize the character conversion:

```javascript
const conversionMap = {
    'A': '卂', 'B': '乃', 'C': '匚', // Uppercase
    'a': '卂', 'b': '乃', 'c': '匚', // Lowercase
    // Add or modify characters as needed
};
```

**Tips:**
- Map each English character to a visually similar Japanese/hiragana/katakana character
- Consider readability vs. visual similarity
- Test with common words to ensure the output is still recognizable

### UI Styling

If the HTML file includes CSS, you can customize:
- Input/output field styling
- Button styles
- Color schemes
- Animations

## 🧪 Testing

### Manual Testing

1. **Open in browser** and type various text
2. **Test edge cases:**
   - Special characters (numbers, punctuation, symbols)
   - Mixed case (uppercase/lowercase)
   - Long text (performance check)
   - Empty input

### Automated Testing

```bash
# If you have a test suite
npm test
```

## 📦 Deployment

### Option 1: Static Hosting

```bash
# Upload to any static hosting
# GitHub Pages
# Netlify
# Vercel
# Cloudflare Pages
```

### Option 2: Share as File

Simply share the `index.html` file (with `script.js` bundled or as a separate file).

## 🧪 Future Work

- Add more character mapping options (different "styles")
- Add audio export (speak the transformed text)
- Add copy-to-clipboard functionality
- Add keyboard shortcuts for quick actions
- Add preset themes (anime, gaming, tech, etc.)
- Add batch conversion for files
- Add regex-based transformations
- Add language detection
- Add mobile-responsive design improvements

## 📖 Use Cases

- **Creative Writing:** Add stylistic flair to stories
- **Social Media:** Fun posts for Twitter/Instagram/TikTok
- **Gaming:** Create anime/gaming-themed usernames
- **Presentations:** Add visual interest to slides
- **Learning:** Practice Japanese character recognition

## 🎯 Resume Value

**Showcase this project to demonstrate:**
- Creative front-end development
- Fun, user-friendly UX
- JavaScript fundamentals
- Real-time DOM manipulation
- Creative problem-solving

**Good for:**
- Frontend developer roles
- Creative developer positions
- Full-stack roles (as a portfolio piece)
- Junior/mid-level roles

## 📄 License

MIT
