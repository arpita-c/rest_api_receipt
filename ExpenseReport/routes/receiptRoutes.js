'use strict';

const Router = require('express');
const reciptFunc = require('../repo/receiptFunctionality');

const getReceiptRoutes = app => {
  const router = new Router();

  router
    .get('/get/:id', (req, res) => {
      const id = parseInt(req.params.id);
      const result = reciptFunc.getById(id);
      res.send(result);
    })
    .get('/getcategory/:category', (req, res) => {
     // console.log(req.params);
      const category = req.params['category'];
      const result = reciptFunc.getByCategory(category);
      res.send(result);
    })
    .get('/getall', (req, res) => {
      const result = reciptFunc.getAll();
      res.send(result);
    })
    .get('/getpdf', (req, res) => {
      const result = reciptFunc.getPdfReceipt();
      res.send(result);
    })
    .get('/getimage', (req, res) => {
      const result = reciptFunc.getImageReceipt();
      res.send(result);
    })
    .post('/removelast', (req, res) => {
      reciptFunc.remove();
      const result = 'Last receipt remove. Total count: ' + reciptFunc.receipts.size;
      res.send(result);
    })
    .post('/remove/', (req, res) => {
    //  const id = parseInt(req.params.id);
      const id= parseInt(req.body);
      console.log(req.body);
      const out = reciptFunc.removeById(id)
      const result = 'Removed receipt ID:' +id+ ' Total count: ' + reciptFunc.receipts.size;
      res.send(result);
    })
    .post('/update', (req, res) => {
      const receipt = req.body;
      const result = reciptFunc.update(receipt);
      res.send(result);
    })
    .post('/save', (req, res) => {
      const receipt = req.body;
      const result = reciptFunc.save(receipt);
      res.send(result);
    });

  app.use('/receipt', router);
};

module.exports = getReceiptRoutes;