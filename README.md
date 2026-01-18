# Interactive UI - Vanilla JavaScript

**Building interactive UI using pure JavaScript to strengthen DOM and event handling fundamentals.**

## 🎯 Tujuan Project

Project ini dibuat untuk memahami cara kerja DOM tanpa framework, mengontrol UI state secara manual, dan membuktikan bahwa UI interaktif bisa dibuat tanpa React/Vue.

## 🚀 Fitur Utama

### 1. **Dark Mode Toggle**
- Switch light ↔ dark mode
- Manipulasi `classList` dan `setAttribute`
- State persistence dengan localStorage
- Smooth transition menggunakan CSS variables

### 2. **Modal Popup**
- Open & close modal via JavaScript
- Click overlay untuk close
- Keyboard support (ESC key)
- Event bubbling handling
- Body scroll prevention

### 3. **Navbar Scroll Effect**
- Navbar berubah style saat scroll
- Scroll event listener dengan throttling
- Smooth CSS transition
- Dynamic class manipulation

## 📁 Struktur Project

```
interactive-ui-js/
├── index.html      # Struktur HTML
├── style.css       # Styling dengan CSS variables
├── script.js       # Logic & DOM manipulation
└── README.md       # Dokumentasi
```

## 🔧 Cara Menjalankan

1. Clone repository:
```bash
git clone https://github.com/username/interactive-ui-js.git
cd interactive-ui-js
```

2. Buka `index.html` di browser (double-click atau):
```bash
# Dengan live server
npx serve .

# Atau dengan Python
python -m http.server 8000
```

3. Explore fitur-fiturnya!

## 💡 Konsep Fundamental

### DOM & Event Loop
DOM (Document Object Model) adalah representasi tree-based dari HTML. Browser membaca HTML, membuat DOM tree, lalu JavaScript bisa memanipulasi tree tersebut.

**Event Loop** memastikan event handling berjalan asynchronous tanpa blocking UI:
1. User click button
2. Event masuk ke queue
3. Event loop ambil event dari queue
4. Jalankan callback function
5. Update DOM
6. Browser re-render

### Event Bubbling
Event "bubble up" dari child ke parent:
```javascript
// Click di modal tidak close overlay
modal.addEventListener('click', (e) => {
    e.stopPropagation(); // Stop bubbling
});

// Click di overlay akan close modal
overlay.addEventListener('click', closeModal);
```

### State Management Manual
Tanpa framework, kita handle state sendiri:
```javascript
const state = {
    theme: 'light',
    isModalOpen: false
};

// Update state → update DOM
function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', state.theme);
}
```

## 🧠 DOM-First Mindset

### Kenapa Perlu Paham DOM?
Framework seperti React/Vue adalah **abstraksi** di atas DOM. Mereka tetap memanipulasi DOM di belakang layar. Paham DOM = paham cara kerja framework.

### Imperative vs Declarative

**Imperative (Vanilla JS)**:
```javascript
const button = document.createElement('button');
button.textContent = 'Click me';
button.addEventListener('click', handleClick);
document.body.appendChild(button);
```

**Declarative (React)**:
```jsx
<button onClick={handleClick}>Click me</button>
```

Framework menyembunyikan detail imperative, tapi dasar DOM-nya sama.

### Kapan Vanilla JS Lebih Masuk Akal?
- ✅ Landing page sederhana
- ✅ Widget kecil/embed
- ✅ Prototype cepat
- ✅ Performa critical (no bundle overhead)
- ✅ Belajar fundamental

### Kapan Framework Lebih Baik?
- ✅ Complex state management
- ✅ Banyak component reusable
- ✅ Team besar dengan convention
- ✅ Ekosistem tooling (routing, state, etc)

## 📊 Flow Interaksi UI

```
User Action (click, scroll, keypress)
        ↓
Event Listener Triggered
        ↓
Update JavaScript State
        ↓
DOM Manipulation (classList, style, etc)
        ↓
Browser Re-render
        ↓
User Sees Updated UI
```

## 🎓 Pembelajaran Kunci

1. **DOM Selection**: `querySelector`, `getElementById`, `getElementsByClassName`
2. **Event Handling**: `addEventListener`, event delegation, bubbling
3. **Class Manipulation**: `classList.add()`, `classList.remove()`, `classList.toggle()`
4. **State Persistence**: localStorage untuk simple state
5. **Performance**: Throttling scroll events, minimize reflows

## 🔗 Hubungan dengan Framework Modern

| Vanilla JS | React Equivalent |
|-----------|-----------------|
| `element.addEventListener('click', fn)` | `onClick={fn}` |
| `element.classList.toggle('active')` | `className={isActive ? 'active' : ''}` |
| `localStorage.setItem()` | `useState` + `useEffect` |
| Manual DOM updates | Virtual DOM diffing |

Framework = Developer Experience (DX) improvement di atas fundamental yang sama.

## 📚 Next Steps

Setelah paham project ini, explore:
- Event delegation untuk dynamic elements
- Custom events dengan `CustomEvent`
- Web Components (native component model)
- Virtual DOM implementation sederhana
- Build tool (Webpack/Vite) untuk bundling

## 🤝 Contributing

Contributions welcome! Project ini dibuat untuk belajar, jadi feel free untuk:
- Tambah fitur baru (form validation, tabs, accordion, etc)
- Improve accessibility (ARIA labels, focus management)
- Optimize performance
- Add more comments untuk clarity

## 📝 License

MIT License - Feel free to use untuk belajar dan portfolio!

---

**Built with ❤️ using pure JavaScript, HTML, and CSS**

*Proving that solid fundamentals > framework hype*