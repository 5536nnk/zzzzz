// delivery.js
function showDeliveryModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h2>帮送服务</h2>
            <form id="delivery-form">
                <label for="delivery-item">物品名称：</label>
                <input type="text" id="delivery-item" required>
                <br>
                <label for="delivery-address">收货地址：</label>
                <input type="text" id="delivery-address" required>
                <br>
                <button type="submit">提交帮送订单</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('delivery-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const item = document.getElementById('delivery-item').value;
        const address = document.getElementById('delivery-address').value;
        alert(`帮送订单已提交！\n物品：${item}\n收货地址：${address}`);
        closeModal();
    });
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    const deliveryButton = document.querySelector('.delivery-button');
    if (deliveryButton) {
        deliveryButton.onclick = showDeliveryModal;
    }
});