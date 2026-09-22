import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";

interface IBookCardProps{
    book:IBook;
}

const BookCard = ({ book }:IBookCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Book Image */}
      <div className="relative h-96 overflow-hidden bg-slate-100">
        <Image
          src={book.image}
          alt={`Cover of ${book.bookName}`}
          width={800}
          height={600}
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
            {book.category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-sm font-bold text-slate-800 shadow-md backdrop-blur-md">
            ⭐ {book.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Book Name */}
        <h2 className="line-clamp-1 text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-slate-500">
          by <span className="font-medium text-slate-700">{book.author}</span>
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Details */}
        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">

          <div>
            <p className="text-xs text-slate-400">Pages</p>
            <p className="font-semibold text-slate-700">
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Published</p>
            <p className="font-semibold text-slate-700">
              {book.yearOfPublishing}
            </p>
          </div>

        </div>

        {/* Publisher */}
        <p className="mt-3 text-xs text-slate-400">
          Published by{" "}
          <span className="font-medium text-slate-600">
            {book.publisher}
          </span>
        </p>

        {/* Button */}
        <Link href={`/books/${book.bookId}`}><button
          className="mt-5 w-full rounded-xl bg-slate-900 py-3
                     text-sm font-semibold text-white
                     transition-all duration-300
                     hover:bg-indigo-600"
        >
          View Book →
        </button>
        </Link>

      </div>
    </div>
  );
};

export default BookCard;