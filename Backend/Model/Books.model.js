import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
     id: Number,
    name: String,
    titel: String,
    price: Number,
    category:String,
    image: String,

})

const Book = mongoose.model("Book",BookSchema);
export default Book;