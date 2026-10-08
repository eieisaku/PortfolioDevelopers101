import { useState, useEffect, useRef } from "react";

const project = [{ id: 1, name: "" }];

function projectlist() {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <section
      id="Project"
      className="h-[700px] w-full p-4 flex flex-col gap-5 bg-linear-to-r from-[#1F1F1F] to-[#343434]">
      <div>
        <h2 class="font-doppio text-6xl text-center text-white">Project</h2>
      </div>
      <div
        id="track"
        class="scrollbar-none flex gap-6 overflow-x-auto scroll-smooth mr-t-4 py-5"
        style="scroll-snap-type: x mandatory;">
        <article></article>
      </div>
    </section>
  );
}

export default projectlist;

