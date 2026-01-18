# DOM & Event Concepts

## Apa itu DOM?

DOM (Document Object Model) adalah representasi tree-based dari HTML document. Browser membaca HTML dan membuat DOM tree yang bisa dimanipulasi dengan JavaScript.
```
document
└── html
├── head
│    └── title
└── body
├── nav
├── section
└── footer
```
## Event Loop

JavaScript adalah single-threaded, tapi bisa handle async operations melalui event loop:
Call Stack → Web APIs → Callback Queue → Event Loop → Call Stack

### Contoh:
```javascript
console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3');

// Output: 1, 3, 2
```

## Event Bubbling

Event naik dari child element ke parent element:
```html
<div class="parent" onclick="alert('parent')">
  <button onclick="alert('child')">Click</button>
</div>
```

Click button → alert('child') → alert('parent')

### Stop Bubbling:
```javascript
element.addEventListener('click', (e) => {
    e.stopPropagation();
});
```

## Event Capturing

Kebalikan dari bubbling, event turun dari parent ke child.
```javascript
element.addEventListener('click', handler, true); // capturing
element.addEventListener('click', handler, false); // bubbling (default)
```

## Common DOM Methods

| Method | Description |
|--------|-------------|
| `querySelector()` | Select first matching element |
| `querySelectorAll()` | Select all matching elements |
| `getElementById()` | Select by ID (faster) |
| `createElement()` | Create new element |
| `appendChild()` | Add child element |
| `removeChild()` | Remove child element |

## Performance Tips

- Cache DOM queries
- Use event delegation
- Batch DOM updates
- Use DocumentFragment for multiple inserts