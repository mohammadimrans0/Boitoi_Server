import express from 'express'
import { BookController } from './book.controller';

const router = express.Router();

router.post(
  '/',
  BookController.createBook
)

router.get('/:id', BookController.getSingleBook)

router.get('/', BookController.getAllBook)

router.patch(
  '/:id',
  BookController.updateBook
)

router.delete(
  '/:id',
  BookController.deleteBook
)

export const BookRoutes = router