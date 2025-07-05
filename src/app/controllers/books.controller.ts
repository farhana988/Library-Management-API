import express, { Request, Response } from "express";
import { Book } from "../models/books.model";
import { handleError } from "../../utils/errorHandler";

export const booksRoutes = express.Router();

// 1. Create Book
booksRoutes.post("/", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const book = await Book.create(body);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    handleError(res, error);
  }
});

// 2. Get All Books
booksRoutes.get("/", async (req: Request, res: Response) => {
  try {
    const { filter, sortBy = "createdAt", sort = "asc" } = req.query;
    const query = filter ? { genre: filter } : {};
    const books = await Book.find(query).sort({
      [sortBy as string]: sort === "asc" ? 1 : -1,
    });
    res.json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    handleError(res, error);
  }
});

// 3. Get Book by ID
booksRoutes.get("/:bookId", async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const book = await Book.findById(bookId);

    res.status(201).json({
      success: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (error) {
    handleError(res, error);
  }
});

// 4. Update Book
booksRoutes.put("/:bookId", async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const updatedBody = req.body;
    const book = await Book.findByIdAndUpdate(bookId, updatedBody, {
      new: true,
      runValidators: true,
    });

    res.status(201).json({
      success: true,
      message: "Book updated successfully",
      data: book,
    });
  } catch (error) {
    handleError(res, error);
  }
});

// 5. Delete Book
booksRoutes.delete("/:bookId", async (req: Request, res: Response) => {
  try {
    const bookId = req.params.bookId;
    const book = await Book.findByIdAndDelete(bookId);
    res.status(201).json({
      success: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error) {
    handleError(res, error);
  }
});
