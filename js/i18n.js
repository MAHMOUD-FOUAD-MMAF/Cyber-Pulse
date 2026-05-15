// ========== نظام الترجمة الثنائي (عربي / إنجليزي) ==========

// قاموس الترجمة العام
const translations = {
    // الموقع بالكامل
    'site_title_ar': 'سايبر بولس | مركز التوثيق التعليمي للأدوات السيبرانية',
    'site_title_en': 'CyberPulse | Educational Cybersecurity Tools Documentation',
    
    // الهيدر والشعار
    'brand_ar': '⚡ سايبر\nبولس',
    'brand_en': '⚡ CYBER\nPULSE',
    'tagline_ar': 'مجموعة متقدمة للأمن السيبراني',
    'tagline_en': 'Advanced Security Suite',
    
    // أقسام السايدبار
    'home_ar': '🏠 الرئيسية',
    'home_en': '🏠 Dashboard',
    'attack_modules_ar': '⚔️ وحدات الهجوم',
    'attack_modules_en': '⚔️ ATTACK MODULES',
    'defense_modules_ar': '🛡️ وحدات الدفاع',
    'defense_modules_en': '🛡️ DEFENSE MODULES',
    
    // Dashboard
    'hero_title_ar': '🛡️ سايبر بولس - مجموعة أدوات الأمن السيبراني',
    'hero_title_en': '🛡️ CyberPulse Security Suite',
    'hero_desc_ar': 'منصة متكاملة لأدوات الاختبار الأمني والدفاع السيبراني<br>تعلم، اكتشف، وطبّق بأمان',
    'hero_desc_en': 'An integrated platform for security testing and cyber defense tools<br>Learn, Discover, and Apply Safely',
    
    // Stats
    'total_tools_ar': 'أداة متكاملة',
    'total_tools_en': 'Total Tools',
    'attack_tools_ar': 'هجوم احترافي',
    'attack_tools_en': 'Attack Tools',
    'defense_tools_ar': 'أداة دفاعية',
    'defense_tools_en': 'Defense Tools',
    'videos_count_ar': 'فيديو توضيحي',
    'videos_count_en': 'Video Tutorials',
    
    // Attack Tools Section
    'attack_section_ar': '⚔️ هجمات احترافية (Attack Modules)',
    'attack_section_en': '⚔️ Professional Attack Modules',
    'defense_section_ar': '🛡️ أدوات دفاعية (Defense Modules)',
    'defense_section_en': '🛡️ Defense Modules',
    
    // Team Section
    'team_section_ar': '👥 فريق العمل',
    'team_section_en': '👥 Our Team',
    'tech_team_ar': 'الفريق التقني',
    'tech_team_en': 'Technical Team',
    'tech_desc_ar': 'خبراء الأمن السيبراني',
    'tech_desc_en': 'Cyber Security Experts',
    'dev_team_ar': 'التطوير',
    'dev_team_en': 'Development',
    'dev_desc_ar': 'مطورون متكاملون',
    'dev_desc_en': 'Full Stack Developers',
    'docs_team_ar': 'التوثيق والتعليم',
    'docs_team_en': 'Documentation',
    'docs_desc_ar': 'كتّاب تقنيون',
    'docs_desc_en': 'Technical Writers',
    
    // Footer
    'footer_copyright_ar': '© 2025 سايبر بولس | للأغراض التعليمية فقط',
    'footer_copyright_en': '© 2025 CyberPulse | For educational purposes only',
    'footer_warning_ar': '⚠️ استخدم هذه الأدوات فقط على أجهزتك أو بإذن قانوني صريح',
    'footer_warning_en': '⚠️ Use these tools only on your own devices or with explicit legal permission',
    
    // Language Switcher
    'language_ar': '🇸🇦 العربية',
    'language_en': '🇬🇧 English',
    
    // Tool Page Common
    'video_tutorial_ar': '📺 الفيديو التعليمي',
    'video_tutorial_en': '📺 Video Tutorial',
    'watch_video_ar': '👆 شاهد الفيديو لترى كيفية استخدام الأداة خطوة بخطوة على جهاز اختبار خاص.',
    'watch_video_en': '👆 Watch the video to see how to use the tool step by step on a test machine.',
    'what_is_ar': '🤔 ما هي',
    'what_is_en': '🤔 What is',
    'how_works_ar': '⚙️ كيف تعمل الأداة؟',
    'how_works_en': '⚙️ How does it work?',
    'how_use_ar': '🖱️ كيف تستخدم الأداة في سايبر بولس؟',
    'how_use_en': '🖱️ How to use in CyberPulse?',
    'notes_ar': '📋 ملاحظات مهمة',
    'notes_en': '📋 Important Notes',
    'warning_legal_ar': '⚠️ تنبيه قانوني هام: استخدام هذه الأداة على أي جهاز أو خادم لا تملكه أو لا تملك إذناً خطياً لاختباره غير قانوني ويعتبر جريمة معلوماتية في معظم الدول.',
    'warning_legal_en': '⚠️ Important Legal Warning: Using this tool on any device or server you do not own or have written permission to test is illegal and considered a cybercrime in most countries.',
    
    // Individual Tool Names
    'dos_tool_ar': '🔥 أداة DOS - اختبار ضغط الخوادم',
    'dos_tool_en': '🔥 DOS Tool - Server Stress Testing',
    'phishing_tool_ar': '🎣 أداة التصيد - إنشاء صفحات احتيالية',
    'phishing_tool_en': '🎣 Phishing Tool - Create Fake Pages',
    'password_cracker_ar': '🔓 أداة تكسير كلمات المرور',
    'password_cracker_en': '🔓 Password Cracker Tool',
    'phantom_stego_ar': '👻 فانتوم - إخفاء البيانات في الصور',
    'phantom_stego_en': '👻 Phantom - Steganography Tool',
    'wireless_tools_ar': '📡 أدوات الشبكات اللاسلكية',
    'wireless_tools_en': '📡 Wireless Network Tools',
    'web_exploitation_ar': '💻 اختبار اختراق الويب',
    'web_exploitation_en': '💻 Web Penetration Testing',
    'mac_changer_ar': '🔄 تغيير عنوان MAC',
    'mac_changer_en': '🔄 MAC Address Changer',
    'malware_analysis_ar': '🦠 تحليل البرامج الضارة',
    'malware_analysis_en': '🦠 Malware Analysis',
    'network_capture_ar': '📡 التقاط حزم الشبكة',
    'network_capture_en': '📡 Network Packet Capture',
    'encryption_tool_ar': '🔐 أدوات التشفير',
    'encryption_tool_en': '🔐 Encryption Tools',
    'password_tools_ar': '🔑 أدوات كلمات المرور',
    'password_tools_en': '🔑 Password Tools',
    'usb_scanner_ar': '💾 ماسح أجهزة USB',
    'usb_scanner_en': '💾 USB Scanner',
    'ransomware_detection_ar': '💀 كشف برامج الفدية',
    'ransomware_detection_en': '💀 Ransomware Detection',
    'edr_monitoring_ar': '👁️ مراقبة EDR',
    'edr_monitoring_en': '👁️ EDR Monitoring',
    'vuln_scanner_ar': '🔍 ماسح الثغرات',
    'vuln_scanner_en': '🔍 Vulnerability Scanner',
    'usb_recognizer_ar': '🔌 التعرف على أجهزة USB',
    'usb_recognizer_en': '🔌 USB Device Recognizer',
    'honeypot_trap_ar': '🍯 مصيدة هانيبوت',
    'honeypot_trap_en': '🍯 Honeypot Trap'
};

// الحصول على اللغة المخزنة أو لغة المتصفح
let currentLang = localStorage.getItem('cyberpulse_lang') || 'ar';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('cyberpulse_lang', lang);
    
    // تحديث جميع العناصر التي تحمل خاصية data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translationKey = `${key}_${lang}`;
        if (translations[translationKey]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[translationKey];
            } else {
                element.innerHTML = translations[translationKey];
            }
        }
    });
    
    // تحديث اتجاه الصفحة للعربية
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
        document.body.style.fontFamily = "'Cairo', 'Segoe UI', sans-serif";
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
        document.body.style.fontFamily = "'Segoe UI', 'Cairo', sans-serif";
    }
    
    // تشغيل أي تحديثات إضافية
    if (window.onLanguageChange) {
        window.onLanguageChange(lang);
    }
}

function toggleLanguage() {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
}

// تهيئة اللغة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    
    // إضافة زر تبديل اللغة إذا لم يكن موجوداً
    if (!document.querySelector('.lang-switcher')) {
        const header = document.querySelector('.sidebar-header') || document.querySelector('.tool-header');
        if (header) {
            const langBtn = document.createElement('button');
            langBtn.className = 'lang-switcher';
            langBtn.setAttribute('data-i18n', 'language_ar');
            langBtn.innerHTML = currentLang === 'ar' ? '🇬🇧 English' : '🇸🇦 العربية';
            langBtn.onclick = toggleLanguage;
            langBtn.style.cssText = `
                background: transparent;
                border: 1px solid var(--primary);
                color: var(--primary);
                padding: 5px 10px;
                border-radius: 20px;
                cursor: pointer;
                margin-top: 10px;
                font-size: 12px;
            `;
            header.appendChild(langBtn);
        }
    }
});