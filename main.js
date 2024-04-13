let container = document.getElementById("ekishzona");
let defaultFlower = './img/sungif.gif'


container.addEventListener("click", function(e) {
    let img = document.createElement("img");
    img.src = defaultFlower;
    console.log(e)
    img.style.top = e.layerY - 50 + 'px';
    img.style.left = e.layerX - 50 + 'px';
    img.className = 'flower';
    container.append(img);
});

function change(gul) {
    defaultFlower = gul.src
}

function carsender() {
    let img = document.createElement("img");
    let son = Math.floor(150 + Math.random() * 650);
    img.src = './img/car.png';
    img.style.right = '0px';
    img.style.top = son + 'px';
    img.className = 'car';
    container.append(img);
}

function animate() {
    let cars = document.getElementsByClassName("car");
    let flowers = document.getElementsByClassName("flower");

    for (let i = 0; i < cars.length; i++) {
        let car = cars[i];
        let carRect = car.getBoundingClientRect();

        for (let j = 0; j < flowers.length; j++) {
            let flower = flowers[j];
            let flowerRect = flower.getBoundingClientRect();

            if (collision(carRect, flowerRect)) {
                flower.parentNode.removeChild(flower);
                continue; // Skip to next flower
            }
        }
    }
}

function collision(rect1, rect2) {
    return !(rect1.right < rect2.left ||
             rect1.left > rect2.right ||
             rect1.bottom < rect2.top ||
             rect1.top > rect2.bottom);
}

setInterval(() => {
    animate();
}, 1000);

carsender();
setInterval(() => {
    carsender();
}, 5000);
