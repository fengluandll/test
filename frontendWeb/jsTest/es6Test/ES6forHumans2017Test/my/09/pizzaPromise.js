const pizza = new Promise(resolve => {
    console.log("Getting your pizza in 30 seconds...");
    setTimeout(() => {
        resolve('Onion Pizza')
    }, 30000);
});

pizza.then(item => {
    console.log(`Order Received: ${item}`);
});