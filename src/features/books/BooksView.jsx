import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { deleteBook } from "./BooksSlice";
import { Link } from "react-router-dom";

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="container" style={{width:'100%',height:'550px', backgroundColor:'lightgrey'}}>
      <h2
        className="text-center text-uppercase m-5 fs-3"
        style={{ letterSpacing: "5px", fontWeight: "ligher" }}
      >
        List of books
      </h2>
      <table
        className="border border-3 border-light rounded p-4 table mb-5 p-5" 
        // className="table mb-5"
        style={{ maxWidth: "800px", margin: "auto",backgroundColor:'lightblue' }}
      >
        <thead>
          <tr style={{ background: "#006877", color: "white" }}>
            <th className="p-3">ID</th>
            <th className="p-3">Title</th>
            <th className="p-3">Author</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book, index) => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  <th className="p-3">{index + 1}</th>
                  <td className="p-3">{title}</td>
                  <td className="p-3">{author}</td>
                  <td className="d-flex gap-2 p-3">
                    <Link to="/edit-book" state={{ id, title, author }}>
                      <button className="bg-danger">
                        <FaEdit />
                      </button>
                    </Link>

                    <button className="bg-danger" onClick={() => handleDelete(id)}>
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksView;
