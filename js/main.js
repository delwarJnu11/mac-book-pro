// Total price 
const totalPrice = document.getElementById('total-price');
// discount Total price 
const lowerTotalCost = document.getElementById('lower-total-price');
// Update Total cost 
function updateTotal() {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    const storageCost = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);
    const totalCost = (bestPrice + memoryCost + storageCost + deliveryCost);
    totalPrice.innerText = totalCost;
    lowerTotalCost.innerText = totalCost;
};
//Promo code use
function promoCodeUse() {
    const promoCode = document.getElementById('promo-code');
    const totalBalance = lowerTotalCost.innerText
    if (promoCode.value == 'stevekaku') {
        const discount = (totalBalance * 20) / 100;
        const discountTotal = totalBalance - discount;
        lowerTotalCost.innerText = discountTotal;
        promoCode.value = '';
        document.getElementById('error').innerText = '';
        promoCode.setAttribute("disabled", true);
    } else if (promoCode.value != 'stevekaku') {
        document.getElementById('error').innerText = 'Please enter valid promo code!!';
        document.getElementById('error').style.color = 'red';
    }
};
// 8GB Unified Memory Button handler
document.getElementById('button-eight-gb').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = '0';
    updateTotal();
});
// 16GB Unified Memory Button handler
document.getElementById('button-sixteen-gb').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = '180';
    updateTotal();
});
// 256GB SSD Button handler
document.getElementById('ssd256-gb').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = '0';
    updateTotal();
});
// 512GB SSD Button handler
document.getElementById('ssd512-gb').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = '100';
    updateTotal();
});
// 1TB SSD Button handler
document.getElementById('ssd1-tb').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = '180';
    updateTotal();
});
// FREE shipping Button  handler
document.getElementById('free-delivery').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = '0';
    updateTotal();
});
// Delivery Charge $20 Button  handler
document.getElementById('express-delivery').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = '20';
    updateTotal();
});
//apply promo code btn handler
document.getElementById('apply-btn').addEventListener('click', function () {
    promoCodeUse();
});
