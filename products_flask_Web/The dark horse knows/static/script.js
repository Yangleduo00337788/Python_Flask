// 标签切换效果
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', function() {
        document.querySelector('.tag.active').classList.remove('active');
        this.classList.add('active');
    });
});

// 问题卡片点击效果
document.querySelectorAll('.qa-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
});

// 搜索功能
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

searchBtn.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
        alert(`正在搜索: ${searchTerm}`);
        // 这里可以添加实际的搜索逻辑
    }
});

// 回车键搜索
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});