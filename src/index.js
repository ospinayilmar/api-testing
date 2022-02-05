/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app');

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price)

    return newPrice;
}

window.fetch(`${baseUrl}/api/avo`)
.then(respuesta => respuesta.json())
.then((responseJson) => {

    const allItems = [];
    responseJson.data.forEach((item) => {
        const container = document.createElement('div');
        container.className = "hover:bg-gray-200 avocato-card p-3 rounded";

        const image = document.createElement('img');
        image.src = `${baseUrl}${item.image}`;
        image.className = "rounded-full";


        const title = document.createElement('h2');
        title.textContent = item.name;
        title.className = "text-base text-red-600";

        const price = document.createElement('div');
        price.textContent = formatPrice(item.price);
        price.className = "text-gray-600 text-sm";

        const textWrapper = document.createElement('div');
        textWrapper.className = "avocato--text-wrapper text-left ml-4";

        textWrapper.append(title, price);
        container.append(image, textWrapper);

        allItems.push(container);
    });
    appNode.append(...allItems);

});



