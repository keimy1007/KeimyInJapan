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
        document.title = 'Kei Sano, MD, PhD.';
        
        // Update main heading
        document.querySelector('.logo-section h1').textContent = 'Kei Sano, MD, PhD.';
        document.querySelector('.subtitle').textContent = 'Keimy in Japan, 佐野メディカルAIラボ';
        
        // Update navigation
        const navItems = document.querySelectorAll('.nav-menu a');
        const japaneseNavText = ['Profile', 'Selected Works', 'Publications / Awards', 'Contact'];
        navItems.forEach((item, index) => {
            item.textContent = japaneseNavText[index];
        });
        
        // Update main content
        document.querySelector('.profile-text h2').textContent = 'Kei Sano, MD, PhD. へようこそ';
        document.querySelector('.intro-text').innerHTML = 
            '医師・医療AI研究者・JSPS特別研究員PD<br>深層学習とコンピュータビジョンを用いた眼科医療・網膜画像解析・公衆衛生学研究';
        
        // Update contact info
        const contactInfo = document.querySelectorAll('.contact-info p');
        const japaneseContactText = [
            '<strong>現職:</strong> 日本学術振興会 特別研究員PD・東京慈恵会医科大学附属病院 眼科 助教',
            '<strong>専門分野:</strong> 眼科学、医療AI、網膜画像解析、公衆衛生学、緑内障スクリーニング',
            '<strong>技術領域:</strong> 深層学習、コンピュータビジョン、医療データサイエンス、OCT解析',
            '<strong>学位:</strong> 医学博士（東京慈恵会医科大学、2025年3月取得予定）'
        ];
        contactInfo.forEach((item, index) => {
            item.innerHTML = japaneseContactText[index];
        });
        
        // Update research section
        document.querySelector('.research-section h2').textContent = '研究分野';
        const researchItems = document.querySelectorAll('.research-item');
        const japaneseResearchTitles = ['緑内障スクリーニング・AI診断', '網膜構造解析・組織学', '眼科痾患の疫学・予防医学'];
        const japaneseResearchDescriptions = [
            'Imo screening program (ISP)やDeepISPの開発による短時間高精度緑内障スクリーニング手法の確立',
            'OCTデータから網膜の個体差や加齢性変化を定量化する新規解析手法の開発',
            '緑内障の一次予防（飲酒、VDT作業等）から二次・三次予防（早期治療）までの包括的研究'
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
                '佐野 圭（さの けい）は、東京慈恵会医科大学で医学を学び（2012-2018年）、同大学附属病院で臨床研修を経て（2018-2020年）、現在は同大学院博士課程に在学中（2021-2025年）です。東海大学衛生学公衆衛生学に国内留学し、日本学術振興会の特別研究員（DC2：2024-2025年、PD：2025年-現在）として研究を継続し、眼科医療AI・網膜画像解析・公衆衛生学分野で多数の国際論文を発表しています。';
            
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
        document.querySelector('.publications-section h2').textContent = 'Publications / Awards';
        document.querySelector('.blog-section h2').textContent = 'Blog';
        document.querySelector('.contact-section h2').textContent = 'Contact';
        
        // Update language toggle button
        languageToggle.textContent = 'EN / 日本語';
    }

    function switchToEnglish() {
        // Update page title
        document.title = 'Kei Sano, MD, PhD.';
        
        // Update main heading
        document.querySelector('.logo-section h1').textContent = 'Kei Sano, MD, PhD.';
        document.querySelector('.subtitle').textContent = 'Sano Medical AI Lab';
        
        // Update navigation
        const navItems = document.querySelectorAll('.nav-menu a');
        const englishNavText = ['Profile', 'Selected Works', 'Publications / Awards', 'Contact'];
        navItems.forEach((item, index) => {
            item.textContent = englishNavText[index];
        });
        
        // Update main content
        document.querySelector('.profile-text h2').textContent = 'Welcome to Kei Sano, MD, PhD.';
        document.querySelector('.intro-text').innerHTML = 
            'Physician, Medical AI Researcher, JSPS Postdoctoral Fellow<br>Advancing ophthalmology, retinal imaging analysis, and public health through deep learning and computer vision.';
        
        // Update contact info
        const contactInfo = document.querySelectorAll('.contact-info p');
        const englishContactText = [
            '<strong>Current Position:</strong> JSPS Postdoctoral Fellow, Assistant Professor at Jikei University School of Medicine Hospital, Department of Ophthalmology',
            '<strong>Specialization:</strong> Ophthalmology, Medical AI, Retinal Imaging Analysis, Public Health, Glaucoma Screening',
            '<strong>Technical Expertise:</strong> Deep Learning, Computer Vision, Medical Data Science, OCT Analysis',
            '<strong>Degree:</strong> MD, PhD (Jikei University School of Medicine, expected March 2025)'
        ];
        contactInfo.forEach((item, index) => {
            item.innerHTML = englishContactText[index];
        });
        
        // Update research section
        document.querySelector('.research-section h2').textContent = 'Research Areas';
        const researchItems = document.querySelectorAll('.research-item');
        const englishResearchTitles = ['Glaucoma Screening & AI Diagnosis', 'Retinal Structure Analysis', 'Ophthalmic Epidemiology & Preventive Medicine'];
        const englishResearchDescriptions = [
            'Development of short-duration, high-precision glaucoma screening methods through Imo screening program (ISP) and DeepISP.',
            'Development of novel analytical methods to quantify individual differences and age-related changes in retinal structure from OCT data.',
            'Comprehensive research from primary prevention (alcohol, VDT work) to secondary/tertiary prevention (early treatment) of glaucoma.'
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
                'Kei Sano studied medicine at Jikei University School of Medicine (2012-2018), completed clinical training at the affiliated hospital (2018-2020), and is currently enrolled in the doctoral program (2021-2025). He conducted domestic research at Tokai University Department of Hygiene and Public Health, and continues his research as a JSPS Special Researcher (DC2: 2024-2025, PD: 2025-present), publishing numerous international papers in the fields of ophthalmic medical AI, retinal imaging analysis, and public health.';
            
            document.querySelector('.education-section h3').textContent = 'Education & Career';
            const timelineItems = document.querySelectorAll('.timeline-item .content');
            if (timelineItems.length > 0) {
                timelineItems[0].querySelector('h4').textContent = 'JSPS Postdoctoral Fellow';
                timelineItems[0].querySelector('p').textContent = 'Japan Society for the Promotion of Science - Development of novel dementia screening methods using retinal OCT';
            }
            if (timelineItems.length > 1) {
                timelineItems[1].querySelector('h4').textContent = 'JSPS Special Researcher DC2';
                timelineItems[1].querySelector('p').textContent = 'Japan Society for the Promotion of Science - Doctoral program special researcher';
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
        document.querySelector('.publications-section h2').textContent = 'Publications / Awards';
        document.querySelector('.blog-section h2').textContent = 'Blog';
        document.querySelector('.contact-section h2').textContent = 'Contact';
        
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