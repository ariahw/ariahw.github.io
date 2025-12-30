// Responsive chart fallback system
(function() {
    const MOBILE_BREAKPOINT = 768; // pixels
    
    function isMobile() {
        return window.innerWidth <= MOBILE_BREAKPOINT;
    }
    
    function createResponsiveChart(container, plotlyConfig, fallbackImagePath) {
        if (isMobile() && fallbackImagePath) {
            // Show PNG fallback on mobile
            container.innerHTML = `<img src="${fallbackImagePath}" alt="Chart" style="width: 100%; height: auto; max-width: 100%;">`;
        } else {
            // Show Plotly chart on desktop
            if (typeof Plotly !== 'undefined' && plotlyConfig) {
                Plotly.newPlot(container, plotlyConfig.data, plotlyConfig.layout, plotlyConfig.config);
            }
        }
    }
    
    function handleResize() {
        // Re-render charts on window resize if crossing breakpoint
        const chartContainers = document.querySelectorAll('[data-responsive-chart]');
        chartContainers.forEach(container => {
            const plotlyConfig = window.chartConfigs && window.chartConfigs[container.id];
            const fallbackImage = container.dataset.fallbackImage;
            createResponsiveChart(container, plotlyConfig, fallbackImage);
        });
    }
    
    // Initialize on DOM ready
    document.addEventListener('DOMContentLoaded', function() {
        const chartContainers = document.querySelectorAll('[data-responsive-chart]');
        chartContainers.forEach(container => {
            const plotlyConfig = window.chartConfigs && window.chartConfigs[container.id];
            const fallbackImage = container.dataset.fallbackImage;
            createResponsiveChart(container, plotlyConfig, fallbackImage);
        });
    });
    
    // Handle window resize with debouncing
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(handleResize, 250);
    });
    
    // Expose utility functions
    window.ResponsiveCharts = {
        isMobile: isMobile,
        createChart: createResponsiveChart
    };
})();