// 打车服务提交
document.getElementById('taxi-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const pickup = document.getElementById('pickup-location').value;
    const destination = document.getElementById('destination').value;
    alert(`打车订单已提交！\n上车地点：${pickup}\n目的地：${destination}`);
    this.reset();
});