// 模拟商品数据
const products = [
    { name: 'iPhone 14 Pro', price: 7999, image: 'https://img1.360buyimg.com/n6/jfs/t1/90703/20/48551/24533/66dfb0c4F3db84f1b/13170b66c53eb608.jpg', discount: 6999 },
    { name: 'MacBook Pro 14寸', price: 14999, image: 'https://img1.360buyimg.com/n6/jfs/t1/291600/28/4200/30002/681c7df7Fc661a244/de53eca10fe8bfd5.png', discount: 12999 },
    { name: '华为Mate 50', price: 4999, image: 'https://img1.360buyimg.com/n2/jfs/t1/179420/26/32870/55735/641082a5Ffc8b00d8/e8914b1876f21ddf.jpg', discount: 4599 },
    { name: '小米电视6', price: 3999, image: 'https://img1.360buyimg.com/n6/jfs/t1/287552/39/2778/100878/6818a16bFe5ad24a6/f08888276e68d937.jpg', discount: 3599 },
    { name: '戴尔显示器27寸', price: 1999, image: 'https://img13.360buyimg.com/n7/jfs/t1/291426/24/4009/117853/681c5486F70a7eff6/43fdf71d5f25ed98.jpg', discount: 1799 },
    { name: '索尼耳机', price: 999, image: 'https://img11.360buyimg.com/n7/jfs/t1/298046/8/4513/108213/681c1b52F8284b4d2/5ebb0ee261a80c95.jpg', discount: 799 },
    { name: 'Mac Mini m4', price: 999, image: 'https://img14.360buyimg.com/n7/jfs/t1/277215/5/28860/169643/68108a65F105e5766/b9584bda5e81bcab.png', discount: 799 },
    { name: '华为Mate 70', price: 999, image: 'https://img14.360buyimg.com/n7/jfs/t1/254867/5/21468/55171/67b2083cF2dd67eee/1752c10a85eb4dfe.jpg', discount: 799 },
    { name: '小米15 Ultra', price: 999, image: 'https://img13.360buyimg.com/n7/jfs/t1/298945/30/1800/76119/6812132cF55f5ab86/0fde3349f709b990.jpg', discount: 799 },
    { name: 'Apple Watch Ultra 2', price: 999, image: 'https://img13.360buyimg.com/n7/jfs/t1/278750/14/17223/99693/67f49571F7dd686c5/c395e018e586258d.jpg', discount: 799 }
];

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.products-container');
    
    // 动态加载商品
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <div class="product-img-container">
                <img src="${product.image}" alt="${product.name}">
                <span class="discount-tag">限时特惠</span>
            </div>
            <h3 class="product-title">${product.name}</h3>
            <div class="price-container">
                <span class="original-price">¥${product.price.toFixed(2)}</span>
                <span class="discount-price">¥${product.discount.toFixed(2)}</span>
            </div>
            <button class="add-to-cart">加入购物车</button>
        `;
        container.appendChild(productElement);
    });
});