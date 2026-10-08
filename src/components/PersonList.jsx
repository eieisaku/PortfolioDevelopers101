import { useState } from "react";
import imagemine from "../assets/imagemine.svg";
6
function personList() {
  const [data, setData] = useState([
    {id: 1, name: "ตะกร้าสินค้า",tag:"Web",description:"ระบบหน้าสินค้าที่ดึงข้อมูล APi มาแสดงในเว็บไซต์และการบวกราคาสินค้าต่างๆ"},
    {id: 2, name: "กราฟ",tag:"Web", description: "ระบบแสดงผลวิเคราะห์ข้อมูล"},
    {id: 3, name: "UxUiWeb",tag:"UxUi", description: "ออกแบบหน้าตาส่วนผู้ใช้"}
  ]);
  return (
    <>
      <h1>โปรเจค</h1>
      {data.map((item) => (
        <article key={item.id}>
          <img src={imagemine} alt="picture" width={50} height={50}/>
          <h3>{item.nema}</h3>
          <span>{item.description}</span>
        </article>
      ))}
    </>
  );
}

export default personList;
