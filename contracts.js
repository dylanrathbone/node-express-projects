/*
utility module for arrays and collections
map reduce, find etc...
 */
var _ = require('lodash');
var Contract = require('./contracts_model')

module.exports = function(app) {

    _contracts = [];

    /*
    Create a contract
    */
    app.post('/contracts', function (req, res) {
        var newContract = new Contract(req.body);
        newContract.save(function (err) {
            if(err){
                res.json({info: 'error during contract creation', error: err});
            };
            res.json({info: 'contract created successfully'});
        });
    });
    
    /*
    Retrieve all contracts
    */
    app.get('/contracts', function (req, res) {
        Contract.find(function (err, contracts) {
            if(err){
                res.json({info: 'error during contract listing', error: err});
            };
            res.json({contracts: contracts});
        });
    });
    
    /*
    Retrieve a contract
    */
    app.get('/contracts/:id', function (req, res) {
        Contract.findById(req.params.id, function (err, contract) {
            if(err){
                res.json({info: 'error during contract retrieval', error: err});
            };
            if(contract){
                res.json({info: 'contract found successfully', data: contract});
            } else {
                res.json({info: 'contract not found'});
            }
        });
    });
    
    /*
    Update a contract
    */
    app.put('/contracts/:id', function (req, res) {
        Contract.findById(req.params.id, function (err, contract) {
            if(err){
                res.json({info: 'error during find contract'});
            };
            if(contract){
                _.merge(contract, req.body);
                contract.save(function (err) {
                    if(err){
                        res.json({info: 'error during contract update'});
                    };
                    res.json({info: 'contract updated successfully'});
                });
            } else {
                res.json({info: 'contract not found'});
            }
        });
    });
    
    /*
    Delete a contract
    */
    app.delete('/contracts/:id', function (req, res) {
        Contract.findByIdAndRemove(req.params.id, function(err){
            if(err){
                res.json({info: 'error during contract removal', error: err});
            };
            res.json({info: 'contract removed successfully'});
        });
    });
};