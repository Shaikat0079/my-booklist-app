import ReadButton from "@/components/bookDetails/ReadButton";
import WishlistButton from "@/components/bookDetails/WishlistButton";
import { IBook } from "@/types/books.type";
import Image from "next/image";
import React from "react";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}
const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book: IBook = booksData.find(
    (book: IBook) => book.bookId === parseInt(id),
  );
//   console.log(book);
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="card lg:card-side overflow-hidden bg-base-100 shadow-xl">
        {/* Book Image */}
        <figure className="bg-base-200 p-8 lg:w-1/3">
          <Image
            src={book.image}
            alt={book.bookName}
            width={300}
            height={500}
            className="rounded-lg object-cover shadow-lg"
          />
        </figure>

        {/* Book Information */}
        <div className="card-body lg:w-2/3">
          {/* Category & Rating */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge badge-primary">{book.category}</span>

            <span className="badge badge-warning">⭐ {book.rating}</span>
          </div>

          {/* Title */}
          <h1 className="card-title mt-3 text-3xl lg:text-4xl">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="text-lg text-base-content/70">
            By <span className="font-semibold">{book.author}</span>
          </p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span key={tag} className="badge badge-outline">
                #{tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="mt-5">
            <h2 className="mb-2 text-xl font-bold">About this book</h2>

            <p className="leading-7 text-base-content/70">{book.review}</p>
          </div>

          {/* Book Details */}
          <div className="divider" />

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            <div>
              <p className="text-sm text-base-content/50">Pages</p>
              <p className="font-semibold">{book.totalPages}</p>
            </div>

            <div>
              <p className="text-sm text-base-content/50">Published</p>
              <p className="font-semibold">{book.yearOfPublishing}</p>
            </div>

            <div>
              <p className="text-sm text-base-content/50">Publisher</p>
              <p className="font-semibold">{book.publisher}</p>
            </div>

            <div>
              <p className="text-sm text-base-content/50">Rating</p>
              <p className="font-semibold">⭐ {book.rating}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="card-actions mt-6">
            <ReadButton book={book}/>

            <div className="aura">
              <WishlistButton book={book}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
