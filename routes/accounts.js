var account = require('../model/account')

module.exports = {
    getAccounts(req, res) {  
      account.find(function (err, result) {
        if (err) return next(err);
        res.status(200).send(result);
      })
    },
    addAccount(req, res) {
      account.create(req.body,function (err, accountNew) {
          if (err) {
              return next(err);
          }
          res.status(201).send({accountId: accountNew.id}) 
      })
     
    },
    updateAccount(req, res) {
      account.findById(req.params.accountId, function (err, accountRecord) {
        accountRecord.set(req.body);
        accountRecord.save(function (err, accountRecord) {
          if (err) return handleError(err);
          res.status(200).send( accountRecord);
        });        
      });
    },
    removeAccount(req, res) {
      account.findById(req.params.accountId, function (err, accountRecord) {        
        accountRecord.delete(function (err, accountRecord) {
          if (err) return handleError(err);
          res.status(204).send()
        });        
      });
    }
  }