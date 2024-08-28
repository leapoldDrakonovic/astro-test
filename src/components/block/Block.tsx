// @ts-nocheck

import React, { ReactEventHandler, useCallback, useState } from 'react'
import style from "./Block.module.css"
import { TbZodiacAquarius, TbZodiacAries, TbZodiacCancer, TbZodiacCapricorn, TbZodiacGemini, TbZodiacLeo, TbZodiacLibra, TbZodiacPisces, TbZodiacSagittarius, TbZodiacScorpio, TbZodiacTaurus, TbZodiacVirgo } from "react-icons/tb";
import useSWR from 'swr';
import fetcher from '../../feutures/fetcher';
import { useLanguage } from '../../context/LanguageContext';
import { ButtonsText } from '../../feutures/translate/en_ru';
import { useSign } from '../../context/SignContext';
import { useSideWindow } from '../../context/SideWindowContext';

interface IBlockProps {
  name: string,
  iconName: string
}

const iconsList: { [key: string]: React.ReactNode } = {
  aries: <TbZodiacAries size={40}/>,
  taurus: <TbZodiacTaurus size={40}/>,
  gemini:<TbZodiacGemini size={40}/>,
  cancer:<TbZodiacCancer size={40}/>,
  leo: <TbZodiacLeo size={40}/>,
  virgo:<TbZodiacVirgo size={40}/>,
  libra:<TbZodiacLibra size={40}/>,
  scorpio:<TbZodiacScorpio size={40}/>,
  sagittarius:<TbZodiacSagittarius size={40}/>,
  capricorn: <TbZodiacCapricorn size={40}/>,
  aquarius: <TbZodiacAquarius size={40}/>,
  pisces:<TbZodiacPisces size={40}/>,
}

const Block = ({name, iconName}: IBlockProps) => {

  const {isOpen ,setIsOpen} = useSideWindow()
  const {lang} = useLanguage()
  const {setSign, setPeriod} = useSign()
  const [bodyData, setBodyData] = useState(null)
  const [isFetching, setIsFetching ] = useState<boolean>(false)

  //todo убрать лишние запросы которые возникают при рендеринге

  const icon = iconsList[iconName.toLowerCase()] || null
  const {data, error} = useSWR(
    isFetching && bodyData ? [`/api/get_horoscope/`, bodyData] : null
    , fetcher)


  const handleOnClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const period = event.currentTarget.getAttribute('data-value') || '';
    setSign(iconName)
    setPeriod(period)
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }, [bodyData])

console.log(data);

  

  return (
    <div className={style.block}>
      <div className={style.container}>
          <div className={style.block_icon}>
          {icon}
          </div>
          <div className={style.block_title}>{name}</div>
          <div className={style.btns_container}>
          <button className={style.button} onClick={handleOnClick} data-value={"today"}>
            {lang === "original" ? ButtonsText.ru.today : ButtonsText.en.today}
          </button>
          <button className={style.button} onClick={handleOnClick} data-value={"tomorrow"}>
          {lang === "original" ? ButtonsText.ru.tomorrow : ButtonsText.en.tomorrow}
          </button>
          </div>
      </div>
    </div>
  )
}

export default Block