// 花瓣飘落效果
function createPetal() {
    const petal = document.createElement('div');
    petal.innerHTML = '❀';
    petal.classList.add('petal');
    
    // 随机位置
    petal.style.left = Math.random() * window.innerWidth + 'px';
    
    // 随机动画持续时间
    const duration = Math.random() * 3 + 5;
    petal.style.animationDuration = `${duration}s`;
    
    // 随机大小
    const size = Math.random() * 0.8 + 0.5;
    petal.style.transform = `scale(${size})`;
    
    // 随机透明度
    petal.style.opacity = Math.random() * 0.5 + 0.5;
    
    document.body.appendChild(petal);
    
    // 动画结束后移除花瓣
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

// 每300ms创建一个新花瓣
function startPetals() {
    setInterval(createPetal, 300);
}

// 页面加载完成后启动花瓣效果
window.addEventListener('DOMContentLoaded', startPetals);