
const mongoose = require("mongoose");

const productSchema = 
  new mongoose.Schema({
    id: String,
    created_at: String,
    updated_at: String,
    title: String,
    store_category_title: String,
    price: Number,
    origin_price: Number,
    desc: String,
    images: [
      {
        id: String,
        url: String,
        position: Number,
        alt: String,
      },
    ],
  })

module.exports= productSchema