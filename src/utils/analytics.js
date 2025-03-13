export const plausible = function() {
    (window.plausible.q = window.plausible.q || []).push(arguments);
};

// Load Plausible script dynamically
const script = document.createElement('script');
script.defer = true;
script.dataset.domain = 'ciesin.github.io';
script.src = 'https://plausible.io/js/script.hash.outbound-links.pageview-props.tagged-events.js';
document.head.appendChild(script);