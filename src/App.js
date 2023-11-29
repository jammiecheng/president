import { createContext, useEffect, useState } from "react";
import Content from "./components/content";
import Main from "./components/main";
import Map from "./components/map";
import Nav from "./components/nav";
import Footer from "./components/footer";
import logo from "./images/logo.png";
import person1 from "./images/person1.svg";
import person2 from "./images/person2.svg";
import person3 from "./images/person3.svg";
import person4 from "./images/person4.svg";
import person5 from "./images/person5.svg";
import person6 from "./images/person6.svg";
import Button from "./components/button";

export const requestContext = createContext();
export const windowSizeContext = createContext();

export default function App() {
  const [request, setRequest] = useState({
    year: 0,
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

  const clickHandler = (e) => {
    setRequest((prev) => ({ year: e, location: prev.location }));
  };

  return (
    <div className="App">
      <windowSizeContext.Provider value={{ isDesktop, setIsDesktop }}>
        <requestContext.Provider value={{ request, setRequest }}>
          {request.year !== 0 ? (
            <>
              <Nav />
              <Main>
                <Map />
                <Content />
              </Main>
              {!isDesktop && <Footer />}
            </>
          ) : (
            <div className="w-full h-full bg-[var(--color-default-white)]">
              <div className="w-1/2 h-full mx-auto my-[var(--sp-96)] flex flex-col items-center gap-[var(--sp-24)]">
                <div className="flex flex-col items-center">
                  <img className="w-[137px]" src={logo} alt="logo" />
                  <p className="text-[58px] leading-normal text-[var(--color-text-primary)] [font-family:Mantou_Sans]">
                    台灣歷年總統 都幾?
                  </p>
                </div>
                <h4 className="text-[var(--color-primary)]">選擇查詢年份</h4>
                <ul className="w-full gap-[var(--sp-16)] flex-wrap">
                  <li className="w-[calc(20%-12.8px)]">
                    <Button
                      size={"sm"}
                      children={1996}
                      customClass={
                        "!py-[calc(var(--sp-8)/2*3)] !rounded-full font-bold w-full text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-default-white)]"
                      }
                      clickHandler={() => clickHandler(1996)}
                    />
                  </li>
                  <li className="w-[calc(20%-12.8px)]">
                    <Button
                      size={"sm"}
                      children={2000}
                      customClass={
                        "!py-[calc(var(--sp-8)/2*3)] !rounded-full font-bold w-full text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-default-white)]"
                      }
                      clickHandler={() => clickHandler(2000)}
                    />
                  </li>
                  <li className="w-[calc(20%-12.8px)]">
                    <Button
                      size={"sm"}
                      children={2004}
                      customClass={
                        "!py-[calc(var(--sp-8)/2*3)] !rounded-full font-bold w-full text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-default-white)]"
                      }
                      clickHandler={() => clickHandler(2004)}
                    />
                  </li>
                  <li className="w-[calc(20%-12.8px)]">
                    <Button
                      size={"sm"}
                      children={2008}
                      customClass={
                        "!py-[calc(var(--sp-8)/2*3)] !rounded-full font-bold w-full text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-default-white)]"
                      }
                      clickHandler={() => clickHandler(2008)}
                    />
                  </li>
                  <li className="w-[calc(20%-12.8px)]">
                    <Button
                      size={"sm"}
                      children={2012}
                      customClass={
                        "!py-[calc(var(--sp-8)/2*3)] !rounded-full font-bold w-full text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-default-white)]"
                      }
                      clickHandler={() => clickHandler(2012)}
                    />
                  </li>
                  <li className="w-[calc(20%-12.8px)]">
                    <Button
                      size={"sm"}
                      children={2016}
                      customClass={
                        "!py-[calc(var(--sp-8)/2*3)] !rounded-full font-bold w-full text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-default-white)]"
                      }
                      clickHandler={() => clickHandler(2016)}
                    />
                  </li>
                  <li className="w-[calc(20%-12.8px)]">
                    <Button
                      size={"sm"}
                      children={2020}
                      customClass={
                        "!py-[calc(var(--sp-8)/2*3)] !rounded-full font-bold w-full text-[var(--color-text-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-default-white)]"
                      }
                      clickHandler={() => clickHandler(2020)}
                    />
                  </li>
                </ul>
              </div>
              <ul className="fixed">
                <li>
                  <img src={person1} alt={person1} />
                </li>
                <li>
                  <img src={person2} alt={person2} />
                </li>
                <li>
                  <img src={person3} alt={person3} />
                </li>
                <li>
                  <img src={person4} alt={person4} />
                </li>
                <li>
                  <img src={person5} alt={person5} />
                </li>
                <li>
                  <img src={person6} alt={person6} />
                </li>
              </ul>
            </div>
          )}
        </requestContext.Provider>
      </windowSizeContext.Provider>
    </div>
  );
}
