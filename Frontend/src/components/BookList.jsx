import { useState, useEffect } from 'react';
import BookCard from './BookCard';
import { getBooks, deleteBook } from '../utils/api';

const BookList = ({ books, setBooks }) => {
     const [loading, setLoading] = useState(false); // Loading state

     const handleDelete = async (id) => {
          // Optimistic UI update: Remove the book from the list immediately
          setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));

          try {
               // Now perform the delete operation on the backend
               await deleteBook(id);
               toast.success('Book deleted successfully!');
          } catch (error) {
               console.error('Error deleting book:', error);
               toast.error('Failed to delete book');
               // If delete fails, add the book back to the list
               setBooks((prevBooks) => [...prevBooks, books.find((book) => book._id === id)]);
          }
     };

     return (
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {loading ? (
                    <div className="text-center">Loading...</div> // Loading indicator
               ) : (
                    books.map((book) => (
                         <BookCard key={book._id} book={book} onDelete={handleDelete} />
                    ))
               )}
          </div>
     );
};

export default BookList;