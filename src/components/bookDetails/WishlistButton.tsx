"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";

const WishlistButton = ({book}:{book:IBook}) => {
    const {wishlist,setWishlist} = useContext(BooksContext)
    // console.log(booksProvider);
  const handleAddToWishlist = () => {
    setWishlist([...wishlist,book])
    alert(`You've added to wishlist"${book.bookName}"`)
  };
  return (
    <button
      className="btn btn-soft"
      onClick={() => {
        handleAddToWishlist();
      }}
    >
      Wishlist
    </button>
  );
};

export default WishlistButton;
