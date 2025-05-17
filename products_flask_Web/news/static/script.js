document.addEventListener('DOMContentLoaded', function() {
    const newsCards = document.querySelectorAll('.news-card');
    const tags = document.querySelectorAll('.tag');
    
    // 为每个新闻卡片添加悬停效果
    newsCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // 点击卡片展开详情
        card.addEventListener('click', function() {
            const detail = document.createElement('div');
            detail.className = 'news-detail';
            detail.innerHTML = '<h4>新闻详情</h4><p>这里是新闻的详细内容...</p>';
            this.appendChild(detail);
        });
    });
    
    // 标签切换功能
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            tags.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
});