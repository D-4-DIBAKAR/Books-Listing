

const BookCard = ({ book, onDelete }) => {
     const { _id, title, author, description } = book;

     return (
          <div className="relative bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs min-h-[180px]">
               <h3 className="text-xl font-semibold truncate">{title}</h3>
               <p className="text-gray-600 mt-1">Author: {author}</p>
               <p className="text-gray-500 text-sm mt-2 line-clamp-3">{description}</p>
               <button
                    onClick={() => onDelete(_id)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-200"
               >
                    Delete
               </button>
          </div>
     );
};

export default BookCard;
