const mongoose = require('mongoose');

const beautyProductsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a name."],
            unique: true
        },
        brand: {
            type:String,
            required: [true, "Please provide a brand."]
        },
        price: {
            type: Number,
            required: [true, "Please enter price."]
        }
    },
    {
        timestamps:true
    }
);

const BeautyProducts = mongoose.model('BeautyProduct', beautyProductsSchema);
module.exports = BeautyProducts;


// module.exports = [
//     {
//         name: "facial cream",
//         brand: "Embryolisse",
//         price: 29.99
//     }, {
//         name: "cleansing gel",
//         brand: "Paula's Choice",
//         price: 19.99
//     }, {
//         name: "moisturizing Cream",
//         btand: "Round Lab",
//         price: 21.99
//     }
// ];
