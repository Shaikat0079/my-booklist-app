"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";

const ReadButton = ({book}:{book:IBook}) => {
    const {readBooks,setReadBooks} = useContext(BooksContext)
    // console.log(booksProvider);
  const handleReadBook = () => {console.log("Read book triggred!",book);
    setReadBooks([...readBooks,book])
    alert(`You've read "${book.bookName}"`)
  };
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        handleReadBook();
      }}
    >
      Starting Reading
    </button>
  );
};

export default ReadButton;
