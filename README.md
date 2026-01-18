# 🎯 Interactive UI - Vanilla JavaScript

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**Building interactive UI using pure JavaScript to strengthen DOM and event handling fundamentals.**

[Live Demo](#) • [Features](#-fitur-utama) • [Documentation](#-dokumentasi)

![GitHub stars](https://img.shields.io/github/stars/username/interactive-ui-js?style=social)
![GitHub forks](https://img.shields.io/github/forks/username/interactive-ui-js?style=social)

</div>

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/username/interactive-ui-js.git

# Masuk ke folder
cd interactive-ui-js

# Buka di browser atau jalankan local server
npx serve .
```

**Zero dependencies.** Langsung buka `index.html` di browser!

---

## ✨ Fitur Utama

<table>
<tr>
<td width="33%" align="center">

### 🌓 Dark Mode
Toggle light/dark theme dengan smooth transition & localStorage persistence

</td>
<td width="33%" align="center">

### 📦 Modal Popup
Interactive modal dengan keyboard support (ESC) & event bubbling handling

</td>
<td width="33%" align="center">

### 📜 Scroll Effect
Dynamic navbar yang berubah saat scroll dengan throttled listener

</td>
</tr>
</table>

---

## 🎯 Tujuan Project

Project ini dibuat untuk:

- ✅ **Memahami DOM manipulation** tanpa framework
- ✅ **Mengontrol UI state** secara manual
- ✅ **Event-driven programming** dengan pure JavaScript
- ✅ **Best practices** untuk vanilla JS development
- ✅ **Performance optimization** dengan throttling & debouncing

> **"Solid fundamentals > Framework hype"**

---

## 📁 Struktur Project

```
interactive-ui-js/
├── index.html              # HTML structure
├── style.css               # CSS with variables
├── script.js               # DOM manipulation logic
├── README.md               # Documentation
├── .gitignore              # Git ignore rules
├── LICENSE                 # MIT License
├── CONTRIBUTING.md         # Contribution guidelines
├── docs/
│   ├── CONCEPTS.md         # DOM & Event concepts
│   ├── PERFORMANCE.md      # Performance tips
│   └── EXAMPLES.md         # Code examples
└── assets/
    └── screenshot.png      # Project screenshot
```

---

## 💡 Konsep Fundamental

### 🔸 DOM Manipulation

```javascript
// Select elements
const button = document.querySelector('#myButton');

// Add event listener
button.addEventListener('click', handleClick);

// Manipulate classes
button.classList.toggle('active');
```

### 🔸 Event Bubbling

```javascript
// Event naik dari child ke parent
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        closeModal(); // Hanya jika click di overlay
    }
});
```

### 🔸 State Management

```javascript
// Manual state tracking
const state = {
    theme: 'light',
    isModalOpen: false
};

// Update state → Update DOM
function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', state.theme);
}
```

---

## 🎓 Yang Dipelajari

| Concept | Implementation |
|---------|----------------|
| **DOM Selection** | `querySelector`, `getElementById` |
| **Event Handling** | `addEventListener`, keyboard events |
| **Class Manipulation** | `classList.add/remove/toggle` |
| **State Persistence** | `localStorage` API |
| **Performance** | Event throttling & debouncing |
| **Accessibility** | ARIA labels, keyboard navigation |

---

## 🧠 Imperative vs Declarative

| Vanilla JS (Imperative) | React (Declarative) |
|-------------------------|---------------------|
| `element.classList.add('active')` | `className={isActive && 'active'}` |
| `element.textContent = text` | `<div>{text}</div>` |
| Manual state updates | `useState` auto re-render |
| Direct DOM manipulation | Virtual DOM diffing |

**Framework = Abstraction layer** di atas fundamental DOM!

---

## 🔧 Cara Menjalankan

### Option 1: Direct Open
```bash
# Double-click index.html di file explorer
```

### Option 2: Live Server (VS Code)
```bash
# Install extension "Live Server"
# Right-click index.html → Open with Live Server
```

### Option 3: NPX (No Install)
```bash
npx serve .
# Buka http://localhost:3000
```

### Option 4: Python
```bash
python -m http.server 8000
# Buka http://localhost:8000
```

---

## 🎨 Customization

### Ubah Theme Colors

Edit `style.css`:

```css
:root {
    --accent: #4f46e5;        /* Primary color */
    --accent-hover: #4338ca;  /* Hover state */
}
```

### Tambah Fitur Baru

Check [CONTRIBUTING.md](CONTRIBUTING.md) untuk guidelines.

**Ideas:**
- Form validation
- Tab component
- Accordion
- Carousel/slider
- Toast notifications
- Lazy loading images

---

## 📊 Performance Tips

### ✅ DOM Element Caching
```javascript
// ❌ Bad: Query setiap kali
document.getElementById('button').addEventListener('click', fn);

// ✅ Good: Cache element
const button = document.getElementById('button');
button.addEventListener('click', fn);
```

### ✅ Event Throttling
```javascript
// Batasi function calls untuk performa
let timeout;
window.addEventListener('scroll', () => {
    if (timeout) return;
    timeout = setTimeout(() => {
        handleScroll();
        timeout = null;
    }, 100);
});
```

---

## 🤝 Contributing

Contributions welcome! Silakan:

1. Fork repository
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

Lihat [CONTRIBUTING.md](CONTRIBUTING.md) untuk detail.

---

## 📚 Dokumentasi Lengkap

- 📖 [Konsep DOM & Event Loop](docs/CONCEPTS.md)
- ⚡ [Performance Optimization](docs/PERFORMANCE.md)
- 💻 [Code Examples](docs/EXAMPLES.md)

---

## 🌟 Kapan Pakai Vanilla JS?

### ✅ Cocok untuk:
- Landing page sederhana
- Widget/embed kecil
- Prototype cepat
- Learning fundamentals
- Zero-build projects

### ❌ Kurang cocok untuk:
- Complex state management (100+ states)
- Large team collaboration
- Need for component library
- Routing & ecosystem

---

## 🎯 Roadmap

- [x] Dark mode toggle
- [x] Modal popup
- [x] Navbar scroll effect
- [ ] Form validation
- [ ] Tab component
- [ ] Lazy loading images
- [ ] Toast notifications
- [ ] Accordion component

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@Yogiexc](https://github.com/Yogiexc)

---

## 🙏 Acknowledgments

- Inspired by modern web practices
- Built to understand DOM fundamentals
- Thanks to the open source community

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ using Pure JavaScript • Zero Dependencies

[⬆ Back to top](#-interactive-ui---vanilla-javascript)

</div>