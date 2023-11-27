import { createContext, useEffect, useState } from "react";
import Content from "./components/content";
import Main from "./components/main";
import Map from "./components/map";
import Nav from "./components/nav";
import Footer from "./components/footer";

export const requestContext = createContext();
export const windowSizeContext = createContext();

export default function App() {
  const [request, setRequest] = useState({
    year: 2020,
    location: ["全部", "選擇區域"],
  });
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkWindowSize = () =>
      setIsDesktop(window.innerWidth > 768 ? true : false);

    window.addEventListener("load", checkWindowSize);
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.addEventListener("load", checkWindowSize);
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <div className="App">
      <windowSizeContext.Provider value={{ isDesktop, setIsDesktop }}>
        <requestContext.Provider value={{ request, setRequest }}>
          <Nav />
          <Main>
            <Map />
            <Content />
          </Main>
          {!isDesktop && <Footer />}
        </requestContext.Provider>
      </windowSizeContext.Provider>
    </div>
  );
}
