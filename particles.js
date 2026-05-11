const container = document.getElementById('particles');
for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        --dur: ${3 + Math.random() * 5}s;
        --delay: ${Math.random() * 6}s;
        --op: ${0.15 + Math.random() * 0.35};
        width: ${1 + Math.random()}px;
        height: ${1 + Math.random()}px;
    `;
    container.appendChild(p);
}