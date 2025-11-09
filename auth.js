// Simple Password Protection
// Change this password to your desired password
const SITE_PASSWORD = 'jswindshield2024'; // Change this!

// Check if user is already authenticated
function checkAuth() {
    const isAuthenticated = sessionStorage.getItem('js_windshield_auth');
    if (!isAuthenticated) {
        showPasswordPrompt();
    }
}

// Show password prompt
function showPasswordPrompt() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'password-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #0052cc 0%, #0066ff 50%, #dc2626 100%);
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Poppins', sans-serif;
    `;

    // Create password form
    const form = document.createElement('div');
    form.style.cssText = `
        background: white;
        padding: 3rem;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        max-width: 400px;
        width: 90%;
        text-align: center;
    `;

    form.innerHTML = `
        <div style="margin-bottom: 2rem;">
            <img src="images/JS WINDSHIELDS LOGO (2).png" alt="JS Windshield Logo" style="max-width: 200px; height: auto; margin-bottom: 1rem;">
            <h2 style="color: #1a1a1a; margin: 0; font-size: 1.5rem; font-weight: 700;">Private Access</h2>
            <p style="color: #6b7280; margin-top: 0.5rem; font-size: 0.9rem;">Enter password to view the website</p>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <input 
                type="password" 
                id="password-input" 
                placeholder="Enter password" 
                style="
                    width: 100%;
                    padding: 1rem;
                    border: 2px solid #e5e7eb;
                    border-radius: 10px;
                    font-size: 1rem;
                    outline: none;
                    transition: border-color 0.3s;
                    box-sizing: border-box;
                "
                onkeypress="if(event.key === 'Enter') verifyPassword()"
            >
            <p id="error-message" style="color: #ef4444; margin-top: 0.5rem; font-size: 0.85rem; display: none;"></p>
        </div>
        <button 
            onclick="verifyPassword()" 
            style="
                width: 100%;
                padding: 1rem;
                background: linear-gradient(135deg, #0052cc 0%, #0066ff 100%);
                color: white;
                border: none;
                border-radius: 10px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: transform 0.2s, box-shadow 0.2s;
            "
            onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 20px rgba(0, 82, 204, 0.3)'"
            onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'"
        >
            Access Website
        </button>
    `;

    overlay.appendChild(form);
    document.body.appendChild(overlay);

    // Focus on input
    setTimeout(() => {
        document.getElementById('password-input').focus();
    }, 100);
}

// Verify password
function verifyPassword() {
    const input = document.getElementById('password-input');
    const errorMsg = document.getElementById('error-message');
    const password = input.value;

    if (password === SITE_PASSWORD) {
        // Correct password
        sessionStorage.setItem('js_windshield_auth', 'true');
        const overlay = document.getElementById('password-overlay');
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            overlay.remove();
        }, 300);
    } else {
        // Wrong password
        errorMsg.textContent = 'Incorrect password. Please try again.';
        errorMsg.style.display = 'block';
        input.style.borderColor = '#ef4444';
        input.value = '';
        input.focus();
        
        // Shake animation
        input.style.animation = 'shake 0.5s';
        setTimeout(() => {
            input.style.animation = '';
        }, 500);
    }
}

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Check auth on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAuth);
} else {
    checkAuth();
}

