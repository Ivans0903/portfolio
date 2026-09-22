// Database Studi Kasus Proyek (Case Studies Data)
const projectDetails = {
    'sibigo': {
        title: "SIBIGo — Interactive Sign Language App",
        category: "AI / ML & Web Application",
        description: "SIBIGo adalah aplikasi web penerjemah bahasa isyarat secara real-time berbasis AI. Sistem ini mengintegrasikan computer vision (MediaPipe) untuk ekstraksi landmark gerakan tangan dan model deep learning (LSTM) untuk mengklasifikasikan gestur menjadi teks secara akurat dan responsif.",
        video: "https://www.youtube.com/embed/67DpUm6uWpk",
        images: [
            "assets/images/sibigo/1.webp",
            "assets/images/sibigo/2.webp",
            "assets/images/sibigo/3.webp"
        ],
        link: "https://github.com/Ivans0903/sibigo_web",
        linkText: "Lihat Repository GitHub &rarr;"
    },
    'cursealley': {
        title: "Curse Alley",
        category: "Game Development & ESP32",
        description: "Curse Alley adalah proyek game Arcade Bowling yang inovatif. Menggunakan Arduino dan ESP32 sebagai pengganti gamepad, game ini menghadirkan kontrol fisik yang imersif.",
        video: "https://www.youtube.com/watch?v=zbX9kiwdBh8",
        images: ["assets/images/cursealley/1.webp",
            "assets/images/cursealley/2.webp",
            "assets/images/cursealley/3.webp",
            "assets/images/cursealley/4.webp",
            "assets/images/cursealley/5.webp"
        ],
        link: "https://ivans000.itch.io/curse-alley",
        linkText: "Lihat itch.io &rarr;"
    },
    'pawscape': {
        title: "PawScape",
        category: "Python & Unity",
        description: "Game menggunakan Python OpenCV dan Unity. Game ini menggunakan HandGesture dari Python lalu Unity menerima sinyal yang dikirimkan oleh Python sehingga bisa membuat game Interaksi yang menarik.",
        video: "https://www.youtube.com/watch?v=J9vVWBpwdbY",
        images: ["assets/images/pawscape/1.webp",
            "assets/images/pawscape/2.webp",
            "assets/images/pawscape/3.webp"
        ],
        link: "https://ivans000.itch.io/pawscape",
        linkText: "Lihat itch.io &rarr;"
    },
    'wired': {
        title: "Wired Solution",
        category: "Unity",
        description: "Game ini dibuat dengan waktu 48 Jam di laksanakan di BINUS University Jakarta pada lomba Garena Game Jam 3 yang di selenggarakan oleh Garena Indonesia. Tim saya yaitu = Apapun Selain TA. Dengan anggota Ivan Saputra, Shedy Indra Maulana, Muhammad Raihan Ripaie.",
        video: "",
        images: ["assets/images/wired/1.webp",
            "assets/images/wired/2.webp",
            "assets/images/wired/3.webp",
            "assets/images/wired/4.webp",
            "assets/images/wired/5.webp",
            "assets/images/wired/6.webp"
        ],
        link: "https://ivans000.itch.io/wired-solution",
        linkText: "Lihat itch.io &rarr;"
    },
    'project5': {
        title: "Judul Proyek Ke-5",
        category: "Computer Vision",
        description: "Deskripsi rinci mengenai proyek computer vision kelima ini. Nantinya akan diisi dengan data dan penjelasan studi kasus yang mendalam.",
        video: "",
        images: ["assets/images/sibigo/1.webp"],
        link: "#",
        linkText: "Segera Hadir &rarr;"
    },
    'project6': {
        title: "Judul Proyek Ke-6",
        category: "IoT System",
        description: "Deskripsi rinci mengenai proyek IoT System keenam ini. Nantinya akan diisi dengan data dan penjelasan studi kasus yang mendalam.",
        video: "",
        images: ["assets/images/sibigo/1.webp"],
        link: "#",
        linkText: "Segera Hadir &rarr;"
    }
};

let currentImages = [];
let currentImageIndex = 0;

// Fungsi Membuka Modal Detail Proyek (Multi-page feel)
function openProject(projectId) {
    const data = projectDetails[projectId];
    if (!data) return;

    currentImages = data.images;

    const modalBody = document.getElementById('modal-body');

    // Build images HTML
    let imagesHtml = '';
    if (data.images && data.images.length > 0) {
        imagesHtml = '<div style="display: flex; gap: 12px; margin: 20px 0; overflow-x: auto; padding-bottom: 10px;">';
        data.images.forEach((img, index) => {
            imagesHtml += `<img src="${img}" onclick="openLightbox(${index})" style="height: 180px; border-radius: 8px; object-fit: cover; box-shadow: 0 4px 10px rgba(0,0,0,0.2); cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">`;
        });
        imagesHtml += '</div>';
    }

    let videoHtml = '';
    if (data.video && data.video.trim() !== '') {
        // Auto-convert standard YouTube watch URLs to embed URLs to prevent iframe errors
        let embedUrl = data.video;
        if (embedUrl.includes('watch?v=')) {
            embedUrl = embedUrl.replace('watch?v=', 'embed/');
        }

        videoHtml = `
        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; margin-bottom: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.2);">
            <iframe src="${embedUrl}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>`;
    }

    modalBody.innerHTML = `
        <span class="tag" style="margin-bottom: 12px; display: inline-block;">${data.category}</span>
        <h2 style="margin: 0 0 24px; font-size: 1.8rem;">${data.title}</h2>
        
        ${videoHtml}

        <p style="color: var(--text-muted); line-height: 1.7; margin-bottom: 16px; font-size: 1.05rem;">${data.description}</p>
        
        ${imagesHtml}

        <a href="${data.link}" target="_blank" class="btn btn-primary" style="margin-top: 10px; display: inline-block;">${data.linkText}</a>
    `;

    document.getElementById('project-modal').classList.add('show');
}

// Fungsi Menutup Modal Detail Proyek
function closeProject() {
    document.getElementById('project-modal').classList.remove('show');
    // Stop video playing by clearing innerHTML
    document.getElementById('modal-body').innerHTML = '';
}

// Lightbox Functions & State Management
function getImageItem(index) {
    if (!currentImages || currentImages.length === 0) return { src: '', title: '' };
    const item = currentImages[index];
    if (typeof item === 'string') {
        return { src: item, title: '' };
    }
    return {
        src: item.src || item.image || '',
        title: item.title || item.caption || ''
    };
}

function updateLightboxContent() {
    if (!currentImages || currentImages.length === 0) return;

    const item = getImageItem(currentImageIndex);
    const imgElem = document.getElementById('lightbox-img');
    const counterElem = document.getElementById('lightbox-counter');
    const titleElem = document.getElementById('lightbox-title');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    const thumbnailsContainer = document.getElementById('lightbox-thumbnails');

    // Update image source
    if (imgElem) {
        imgElem.src = item.src;
        imgElem.alt = item.title || 'Preview Gambar';
    }

    // Update counter & title caption
    if (counterElem) {
        counterElem.textContent = `${currentImageIndex + 1} / ${currentImages.length}`;
    }
    if (titleElem) {
        if (item.title) {
            titleElem.textContent = item.title;
            titleElem.style.display = 'block';
        } else {
            titleElem.textContent = '';
            titleElem.style.display = 'none';
        }
    }

    // Show/hide navigation arrows
    const showNav = currentImages.length > 1;
    if (prevBtn) prevBtn.style.display = showNav ? 'flex' : 'none';
    if (nextBtn) nextBtn.style.display = showNav ? 'flex' : 'none';

    // Render interactive thumbnails if multiple items
    if (thumbnailsContainer) {
        if (showNav) {
            let thumbsHtml = '';
            currentImages.forEach((imgObj, idx) => {
                const thumbItem = (typeof imgObj === 'string') ? imgObj : imgObj.src;
                const activeClass = (idx === currentImageIndex) ? 'active' : '';
                thumbsHtml += `<div class="lightbox-thumb ${activeClass}" onclick="setLightboxIndex(${idx}, event)">
                    <img src="${thumbItem}" alt="Thumbnail ${idx + 1}">
                </div>`;
            });
            thumbnailsContainer.innerHTML = thumbsHtml;
            thumbnailsContainer.style.display = 'flex';
        } else {
            thumbnailsContainer.innerHTML = '';
            thumbnailsContainer.style.display = 'none';
        }
    }
}

function setLightboxIndex(index, event) {
    if (event) event.stopPropagation();
    if (index >= 0 && index < currentImages.length) {
        currentImageIndex = index;
        updateLightboxContent();
    }
}

// Certificate Data Dictionary
const certDetails = {
    'practicum': [
        { src: 'assets/sertifikat/Koordinator Asisten Praktikum Pemrograman Gim.webp', title: 'Koordinator Asisten Praktikum Pemrograman Gim (Feb 2026 – Jul 2026)' },
        { src: 'assets/sertifikat/Koordinator Asisten Praktikum Pemrograman Multimedia Interaktif.webp', title: 'Koordinator Asisten Praktikum Pemrograman Multimedia Interaktif (Feb 2025 – Agu 2025)' },
        { src: 'assets/sertifikat/Koordinator Asisten Praktikum Pemrograman Web Interaktif 1.webp', title: 'Koordinator Asisten Praktikum Pemrograman Web Interaktif 1 (Sep 2024 – Jan 2025)' },
        { src: 'assets/sertifikat/Koordinator Asisten Praktikum Algoritma dan Pemrograman.webp', title: 'Koordinator Asisten Praktikum Algoritma & Pemrograman (Feb 2024 – Agu 2024)' }
    ],
    'unity': [
        { src: 'assets/sertifikat/Sertifikat_Magang_Unity Developer_Ivan Saputra (1).webp', title: 'Sertifikat Magang Unity Developer — PT Kawan Kerja' }
    ],
    'mbc': [
        { src: 'assets/sertifikat/ASISTEN MBC 20242025.webp', title: 'Sertifikat Asisten Research & People Development MBC Lab (2024–2025)' }
    ],
    'p2md': [
        { src: 'assets/sertifikat/P2MD_IVAN SAPUTRA.webp', title: 'Sertifikat Ketua Program Pemberdayaan Masyarakat Desa (P2MD) Kemendikbud RI' }
    ],
    'ieee': [
        { src: 'assets/sertifikat/SERTIFIKAT KEANGGOTAAN IEEE 2022.webp', title: 'Sertifikat Keanggotaan IEEE Student Branch (2022)' },
        { src: 'assets/sertifikat/Ivan Saputra ieee 2024_page-0001.webp', title: 'Sertifikat Kepengurusan IEEE Student Branch (2024)' }
    ],
    'himatredia': [
        { src: 'assets/sertifikat/Himatredia.webp', title: 'Sertifikat Pengurus HIMATREDIA — Staff HRD (2023–2024)' }
    ]
};

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox-overlay');
    updateLightboxContent();
    if (lightbox) lightbox.classList.add('show');
}

function openCertGallery(certData) {
    if (typeof certData === 'string' && certDetails[certData]) {
        currentImages = certDetails[certData];
    } else if (Array.isArray(certData)) {
        currentImages = certData;
    } else {
        currentImages = [];
    }
    currentImageIndex = 0;
    const lightbox = document.getElementById('lightbox-overlay');
    updateLightboxContent();
    if (lightbox) lightbox.classList.add('show');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox-overlay');
    if (lightbox) lightbox.classList.remove('show');
}

function changeLightboxImage(direction, event) {
    if (event) event.stopPropagation();
    if (!currentImages || currentImages.length <= 1) return;
    currentImageIndex = (currentImageIndex + direction + currentImages.length) % currentImages.length;
    updateLightboxContent();
}

// Global Keyboard Navigation (Arrow Keys & Escape)
document.addEventListener('keydown', function (e) {
    const lightbox = document.getElementById('lightbox-overlay');
    const projectModal = document.getElementById('project-modal');

    if (lightbox && lightbox.classList.contains('show')) {
        if (e.key === 'ArrowLeft') {
            changeLightboxImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeLightboxImage(1);
        } else if (e.key === 'Escape') {
            closeLightbox();
        }
    } else if (projectModal && projectModal.classList.contains('show')) {
        if (e.key === 'Escape') {
            closeProject();
        }
    }
});

// Touch Swipe Navigation for Mobile Devices
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('DOMContentLoaded', function () {
    const lightboxElem = document.getElementById('lightbox-overlay');
    if (lightboxElem) {
        lightboxElem.addEventListener('touchstart', function (e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        lightboxElem.addEventListener('touchend', function (e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }
});

function handleSwipe() {
    const lightbox = document.getElementById('lightbox-overlay');
    if (!lightbox || !lightbox.classList.contains('show')) return;
    const swipeThreshold = 40;
    if (touchEndX < touchStartX - swipeThreshold) {
        changeLightboxImage(1); // Swipe left -> Next
    } else if (touchEndX > touchStartX + swipeThreshold) {
        changeLightboxImage(-1); // Swipe right -> Prev
    }
}

// Menutup modal & lightbox jika area luar diklik
window.onclick = function (event) {
    const projectModal = document.getElementById('project-modal');
    const lightbox = document.getElementById('lightbox-overlay');
    const dialog = document.querySelector('.lightbox-dialog');

    if (event.target === projectModal) {
        closeProject();
    }
    if (event.target === lightbox) {
        closeLightbox();
    }
};