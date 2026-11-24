import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <body className="">
      <Header />
      <main className="flex flex-col w-full h-full gap-4 p-5">
        <section className="bg-[#1a4a56] p-4 w-2xl h-dvh  "></section>
      </main>
      <footer className="h-full w-full flex items-end-safe bg-[#1a4a56]">
        <p className="flex mx-5 text-xs text-amber-50">
          © 2026 Chaiwat Wareekhet. Built with React Tailwind CSS. All rights
          reserved
        </p>
      </footer>
    </body>
  );
}

export default App;
