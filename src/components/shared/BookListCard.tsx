import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBookCardListProps {
  book: IBook;
}

const BookListCard = ({ book }: IBookCardListProps) => {
  return (
    <article className="group flex w-full gap-4 rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md my-5">
      {/* Book Image */}
      <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-lg bg-base-200">
        <Image
          src={book.image}
          alt={`Cover of ${book.bookName}`}
          fill
          sizes="96px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Book Information */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Title */}
        <h2
          className="line-clamp-1 text-base font-bold sm:text-lg"
          title={book.bookName}
        >
          {book.bookName}
        </h2>

        {/* Author */}
        <p
          className="mt-0.5 truncate text-sm text-base-content/60"
          title={book.author}
        >
          By {book.author}
        </p>

        {/* Category + Rating */}
        <div className="mt-2 flex flex-wrap gap-2">
          {book.category && (
            <span className="badge badge-primary badge-sm">
              {book.category}
            </span>
          )}

          <span className="badge badge-warning badge-sm">⭐ {book.rating}</span>
        </div>

        {/* Review */}
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-base-content/70 sm:text-sm">
          {book.review || "No review available for this book."}
        </p>

        {/* Metadata */}
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-2 text-xs text-base-content/50">
          <span>{book.totalPages} pages</span>

          <span>{book.yearOfPublishing}</span>

          <span className="max-w-40 truncate" title={book.publisher}>
            {book.publisher}
          </span>
        </div>
      </div>

      {/* Action */}
      <Link href={`/books/${book.bookId}`}>
      <div className="hidden shrink-0 items-center sm:flex">
        <button className="btn btn-sm btn-outline">Details</button>
      </div>
      </Link>
    </article>
  );
};

export default BookListCard;
