import { useState, useEffect } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getBooks } from './utils/api';

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch books from the API
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
        toast.error('Failed to fetch books');
      }
      setLoading(false);
    };
    fetchBooks();
  }, []);

  // Handle adding a new book and updating the list
  const handleAddBook = async (newBook) => {
    try {
      setLoading(true);
      setBooks((prevBooks) => [newBook, ...prevBooks]);
      // toast.success('Book added successfully!');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error('Failed to add book');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2 text-center">Book Listing App</h1>
      <BookForm onAdd={handleAddBook} loading={loading} />
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-blue-700" />
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <BookList books={books} setBooks={setBooks} />
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
