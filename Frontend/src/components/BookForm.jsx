import { useState } from 'react';
import { addBook } from '../utils/api';
import { toast } from 'react-toastify';

const BookForm = ({ onAdd, loading }) => {
     const [title, setTitle] = useState('');
     const [author, setAuthor] = useState('');
     const [description, setDescription] = useState('');

     const handleSubmit = async (e) => {
          e.preventDefault();
          if (title && author && description) {
               const newBook = { title, author, description };
               try {
                    const addedBook = await addBook(newBook);
                    onAdd(addedBook);
                    toast.success('Book added successfully!');
                    setTitle('');
                    setAuthor('');
                    setDescription('');
               } catch (error) {
                    toast.error('Failed to add book');
               }
          } else {
               toast.error('All fields are required!');
          }
     };

     return (
          <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
               <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">Add a New Book</h2>
               <div className="flex gap-2">
                    <input
                         type="text"
                         value={title}
                         onChange={(e) => setTitle(e.target.value)}
                         placeholder="Title"
                         className="w-full p-2 mb-2 border border-gray-300 rounded"
                    />
                    <input
                         type="text"
                         value={author}
                         onChange={(e) => setAuthor(e.target.value)}
                         placeholder="Author"
                         className="w-full p-2 mb-2 border border-gray-300 rounded"
                    />
               </div>
               <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
               />
               <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded"
                    disabled={loading}
               >
                    {loading ? 'Adding...' : 'Add Book'}
               </button>
          </form>
     );
};

export default BookForm;
