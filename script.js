/*
    RETRO_SYSTEM_SCRIPT_V2.0
    1. System Clock
    2. Smooth Scrolling
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // [FUNCTION 01] System Clock
    // Updates the element with ID 'system-clock' every second
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
        
        const clockElement = document.getElementById('system-clock');
        if (clockElement) {
            clockElement.textContent = timeString;
        }
    }
    
    setInterval(updateClock, 1000);
    updateClock(); // Initial call

    // [FUNCTION 02] Smooth Scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});