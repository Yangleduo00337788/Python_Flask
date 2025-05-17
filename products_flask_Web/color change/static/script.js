document.addEventListener('DOMContentLoaded', function() {
    const numberDisplay = document.getElementById('number-display');
    const changeColorBtn = document.getElementById('change-color-btn');
    const gradientBtn = document.getElementById('gradient-btn');
    const speedSlider = document.getElementById('speed-slider');
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    
    let counter = 0;
    let gradientInterval = null;
    let currentSpeed = 5;
    let particles = [];
    
    // 初始化粒子系统
    function initParticles() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        for (let i = 0; i < 100; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speedX: Math.random() * 3 - 1.5,
                speedY: Math.random() * 3 - 1.5,
                color: `hsla(${Math.random() * 360}, 100%, 50%, 0.7)`
            });
        }
    }
    
    // 更新和绘制粒子
    function updateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            
            p.x += p.speedX;
            p.y += p.speedY;
            
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
            
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        }
        
        requestAnimationFrame(updateParticles);
    }
    
    // 窗口大小改变时重置画布
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    initParticles();
    updateParticles();
    
    // 生成随机颜色
    function getRandomColor() {
        return `hsla(${Math.random() * 360}, 100%, 50%, 0.8)`;
    }
    
    // 生成渐变颜色
    function getGradientColor(step) {
        const hue = (step % 360);
        return `hsl(${hue}, 100%, 50%)`;
    }
    
    // 开始渐变效果
    function startGradientEffect() {
        let step = 0;
        clearInterval(gradientInterval);
        
        gradientInterval = setInterval(() => {
            step++;
            counter++;
            numberDisplay.textContent = counter;
            numberDisplay.style.color = getGradientColor(step);
        }, 1000 / currentSpeed);
    }
    
    // 停止渐变效果
    function stopGradientEffect() {
        clearInterval(gradientInterval);
        gradientInterval = null;
    }
    
    // 点击按钮改变数字和颜色
    changeColorBtn.addEventListener('click', function() {
        if (gradientInterval) stopGradientEffect();
        counter++;
        numberDisplay.textContent = counter;
        numberDisplay.style.color = getRandomColor();
    });
    
    // 渐变效果按钮
    gradientBtn.addEventListener('click', function() {
        if (gradientInterval) {
            stopGradientEffect();
            this.textContent = '渐变效果';
        } else {
            startGradientEffect();
            this.textContent = '停止渐变';
        }
    });
    
    // 速度控制
    speedSlider.addEventListener('input', function() {
        currentSpeed = parseInt(this.value);
        if (gradientInterval) {
            stopGradientEffect();
            startGradientEffect();
        }
    });
});