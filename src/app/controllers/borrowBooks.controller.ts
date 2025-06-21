import express, { Request, Response } from "express";
import { handleError } from "../../utils/errorHandler";
import { Borrow } from "../models/borrowBooks.model";

const borrowRoutes = express.Router();

// 6. Borrow a Book
borrowRoutes.post("/", async (req: Request, res: Response) => {
  try {
    const { book, quantity, dueDate } = req.body;

    const borrow = await Borrow.create({
      book,
      quantity,
      dueDate: new Date(dueDate),
    });

    res.status(201).json({
      success: true,
      message: "Book borrowed successfully",
      data: borrow,
    });
  } catch (error) {
    handleError(res, error);
  }
});

// 7. Borrowed Books Summary (Using Aggregation)
borrowRoutes.get("/", async (req: Request, res: Response) => {
  try {
    const summary = await Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "book",
        },
      },
      {
        $unwind: "$book",
      },
      {
        $project: {
          _id: false,
          book: {
            title: "$book.title",
            isbn: "$book.isbn",
          },
          totalQuantity: 1,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: summary,
    });
  } catch (error) {
    handleError(res, error);
  }
});

export default borrowRoutes;
