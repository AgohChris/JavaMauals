// Navigation functionality
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
    
    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('open');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Mobile sidebar toggle
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Copy code functionality
function copyCode(button) {
    const codeBlock = button.parentElement;
    const code = codeBlock.querySelector('pre code');
    const text = code.innerText;
    
    navigator.clipboard.writeText(text).then(() => {
        button.textContent = 'Copié !';
        button.style.background = '#27ae60';
        setTimeout(() => {
            button.textContent = 'Copier';
            button.style.background = 'rgba(255, 255, 255, 0.1)';
        }, 2000);
    });
}

// Toggle solution visibility
function toggleSolution(solutionId) {
    const solution = document.getElementById(solutionId);
    solution.classList.toggle('show');
}

// Progress bar update
function updateProgressBar() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    document.querySelector('.progress-fill').style.width = scrollPercent + '%';
}

// Event listeners
window.addEventListener('scroll', updateProgressBar);

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (window.innerWidth <= 768 && 
        !sidebar.contains(e.target) && 
        !menuToggle.contains(e.target)) {
        sidebar.classList.remove('open');
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('sidebar').classList.remove('open');
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Add copy buttons to all code blocks
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
        if (!block.querySelector('.copy-btn')) {
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn';
            copyBtn.textContent = 'Copier';
            copyBtn.onclick = () => copyCode(copyBtn);
            block.appendChild(copyBtn);
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// QCM Interactive functionality
let qcmAnswers = {};

function selectOption(questionId, optionIndex) {
    // Store the selected answer
    qcmAnswers[questionId] = optionIndex;
    
    // Visual feedback
    const options = document.querySelectorAll(`#${questionId} .qcm-option`);
    options.forEach((opt, idx) => {
        if (idx === optionIndex) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });
    
    // Enable verify button
    const verifyBtn = document.querySelector(`#${questionId} .btn-verify`);
    if (verifyBtn) {
        verifyBtn.disabled = false;
    }
}

function verifyAnswer(questionId, correctAnswer) {
    const selectedAnswer = qcmAnswers[questionId];
    
    if (selectedAnswer === undefined) {
        alert('Sélectionne une réponse d'abord !');
        return;
    }
    
    const options = document.querySelectorAll(`#${questionId} .qcm-option`);
    const feedback = document.querySelector(`#${questionId} .qcm-feedback`);
    
    // Show correct/incorrect
    options.forEach((opt, idx) => {
        opt.style.pointerEvents = 'none'; // Disable further clicks
        if (idx === correctAnswer) {
            opt.classList.add('correct');
        } else if (idx === selectedAnswer && idx !== correctAnswer) {
            opt.classList.add('incorrect');
        }
    });
    
    // Show feedback
    if (feedback) {
        feedback.classList.add('show');
        if (selectedAnswer === correctAnswer) {
            feedback.classList.add('correct');
            feedback.classList.remove('incorrect');
        } else {
            feedback.classList.add('incorrect');
            feedback.classList.remove('correct');
        }
    }
    
    // Disable verify button
    const verifyBtn = document.querySelector(`#${questionId} .btn-verify`);
    if (verifyBtn) {
        verifyBtn.disabled = true;
        verifyBtn.textContent = selectedAnswer === correctAnswer ? '✅ Correct !' : '❌ Raté !';
    }
}

function resetQCM(questionId) {
    qcmAnswers[questionId] = undefined;
    
    const options = document.querySelectorAll(`#${questionId} .qcm-option`);
    options.forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
        opt.style.pointerEvents = 'auto';
    });
    
    const feedback = document.querySelector(`#${questionId} .qcm-feedback`);
    if (feedback) {
        feedback.classList.remove('show');
    }
    
    const verifyBtn = document.querySelector(`#${questionId} .btn-verify`);
    if (verifyBtn) {
        verifyBtn.disabled = true;
        verifyBtn.textContent = 'Vérifier';
    }
}
