import React, { useEffect, useLayoutEffect, useRef } from "react";
import style from "./sideWindow.module.css";
import useSWR from "swr";
import fetcher from "../../feutures/fetcher";
import Skeleton from "react-loading-skeleton";
import { useSign } from "../../context/SignContext";
import { useLanguage } from "../../context/LanguageContext";
import { useSideWindow } from "../../context/SideWindowContext";

interface ISideWindowProps {}

const SideWindow = (props: ISideWindowProps) => {
  const { sign, period } = useSign();
  const { lang } = useLanguage();
  const { isOpen, setIsOpen } = useSideWindow();

  useLayoutEffect(() => {
    document.querySelector("body")?.style.setProperty("overflow-y", "hidden");
    return () => {
      document.querySelector("body")?.style.removeProperty("overflow-y");
    };
  }, [isOpen, setIsOpen]);

  const bodyData = {
    sign: sign,
    language: lang,
    period: period,
  };

  const { data, error } = useSWR(["/api/get_horoscope/", bodyData], fetcher);

  return (
    <div
      className={
        isOpen ? `${style.sideWindow} ${style.active}` : `${style.sideWindow}`
      }
    >
      <div className={style.container}>
        <div className={style.content_container}>
          <h3 className={style.title}>{data ? data.sign : <Skeleton />}</h3>
          <div className={style.period_container}>
            {" "}
            {data ? data.period : <Skeleton />}
          </div>
          <div className={style.horoscope_container}>
            <p className={style.horoscope}>
              {typeof data?.horoscope === "string" ? (
                data.horoscope
              ) : (
                <Skeleton />
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideWindow;
