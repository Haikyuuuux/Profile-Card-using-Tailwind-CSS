export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-neutral-800 to-black text-gray-100 p-6 animate-fade-in">
      {}
      <img
        src="/b58e0253-8a48-45ab-8e31-520806bd9897.jpg"
        alt="Profile"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-amber-400 shadow-[0_0_25px_#f59e0b] transform transition-transform duration-700 hover:scale-110 hover:rotate-2"
      />

      {}
      <h1 className="text-3xl md:text-4xl font-bold mt-6 text-amber-400 text-center tracking-wide drop-shadow-[0_0_12px_#f59e0b]">
        Abuloc, Haiko
      </h1>

      {}
      <p className="text-center max-w-xl mt-4 px-4 text-gray-300 leading-relaxed">
        An IT student who enjoys exploring creative ideas and building simple,
        user-friendly web projects with modern design.
      </p>

      {}
      <div className="flex flex-row items-center justify-center gap-6 mt-8 text-lg">
        {}
        <a
          href="https://github.com/Haikyuuuux"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-stone-700 to-stone-900 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_#f59e0b]"
        >
          GitHub
        </a>

        {}
        <a
          href="https://www.instagram.com/haikyuuuux/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_#fb923c]"
        >
          Instagram
        </a>

        {}
        <a
          href="https://www.facebook.com/haikyuuuux"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_#facc15]"
        >
          Facebook
        </a>
      </div>
    </div>
  );
}
