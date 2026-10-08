import { useState } from "react";


function calenderboard() {
  const [calender, setCalender] = useState(new Date());

  return (
    <>
      <h2>{calender.toLocaleDateString()}</h2>
      <button
        className="calender-btn"
        id="prev-month"
        aria-label="เดือนก่อนหน้า"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
          />
        </svg>
      </button>
      <button className="calender-btn" id="next-month" aria-label="เดือนถัดไป">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
      <div className="month-year">
        <span className="month">
          {calender.toLocaleString("default", { month: "long" })}
        </span>
        <span className="year">{calender.getFullYear()}</span>
      </div>
      <div className="weekdays">
        <span className="weekday">Mon</span>
        <span className="weekday">Tue</span>
        <span className="weekday">Wed</span>
        <span className="weekday">Thu</span>
        <span className="weekday">Fri</span>
        <span className="weekday">Sat</span>
        <span className="weekday">Sun</span>
      </div>
      <div className="days" id="days">
        {/* Calendar days would be generated here */}
      </div>
      <div className="dashboard__Calender-Events">
        <h3>Events</h3>
        <ul className="event-list">{/* Event items would go here */}</ul>
      </div>
    </>
  );
}

export default calenderboard;
