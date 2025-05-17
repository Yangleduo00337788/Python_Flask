// 卡片点击展开/收起效果
document.querySelectorAll('.qa-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
});

// 标签切换效果
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', function() {
        document.querySelector('.tag.active').classList.remove('active');
        this.classList.add('active');
        // 这里可以添加筛选逻辑
    });
});

// 搜索功能
document.querySelector('.search-btn').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-input').value;
    // 这里可以添加搜索逻辑
    console.log('搜索:', searchTerm);
});

// 详情按钮点击效果
document.querySelectorAll('.detail-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const card = this.closest('.qa-card');
        const name = card.querySelector('h3').textContent;
        const profession = card.querySelector('.profession').textContent;
        const description = card.querySelector('p:not(.profession)').textContent;
        
        // 创建模态框
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h2>${name}</h2>
                <p class="modal-profession">${profession}</p>
                <div class="modal-description">
                    <p>${description}</p>
                </div>
            </div>
        `;
        
        // 添加到body
        document.body.appendChild(modal);
        
        // 关闭按钮事件
        modal.querySelector('.close-btn').addEventListener('click', () => {
            modal.remove();
        });
        
        // 点击模态框外部关闭
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.remove();
            }
        });
    });
});