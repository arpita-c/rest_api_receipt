
'use strict';

class Receipt {
  constructor(id, name, date, total,category,description,file) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.total = total;
    this.category=category;
    this.description=description;
    this.file=file;
  }
}

module.exports = Receipt;
