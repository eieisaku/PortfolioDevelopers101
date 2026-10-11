import { useState, useEffect } from "react";
import "./GreetingCard.css";


 const periods = [
  {
    key: "morning",
    from: 5, // 05:00 - 11:59
    to: 12,
    greeting: "Good morning",
    comment: "Rise and shine! Wishing you a day filled with good energy and success.",
    image: "src/assets/1.png",
  },
  {
    key: "afternoon",
    from: 12, // 12:00 - 17:59
    to: 18,
    greeting: "Good afternoon",
    comment: "Hope your day is going well! Don't forget to grab lunch and take a breath.",
    image: "src/assets/2.png",
  },
  {
    key: "night",
    from: 18, // 18:00 - 04:59 (ข้ามเที่ยงคืน)
    to: 5,
    greeting: "Good evening",
    comment: "Good night! Recharge your batteries and rest up for another awesome day tomorrow.",
    image: "src/assets/3.png",
  },
];


function getPeriod(hour) {
  // กรณีช่วงที่ข้ามเที่ยงคืน (from > to) ต้องเช็กแบบ OR
  return (
    periods.find((p) =>
      p.from < p.to
        ? hour >= p.from && hour < p.to
        : hour >= p.from || hour < p.to
    ) ?? periods[0]
  );
}


export default function GreetingCard({ name }) {
  const [period, setPeriod] = useState(() => getPeriod(new Date().getHours()));

  useEffect(() => {
    const id = setInterval(() => {
      setPeriod(getPeriod(new Date().getHours()));
    }, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="greeting-card"
      style={{ backgroundImage: `url(${period.image})` }}>
      <div className="greeting-card__content">
        <h2>
          {period.greeting}, {name}
        </h2>
        <p>{period.comment}</p>
      </div>
    </section>
  );
}