
'use strict';

const Recipt = require('../model/receipt');
const File = require('../model/file');


class ReceiptController {
  constructor() {
    this.receipts = new Map([
      [0, new Recipt(0, 'Target', '05/14/2019', '5.64', 'Supplies','Cookie Cake Icing', new File('Receipt_1_Target.pdf','application/pdf','38602'))],
      [1, new Recipt(1, 'Harrods', '05/02/2019', '424.02', 'Personal', 'Fresh Fish', new File('Receipt_2_Harrod.jpg','image/jpeg','17869'))],
      [2, new Recipt(2, 'Microcenter', '05/24/2019', '2347.42','Supplies','', new File('Receipt_3_Microcenter.pdf','application/pdf','156413'))],
      [4, new Recipt(3, 'Uniqlo', '05/07/2019', '1632.82','Personal', 'Shirt',new File('Receipt_4_Uniqlo.png','image/png','903282'))],
    ]);
  }

  getById(id) 
  {
    if(id==null || id==undefined)
    return "Invalid ID";

    return this.receipts.get(id);
  }

  getAll() 
  {
    return Array.from(this.receipts.values());
  }

  getByCategory(category) {
    console.log(category);
    var val= Array.from(this.receipts.values());
    var result=[];
    for(var i=0;i<val.length;i++)
    {
      var s1= val[i]['category'];
      var s2= category
      var isEqual =s1.toUpperCase() === s2.toUpperCase();
      if(isEqual)
      result.push(val[i]);

    }
    return result;
  }

  
  getPdfReceipt() {
    var val= Array.from(this.receipts.values());
    var result=[];
    for(var i=0;i<val.length;i++)
    {
      if((val[i]['file']['type']).includes("pdf"))
      result.push(val[i]);

    }
    return result;
  }
  getImageReceipt() {
    var val= Array.from(this.receipts.values());
    var result=[];
    for(var i=0;i<val.length;i++)
    {
      if((val[i]['file']['type']).includes("image"))
      result.push(val[i]);

    }
    return result;
  }
  remove() {
    const keys = Array.from(this.receipts.keys());
    this.receipts.delete(keys[keys.length - 1]);
  }

  removeById(id) 
  {
    const keys = Array.from(this.receipts.keys());
    if (keys.includes(id)==false)
     return "Invalid ID";
    this.receipts.delete(keys[id]);
  }

  update(receipt)
  {
    var keys = Array.from(this.receipts.keys());

    if(keys.includes(receipt.id)==false)
    {
      return "The receipt ID does not exist";
    }
    else if (receipt.id !== undefined)
    {

      this.receipts.set(receipt.id, receipt);
      return 'Updated Person with id=' + receipt.id;
    } 

  }

  save(receipt) {
    if (this.getById(receipt.id) !== undefined) 
    {
      this.receipts[receipt.id] = receipt;
      return 'Updated Receipt with id=' + receipt.id;
    } 
    else 
    {
      this.receipts.set(receipt.id, receipt);
      return 'Added Receipt with id=' + receipt.id;
    }
  }
}

const receiptController = new ReceiptController();

module.exports = receiptController;
