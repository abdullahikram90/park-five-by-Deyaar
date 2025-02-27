document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey === true || event.metaKey === true) && (event.key === '+' || event.key === '-' || event.key === '0')) {
        event.preventDefault();
    }
}, false);

document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();  // Prevent pinch-to-zoom on some mobile browsers
    }
}, { passive: false });
