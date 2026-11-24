import "./Header.css";

function Header() {
  return (
    <nav className="bg-[#1a4a56] grid grid-cols-2 items-center h-auto w-full p-4 ">
      <h1 className="text-lg font-semibold justify-self-end text-[#382d27]">Progject</h1>
      <a
        href="index.html"
        className="justify-self-end btn-exit text-[#382d27]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-door-open-fill"
          viewBox="0 0 16 16"
        >
          <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15zM11 2h.5a.5.5 0 0 1 .5.5V15h-1zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
        </svg>
      </a>
    </nav>
  );
}

export default Header;
