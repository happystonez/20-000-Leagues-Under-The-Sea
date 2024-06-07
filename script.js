// 创建地图
const map = L.map('map').setView([20, 0], 2);

// 添加地图瓦片层
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// 遍历 oceanRegions 数据并添加标记
oceanRegions.forEach(region => {
    const marker = L.marker(region.coords).addTo(map)
        .bindPopup(`<b>${region.name}</b><br>${region.description}<br><img src="oceanRegions/${region.image}" width="200px">`);
});

// 获取章节列表的容器
const chapterList = document.getElementById('chapter-list');

// 遍历 chapters 数据并生成章节列表
chapters.forEach(chapter => {
    const chapterDiv = document.createElement('div');
    const chapterTitle = document.createElement('div');
    const chapterContent = document.createElement('div');

    chapterTitle.textContent = `${chapter.number}. ${chapter.title}`;
    chapterTitle.className = 'chapter-title';
    chapterContent.className = 'chapter-content';

    chapterContent.innerHTML = `
        <p><strong>Time:</strong> ${chapter.time}</p>
        <p><strong>Plot:</strong> ${chapter.plot}</p>
    `;

    chapterTitle.addEventListener('click', () => {
        const isVisible = chapterContent.style.display === 'block';
        chapterContent.style.display = isVisible ? 'none' : 'block';
    });

    chapterDiv.appendChild(chapterTitle);
    chapterDiv.appendChild(chapterContent);
    chapterList.appendChild(chapterDiv);
});
