// Use the filter method to get all the big spenders in the main array into a new one.

// const businesses = [
//     {
//         purchasingAgent: { nameLast: "Kirlin", nameFirst: "Kristy" },
//         phoneWork: "089.129.2290 x9400",
//         orders: [7826.96, 8323.11, 5756.28, 6308.42, 5622.28],
//         companyName: "Care-media",
//         companyIndustry: "Education",
//         addressZipCode: "56839",
//         addressStateCode: "WI",
//         addressFullStreet: "8417 Franklin Court Tunnel",
//         addressCity: "Mouthcard"
//     },
// Array to contain all the big spenders

const bigSpenders = businesses.filter(business => {
    bigOrder = false;

    if (business.orders.some(order => order >= 9000)) {
        bigOrder = true;
    }

    return bigOrder;
});

// console.log(bigSpenders);