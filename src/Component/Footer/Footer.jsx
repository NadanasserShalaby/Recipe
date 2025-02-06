import React from "react";
import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={`${style.flex} ${style.boreder}`}>
        <div className={style.flex}>
          <img
            src="https://assignment-sass.vercel.app/assets/logo-BfNap0Pe.png"
            width="80px"
            alt="recipe logo"
          />
          <h2>Recipe</h2>
        </div>
        <h2 className={style.blue}>Route</h2>
      </div>
      <p>
        © 2025 <span>Nada Nasser™. </span> All Rights Reserved.
      </p>
    </footer>
  );
}
