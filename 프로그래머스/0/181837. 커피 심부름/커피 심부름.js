function solution(order) {
    const menu = {
        'iceamericano': 4500,
        'americanoice': 4500,
        'hotamericano': 4500,
        'americanohot': 4500,
        'icecafelatte': 5000,
        'cafelatteice': 5000,
        'hotcafelatte': 5000,
        'cafelattehot': 5000,
        'americano': 4500,
        'cafelatte': 5000,
        'anything': 4500
    };

    let total = 0;
    
    order.forEach(item => {
        total += menu[item] || menu['anything']; // menu[item]가 없으면 'anything'을 기본값으로 처리
    });
    
    return total;
}
