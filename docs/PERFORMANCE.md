# Performance Optimization

## 1. DOM Element Caching

❌ **Bad:**
```javascript
document.getElementById('button').addEventListener('click', fn);
document.getElementById('button').textContent = 'Click me';
```

✅ **Good:**
```javascript
const button = document.getElementById('button');
button.addEventListener('click', fn);
button.textContent = 'Click me';
```

## 2. Event Throttling

Batasi function calls untuk events yang sering trigger (scroll, resize):
```javascript
function throttle(func, delay) {
    let timeout = null;
    return function(...args) {
        if (!timeout) {
            timeout = setTimeout(() => {
                func.apply(this, args);
                timeout = null;
            }, delay);
        }
    };
}

window.addEventListener('scroll', throttle(handleScroll, 100));
```

## 3. Event Debouncing

Tunggu user selesai action sebelum execute:
```javascript
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

input.addEventListener('input', debounce(handleInput, 300));
```

## 4. Event Delegation

❌ **Bad:** Attach listener ke setiap item
```javascript
items.forEach(item => {
    item.addEventListener('click', handleClick);
});
```

✅ **Good:** Attach ke parent
```javascript
parent.addEventListener('click', (e) => {
    if (e.target.matches('.item')) {
        handleClick(e);
    }
});
```

## 5. Reflow & Repaint

Minimize layout recalculation:

❌ **Bad:**
```javascript
element.style.width = '100px';
element.style.height = '100px';
element.style.padding = '10px';
```

✅ **Good:**
```javascript
element.style.cssText = 'width: 100px; height: 100px; padding: 10px;';
// atau
element.className = 'new-class';
```

## 6. DocumentFragment

Untuk multiple DOM insertions:
```javascript
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.textContent = i;
    fragment.appendChild(div);
}
document.body.appendChild(fragment); // Single reflow!
```

## Benchmarking
```javascript
console.time('operation');
// your code here
console.timeEnd('operation');
```