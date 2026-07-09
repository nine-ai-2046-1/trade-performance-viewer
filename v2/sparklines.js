/**
 * Lightweight sparkline implementation for trading calendar
 * Rollback: Remove this script tag from index-2.html
 */

(function() {
  'use strict';

  /**
   * Draw a sparkline in a canvas element
   * @param {HTMLCanvasElement} canvas - Canvas element
   * @param {number[]} data - Array of values
   * @param {string} color - Line color
   */
  function drawSparkline(canvas, data, color) {
    if (!canvas || !data || data.length === 0) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Find min/max for scaling
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;

    // Draw line
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    data.forEach((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((value - min) / range) * (height - 4) - 2;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();

    // Draw endpoint dot
    const lastX = width;
    const lastY = height - ((data[data.length - 1] - min) / range) * (height - 4) - 2;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(lastX - 2, lastY, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  /**
   * Create sparkline canvas element
   * @param {number[]} data - Array of values
   * @param {boolean} isPositive - Whether trend is positive
   * @returns {HTMLCanvasElement}
   */
  function createSparklineCanvas(data, isPositive) {
    const canvas = document.createElement('canvas');
    canvas.width = 60;
    canvas.height = 20;
    canvas.className = 'sparkline-canvas';
    
    const color = isPositive ? '#00d4aa' : '#ff4757';
    drawSparkline(canvas, data, color);
    
    return canvas;
  }

  /**
   * Get historical P/L data for sparkline from calendarData
   * @param {string} dateKey - Current date key (YYYY-MM-DD)
   * @param {number} days - Number of historical days
   * @returns {number[]}
   */
  function getHistoricalPL(dateKey, days) {
    if (typeof calendarData === 'undefined') return [];
    
    const [year, month, day] = dateKey.split('-').map(Number);
    const data = [];
    
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(year, month - 1, day - i);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      
      if (calendarData[key]) {
        data.push(calendarData[key].total);
      } else {
        data.push(0);
      }
    }
    
    return data;
  }

  /**
   * Add sparklines to all calendar cells
   */
  function addSparklines() {
    const cells = document.querySelectorAll('.date-cell:not(.other-month)');
    
    cells.forEach(cell => {
      const dateNum = cell.querySelector('.date-number');
      if (!dateNum) return;
      
      const day = parseInt(dateNum.textContent);
      const monthHeader = document.querySelector('.month-header');
      if (!monthHeader) return;
      
      // Extract year and month from month header text
      const monthText = monthHeader.textContent;
      const monthMatch = monthText.match(/(\w+)\s+(\d{4})/);
      if (!monthMatch) return;
      
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                         'July', 'August', 'September', 'October', 'November', 'December'];
      const monthIndex = monthNames.indexOf(monthMatch[1]) + 1;
      const year = parseInt(monthMatch[2]);
      
      const dateKey = `${year}-${String(monthIndex).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const data = getHistoricalPL(dateKey, 5);
      
      if (data.length > 1) {
        const total = data.reduce((a, b) => a + b, 0);
        const container = document.createElement('div');
        container.className = 'sparkline-container';
        container.appendChild(createSparklineCanvas(data, total >= 0));
        cell.appendChild(container);
      }
    });
  }

  // Initialize sparklines after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addSparklines);
  } else {
    // Delay slightly to ensure calendar is rendered
    setTimeout(addSparklines, 100);
  }

  // Expose for manual refresh if needed
  window.refreshSparklines = addSparklines;
})();
