import { useContext } from "react";
import { yearContext } from "../../App";

export default function Nav() {
  const { setYear } = useContext(yearContext);

  const clickHandler = (e) => {
    setYear(e.target.value);
  };

  return (
    <nav className="w-full p-[var(--spacing-4)] pb-[var(--spacing-6)] bg-[var(--color-neutral-1)] fixed top-0 z-50 xl:p-[var(--spacing-4)]">
      <div className="mx-auto flex flex-wrap justify-center items-start xl:gap-[var(--spacing-6)] md:w-[90%]">
        <h1 className="logo">歷年總統大選開票地圖</h1>
        <ul className="nav-date-list flex-1 justify-evenly relative basis-full xl:basis-auto">
          <li>
            <button
              className="nav-date-item"
              value={1996}
              onClick={clickHandler}
            >
              1996
            </button>
          </li>
          <li>
            <button
              className="nav-date-item"
              value={2000}
              onClick={clickHandler}
            >
              2000
            </button>
          </li>
          <li>
            <button
              className="nav-date-item"
              value={2004}
              onClick={clickHandler}
            >
              2004
            </button>
          </li>
          <li>
            <button
              className="nav-date-item"
              value={2008}
              onClick={clickHandler}
            >
              2008
            </button>
          </li>
          <li>
            <button
              className="nav-date-item"
              value={2012}
              onClick={clickHandler}
            >
              2012
            </button>
          </li>
          <li>
            <button
              className="nav-date-item"
              value={2016}
              onClick={clickHandler}
            >
              2016
            </button>
          </li>
          <li>
            <button
              className="nav-date-item"
              value={2020}
              onClick={clickHandler}
            >
              2020
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
