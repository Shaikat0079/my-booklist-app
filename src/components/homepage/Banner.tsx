import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white my-10">
        {/* Background decorations */}
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="container relative mx-auto px-6 py-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Hero Content */}
            <div className="max-w-xl">
              <span className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-indigo-200 backdrop-blur-md">
                📚 Your next story starts here
              </span>

              <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Discover Your
                <span className="block bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Next Great Read
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
                Explore a world of unforgettable stories, inspiring ideas, and
                books waiting to become your next favourite.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  className="rounded-xl bg-white px-6 py-3.5
                       font-semibold text-slate-900
                       shadow-lg shadow-indigo-500/20
                       transition duration-300
                       hover:-translate-y-1 hover:bg-indigo-50"
                >
                  Explore Books →
                </button>

                <button
                  className="rounded-xl border border-white/20
                       bg-white/10 px-6 py-3.5
                       font-semibold text-white
                       backdrop-blur-md
                       transition duration-300
                       hover:-translate-y-1 hover:bg-white/20"
                >
                  Browse Categories
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-purple-500/30 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
                <Image
                  className="h-[420px] w-full rounded-2xl object-cover transition duration-500 hover:scale-105 sm:h-[500px]"
                  src={bannerImage}
                  alt="A collection of books"
                />

                {/* Floating card */}
                <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-black/40 p-4 backdrop-blur-xl">
                  <p className="text-sm text-slate-300">Featured collection</p>

                  <p className="mt-1 text-lg font-semibold">
                    Stories worth remembering ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
