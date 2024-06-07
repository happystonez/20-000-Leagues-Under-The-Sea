document.addEventListener('DOMContentLoaded', function() {
    const plotContainer = document.getElementById('plot-container');
    
    // Assuming data.js exports an array of plot objects
    const plots = [
        { id: 1, title: "Chapter 1", details: "Plot details for Chapter 1..." },
        { id: 2, title: "Chapter 2", details: "Plot details for Chapter 2..." },
        { id: 3, title: "Chapter 3", details: "Plot details for Chapter 3..." },
        { id: 4, title: "Chapter 4", details: "Plot details for Chapter 4..." },
        { id: 5, title: "Chapter 5", details: "Plot details for Chapter 5..." },
        { id: 6, title: "Chapter 6", details: "Plot details for Chapter 6..." },
        { id: 7, title: "Chapter 7", details: "Plot details for Chapter 7..." },
        { id: 8, title: "Chapter 8", details: "Plot details for Chapter 8..." },
        { id: 9, title: "Chapter 9", details: "Plot details for Chapter 9..." }
    ];
    
    plots.forEach(plot => {
        const plotBox = document.createElement('div');
        plotBox.className = 'plot-box';
        plotBox.textContent = plot.title;
        plotBox.onclick = () => alert(plot.details);
        plotContainer.appendChild(plotBox);
    });
});


