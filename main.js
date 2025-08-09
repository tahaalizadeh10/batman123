document.addEventListener('DOMContentLoaded', function() {
    // فعال کردن انیمیشن مهارت‌ها هنگام اسکرول
    const skillItems = document.querySelectorAll('.skill-progress');
    
    function animateSkills() {
        skillItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight - 100) {
                item.style.width = item.parentElement.previousElementSibling.querySelector('.skill-percent').textContent;
            }
        });
    }
    
    window.addEventListener('scroll', animateSkills);
    animateSkills(); // اجرای اولیه
    
    // اسموت اسکرول برای لینک‌های منو
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // افکت hover برای کارت‌ها
    const cards = document.querySelectorAll('.bat-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        });
    });
    
    // نمایش پیام ویژه هنگام ورود به سایت
    setTimeout(() => {
        const welcomeMsg = document.createElement('div');
        welcomeMsg.className = 'bat-welcome-msg';
        welcomeMsg.innerHTML = `
            <div class="bat-welcome-content">
                <h3>به دنیای تاریک من خوش آمدید!</h3>
                <p>من طاها هستم، برنامه‌نویسی که شب‌ها به عنوان بتمن از گاتهام محافظت می‌کنم!</p>
                <button class="bat-button close-welcome">متوجه شدم</button>
            </div>
        `;
        document.body.appendChild(welcomeMsg);
        
        document.querySelector('.close-welcome').addEventListener('click', function() {
            welcomeMsg.style.animation = 'fadeOut 0.5s forwards';
            setTimeout(() => welcomeMsg.remove(), 500);
        });
    }, 2000);
});

// استایل برای پیام خوش آمدگویی
const welcomeStyle = document.createElement('style');
welcomeStyle.textContent = `
    .bat-welcome-msg {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        animation: fadeIn 0.5s forwards;
    }
    
    .bat-welcome-content {
        background-color: var(--secondary-color);
        padding: 30px;
        border-radius: 10px;
        max-width: 500px;
        text-align: center;
        border: 2px solid var(--accent-color);
        box-shadow: 0 0 30px rgba(247, 182, 51, 0.5);
    }
    
    .bat-welcome-content h3 {
        color: var(--accent-color);
        margin-bottom: 15px;
        font-size: 1.8rem;
    }
    
    .bat-welcome-content p {
        margin-bottom: 20px;
        line-height: 1.6;
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(welcomeStyle);