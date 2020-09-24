import animate from 'animateplus';

window.animate = animate;

document.addEventListener('DOMContentLoaded', function () {
    animate({elements: '#logo', transform: ['translateY(0%)', 'translateY(-3%)'], easing: 'in-out-cubic'}).then(() => {
        animate({elements: '#logo', transform: ['translateY(-3%)', 'translateY(3%)'], loop: true, direction: 'alternate', easing: 'in-out-cubic', duration: 2000})
    })
})
