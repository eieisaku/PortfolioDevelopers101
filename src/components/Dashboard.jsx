import "./Dashboard.css";
import { useState,useEffect } from "react";
import Calenderboard from "./boardcalender";
import Projectlist from "./Projectlist";
import GreetingCard from "./GreetingCard";

function Dashboard() {
  const [theme, setTheme] = useState("light");
  const [name, setName] = useState("Guresh");
 


  return (
    <div className="dashboard" id="home-DB">
      <div className="search-bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
        <input type="search" placeholder="ค้นหาสินค้า..." />
      </div>
      <div className="flexjustify-end">
        <button className="theme-toggle" aria-label="สลับโหมดธีม">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-moon"
            viewBox="0 0 16 16"
          >
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
          </svg>
        </button>
      </div>
      <GreetingCard/>
      <div className="dashboard__My-Current-Project">
        <h2>My Current Project</h2>
        <projectlist/>
      </div>
      <div className="dashboard__Learning-Progress">
        <h2>Learning Progress</h2>
        <div className="progress-list">
          {/* Progress items would go here */}
        </div>
      </div>
      <div className="dashboard__Calender">
        <Calenderboard/>
      </div>
    </div>
  );
}

export default Dashboard;
