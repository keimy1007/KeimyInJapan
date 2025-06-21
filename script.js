// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // Language toggle functionality
    const languageToggle = document.getElementById('lang-toggle');
    let isJapanese = false;

    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            toggleLanguage();
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Language toggle function
    function toggleLanguage() {
        isJapanese = !isJapanese;
        
        if (isJapanese) {
            switchToJapanese();
        } else {
            switchToEnglish();
        }
    }

    function switchToJapanese() {
        // Update page title
        document.title = 'ケイミー・イン・ジャパン (佐野医学AI研究所)';
        
        // Update main heading
        document.querySelector('.logo-section h1').textContent = 'ケイミー・イン・ジャパン';
        document.querySelector('.subtitle').textContent = '佐野医学AI研究所';
        
        // Update navigation
        const navItems = document.querySelectorAll('.nav-menu a');
        const japaneseNavText = ['ホーム', '研究', '論文', 'ブログ', '連絡先'];
        navItems.forEach((item, index) => {
            item.textContent = japaneseNavText[index];
        });
        
        // Update main content
        document.querySelector('.profile-text h2').textContent = 'ケイミー・イン・ジャパンへようこそ';
        document.querySelector('.intro-text').innerHTML = 
            'ポーランド・佐野計算医学センターの医学AI研究者<br>現在、計算医学とヘルスケアイノベーションに焦点を当てた医学AIアプリケーションの研究開発を行っています。';
        
        // Update research section
        document.querySelector('.research-section h2').textContent = '研究分野';
        const researchItems = document.querySelectorAll('.research-item');
        const japaneseResearchTitles = ['医学AI', '計算医学', 'ヘルスケア技術'];
        const japaneseResearchDescriptions = [
            '医学診断と治療最適化のためのAI駆動ソリューションの開発。',
            '複雑な医学問題の解決と患者転帰の改善のための計算手法の応用。',
            'ヘルスケア提供とアクセシビリティを向上させる革新的技術の創造。'
        ];
        
        researchItems.forEach((item, index) => {
            item.querySelector('h3').textContent = japaneseResearchTitles[index];
            item.querySelector('p').textContent = japaneseResearchDescriptions[index];
        });
        
        // Update other sections
        document.querySelector('.publications-section h2').textContent = '主要論文';
        document.querySelector('.blog-section h2').textContent = 'ブログ・更新情報';
        document.querySelector('.contact-section h2').textContent = '連絡先';
        
        // Update language toggle button
        languageToggle.textContent = 'EN / 日本語';
    }

    function switchToEnglish() {
        // Update page title
        document.title = 'Keimy in Japan (Sano Medical AI Lab)';
        
        // Update main heading
        document.querySelector('.logo-section h1').textContent = 'Keimy in Japan';
        document.querySelector('.subtitle').textContent = 'Sano Medical AI Lab';
        
        // Update navigation
        const navItems = document.querySelectorAll('.nav-menu a');
        const englishNavText = ['Home', 'Research', 'Publications', 'Blog', 'Contact'];
        navItems.forEach((item, index) => {
            item.textContent = englishNavText[index];
        });
        
        // Update main content
        document.querySelector('.profile-text h2').textContent = 'Welcome to Keimy in Japan';
        document.querySelector('.intro-text').innerHTML = 
            'Medical AI Researcher at Sano Centre for Computational Medicine, Poland<br>Currently researching and developing medical AI applications with a focus on computational medicine and healthcare innovation.';
        
        // Update research section
        document.querySelector('.research-section h2').textContent = 'Research Areas';
        const researchItems = document.querySelectorAll('.research-item');
        const englishResearchTitles = ['Medical AI', 'Computational Medicine', 'Healthcare Technology'];
        const englishResearchDescriptions = [
            'Developing AI-powered solutions for medical diagnosis and treatment optimization.',
            'Applying computational methods to solve complex medical problems and improve patient outcomes.',
            'Creating innovative technologies to enhance healthcare delivery and accessibility.'
        ];
        
        researchItems.forEach((item, index) => {
            item.querySelector('h3').textContent = englishResearchTitles[index];
            item.querySelector('p').textContent = englishResearchDescriptions[index];
        });
        
        // Update other sections
        document.querySelector('.publications-section h2').textContent = 'Selected Publications';
        document.querySelector('.blog-section h2').textContent = 'Blog & Updates';
        document.querySelector('.contact-section h2').textContent = 'Contact Information';
        
        // Update language toggle button
        languageToggle.textContent = '日本語 / EN';
    }

    // Profile image fallback
    const profileImage = document.getElementById('profile-img');
    if (profileImage) {
        profileImage.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.style.width = '200px';
            placeholder.style.height = '250px';
            placeholder.style.backgroundColor = '#f0f0f0';
            placeholder.style.border = '1px solid #ddd';
            placeholder.style.display = 'flex';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
            placeholder.style.color = '#666';
            placeholder.style.fontSize = '14px';
            placeholder.textContent = 'Profile Image';
            this.parentNode.insertBefore(placeholder, this);
        });
    }
});

// Utility functions
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll-to-top functionality
window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scroll-to-top');
    if (scrollButton) {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    }
});