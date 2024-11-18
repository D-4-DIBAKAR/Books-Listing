const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Get all books
router.get('/books', async (req, res) => {
     try {
          const books = await Book.find();
          res.json(books);
     } catch (error) {
          res.status(500).json({ message: error.message });
     }
});

// Add a book
router.post('/books', async (req, res) => {
     try {
          const { title, author, description } = req.body;
          const newBook = new Book({ title, author, description });
          await newBook.save();
          res.status(201).json(newBook);
     } catch (error) {
          res.status(400).json({ message: error.message });
     }
});

// Delete a book
router.delete('/books/:id', async (req, res) => {
     try {
          await Book.findByIdAndDelete(req.params.id);
          res.status(200).json({ message: 'Book deleted successfully' });
     } catch (error) {
          res.status(500).json({ message: error.message });
     }
});

module.exports = router;
