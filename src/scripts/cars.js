// Advanced Challenge: Car Dealership
// Copy the JSON from cars.json and assign it to a variable in a new application.This data holds sales information for a car dealership.Your job is to produce the following reports for the dealership based on their total 2017 sales.

// 1. Total profit for 2017
// 2. In which month did they sell the most cars ?
// 3. Which salesperson sold the most cars ?
// 4. Which salesperson made the most profit ?
// 5. Which model was the most popular ?
// 6. Which bank provided the most loans to our customers ?

// Function to fetch carSales data from cars.json
const getSalesData = () => {
    return fetch('http://localhost:8088/carSales')
        .then(response => response.json());
};

// create HTML representation
const createHTML = (header, data) => {
    return `<section class="report__item">
                <h2 class="report__item__header">${header}</h2>
                <p class="report__item__data">${data}</p>
            </section>`;
};

// Add HTML representation to a container on the DOM
const renderHTML = (container, HTMLString) => {
    container.innerHTML += HTMLString;
};

// Reference to report container
const reportContainer = document.querySelector('.report__container');

// Calculate total gross profit for 2017 and add it to the DOM
getSalesData().then(parsedSales => {

    const grossProfits = parsedSales.map(sale => {
        return sale.gross_profit;
    });
    
    const totalGrossProfit = Math.round(grossProfits.reduce((acc, current) => acc + current));
    console.log(totalGrossProfit);
    
    const grossProfitHTML = createHTML('2017 Gross Profit', totalGrossProfit);
    renderHTML(reportContainer, grossProfitHTML);
});

// Figure out which month had the most sales and add it to the DOM
getSalesData().then(parsedSales => {
    
});

