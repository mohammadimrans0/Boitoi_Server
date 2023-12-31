import { Schema, model } from "mongoose";
import { BookModel, IBook } from "./book.interface";

const BookSchema = new Schema<IBook, BookModel>({
    img: {type: String, required: true},
    title: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String, required: true},
    publicationYear: {type: String, required: true},
    review: {type: String, required: true},
})

export const Book = model<IBook, BookModel>('Book', BookSchema);