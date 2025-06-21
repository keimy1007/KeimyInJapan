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
        const currentPage = window.location.pathname;
        
        if (currentPage.includes('index_en.html')) {
            window.location.href = 'index.html';
        } else {
            window.location.href = 'index_en.html';
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
        const japaneseNavText = ['ホーム', '経歴', '研究', '主要業績', '論文', 'ブログ', '連絡先'];
        navItems.forEach((item, index) => {
            item.textContent = japaneseNavText[index];
        });
        
        // Update main content
        document.querySelector('.profile-text h2').textContent = 'ケイミー・イン・ジャパンへようこそ';
        document.querySelector('.intro-text').innerHTML = 
            'ポーランド・佐野計算医学センターの医学AI研究者<br>人工知能と機械学習を通じて計算医学とヘルスケアイノベーションを推進しています。';
        
        // Update contact info
        const contactInfo = document.querySelectorAll('.contact-info p');
        const japaneseContactText = [
            '<strong>所属:</strong> 佐野計算医学センター',
            '<strong>拠点:</strong> ポーランド / 日本',
            '<strong>研究分野:</strong> 医学AI、網膜画像解析、計算医学',
            '<strong>専門:</strong> 深層学習、コンピュータビジョン、ヘルスケア技術'
        ];
        contactInfo.forEach((item, index) => {
            item.innerHTML = japaneseContactText[index];
        });
        
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
        
        // Update About section
        if (document.querySelector('.about-section h2')) {
            document.querySelector('.about-section h2').textContent = '経歴・プロフィール';
            document.querySelector('.bio-section h3').textContent = '略歴';
            document.querySelector('.bio-section p').textContent = 
                '佐野圭は、ポーランドの佐野計算医学センターに所属する医学AI研究者で、ヘルスケア応用のための革新的な人工知能ソリューションの開発に焦点を当てています。彼の研究は、計算医学、網膜画像解析、および医学データへの深層学習技術の応用に及んでいます。';
            
            document.querySelector('.education-section h3').textContent = '学歴・経歴';
            const timelineItems = document.querySelectorAll('.timeline-item .content');
            if (timelineItems.length > 0) {
                timelineItems[0].querySelector('h4').textContent = '医学AI研究者';
                timelineItems[0].querySelector('p').textContent = 'ポーランド・佐野計算医学センター';
            }
            if (timelineItems.length > 1) {
                timelineItems[1].querySelector('h4').textContent = '計算医学研究';
                timelineItems[1].querySelector('p').textContent = '医用画像と医療イノベーションにおける深層学習応用';
            }
        }
        
        // Update Works section
        if (document.querySelector('.works-section h2')) {
            document.querySelector('.works-section h2').textContent = '主要業績';
            document.querySelector('.work-content h3').textContent = '潜在網膜アーキタイプ';
            document.querySelector('.work-description').textContent = 
                '高次元網膜画像データにおける特徴的パターン（アーキタイプ）を特定するための新しいフレームワーク。網膜測定値を潜在空間に埋め込み、アーキタイプ成分に分解することで、加齢に伴う網膜構造パターンのより良い理解を可能にします。';
            document.querySelector('.work-publication').innerHTML = 
                '<strong>掲載誌:</strong> Nature Digital Medicine (2025)<br>"Latent retinal structural patterns with aging"';
        }
        
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
        const englishNavText = ['Home', 'About', 'Research', 'Selected Works', 'Publications', 'Blog', 'Contact'];
        navItems.forEach((item, index) => {
            item.textContent = englishNavText[index];
        });
        
        // Update main content
        document.querySelector('.profile-text h2').textContent = 'Welcome to Keimy in Japan';
        document.querySelector('.intro-text').innerHTML = 
            'Medical AI Researcher at Sano Centre for Computational Medicine, Poland<br>Advancing computational medicine and healthcare innovation through artificial intelligence and machine learning.';
        
        // Update contact info
        const contactInfo = document.querySelectorAll('.contact-info p');
        const englishContactText = [
            '<strong>Affiliation:</strong> Sano Centre for Computational Medicine',
            '<strong>Location:</strong> Poland / Japan',
            '<strong>Research Focus:</strong> Medical AI, Retinal Imaging, Computational Medicine',
            '<strong>Expertise:</strong> Deep Learning, Computer Vision, Healthcare Technology'
        ];
        contactInfo.forEach((item, index) => {
            item.innerHTML = englishContactText[index];
        });
        
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
        
        // Update About section
        if (document.querySelector('.about-section h2')) {
            document.querySelector('.about-section h2').textContent = 'About';
            document.querySelector('.bio-section h3').textContent = 'Biography';
            document.querySelector('.bio-section p').textContent = 
                'Kei Sano is a medical AI researcher at the Sano Centre for Computational Medicine in Poland, with a focus on developing innovative artificial intelligence solutions for healthcare applications. His research spans computational medicine, retinal imaging analysis, and the application of deep learning techniques to medical data.';
            
            document.querySelector('.education-section h3').textContent = 'Education & Career';
            const timelineItems = document.querySelectorAll('.timeline-item .content');
            if (timelineItems.length > 0) {
                timelineItems[0].querySelector('h4').textContent = 'Medical AI Researcher';
                timelineItems[0].querySelector('p').textContent = 'Sano Centre for Computational Medicine, Poland';
            }
            if (timelineItems.length > 1) {
                timelineItems[1].querySelector('h4').textContent = 'Computational Medicine';
                timelineItems[1].querySelector('p').textContent = 'Deep learning applications in medical imaging and healthcare innovation';
            }
        }
        
        // Update Works section
        if (document.querySelector('.works-section h2')) {
            document.querySelector('.works-section h2').textContent = 'Selected Works';
            document.querySelector('.work-content h3').textContent = 'Latent Retinal Archetype';
            document.querySelector('.work-description').textContent = 
                'A novel framework for identifying characteristic patterns (archetypes) in high-dimensional retinal imaging data. By embedding retinal measurements into a latent space and decomposing them into archetypal components, this method enables better understanding of retinal structural patterns with aging.';
            document.querySelector('.work-publication').innerHTML = 
                '<strong>Publication:</strong> Nature Digital Medicine (2025)<br>"Latent retinal structural patterns with aging"';
        }
        
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

// Global language toggle function for onclick
function toggleLanguage() {
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('index_en.html')) {
        window.location.href = 'index.html';
    } else {
        window.location.href = 'index_en.html';
    }
}

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