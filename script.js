// Database Studi Kasus Proyek (Case Studies Data)
const projectDetails = {
    'sibigo': {
        title: "SIBIGo — Interactive Sign Language App",
        category: "AI / ML & Web Application",
        description: "SIBIGo adalah aplikasi web penerjemah bahasa isyarat secara real-time berbasis AI. Sistem ini mengintegrasikan computer vision (MediaPipe) untuk ekstraksi landmark gerakan tangan dan model deep learning (LSTM) untuk mengklasifikasikan gestur menjadi teks secara akurat dan responsif.",
        video: "https://www.youtube.com/embed/67DpUm6uWpk",
        images: [
            "assets/images/sibigo/1.png",
            "assets/images/sibigo/2.png",
            "assets/images/sibigo/3.png"
        ],
        link: "https://github.com/Ivans0903/sibigo",
        linkText: "Lihat Repository GitHub &rarr;"
    },
    'cursealley': {
        title: "Curse Alley",
        category: "Game Development & ESP32",
        description: "Curse Alley adalah proyek game Arcade Bowling yang inovatif. Menggunakan Arduino dan ESP32 sebagai pengganti gamepad, game ini menghadirkan kontrol fisik yang imersif.",
        video: "https://www.youtube.com/watch?v=zbX9kiwdBh8",
        images: ["assets/images/cursealley/1.jpg",
            "assets/images/cursealley/2.jpg",
            "assets/images/cursealley/3.jpg",
            "assets/images/cursealley/4.jpg",
            "assets/images/cursealley/5.jpg"
        ],
        link: "https://ivans000.itch.io/curse-alley",
        linkText: "Lihat itch.io &rarr;"
    },
    'pawscape': {
        title: "PawScape",
        category: "Python & Unity",
        description: "Game menggunakan Python OpenCV dan Unity. Game ini menggunakan HandGesture dari Python lalu Unity menerima sinyal yang dikirimkan oleh Python sehingga bisa membuat game Interaksi yang menarik.",
        video: "https://www.youtube.com/watch?v=J9vVWBpwdbY",
        images: ["assets/images/pawscape/1.png",
            "assets/images/pawscape/2.png",
            "assets/images/pawscape/3.png"
        ],
        link: "https://ivans000.itch.io/pawscape",
        linkText: "Lihat itch.io &rarr;"
    },
    'wired': {
        title: "Wired Solution",
        category: "Unity",
        description: "Game ini dibuat dengan waktu 48 Jam di laksanakan di BINUS University Jakarta pada lomba Garena Game Jam 3 yang di selenggarakan oleh Garena Indonesia. Tim saya yaitu = Apapun Selain TA. Dengan anggota Ivan Saputra, Shedy Indra Maulana, Muhammad Raihan Ripaie.",
        video: "",
        images: ["assets/images/wired/1.jpg",
            "assets/images/wired/2.jpg",
            "assets/images/wired/3.jpg",
            "assets/images/wired/4.jpg",
            "assets/images/wired/5.jpg",
            "assets/images/wired/6.jpg"
        ],
        link: "https://ivans000.itch.io/wired-solution",
        linkText: "Lihat itch.io &rarr;"
    },
    'project5': {
        title: "Judul Proyek Ke-5",
        category: "Computer Vision",
        description: "Deskripsi rinci mengenai proyek computer vision kelima ini. Nantinya akan diisi dengan data dan penjelasan studi kasus yang mendalam.",
        video: "",
        images: ["assets/images/sibigo/1.png"],
        link: "#",
        linkText: "Segera Hadir &rarr;"
    },
    'project6': {
        title: "Judul Proyek Ke-6",
        category: "IoT System",
        description: "Deskripsi rinci mengenai proyek IoT System keenam ini. Nantinya akan diisi dengan data dan penjelasan studi kasus yang mendalam.",
        video: "",
        images: ["assets/images/sibigo/1.png"],
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

// Lightbox Functions
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox-overlay');
    
    // Default lightbox has multiple images from a project
    document.querySelector('.lightbox-prev').style.display = 'block';
    document.querySelector('.lightbox-next').style.display = 'block';
    
    document.getElementById('lightbox-img').src = currentImages[currentImageIndex];
    lightbox.classList.add('show');
}

// Certificate Lightbox Function
function openCertGallery(imagesArray) {
    currentImages = imagesArray;
    currentImageIndex = 0;
    
    // Hide arrows if only 1 certificate
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    if (currentImages.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    }

    const lightbox = document.getElementById('lightbox-overlay');
    document.getElementById('lightbox-img').src = currentImages[currentImageIndex];
    lightbox.classList.add('show');
}

function closeLightbox() {
    document.getElementById('lightbox-overlay').classList.remove('show');
}

function changeLightboxImage(direction, event) {
    event.stopPropagation();
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = currentImages.length - 1;
    if (currentImageIndex >= currentImages.length) currentImageIndex = 0;
    document.getElementById('lightbox-img').src = currentImages[currentImageIndex];
}

// Menutup modal & lightbox jika area luar diklik
window.onclick = function (event) {
    const projectModal = document.getElementById('project-modal');
    const lightbox = document.getElementById('lightbox-overlay');

    if (event.target === projectModal) {
        closeProject();
    }
    if (event.target === lightbox) {
        closeLightbox();
    }
};