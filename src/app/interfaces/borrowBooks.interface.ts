import mongoose from "mongoose";
import { IBook } from "./books.interface";

export interface IBorrow  {
  book: mongoose.Types.ObjectId | IBook;
  quantity: number;
  dueDate: Date;
}