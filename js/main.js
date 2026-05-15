// ========== Mobile Menu Toggle ==========
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu button if not exists
    if (!document.querySelector('.mobile-menu-btn')) {
        const btn = document.createElement('button');
        btn.className = 'mobile-menu-btn';
        btn.innerHTML = '<i class="fas fa-bars"></i>';
        btn.onclick = toggleSidebar;
        document.body.appendChild(btn);
    }
    
    // Close sidebar when clicking on a link (mobile)
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                document.querySelector('.sidebar')?.classList.remove('open');
            }
        });
    });
});

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar?.classList.toggle('open');
}

// ========== Load active page highlight ==========
function setActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('.sidebar a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.style.background = 'rgba(13, 136, 141, 0.2)';
            link.style.borderRightColor = '#0D888D';
        }
    });
}

// Run on page load
setActiveNavItem();

// ========== Smooth scroll for anchor links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ========== Tooltip for code blocks (optional) ==========
const codeBlocks = document.querySelectorAll('code');
codeBlocks.forEach(block => {
    block.addEventListener('click', function() {
        navigator.clipboard.writeText(this.innerText);
        const originalText = this.innerText;
        this.innerText = '✓ Copied!';
        setTimeout(() => {
            this.innerText = originalText;
        }, 1500);
    });
});

// ========== Download Tool Button ==========

const toolDownloads = {

    "dos-tool.html":
        "../downloads/dos-tool.zip",

    "phishing-tool.html":
        "../downloads/phishing-tool.zip",

    "password-cracker.html":
        "../downloads/password-cracker.zip",

    "phantom-stego.html":
        "../downloads/phantom-stego.zip",

    "wireless-tools.html":
        "../downloads/wireless-tools.zip",

    "web-exploitation.html":
        "../downloads/web-exploitation.zip",

    "mac-changer.html":
        "../downloads/mac-changer.zip",

    "malware-analysis.html":
        "../downloads/malware-analysis.zip",

    "network-capture.html":
        "../downloads/network-capture.zip",

    "network-capture-formatted.html":
        "../downloads/network-capture-formatted.zip",

    "usb-scanner.html":
        "../downloads/usb-scanner.zip",

    "usb-recognizer.html":
        "../downloads/usb-recognizer.zip",

    "vulnerability-scanner.html":
        "../downloads/vulnerability-scanner.zip",

    "ransomware-detection.html":
        "../downloads/ransomware-detection.zip",

    "honeypot-trap.html":
        "../downloads/honeypot-trap.zip",

    "encryption-tool.html":
        "../downloads/encryption-tool.zip",

    "edr-monitoring.html":
        "../downloads/edr-monitoring.zip"
};

function downloadPage(){

    const currentPage =
        window.location.pathname.split('/').pop();

    const filePath =
        toolDownloads[currentPage];

    if(filePath){

        const link =
            document.createElement('a');

        link.href = filePath;
        link.download = '';

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

    }else{

        alert(
            document.documentElement.lang === "en"
            ? "Download file not found."
            : "ملف التحميل غير موجود."
        );
    }
}

// زر التحميل
document.addEventListener("DOMContentLoaded", () => {

    if(!document.querySelector('.download-btn-container')){

        const container =
            document.createElement('div');

        container.className =
            'download-btn-container';

        container.innerHTML = `
            <button class="download-btn"
                    onclick="downloadPage()">

                <i class="fas fa-download"></i>

                <span id="downloadPageText">
                    تحميل الأداة
                </span>

            </button>
        `;

        document.body.appendChild(container);
    }

    const updateBtnLang = () => {

        const isEnglish =
            document.documentElement.lang === "en";

        const txt =
            document.getElementById(
                "downloadPageText"
            );

        if(txt){

            txt.innerText =
                isEnglish
                ? "Download Tool"
                : "تحميل الأداة";
        }
    };

    updateBtnLang();

    const observer =
        new MutationObserver(updateBtnLang);

    observer.observe(
        document.documentElement,
        {
            attributes: true,
            attributeFilter: ['lang']
        }
    );
});