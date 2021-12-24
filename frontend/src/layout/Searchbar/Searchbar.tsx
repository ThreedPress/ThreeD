export interface ISearchbarProps {}

export function Searchbar(props: ISearchbarProps) {
  return (
    <div className="max-w-2xl mx-auto bg-[#01252c]">
      <div className="relative flex items-center w-full h-12 overflow-hidden rounded-lg bg-slate-700 focus-within:shadow-lg">
        <div className="grid w-12 h-full text-gray-300 bg-slate-700 place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          className="w-full h-full pr-2 text-sm text-gray-700 outline-none peer"
          type="text"
          id="search"
          placeholder="Search something.."
        />
      </div>
    </div>
  );
}
