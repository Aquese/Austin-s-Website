// Data
const expertise = [
    { 
        name: 'SOC2 Compliance', 
        desc: 'Type II audit coordination, evidence collection, control validation', 
        letter: 'S2', 
        tags: ['Audit', 'Controls', 'Evidence'] 
    },
    { 
        name: 'NIST CSF', 
        desc: 'Risk assessment and framework implementation', 
        letter: 'NF', 
        tags: ['Framework', 'Risk', 'Assessment'] 
    },
    { 
        name: 'Identity & Access', 
        desc: 'IAM workflows, SAML/SCIM, least privilege enforcement', 
        letter: 'IA', 
        tags: ['IAM', 'Okta', 'SSO'] 
    },
    { 
        name: 'Security Monitoring', 
        desc: 'SIEM analysis, alert triage, incident response', 
        letter: 'SM', 
        tags: ['SIEM', 'Detection', 'Response'] 
    },
    { 
        name: 'Threat Intelligence', 
        desc: 'EDR/XDR platforms, threat hunting, vulnerability management', 
        letter: 'TI', 
        tags: ['EDR', 'Hunting', 'Intel'] 
    },
    { 
        name: 'Risk Management', 
        desc: 'Third-party risk, infrastructure audits, gap analysis', 
        letter: 'RM', 
        tags: ['TPRM', 'Audit', 'Risk'] 
    },
    { 
        name: 'Cloud Security', 
        desc: 'AWS/Azure infrastructure security and IaC deployment', 
        letter: 'CS', 
        tags: ['AWS', 'Azure', 'IaC'] 
    },
    { 
        name: 'Network Security', 
        desc: 'Zero trust architecture, VPN, firewall management', 
        letter: 'NS', 
        tags: ['ZT NA', 'Firewall', 'VPN'] 
    },
    { 
        name: 'Vulnerability Management', 
        desc: 'Scanning, prioritization, patch management, remediation tracking', 
        letter: 'VM', 
        tags: ['Scanning', 'Patching', 'Remediation'] 
    }
];

const experience = [
    {
        title: 'System Administrator - AI & Security',
        company: 'Fuel Cycle',
        period: 'July 2024 - Present',
        points: [
            'Lead SOC2 Type II audit as primary technical liaison, coordinating evidence collection across 100+ controls and interfacing with external auditors for compliance certification',
            'Assess and triage 30+ daily security events using Rapid7, CrowdStrike, and ZScaler, performing risk-based analysis to determine business impact and remediation urgency',
            'Conduct infrastructure risk assessments aligned with NIST Cybersecurity Framework, identifying security gaps and recommending controls to reduce organizational risk exposure',
            'Configure identity and access management workflows in Okta including SAML/SCIM authentication, enforcing least privilege and segregation of duties principles',
            'Build AWS and Azure infrastructure for security operations data connectors and IT project automation'
        ]
    },
    {
        title: 'System Administrator',
        company: 'Advanced Networks',
        period: 'July 2023 - July 2024',
        points: [
            'Managed identity governance and access controls for 750+ endpoints across 15+ client organizations',
            'Monitored security posture of 20+ networks and servers, identifying vulnerabilities and implementing remediation controls',
            'Deployed security patches and updates ensuring compliance with client security policies and regulatory requirements',
            'Developed operational procedures and infrastructure reports for security monitoring'
        ]
    },
    {
        title: 'IT Technician',
        company: 'Skydance Interactive',
        period: 'February 2023 - March 2024',
        points: [
            'Configured VPN access controls and network security for cloud resources',
            'Managed Active Directory for 30+ users including privilege assignment and access reviews',
            'Identified and documented security vulnerabilities for remediation tracking'
        ]
    }
];

const projects = [
    {
        num: '01',
        name: 'Aquese',
        desc: 'AI-driven compliance automation platform with automated policy enforcement, evidence collection, and continuous control validation. Architected with Java backend, TypeScript frontend, and deployed on AWS using Terraform and Docker.',
        tech: ['Compliance', 'AI/ML', 'AWS', 'IaC']
    },
    {
        num: '02',
        name: 'Natols',
        desc: 'Financial risk assessment platform with predictive analytics and anomaly detection. Built with Go backend, React frontend, PostgreSQL database, and integrated Ollama AI models for automated forecasting.',
        tech: ['Risk Analysis', 'Go', 'AI/ML', 'Docker']
    },
    {
        num: '03',
        name: 'Security Automation',
        desc: 'Ansible playbooks for automated security baseline configuration, patch management, and compliance validation across enterprise infrastructure.',
        tech: ['Ansible', 'IaC', 'Automation', 'Security']
    },
    {
        num: '04',
        name: 'Wazuh Integration',
        desc: 'Python library (Pyzuh) for Wazuh SIEM API communication enabling automated security monitoring, alert correlation, and compliance reporting.',
        tech: ['Python', 'SIEM', 'API', 'Monitoring']
    }
];

const certs = [
    { name: 'SSCP', org: '(ISC)²', full: 'Systems Security Certified Professional', initial: 'SP' },
    { name: 'CySA+', org: 'CompTIA', full: 'Cybersecurity Analyst', initial: 'CA' },
    { name: 'Security+', org: 'CompTIA', full: 'Security Certification', initial: 'S+' },
    { name: 'Network+', org: 'CompTIA', full: 'Network Infrastructure', initial: 'N+' },
    { name: 'Pentest+', org: 'CompTIA', full: 'Penetration Testing', initial: 'P+' },
    { name: 'A+', org: 'CompTIA', full: 'Core IT Professional', initial: 'A+' },
    { name: 'LPI', org: 'Linux Professional', full: 'Linux Administration', initial: 'LP' },
    { name: 'ITIL', org: 'Axelos', full: 'IT Service Management', initial: 'IT' }
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
    // Expertise
    const expertiseContainer = document.getElementById('expertiseGrid');
    if (expertiseContainer) {
        expertiseContainer.innerHTML = expertise.map(exp => `
            <div class="group relative bg-[#0d1117] border-2 border-[#1f2937] rounded-2xl p-8 hover:border-[#00ff9d] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_8px_30px_rgba(0,255,157,0.15)]">
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00ff9d] to-[#00d4ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl"></div>
                <div class="w-16 h-16 mb-6 flex items-center justify-center bg-[#00ff9d]/10 rounded-lg border border-[#00ff9d]/30">
                    <span class="text-2xl font-black text-[#00ff9d]">${exp.letter}</span>
                </div>
                <h3 class="text-xl font-bold mb-3">${exp.name}</h3>
                <p class="text-sm text-[#b8c5db] mb-6 leading-relaxed min-h-[60px]">${exp.desc}</p>
                <div class="flex flex-wrap gap-2">
                    ${exp.tags.map(tag => `<span class="px-3 py-1.5 text-xs font-semibold bg-[#00ff9d]/10 border border-[#00ff9d]/30 text-[#00ff9d] rounded-md">${tag}</span>`).join('')}
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
                <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#00ff9d] to-[#00d4ff] flex items-center justify-center text-xl font-black text-[#050810] shadow-lg">${cert.initial}</div>
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
