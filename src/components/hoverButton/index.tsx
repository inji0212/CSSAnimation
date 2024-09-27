export default function HoverButton() {
  return (
    <>
      <button className="border-b-2 border-black w-48 group pb-2 flex justify-between whitespace-nowrap px-0 items-center overflow-hidden ">
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          className="w-4 h-4 opacity-0 translation group-hover:opacity-100 group-hover:translate-x-0 duration-500 -translate-x-full will-change-transform"
        >
          <path
            d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="-translate-x-8 group-hover:-translate-x-4 transition-transform duration-500">
          {" "}
          Seize every sale{" "}
        </span>
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          focusable="false"
          className="w-4 h-4 opacity-100 group-hover:opacity-0 group-hover:translate-x-full duration-500 "
        >
          <path
            d="M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </>
  );
}
