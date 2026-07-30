// Database Studi Kasus Proyek (Case Studies Data)
const projectDetails = {
    'project-1': {
        title: "Keyboard Warrior: Heat Beat Mishap",
        category: "Unity / C# Game Development",
        problem: "Menciptakan game pemetik ritme yang mampu menggabungkan mekanik kecepatan ketik keyboard dengan dinamika audio-visual interaktif.",
        role: "Game Developer (Research Assistant)",
        process: "Merancang logika kontrol input menggunakan C#, menyusun feedback visual pada canvas Unity, serta melakukan optimasi audio sync.",
        solution: "Game prototype interaktif dengan respon kontrol latensi rendah dan antarmuka intuitif.",
        link: "https://ivans000.itch.io"
    },
    'project-2': {
        title: "NekoInu",
        category: "Unity / Multimedia Application",
        problem: "Mengembangkan mekanik gameplay unik yang memadukan karakter ganda dengan interaksi lingkungan dinamis.",
        role: "Lead Unity Developer",
        process: "Penyusunan arsitektur C# modular, pengujian kontrol mekanik, serta integrasi visual asset ke dalam scene Unity.",
        solution: "Game playable yang stabil dengan umpan balik visual yang memuaskan.",
        link: "https://ivans000.itch.io"
    },
    'project-3': {
        title: "SIBIGo — Interactive Sign Language App",
        category: "AI / ML & Web Application",
        problem: "Kurangnya platform interaktif untuk mempelajari bahasa isyarat SIBI secara real-time.",
        role: "AI / ML Developer",
        process: "Ekstraksi titik landmark tangan menggunakan MediaPipe, dilanjutkan dengan pelatihan model LSTM untuk klasifikasi gerak isyarat secara presisi.",
        solution: "Aplikasi web interaktif dengan akurasi pengenalan isyarat yang tinggi secara real-time.",
        link: "https://github.com/Ivans0903"
    },
    'project-4': {
        title: "Garena Game Jam 2 Prototype",
        category: "Rapid Game Prototyping",
        problem: "Membangun game fungsional dan utuh dari awal dalam batas waktu ketat 45 jam.",
        role: "Gameplay Programmer",
        process: "Perancangan mekanik cepat, manajemen alur kerja tim, dan penyesuaian logika C# secara intensif.",
        solution: "Berhasil menyelesaikan dan mendemonstrasikan game fungsional sesuai tenggat waktu kompetisi.",
        link: "https://ivans000.itch.io"
    }
};

// Fungsi Membuka Modal Detail Proyek (Multi-page feel)
function openProject(projectId) {
    const data = projectDetails[projectId];
    if (!data) return;

    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <span class="tag">${data.category}</span>
        <h2 style="margin: 10px 0 20px;">${data.title}</h2>
        
        <div style="margin-bottom: 20px;">
            <h4>Latar Belakang & Masalah:</h4>
            <p style="color: var(--text-muted);">${data.problem}</p>
        </div>

        <div style="margin-bottom: 20px;">
            <h4>Peran Saya:</h4>
            <p style="color: var(--text-muted);">${data.role}</p>
        </div>

        <div style="margin-bottom: 20px;">
            <h4>Proses Pengerjaan:</h4>
            <p style="color: var(--text-muted);">${data.process}</p>
        </div>

        <div style="margin-bottom: 25px;">
            <h4>Solusi & Hasil:</h4>
            <p style="color: var(--text-muted);">${data.solution}</p>
        </div>

        <a href="${data.link}" target="_blank" class="btn btn-primary">Mainkan di Itch.io / Repository &rarr;</a>
    `;

    document.getElementById('project-modal').style.display = 'flex';
}

// Fungsi Menutup Modal Detail Proyek
function closeProject() {
    document.getElementById('project-modal').style.display = 'none';
}

// Menutup modal jika area luar diklik
window.onclick = function (event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};