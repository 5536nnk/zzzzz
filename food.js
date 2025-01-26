// 外卖数据
const foods = [
    { 
        id: 1, 
        name: '经典汉堡', 
        price: 35,
        imageUrl: 'images/burger.jpg',
        description: '多汁牛肉汉堡配新鲜蔬菜',
        tags: ['快餐', '牛肉', '高热量']
    },
    { 
        id: 2, 
        name: '意大利披萨', 
        price: 65,
        imageUrl: 'images/pizza.jpg',
        description: '手工制作传统意式披萨',
        tags: ['意大利', '芝士', '多人分享']
    },
    { 
        id: 3, 
        name: '香脆炸鸡', 
        price: 28,
        imageUrl: 'images/fried-chicken.jpg',
        description: '黄金酥脆秘制炸鸡',
        tags: ['炸物', '鸡肉', '小吃']
    }
];

// 渲染外卖列表
function renderFoods() {
    const foodList = document.querySelector('.food-list');
    foodList.innerHTML = '';
    
    foods.forEach(food => {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');
        foodItem.innerHTML = `
            <div class="food-image-container">
                < img src="${food.imageUrl}" alt="${food.name}" class="food-image">
                <div class="price-tag">￥${food.price}</div>
            </div>
            <div class="food-info">
                <h3>${food.name}</h3>
                <p class="food-description">${food.description}</p >
                <button onclick="showFoodModal(${food.id})" class="order-button">
                    <span class="icon">🛒</span> 立即下单
                </button>
                <button onclick="getAIRecommendation(${food.id})" class="ai-button">
                    <span class="icon">🤖</span> AI 推荐
                </button>
            </div>
        `;
        foodList.appendChild(foodItem);
    });
}

// 显示下单弹窗
function showFoodModal(foodId) {
    const food = foods.find(f => f.id === foodId);
    if (food) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close" onclick="closeModal()">&times;</span>
                < img src="${food.imageUrl}" alt="${food.name}" class="modal-image">
                <h2>${food.name}</h2>
                <p>${food.description}</p >
                <p class="modal-price">价格：￥${food.price}</p >
                <div class="quantity-selector">
                    <button onclick="changeQuantity(-1)">-</button>
                    <span id="quantity">1</span>
                    <button onclick="changeQuantity(1)">+</button>
                </div>
                <button class="confirm-order" onclick="confirmOrder(${food.id})">确认下单</button>
            </div>
        `;
        document.body.appendChild(modal);
    }
}

// 关闭弹窗
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// 修改数量
function changeQuantity(change) {
    const quantityElement = document.getElementById('quantity');
    let quantity = parseInt(quantityElement.textContent) + change;
    quantity = quantity < 1 ? 1 : quantity;
    quantityElement.textContent = quantity;
}

// 确认下单
function confirmOrder(foodId) {
    const food = foods.find(f => f.id === foodId);
    const quantity = parseInt(document.getElementById('quantity').textContent);
    alert(`成功下单：${food.name} × ${quantity}\n总价：￥${food.price * quantity}`);
    closeModal();
}

// AI 推荐
function getAIRecommendation(foodId) {
    const food = foods.find(f => f.id === foodId);
    if (food) {
        // 模拟 AI 推荐逻辑
        const recommendations = foods
            .filter(f => f.id !== foodId && f.tags.some(tag => food.tags.includes(tag)))
            .slice(0, 2); // 推荐 2 个相关菜品

        if (recommendations.length > 0) {
            const recommendationList = recommendations.map(f => f.name).join('、');
            alert(`AI 推荐：如果您喜欢 ${food.name}，您可能也会喜欢 ${recommendationList}！`);
        } else {
            alert('AI 推荐：暂时没有相关推荐。');
        }
    }
}

// 初始化页面
document.addEventListener('DOMContentLoaded', renderFoods);
            <div class="food-image-container">
                < img src="${food.imageUrl}" alt="${food.name}" class="food-image">
                <div class="price-tag">￥${food.price}</div>
            </div>
            <div class="food-info">
                <h3>${food.name}</h3>
                <p class="food-description">${food.description}</p >
                <button onclick="orderFood(${food.id})" class="order-button">
                    <span class="icon">🛒</span> 立即下单
                </button>
            </div>
        `;
        foodList.appendChild(foodItem);
    });
}

function orderFood(foodId) {
    const food = foods.find(f => f.id === foodId);
    if (food) {
        // 创建弹窗
        const modal = document.createElement('div');
        modal.className = 'order-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                < img src="${food.imageUrl}" alt="${food.name}" class="modal-image">
                <h2>${food.name}</h2>
                <p>${food.description}</p >
                <p class="modal-price">价格：￥${food.price}</p >
                <div class="quantity-selector">
                    <button onclick="changeQuantity(-1)">-</button>
                    <span id="quantity">1</span>
                    <button onclick="changeQuantity(1)">+</button>
                </div>
                <button class="confirm-order">确认下单</button>
            </div>
        `;

        // 添加关闭功能
        modal.querySelector('.close').onclick = () => document.body.removeChild(modal);
        modal.querySelector('.confirm-order').onclick = () => {
            const quantity = parseInt(document.getElementById('quantity').textContent);
            alert(`成功下单：${food.name} × ${quantity}\n总价：￥${food.price * quantity}`);
            document.body.removeChild(modal);
        };

        document.body.appendChild(modal);
    }
}

// 数量修改功能
function changeQuantity(change) {
    const quantityElement = document.getElementById('quantity');
    let quantity = parseInt(quantityElement.textContent) + change;
    quantity = quantity < 1 ? 1 : quantity;
    quantityElement.textContent = quantity;
}

// 初始化页面
document.addEventListener('DOMContentLoaded', renderFoods);