import Article from "./components/article";
import Footer from "./components/footer";
import Main from "./components/main";
import Map from "./components/map";
import Nav from "./components/nav";
import Selection from "./components/selection";
import Sidebar from "./components/sidebar";
import { createContext, useState } from "react";

export const locationContext = createContext();
export const yearContext = createContext();

export default function App() {
  const [area, setArea] = useState(["縣市", "鄉鎮市區", "村里鄰"]);
  const [year, setYear] = useState(2020);

  return (
    <div className="App">
      <yearContext.Provider value={{ year, setYear }}>
        <Nav />
        <Main>
          <locationContext.Provider value={{ area, setArea }}>
            <Sidebar>
              <Selection />
              <Map />
            </Sidebar>
            <Article></Article>
          </locationContext.Provider>
        </Main>
      </yearContext.Provider>
      <Footer />
    </div>
  );
}
