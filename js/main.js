// ============================================
// PROJECTS DATA - ADD YOUR PROJECTS HERE
// ============================================
const projects = [
    {
        title: "Modern Tech Brand",
        description: "A complete brand identity for a tech startup including logo design, color system, and brand guidelines.",
        tag: "brand",
        images: [
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
            "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800",
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800"
        ]
    },
    {
        title: "Coffee Shop Logo",
        description: "Minimalist logo design for a local coffee shop, capturing the warmth and artisanal nature of their craft.",
        tag: "logo",
        images: [
            "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800"
        ]
    },
    {
        title: "Social Campaign 2024",
        description: "A series of engaging social media posts for a fashion brand's spring collection launch.",
        tag: "social media",
        images: [
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
            "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800",
            "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800"
        ]
    },
    {
        title: "Character Illustration",
        description: "Custom character design and illustration for a mobile game project.",
        tag: "illustration",
        images: [
            "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800",
            "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=800"
        ]
    },
    {
        title: "Restaurant Rebrand",
        description: "Complete visual identity redesign for an upscale restaurant, including menu design and signage.",
        tag: "brand",
        images: [
            "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800",
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800"
        ]
    },
    {
        title: "Fitness App Posts",
        description: "Motivational social media content for a fitness app, designed to inspire and engage users.",
        tag: "social media",
        images: [
            "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800",
            "https://images.unsplash.com/photo-1611162617263-4ec3ba2429f7?w=800"
        ]
    }
];

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
    en: {
        projectTitle: projects.map(p => p.title),
        projectDesc: projects.map(p => p.description)
    },
    ar: {
        projectTitle: [
            "علامة تجارية تقنية حديثة",
            "شعار مقهى",
            "حملة سوشيال ميديا 2024",
            "رسم توضيحي للشخصية",
            "إعادة علامة تجارية للمطعم",
            "منشورات تطبيق اللياقة"
        ],
        projectDesc: [
            "هوية تجارية كاملة لشركة تقنية ناشئة تشمل تصميم الشعار ونظام الألوان وإرشادات العلامة التجارية.",
            "تصميم شعار بسيط لمقهى محلي، يجسد الدفء والطبيعة الحرفية لصنعتهم.",
            "سلسلة من منشورات وسائل التواصل الاجتماعي الجذابة لإطلاق مجموعة الربيع لعلامة أزياء.",
            "تصميم ورسم شخصية مخصصة لمشروع لعبة محمولة.",
            "إعادة تصميم الهوية البصرية الكاملة لمطعم راقي، بما في ذلك تصميم القائمة واللافتات.",
            "محتوى تحفيزي لوسائل التواصل الاجتماعي لتطبيق لياقة، مصمم لإلهام المستخدمين وإشراكهم."
        ]
    }
};

// ============================================
// APP STATE
// ============================================
let currentLang = 'en';
let currentFilter = 'all';

// ============================================
// NAVIGATION FUNCTIONS
// ============================================
window.toggleMenu = function() {
    const navLinks = document.querySelector('.nav-links');
    const burgerMenu = document.querySelector('.burger-menu');
    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('active');
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[href="#${pageId}"]`).classList.add('active');

    // Close mobile menu when navigating
    const navLinks = document.querySelector('.nav-links');
    const burgerMenu = document.querySelector('.burger-menu');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        burgerMenu.classList.remove('active');
    }
}

// Navigation links event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('href').substring(1);
            showPage(pageId);
        });
    });

    // CTA button
    document.querySelector('.cta-button').addEventListener('click', (e) => {
        e.preventDefault();
        showPage('work');
    });

    // Initialize projects
    renderProjects();
});

// ============================================
// PROJECTS DISPLAY
// ============================================
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    const filtered = currentFilter === 'all' 
        ? projects 
        : projects.filter(p => p.tag === currentFilter);

    grid.innerHTML = filtered.map((project, index) => {
        const projectIndex = projects.indexOf(project);
        const title = currentLang === 'en' ? project.title : translations.ar.projectTitle[projectIndex];
        const desc = currentLang === 'en' ? project.description : translations.ar.projectDesc[projectIndex];

        return `
            <div class="project-card" onclick="openProject(${projectIndex})">
                <img src="${project.images[0]}" alt="${title}">
                <div class="project-info">
                    <span class="project-tag">${project.tag}</span>
                    <h3>${title}</h3>
                    <p>${desc}</p>
                </div>
            </div>
        `;
    }).join('');
}

// Filter functionality
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            renderProjects();
        });
    });
});

// ============================================
// PROJECT MODAL
// ============================================
function openProject(index) {
    const project = projects[index];
    const modal = document.getElementById('projectModal');
    const content = document.getElementById('modalContent');

    const title = currentLang === 'en' ? project.title : translations.ar.projectTitle[index];
    const desc = currentLang === 'en' ? project.description : translations.ar.projectDesc[index];

    content.innerHTML = `
        <h2>${title}</h2>
        <span class="project-tag">${project.tag}</span>
        <p>${desc}</p>
        <div class="modal-images">
            ${project.images.map(img => `<img src="${img}" alt="${title}">`).join('')}
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============================================
// LANGUAGE TOGGLE
// ============================================
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    const html = document.documentElement;
    const langBtn = document.querySelector('.lang-switch');

    if (currentLang === 'ar') {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        langBtn.textContent = 'English';
    } else {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        langBtn.textContent = 'العربية';
    }

    // Update all translatable elements
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });

    // Re-render projects with new language
    renderProjects();
}