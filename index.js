const carList = [
    {
        img: './images/cars/tracker.jpg',
        price: 45000000,
        year: 2015,
        mileage: 13000,
        model: 'Tracker 1.8 lt',
        location: 'Envigado - Antioquia',
    },
    {
        img: './images/cars/mit.jpg',
        price: 45000000,
        year: 2015,
        mileage: 13000,
        model: 'Tracker 1.8 lt',
        location: 'Envigado - Antioquia',
    },
    {
        img: './images/cars/daihatsu.jpg',
        price: 45000000,
        year: 2015,
        mileage: 13000,
        model: 'Tracker 1.8 lt',
        location: 'Envigado - Antioquia',
    },
];

function createCard(img, price, year, mileage, model, location) {
    return `
        <div class="card">
            <img class="card-img" src="${img}" />
            <div class="card-body">
                <h1>${price}</h1>
                <p>${year} | ${mileage}</p>

                <h3>${model}</h3>

                <h4>${location}</h4>
            </div>
        </div>
    `;
}

function addCard() {
    const grid = window.document.body.children[2];

    const car1 = carList[0];
    const car2 = carList[1];
    const car3 = carList[2];

    const card1 = createCard(car1.img, car1.price, car1.year, car1.mileage, car1.model, car1.location);
    const card2 = createCard(car2.img, car2.price, car2.year, car2.mileage, car2.model, car2.location);
    const card3 = createCard(car3.img, car3.price, car3.year, car3.mileage, car3.model, car3.location);

    const cards = [ card1, card2, card3 ];

    grid.innerHTML = cards.join('');
}

addCard();
