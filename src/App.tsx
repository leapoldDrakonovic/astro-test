import useSWR from "swr";
import BlockList from "./components/blockList/BlockList"
import PageLayout from "./components/layout/layout"
import fetcher from "./feutures/fetcher";
import { useLanguage } from "./context/LanguageContext";





function App() {

  const {lang} = useLanguage()


  const bodyData = {
    sign: "", 
    language: lang,
    period: "today",
  };


  // Для динамического списка
  const { data, error } = useSWR(
    ["/api/get_horoscope/", bodyData], 
    fetcher
  );

  return (
    <>
    <PageLayout>
      <BlockList data={data} error={error}/>
    </PageLayout>
    </>
  )
}

export default App
