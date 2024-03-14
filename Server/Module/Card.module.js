const mongoose = require("mongoose");

// Define the card property schema
// const cardPropertySchema = new mongoose.Schema({
//     tlx: { type: Number, required: true },
//     tly: { type: Number, required: true },
//     height: { type: Number, required: true }, 
//     width: { type: Number, required: true }
// });

// Define the schema for image cards
// const imagecardSchema = new mongoose.Schema({
//     imageURL: String,
//     cardProperties: cardPropertySchema 
// });

// Define the schema for text cards
// const textcardSchema = new mongoose.Schema({
//     text: String, 
//     cardProperties: cardPropertySchema 
// });

// Define the schema for tasks within todo lists
// const taskSchema = new mongoose.Schema({
//     task: String, 
//     checked: Boolean
// });

// Define the schema for todo list cards
// const todolistcardSchema = new mongoose.Schema({
//     todolist: [taskSchema], 
//     cardProperties: cardPropertySchema 
// });

// Define the schema for the card model
const cardSchema = new mongoose.Schema({
    name:{type:String,required:true},
    editor: [{ type: String }], 
    access: [{ type: String }], 
    subtask:[{type:String}]
    // images: [imagecardSchema], 
    // textboxes: [textcardSchema], 
    // todolists: [todolistcardSchema],
    // cardProperties: cardPropertySchema,
    // cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],

}, 
// {
//     toJSON: { virtuals: true }, // Ensure virtuals are included when document is converted to JSON
//     toObject: { virtuals: true } // Ensure virtuals are included when document is converted to a plain JavaScript object
// }
);

// Define virtual field for nested cards
// cardSchema.virtual('childrenCards', {
//     ref: 'Card',
//     localField: '_id',
//     foreignField: 'parentCard'
// });

// Create the Card model
const Card = mongoose.model('Card', cardSchema);

module.exports = Card;