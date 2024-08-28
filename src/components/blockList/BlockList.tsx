import Block from "../block/Block";
import style from "./BlockList.module.css";
import { IFetchAllData } from "../../entities/IFetchData";
import { useLanguage } from "../../context/LanguageContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { HoroNames } from "../../feutures/translate/en_ru";

interface IBlockListProps {
  data: IFetchAllData;
  error: Error;
}


const BlockList = ({ data, error }: IBlockListProps) => {
  const { lang } = useLanguage();

  if (error) {
    return <>Error</>;
  }

  if (!data) {
    return (
      <>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <p>
            <Skeleton count={3} />
          </p>
        </SkeletonTheme>
      </>
    );
  }

  if (lang === "original") {
    return (
      <div className={style.blocklist}>
        {Object.entries(data.horoscope).map((el) => {
          const horoscopeName = HoroNames[el[0]] || el[0]; 
          return <Block key={el[1]} iconName={el[0]} name={horoscopeName} />;
        })}
      </div>
    );
  }

  return (
    <div className={style.blocklist}>
      {Object.entries(data.horoscope).map((el) => {
        return <Block key={el[0]} iconName={el[0]} name={el[0]} />;
      })}
    </div>
  );
};

export default BlockList;
