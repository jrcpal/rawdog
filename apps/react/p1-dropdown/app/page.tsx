"use client";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-left bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Simple Dropdown
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            React nested dropdown displaying grocery items 
          </p>
        </div>
        <div className="dropdown bg-red-200 h-20 w-2xl flex flex-col items-start">
          <label>Grocery Items</label>
          <button className="dropdown-btn w-lg text-left border border-solid border-black" onClick={() => alert("Dropdown button clicked")}>Categories</button>
          <div id="groeceryDropdown" className="dropdown=content"></div>
        </div>
      </main>
    </div>
  );
}
