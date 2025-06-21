import { model, Model, Schema } from "mongoose";
import { IBook } from "../interfaces/books.interface";

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: {
      type: String,
      required: true,
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
      uppercase: true,
    },
    isbn: { type: String, required: true, unique: true },
    description: { type: String },
    copies: { type: Number, required: true,  min: [0, 'Copies must be a positive number'],},
    available: { type: Boolean, default: true },
  },
  { versionKey: false, timestamps: true }
);

export const Book = model<IBook>("Book", bookSchema);
