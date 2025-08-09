document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;
    
    // بررسی حالت ذخیره شده در localStorage
    const savedMode = localStorage.getItem('batMode');
    if (savedMode === 'night') {
        body.classList.add('night-mode');
        body.classList.remove('day-mode');
        modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // تغییر حالت با کلیک روی دکمه
    modeToggle.addEventListener('click', function() {
        if (body.classList.contains('day-mode')) {
            // تغییر به حالت شب
            body.classList.remove('day-mode');
            body.classList.add('night-mode');
            modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('batMode', 'night');
        } else {
            // تغییر به حالت روز
            body.classList.remove('night-mode');
            body.classList.add('day-mode');
            modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('batMode', 'day');
        }
    });
    
    // انیمیشن دکمه تغییر حالت
    modeToggle.addEventListener('mouseenter', function() {
        this.style.transform = 'rotate(30deg)';
    });
    
    modeToggle.addEventListener('mouseleave', function() {
        this.style.transform = 'rotate(0deg)';
    });
});