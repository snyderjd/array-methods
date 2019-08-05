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
    
    const grossProfitHTML = createHTML('2017 Gross Profit', totalGrossProfit);
    renderHTML(reportContainer, grossProfitHTML);
});

// Figure out which month had the most sales and add it to the DOM
getSalesData().then(parsedSales => {
    const sales2017 = parsedSales.filter(sale => sale.purchase_date.includes('2017'));

    // Create an array of all sale dates using map
    saleDates = sales2017.map(sale => sale.purchase_date);

    // Iterate through the array of dates and use the below object to count the sales in each month
    const saleMonths = {
        '2017-01': 0,
        '2017-02': 0,
        '2017-03': 0,
        '2017-04': 0,
        '2017-05': 0,
        '2017-06': 0,
        '2017-07': 0,
        '2017-08': 0,
        '2017-09': 0,
        '2017-10': 0,
        '2017-11': 0,
        '2017-12': 0
    };

    saleDates.forEach(date => {
        for (let key in saleMonths) {
            if (date.includes(key)) {
                saleMonths[key] += 1;
            }
        }
    });

    // Iterate through the object of months and check to see which month had the most sales
    let bestMonth = '2017-01';
    let currMax = saleMonths['2017-01'];

    for (let key in saleMonths) {

        if (saleMonths[key] > currMax) {
            bestMonth = key;
            currMax = saleMonths[key];
        } else if (saleMonths[key] >= currMax) {
            bestMonth += ` and ${key}`;
        }
        
    }

    // Create HTML representation and add it to the DOM
    const bestMonthHTML = createHTML('Best Month', bestMonth);
    renderHTML(reportContainer, bestMonthHTML);
});

// Figure out which salesperson sold the most cars
getSalesData().then(parsedSales => {
    const sales2017 = parsedSales.filter(sale => sale.purchase_date.includes('2017'));

    // Get an array of the salesperson for each sale
    const salespersons = sales2017.map(sale => {
        return `${sale.sales_agent.first_name} ${sale.sales_agent.last_name}`;
    });

    // Create an object to keep track of how many cars each salesperson sold
    const saleCounter = {};

    salespersons.forEach(agent => saleCounter[agent] = 0);

    salespersons.forEach(agent => saleCounter[agent] += 1);

    // console.log(saleCounter);

    // Iterate through the object and get the max value
    let topAgent = '';
    let currMax = 0;

    for (let agent in saleCounter) {
        if (saleCounter[agent] > currMax) {
            topAgent = agent;
            currMax = saleCounter[agent];
        } else if (saleCounter[agent] >= currMax) {
            currMax += ` and ${key}`;
        }
    }

    // Create HTML representation and add it to the DOM
    const topAgentHTML = createHTML('Top Agent', topAgent);
    renderHTML(reportContainer, topAgentHTML);
});

// Figure out which salesperson made the most profit
getSalesData().then(parsedSales => {
    const sales2017 = parsedSales.filter(sale => sale.purchase_date.includes('2017'));

    console.log(sales2017);

    const agentProfits = {};

    // Loop through the sales to create an object key for each salesperson and set equal to 0
    sales2017.forEach(sale => {
        const agent = `${sale.sales_agent.first_name} ${sale.sales_agent.last_name}`;

        agentProfits[agent] = 0;
    });

    // Loop through the sales to add gross profit to the appropriate agent in the agentProfits object
    sales2017.forEach(sale => {
        const agent = `${sale.sales_agent.first_name} ${sale.sales_agent.last_name}`;
        agentProfits[agent] += sale.gross_profit;
    });

    console.log(agentProfits);

    // Iterate through the object and get the max value
    let mostProfitable = '';
    let currMax = 0;

    for (let agent in agentProfits) {
        if (agentProfits[agent] > currMax) {
            mostProfitable = agent;
            currMax = agentProfits[agent];
        } else if (agentProfits[agent] >= currMax) {
            currMax += ` and ${key}`;
        }
    }

    // Create HTML representation and add it to the DOM
    const mostProfitsHTML = createHTML('Most Profitable Agent', mostProfitable);
    renderHTML(reportContainer, mostProfitsHTML);    
});

