var mongoose         = require('mongoose');

var productSchema    = mongoose.Schema({
        // The _id property serves as the primary key. If you don't include it
        // the it is added automatically. However, you can add it in if you
        // want to manually include it when creating an object.

        // _id property is created by default when data is inserted.
        productName:    {"type" : "String"},
        category:       {"type" : "String"},
        description:    {"type" : "String"},
        price:          {"type" : Number, min:0, max:1000000},
        date:           {"type" : String, required:true},
        quantity:       {"type" : Number, min:0, max:100000},
        isSold:         {"type" : Boolean},
        buyers:         {"type" : Array},
        seller:         {"type" : "String"},
    }, 
    { collection : 'products' },
    {   // Include this to eliminate the __v attribute which otherwise gets added
        // by default.
        versionKey: false 
    },);
var Product    = mongoose.model('Product', productSchema);
module.exports = Product;

