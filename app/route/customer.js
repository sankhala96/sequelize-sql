module.exports = function (app) {

    const customers = require('../controller/customer');

    //Create new customer
    app.post('/api/customers', customers.create);

    //retrieve all customer
    app.get('/api/customers', customers.findAll);

    //retrieve a single customer
    app.get('/api/customers/:customerId', customers.findById);

    //update a Customer with Id
    app.put('/api/customers/:customerId', customers.update);

    //Delete customer with Id
    app.delete('/api/customers/:customerId', customers.delete);
};