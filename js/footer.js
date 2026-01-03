/**
 * Footer Component
 * Dynamically injects a consistent footer across all pages
 */

function initializeFooter(accentColor = 'eco-blue') {
    // Create footer element
    const footer = document.createElement('footer');
    footer.className = 'bg-gray-900 border-t border-gray-800 py-12';
    footer.innerHTML = `
        <div class="container mx-auto px-4 text-center">
            <div class="mb-6 flex justify-center">
                <div class="w-12 h-12 bg-gradient-to-r from-eco-blue to-eco-green rounded-lg flex items-center justify-center mr-2">
                    <span class="text-white font-bold text-2xl">E</span>
                </div>
            </div>
            <p class="text-gray-500 text-sm">&copy; <span id="footer-year"></span> EcoPulse. Built with ❤️ for environmental awareness.</p>
            <p class="text-gray-500 text-xs mt-2">Hackathon 2024 • Environmental Data Initiative</p>
        </div>
    `;

    // Insert footer before script tags
    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.parentNode.insertBefore(footer, mainElement.nextSibling);
    } else {
        document.body.appendChild(footer);
    }

    // Set dynamic year
    const yearElement = document.getElementById('footer-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Auto-initialize footer when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeFooter);
} else {
    initializeFooter();
}
