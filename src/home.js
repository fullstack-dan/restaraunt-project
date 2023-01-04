const homepage = document.createElement('div')
    header = document.createElement('h1');
    header.textContent = `Three's Eatery`;

    homepage.appendChild(header);

    copy = document.createElement('p');
    copy.textContent = `A restaurant in Atlanta, Georgia with a mouth full of stars. We've won accolades like "Best Restaurant in Atlanta, 2022" and "One of the Best Restaurants in America, 2022." And we're just getting started!`;

    homepage.appendChild(copy);

module.exports = {homepage: homepage};