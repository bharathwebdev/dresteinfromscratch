import React from "react";
import styled from "styled-components";
import "../App.css";
import lap from "../assets/laptop.png";

const DeptImage = styled.img`
  border-radius: 20px;
`
function DepartMentCard({ img, title, des,color }) {
  const a = title.split(" ");
  console.log(a);
  return (
    <div class="container">
      <div class="card">
        <div class="imgBx" style={{
          width:'100%'
        }}>
          <img style={{ 
            borderRadius: "20px",
            objectFit:'cover'
           }} src={img} />
        </div>  
        <div class="contentBx">
          <h2>
            {a[0]}
            <br />
            {a[1]}
          </h2>
          {/* <div class="lorem">
            <h3>{des}</h3>
          </div> */}
          <a href="#">Events</a>
        </div>
      </div>
    </div>
  );
}

export default DepartMentCard;
