import { Model } from "mongoose";

export type IBook = {
    img: string;
    title: string;
    author: string;
    genre: string;
    publicationYear: string;
    review: string;
}

export type BookModel = Model<IBook, Record<string, unknown>>

export type IBookFilter= {
    searchTerm?: string;
    genre?: string;
    publicationYear?: string;
}

export const bookFilterableFields = [
    'genre',
    'publicationYear'
]

export const bookSearchableFields = ['title', 'author', 'genre']