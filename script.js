// System Component Databases
const CPUS = [
    { n: 'Intel Core i9-14900K', s: 100, cores: 24, match: 'i9' },
    { n: 'Intel Core i7-14700K', s: 95, cores: 20, match: 'i7' },
    { n: 'Intel Core i5-14600K', s: 90, cores: 14, match: 'i5' },
    { n: 'Intel Core i9-13900K', s: 98, cores: 24, match: 'i9' },
    { n: 'Intel Core i7-13700K', s: 92, cores: 16, match: 'i7' },
    { n: 'Intel Core i5-13600K', s: 87, cores: 14, match: 'i5' },
    { n: 'Intel Core i5-13400F', s: 80, cores: 10, match: 'i5' },
    { n: 'Intel Core i9-12900K', s: 90, cores: 16, match: 'i9' },
    { n: 'Intel Core i7-12700K', s: 85, cores: 12, match: 'i7' },
    { n: 'Intel Core i5-12600K', s: 80, cores: 10, match: 'i5' },
    { n: 'Intel Core i5-12400', s: 73, cores: 6, match: 'i5' },
    { n: 'Intel Core i3-12100', s: 65, cores: 4, match: 'i3' },
    { n: 'AMD Ryzen 9 7950X', s: 99, cores: 16, match: 'Ryzen 9' },
    { n: 'AMD Ryzen 9 7900X', s: 94, cores: 12, match: 'Ryzen 9' },
    { n: 'AMD Ryzen 7 7800X3D', s: 98, cores: 8, match: 'Ryzen 7' },
    { n: 'AMD Ryzen 7 7700X', s: 90, cores: 8, match: 'Ryzen 7' },
    { n: 'AMD Ryzen 5 7600X', s: 84, cores: 6, match: 'Ryzen 5' },
    { n: 'AMD Ryzen 9 5950X', s: 88, cores: 16, match: 'Ryzen 9' },
    { n: 'AMD Ryzen 7 5800X3D', s: 92, cores: 8, match: 'Ryzen 7' },
    { n: 'AMD Ryzen 7 5800X', s: 82, cores: 8, match: 'Ryzen 7' },
    { n: 'AMD Ryzen 5 5600X', s: 76, cores: 6, match: 'Ryzen 5' },
    { n: 'Intel Core i7-10700K', s: 70, cores: 8, match: 'i7' },
    { n: 'Intel Core i5-10400F', s: 60, cores: 6, match: 'i5' },
    { n: 'AMD Ryzen 5 3600', s: 65, cores: 6, match: 'Ryzen 5' },
    { n: 'Older / Entry CPU (Quad Core)', s: 45, cores: 4, match: 'Intel' }
];

const GPUS = [
    { n: 'NVIDIA RTX 4090', s: 100, memory: '24GB' },
    { n: 'NVIDIA RTX 4080 Super', s: 88, memory: '16GB' },
    { n: 'NVIDIA RTX 4070 Ti', s: 78, memory: '12GB' },
    { n: 'NVIDIA RTX 4070', s: 68, memory: '12GB' },
    { n: 'NVIDIA RTX 4060 Ti', s: 60, memory: '8GB' },
    { n: 'NVIDIA RTX 4060', s: 52, memory: '8GB' },
    { n: 'NVIDIA RTX 3090', s: 82, memory: '24GB' },
    { n: 'NVIDIA RTX 3080', s: 75, memory: '10GB' },
    { n: 'NVIDIA RTX 3070', s: 65, memory: '8GB' },
    { n: 'NVIDIA RTX 3060 Ti', s: 58, memory: '8GB' },
    { n: 'NVIDIA RTX 3060', s: 50, memory: '12GB' },
    { n: 'NVIDIA RTX 2080 Ti', s: 68, memory: '11GB' },
    { n: 'NVIDIA RTX 2070 Super', s: 56, memory: '8GB' },
    { n: 'NVIDIA RTX 2060', s: 45, memory: '6GB' },
    { n: 'NVIDIA GTX 1660 Ti', s: 36, memory: '6GB' },
    { n: 'NVIDIA GTX 1080 Ti', s: 52, memory: '11GB' },
    { n: 'NVIDIA GTX 1060', s: 30, memory: '6GB' },
    { n: 'AMD RX 7900 XTX', s: 95, memory: '24GB' },
    { n: 'AMD RX 7900 XT', s: 85, memory: '20GB' },
    { n: 'AMD RX 7800 XT', s: 72, memory: '16GB' },
    { n: 'AMD RX 7600', s: 50, memory: '8GB' },
    { n: 'AMD RX 6800 XT', s: 75, memory: '16GB' },
    { n: 'AMD RX 6700 XT', s: 60, memory: '12GB' },
    { n: 'AMD RX 6600 XT', s: 48, memory: '8GB' },
    { n: 'AMD RX 5700 XT', s: 52, memory: '8GB' },
    { n: 'AMD RX 580', s: 25, memory: '8GB' },
    { n: 'Integrated Graphics / ApU', s: 15, memory: 'Shared' }
];

const RAMS = [
    { n: '8GB or less', val: 8 },
    { n: '16GB DDR4/DDR5', val: 16 },
    { n: '32GB DDR4/DDR5', val: 32 },
    { n: '64GB+ DDR5', val: 64 },
];

const STORAGES = [
    { n: '5400/7200 RPM HDD', val: 'hdd' },
    { n: 'SATA III SSD', val: 'sata' },
    { n: 'NVMe Gen3/Gen4 SSD', val: 'nvme' }
];

// Populates Options
function populate() {
    const manCpu = document.getElementById('man-cpu');
    const manGpu = document.getElementById('man-gpu');
    const manRam = document.getElementById('man-ram');
    const manStorage = document.getElementById('man-storage');

    const detCpu = document.getElementById('det-sel-cpu');
    const detGpu = document.getElementById('det-sel-gpu');
    const detRam = document.getElementById('det-sel-ram');
    const detStorage = document.getElementById('det-sel-storage');

    CPUS.forEach((c, i) => {
        manCpu.add(new Option(c.n, i));
        detCpu.add(new Option(c.n, i));
    });
    GPUS.forEach((g, i) => {
        manGpu.add(new Option(g.n, i));
        detGpu.add(new Option(g.n, i));
    });
    RAMS.forEach((r, i) => {
        manRam.add(new Option(r.n, i));
        detRam.add(new Option(r.n, i));
    });
    STORAGES.forEach((s, i) => {
        manStorage.add(new Option(s.n, i));
        detStorage.add(new Option(s.n, i));
    });

    // Default Selections
    manCpu.value = CPUS.findIndex(c => c.n.includes('i5-13600K'));
    manGpu.value = GPUS.findIndex(g => {
        if (g.n.includes('RTX 4070')) return true;
        if (g.n.includes('RTX 3070')) return true;
        return false;
    });
    manRam.value = 1; // 16GB
    manStorage.value = 2; // NVMe
}

document.addEventListener('DOMContentLoaded', () => {
    populate();

    // Tabs
    const tabs = document.querySelectorAll('.bn-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', e => {
            tabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.bn-tab-content').forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
        });
    });

    // Auto Detect Logic
    document.getElementById('btn-detect').addEventListener('click', () => {
        const btn = document.getElementById('btn-detect');
        btn.textContent = 'Detecting...';
        btn.disabled = true;

        setTimeout(() => {
            const cores = navigator.hardwareConcurrency || 4;
            const ram = navigator.deviceMemory || 8;
            let gpuInfo = "Unknown Graphics";

            // WebGL detection
            try {
                const canvas = document.createElement('canvas');
                let gl = canvas.getContext('webgl');
                if (!gl) {
                    gl = canvas.getContext('experimental-webgl');
                }
                if (gl) {
                    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                    if (debugInfo) {
                        gpuInfo = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
                    }
                }
            } catch (e) { }

            // Match GPU roughly to get estimated VRAM
            const gpuLower = gpuInfo.toLowerCase();
            let matchedGpu = GPUS.findIndex(g => {
                let simpleName = g.n.toLowerCase().replace('nvidia rtx ', '').replace('nvidia gtx ', '').replace('amd rx ', '');
                return gpuLower.includes(simpleName);
            });
            if (matchedGpu === -1) matchedGpu = GPUS.length - 1; // fallback integrated

            // Match CPU roughly by cores
            let matchedCpu = CPUS.findIndex(c => c.cores === cores);
            if (matchedCpu === -1) {
                if (cores >= 16) matchedCpu = CPUS.findIndex(c => c.n.includes('i9-13900K'));
                else if (cores >= 8) matchedCpu = CPUS.findIndex(c => c.n.includes('i7-12700K'));
                else if (cores >= 6) matchedCpu = CPUS.findIndex(c => c.n.includes('Ryzen 5 5600X'));
                else matchedCpu = CPUS.length - 1;
            }

            // Match RAM roughly
            let matchedRam = RAMS.findIndex(r => ram <= r.val);
            if (ram >= 8) matchedRam = 1; // Defaulting to 16GB for modern systems if capped
            if (matchedRam === -1) matchedRam = RAMS.length - 1;

            // Screen Detection
            const screenW = window.screen.width;
            let matchedRes = '1080';
            if (screenW >= 3840) matchedRes = '2160';
            else if (screenW >= 2560) matchedRes = '1440';

            // Storage
            let matchedStorage = 2;

            document.getElementById('det-sel-cpu').value = matchedCpu;
            document.getElementById('det-sel-gpu').value = matchedGpu;
            document.getElementById('det-sel-ram').value = matchedRam;
            document.getElementById('det-sel-storage').value = matchedStorage;
            document.getElementById('det-sel-res').value = matchedRes;
            document.getElementById('det-sel-use').value = 'gaming';

            document.getElementById('auto-results').style.display = 'block';
            btn.textContent = 'Specs Fetched!';

            // Sync to manual as well for fallback
            document.getElementById('man-cpu').value = matchedCpu;
            document.getElementById('man-gpu').value = matchedGpu;
            document.getElementById('man-ram').value = matchedRam;
            document.getElementById('man-storage').value = matchedStorage;
            document.getElementById('man-res').value = matchedRes;

        }, 800);
    });

    // Calculate Logic
    document.getElementById('btn-man-calc').addEventListener('click', calculateScore);
    document.getElementById('btn-auto-calc').addEventListener('click', calculateScore);
});

function calculateScore() {
    const isAutoTab = document.querySelector('.bn-tab.active').dataset.tab === 'auto';
    const prefix = isAutoTab ? 'det-sel-' : 'man-';

    const cpuIdx = document.getElementById(prefix + 'cpu').value || 0;
    const gpuIdx = document.getElementById(prefix + 'gpu').value || 0;
    const ramIdx = document.getElementById(prefix + 'ram').value || 0;
    const storageIdx = document.getElementById(prefix + 'storage').value || 2;
    const res = document.getElementById(prefix + 'res').value || '1440';
    const use = document.getElementById(prefix + 'use').value || 'gaming';

    const cpu = CPUS[cpuIdx];
    const gpu = GPUS[gpuIdx];
    const ram = RAMS[ramIdx];
    const storage = STORAGES[storageIdx];

    let resScale = 1.0;
    if (res === '1080') resScale = 0.65;
    if (res === '2160') resScale = 1.6;

    let cpuEff = cpu.s;
    let gpuEff = gpu.s / resScale;

    if (use === 'render') {
        cpuEff = cpuEff * 1.1;
    }

    const maxE = Math.max(cpuEff, gpuEff);
    const minE = Math.min(cpuEff, gpuEff);
    let bnPct = Math.round((1 - (minE / maxE)) * 100);

    let ramPenalty = 0;
    let storagePenalty = 0;

    let applyRamPenalty = false;
    if (ram.val < 16) {
        if (use === 'gaming') applyRamPenalty = true;
        if (use === 'render') applyRamPenalty = true;
    }

    if (applyRamPenalty) {
        ramPenalty = 15;
        bnPct += ramPenalty;
    }

    if (storage.val === 'hdd') {
        storagePenalty = 10;
        bnPct += storagePenalty;
    }

    bnPct = Math.min(bnPct, 100);

    let mainCulprit = '';
    if (cpuEff < gpuEff) mainCulprit = 'CPU';
    else mainCulprit = 'GPU';

    document.getElementById('bn-result').style.display = 'block';
    
    // Extensions don't like scrollIntoView smoothly sometimes if scroll is small, but it's safe to keep.
    try {
        document.getElementById('bn-result').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch(e){}

    const valEl = document.getElementById('res-val');
    const descEl = document.getElementById('res-desc');
    const fillEl = document.getElementById('res-fill');

    valEl.textContent = bnPct + '%';

    let color = '#10b981';
    if (bnPct > 15) color = '#f59e0b';
    if (bnPct > 35) color = '#ef4444';

    valEl.style.background = `-webkit-linear-gradient(45deg, ${color}, #000)`;
    valEl.style.webkitBackgroundClip = 'text';
    fillEl.style.background = color;
    fillEl.style.width = bnPct + '%';

    let verdictHtml = '';

    if (bnPct < 10) {
        descEl.textContent = 'Perfectly Balanced Setup (0-10%)';
        descEl.style.color = '#10b981';
        verdictHtml = `<p>Your system components work great together. The ${cpu.n} and ${gpu.n} are perfectly matched for your selected use case. No upgrades required.</p>`;
    } else if (bnPct <= 20) {
        descEl.textContent = 'Slight Imbalance (10-20%)';
        descEl.style.color = '#10b981';
        verdictHtml = `<p>There is a very slight bottleneck of ${bnPct}%. This is completely normal and won't severely affect your experience.</p>`;
    } else if (bnPct <= 40) {
        descEl.textContent = `Moderate ${mainCulprit} Bottleneck`;
        descEl.style.color = '#f59e0b';
        verdictHtml = `<p>Your <b>${mainCulprit}</b> is somewhat holding back your system. In demanding tasks, your ${mainCulprit === 'CPU' ? 'GPU' : 'CPU'} is waiting for data to process. Upgrading your ${mainCulprit} could yield a noticeable boost.</p>`;
    } else {
        descEl.textContent = `Severe ${mainCulprit} Bottleneck`;
        descEl.style.color = '#ef4444';
        verdictHtml = `<p>Your <b>${mainCulprit}</b> is severely underpowered compared to the rest of the system. You are leaving significant performance on the table. A ${mainCulprit} upgrade is highly recommended.</p>`;
    }

    document.getElementById('res-cpu-name').textContent = cpu.n;
    document.getElementById('res-gpu-name').textContent = gpu.n;
    document.getElementById('res-ram-name').textContent = ram.n;
    document.getElementById('res-storage-name').textContent = storage.n;

    const cpuStatus = document.getElementById('res-cpu-status');
    const gpuStatus = document.getElementById('res-gpu-status');

    cpuStatus.className = 'bn-comp-status';
    gpuStatus.className = 'bn-comp-status';

    if (bnPct > 20) {
        if (mainCulprit === 'CPU') {
            cpuStatus.classList.add('status-danger');
            cpuStatus.textContent = 'Bottleneck';
            gpuStatus.classList.add('status-warn');
            gpuStatus.textContent = 'Underutilized';
        } else {
            gpuStatus.classList.add('status-danger');
            gpuStatus.textContent = 'Bottleneck';
            cpuStatus.classList.add('status-warn');
            cpuStatus.textContent = 'Underutilized';
        }
    } else {
        cpuStatus.classList.add('status-ok');
        cpuStatus.textContent = 'Balanced';
        gpuStatus.classList.add('status-ok');
        gpuStatus.textContent = 'Balanced';
    }

    const ramStatus = document.getElementById('res-ram-status');
    ramStatus.className = 'bn-comp-status';
    if (ramPenalty > 0) {
        ramStatus.classList.add('status-danger');
        ramStatus.textContent = 'Insufficient Memory Limit';
        verdictHtml += `<p style='color:#ef4444; font-weight:600; margin-top:10px;'>RAM Warning: ${ram.n} is causing system stuttering and disk-swapping in demanding applications. Upgrade to 16GB immediately.</p>`;
    } else {
        ramStatus.classList.add('status-ok');
        ramStatus.textContent = 'Sufficient';
    }

    const storageStatus = document.getElementById('res-storage-status');
    storageStatus.className = 'bn-comp-status';
    if (storagePenalty > 0) {
        storageStatus.classList.add('status-danger');
        storageStatus.textContent = 'Slow Load Times Limit';
        verdictHtml += `<p style='color:#ef4444; font-weight:600; margin-top:10px;'>Storage Warning: Traditional HDDs cause micro-stutters and drastically slow down asset streaming. Consider an SSD.</p>`;
    } else {
        storageStatus.classList.add('status-ok');
        storageStatus.textContent = 'Optimal Speed';
    }

    document.getElementById('res-verdict').innerHTML = verdictHtml;
}
