import React, { useContext, useRef, useState } from "react";
import style from "./Header.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { useLanguage } from "../../context/LanguageContext";

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {

  const { lang, setLang } = useLanguage();

  const selector = useRef<HTMLUListElement | null>(null);
  const langBtn = useRef<HTMLButtonElement | null>(null);




  const handleLangChange = (event: React.MouseEvent<HTMLLIElement>) => {
    const selectedLang = event.currentTarget.getAttribute("data-value") as
      | "original"
      | "translated";
    
    handleBtnOnClick();
    setLang(selectedLang)
  };

  const handleBtnOnClick = () => {
    if (selector.current && langBtn.current) {
      selector.current.classList.toggle(style.hidden);
      langBtn.current.classList.toggle(style.active);
    }
  };

  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>ASTRO</div>
        <div className={style.selector_container}>
          <button
            onClick={handleBtnOnClick}
            className={style.lang_btn}
            ref={langBtn}
          >
            {lang === "original" ? "Russian" : "English"}
            <IoIosArrowDown color="#D3A787" size={10} />
          </button>
          <ul className={style.selector} ref={selector}>
            <li data-value={"original"} onClick={handleLangChange}>Russian</li>
            <li data-value={"translated"} onClick={handleLangChange}>English</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
