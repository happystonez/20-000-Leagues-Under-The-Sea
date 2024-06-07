document.addEventListener('DOMContentLoaded', function() {
    const plotContainer = document.getElementById('plot-container');
    
    chapters.forEach(chapter => {
        const plotBox = document.createElement('div');
        plotBox.className = 'plot-box';
        
        const plotTitle = document.createElement('div');
        plotTitle.className = 'plot-title';
        plotTitle.textContent = `${chapter.number}. ${chapter.title}`;
        plotTitle.onclick = () => {
            const plotDetails = plotBox.querySelector('.plot-details');
            plotDetails.style.display = plotDetails.style.display === 'block' ? 'none' : 'block';
        };
        
        const plotDetails = document.createElement('div');
        plotDetails.className = 'plot-details';
        plotDetails.innerHTML = `<strong>Time:</strong> ${chapter.time}<br>${chapter.plot}`;
        
        plotBox.appendChild(plotTitle);
        plotBox.appendChild(plotDetails);
        plotContainer.appendChild(plotBox);
    });
});
