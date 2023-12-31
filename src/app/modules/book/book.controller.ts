import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { paginationFields } from '../../../constants/pagination'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { BookService } from './book.service'
import { IBook, bookFilterableFields } from './book.interface'

const createBook = catchAsync(async (req: Request, res: Response) => {
  const { ...bookData } = req.body
  const result = await BookService.createBook(
    bookData
  )

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book created successfully',
    data: result,
  })
})

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await BookService.getSingleBook(id)

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book fetched successfully',
    data: result,
  })
})

const getAllBook = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields)
  const paginationOptions = pick(req.query, paginationFields)

  const result = await BookService.getAllBook(
    filters,
    paginationOptions
  )

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books fetched successfully',
    meta: result.meta,
    data: result.data,
  })
})

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await BookService.updateBook(id, req.body)

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Book updated successfully',
    data: result,
  })
})

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await BookService.deleteBook(id)

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Book deleted successfully',
    data: result,
  })
})

export const BookController = {
  createBook,
  getSingleBook,
  getAllBook,
  updateBook,
  deleteBook,
}
