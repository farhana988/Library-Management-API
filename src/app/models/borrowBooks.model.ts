import mongoose, { model, Schema } from "mongoose";
import { Book } from "./books.model";
import { IBorrow } from "../interfaces/borrowBooks.interface";

const borrowSchema = new Schema<IBorrow>(
  {
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, "Quantity must be at least one"],
    },
    dueDate: {
      type: Date,
      required: true,
      validate: {
        validator: (date: Date) => date > new Date(),
        message: "Due date must be in the future",
      },
    },
  },
  { versionKey: false, timestamps: true }
);

// middleware
borrowSchema.pre("save", async function (next) {
  const book = await Book.findById(this.book);

  // Check if has enough copies
  if (!book || book.copies < this.quantity) {
    throw new Error("Not enough copies available");
  }

  // Update book copies
  book.copies -= this.quantity;
  book.available = book.copies > 0;
  await book.save();

  next();
});

export const Borrow = model<IBorrow>("Borrow", borrowSchema);
