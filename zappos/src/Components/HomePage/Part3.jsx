import React from "react";
import styles from "../../Style/part3.module.css";
  



export const Part3 = (props) => {
  // console.log(props.data);
  const {data} = props ;
  return (
    <div className={styles.jarvis}>
      {data.map((el) => {
        return (
          <div key={el.id}>
            <img src={el.img} alt="" />
            <h2>{el.title}</h2>
            <p>{el.desc}</p>
            <p>{el.link}</p>
          </div>
        );
      })}
    </div>
  );
};