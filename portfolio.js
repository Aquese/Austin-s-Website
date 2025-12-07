// Data
const techStack = [
    { name: 'Aquese', desc: 'AI-Automated Security Compliance Platform', icon: '🤖', tags: ['AI/ML', 'Compliance', 'Automation'] },
    { name: 'ZScaler', desc: 'Zero Trust Network Access', icon: '🌐', tags: ['ZTNA', 'Cloud Security', 'SWG'] },
    { name: 'CrowdStrike', desc: 'Endpoint Detection & Response', icon: '🦅', tags: ['EDR', 'Threat Intel', 'XDR'] },
    { name: 'Fusion NG-SIEM', desc: 'Next-Gen SIEM', icon: '🔍', tags: ['SIEM', 'Log Analysis', 'Correlation'] },
    { name: 'Rapid7', desc: 'Vulnerability Management', icon: '🎯', tags: ['VM', 'Pen Testing', 'InsightVM'] },
    { name: 'Terraform', desc: 'Infrastructure as Code', icon: '🏗️', tags: ['IaC', 'Multi-Cloud', 'Automation'] },
    { name: 'Docker', desc: 'Container Platform', icon: '🐋', tags: ['Containers', 'Microservices', 'DevOps'] },
    { name: 'Kubernetes', desc: 'Container Orchestration', icon: '☸️', tags: ['K8s', 'Orchestration', 'Scaling'] }
];

const experience = [
    {
        title: 'System Administrator - AI & Security',
        company: 'Fuel Cycle',
        period: '2025 - Present',
        points: [
            'Lead, investigate, and triage security operations and alerts through Rapid7, CrowdStrike, and ZScaler',
            'Configure SAML/SCIM for applications and maintain workflows in Okta',
            'Audit infrastructure for security improvements and implement solutions',
            'Lead AI research, deployment, and AI security such as connectors, MCP, RAG',
            'Maintain and perform migrations/upgrades to cloud infrastructure',
            'Integrate and build out AWS and Azure infrastructure for IT projects and data connectors for SecOps'
        ]
    },
    {
        title: 'Systems Administrator',
        company: 'Advanced Networks',
        period: '2024 - 2025',
        points: [
            'Manage servers, infrastructure, and networks for diverse enterprise clients',
            'Create operational and technical procedures for daily IT tasks',
            'Develop infrastructure reports and monitor for alerts and outages',
            'Implement security hardening and compliance frameworks'
        ]
    },
    {
        title: 'IT Technician',
        company: 'Skydance Interactive',
        period: '2023 - 2024',
        points: [
            'Provisioned user access using Okta, Active Directory, and Jenkins',
            'Managed onboarding/offboarding procedures',
            'Troubleshot infrastructure, VPN, and endpoint issues'
        ]
    },
    {
        title: 'IT Helpdesk Analyst',
        company: 'James Perse',
        period: '2022 - 2023',
        points: [
            'Managed and prioritized help desk tickets',
            'Utilized Spiceworks and ManageEngine for troubleshooting'
        ]
    }
];

const projects = [
    {
        num: '01',
        name: 'Natols',
        desc: 'Self-hosted AI financial analysis software providing intelligent insights, automated reporting, and real-time market analysis for enterprise financial operations.',
        tech: ['AI/ML', 'Financial Analysis', 'Self-Hosted', 'Analytics']
    },
    {
        num: '02',
        name: 'Pyzuh',
        desc: 'Open-source Python library for Wazuh API communication, enabling automated security monitoring.',
        tech: ['Python', 'Wazuh', 'API', 'Security']
    },
    {
        num: '03',
        name: 'Lilium Enterprise',
        desc: 'Enterprise infrastructure for testing and deployment with on-prem servers and cloud backup.',
        tech: ['VMware', 'Cloud', 'Backup', 'DR']
    },
    {
        num: '04',
        name: 'Ansible Automation',
        desc: 'Comprehensive playbooks for VM builds, patch management, and configuration standardization.',
        tech: ['Ansible', 'IaC', 'Automation', 'DevOps']
    }
];

const certs = [
    { name: 'SSCP', org: '(ISC)²', full: 'Systems Security Certified Professional' },
    { name: 'CySA+', org: 'CompTIA', full: 'Cybersecurity Analyst' },
    { name: 'Security+', org: 'CompTIA', full: 'Security Certification' },
    { name: 'Network+', org: 'CompTIA', full: 'Network Infrastructure' },
    { name: 'Pentest+', org: 'CompTIA', full: 'Penetration Testing' }
];

// Loading Animation
let progress = 0;
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const loader = document.getElementById('loader');
const mainContent = document.getElementById('mainContent');

const loadingInterval = setInterval(() => {
    progress += Math.random() * 5 + 2;
    if (progress > 100) progress = 100;
    
    progressBar.style.width = progress + '%';
    progressText.textContent = Math.floor(progress) + '%';
    
    if (progress >= 100) {
        clearInterval(loadingInterval);
        setTimeout(() => {
            loader.style.display = 'none';
            mainContent.style.display = 'block';
            initMatrixEffect();
            renderContent();
        }, 500);
    }
}, 30);

// Matrix Effect
function initMatrixEffect() {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(5, 8, 16, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';
        
        drops.forEach((y, i) => {
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, i * fontSize, y * fontSize);
            
            if (y * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        });
    }
    
    setInterval(draw, 35);
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Render Content
function renderContent() {
    // Tech Stack
    const techStackContainer = document.getElementById('techStack');
    if (techStackContainer) {
        techStackContainer.innerHTML = techStack.map(tech => `
            <div class="group relative bg-[#0d1117] border-2 border-[#1f2937] rounded-2xl p-8 hover:border-[#00ff9d] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_8px_30px_rgba(0,255,157,0.15)]">
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00ff9d] to-[#00d4ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl"></div>
                <div class="text-5xl mb-6">${tech.icon}</div>
                <h3 class="text-xl font-bold mb-3">${tech.name}</h3>
                <p class="text-sm text-[#b8c5db] mb-6 leading-relaxed min-h-[40px]">${tech.desc}</p>
                <div class="flex flex-wrap gap-2">
                    ${tech.tags.map(tag => `<span class="px-3 py-1.5 text-xs font-semibold bg-[#00ff9d]/10 border border-[#00ff9d]/30 text-[#00ff9d] rounded-md">${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }
    
    // Experience
    const experienceContainer = document.getElementById('experienceTimeline');
    if (experienceContainer) {
        experienceContainer.innerHTML = experience.map(exp => `
            <div class="relative mb-16 group">
                <div class="absolute -left-[51px] top-0 w-5 h-5 bg-[#050810] border-4 border-[#00ff9d] rounded-full shadow-[0_0_15px_rgba(0,255,157,0.6)]"></div>
                <div class="bg-[#0d1117] border-2 border-[#1f2937] rounded-2xl p-8 hover:border-[#00ff9d] transition-all duration-300 hover:translate-x-2 shadow-lg hover:shadow-[0_8px_30px_rgba(0,255,157,0.15)]">
                    <div class="inline-block px-4 py-2 bg-[#00ff9d]/10 border border-[#00ff9d]/30 text-[#00ff9d] text-xs font-bold tracking-wider mb-5 rounded-md">${exp.period}</div>
                    <h3 class="text-2xl font-bold mb-2">${exp.title}</h3>
                    <h4 class="text-lg text-[#00d4ff] mb-6 font-semibold">${exp.company}</h4>
                    <ul class="space-y-3">
                        ${exp.points.map(point => `<li class="flex items-start gap-3 text-[#b8c5db]"><span class="text-[#00ff9d] text-lg mt-1 font-bold">▹</span><span class="leading-relaxed">${point}</span></li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    }
    
    // Projects
    const projectsContainer = document.getElementById('projectsContainer');
    if (projectsContainer) {
        projectsContainer.innerHTML = projects.map(proj => `
            <div class="group relative bg-[#0d1117] border-2 border-[#1f2937] rounded-2xl p-10 hover:border-[#00ff9d] transition-all duration-300 hover:translate-x-3 overflow-hidden shadow-lg hover:shadow-[0_8px_30px_rgba(0,255,157,0.15)]">
                <div class="absolute inset-0 bg-gradient-to-br from-[#00ff9d]/5 to-[#00d4ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="relative flex gap-10">
                    <div class="font-mono text-7xl font-black text-[#00ff9d] opacity-20">${proj.num}</div>
                    <div class="flex-1">
                        <h3 class="text-3xl font-bold mb-4">${proj.name}</h3>
                        <p class="text-[#b8c5db] leading-relaxed mb-6 text-base">${proj.desc}</p>
                        <div class="flex flex-wrap gap-3">
                            ${proj.tech.map(tech => `<span class="px-4 py-2 text-sm font-semibold bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] rounded-md">${tech}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Certifications
    const certsContainer = document.getElementById('certsContainer');
    if (certsContainer) {
        certsContainer.innerHTML = certs.map(cert => `
            <div class="group bg-[#0d1117] border-2 border-[#1f2937] rounded-2xl p-8 text-center hover:border-[#00ff9d] transition-all duration-300 hover:-translate-y-3 shadow-lg hover:shadow-[0_8px_30px_rgba(0,255,157,0.15)]">
                <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#00ff9d] to-[#00d4ff] flex items-center justify-center text-3xl font-black text-[#050810] shadow-lg">${cert.name[0]}</div>
                <h3 class="text-xl font-bold mb-2">${cert.name}</h3>
                <p class="text-sm text-[#00ff9d] mb-3 font-semibold">${cert.org}</p>
                <p class="text-xs text-[#b8c5db] leading-relaxed">${cert.full}</p>
            </div>
        `).join('');
    }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

console.log('Portfolio loaded successfully');