# Book Listing App

The **Book Listing App** is a web application built using React, designed to help users manage a collection of books. It allows users to view, add, and delete books while seamlessly integrating with a backend API. The app features a clean UI, toast notifications for feedback, and responsive design with TailwindCSS.

---

## Features

### 📚 Core Features

- **View Books**: Displays a list of books with details like title, author, and description.
- **Add a Book**: Add new books to the list with a simple form.
- **Delete a Book**: Remove books from the list with a single click.
- **Dynamic Updates**: Books are added or removed instantly without requiring a page refresh.

### ✨ User Experience Enhancements

- **Toast Notifications**: Users receive feedback for actions (e.g., book added, or deleted) using `react-toastify`.
- **Loading Indicators**: Shows a loading state when fetching or modifying data.
- **Responsive Design**: The interface is fully responsive and looks great on all devices.

---

## Technologies Used

### Frontend

- **React**: Component-based UI framework.
- **TailwindCSS**: For responsive and modern UI styling.
- **React Toastify**: For user-friendly toast notifications.
- **Prop Types**: For runtime type-checking of props.

### Backend

- **Node.js**: Server runtime.
- **Express.js**: RESTful API for handling book operations.
- **Database (Optional)**: Integrate MongoDB or any preferred database for persistent data storage.

---

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js**: Version 14 or later.
- **npm**: Version 6 or later.
- A browser that supports modern JavaScript features.

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/D-4-DIBAKAR/Books-Listing.git
   cd Books-Listing
   ```
2. Install dependencies:

   ```bash
   npm install

   ```

3. Start the development server:
   - Backend <br>
     ```
     npm start
     ```
   - Frontend <br>
     ```
     npm run dev
     ```

## Live Demonstration

- Frontend: View on Netlify
- Backend API: View on Render
- API Documentation: View Postman Docs

## API Endpoints

- GET /books: Fetch all books.
- POST /books: Add a new book (requires `title`, `author`, and `description`).
- DELETE /books/
  : Delete a book by ID.

## Snapshots

📸 Frontend

📸 Backend

## Contribution

If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed explanation of your changes.

## License

This project is open-source and available under the MIT License.

Happy coding! 😊
