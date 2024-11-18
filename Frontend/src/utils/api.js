const API_URL = 'http://localhost:5000/api/books';

// Get all books
export const getBooks = async () => {
     try {
          const response = await fetch(API_URL);
          const data = await response.json();
          return data;
     } catch (error) {
          console.error('Error fetching books:', error);
          throw new Error('Failed to fetch books');
     }
};

// Add a new book
export const addBook = async (book) => {
     try {
          const response = await fetch(API_URL, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify(book),
          });
          const data = await response.json();
          return data;
     } catch (error) {
          console.error('Error adding book:', error);
          throw new Error('Failed to add book');
     }
};

// Delete a book
export const deleteBook = async (id) => {
     try {
          await fetch(`${API_URL}/${id}`, {
               method: 'DELETE',
          });
     } catch (error) {
          console.error('Error deleting book:', error);
          throw new Error('Failed to delete book');
     }
};
