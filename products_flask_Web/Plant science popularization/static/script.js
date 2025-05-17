document.addEventListener('DOMContentLoaded', function() {
    const plantCards = document.querySelectorAll('.plant-card');
    
    // 为每个植物卡片添加悬停效果
    plantCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // 点击查看详情
        const detailBtn = this.querySelector('.detail-btn');
        detailBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const info = this.parentElement;
            const detail = document.createElement('div');
            detail.className = 'plant-detail';
            detail.innerHTML = '<h4>详细特征</h4><p>这里显示植物的详细特征信息...</p>';
            info.appendChild(detail);
        });
    });
});