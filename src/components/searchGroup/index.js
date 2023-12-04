import { useContext, useEffect, useState } from "react";
import SelectItem from "../select-item";
import { requestContext, windowSizeContext } from "../../App";
import { basrUrl } from "../../utils";

export default function SearchGroup() {
  const { request, setRequest } = useContext(requestContext);
  const { isDesktop } = useContext(windowSizeContext);
  const [county, setCounty] = useState();
  const [town, setTown] = useState();

  const clickHandler = (index, e) => {
    let newLoc = ["全國", "選擇區域"];
    if (e === "全國") {
      newLoc[0] = e;
    } else {
      if (index === 0) {
        newLoc[index] = e;
      } else {
        newLoc[0] = request.location[0];
        newLoc[index] = e;
      }
    }
    setRequest((prev) => ({ year: prev.year, location: newLoc }));
  };

  useEffect(() => {
    async function fetchData(year) {
      return await fetch(`${basrUrl}/location`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        body: JSON.stringify({ year: year }),
      })
        .then((res) => res.json())
        .then((data) => {
          setCounty(data.data);
        })
        .catch((err) => console.error(err));
    }
    fetchData(request.year);
  }, [request.year]);

  useEffect(() => {
    async function fetchData(year) {
      return await fetch(`${basrUrl}/location`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        body: JSON.stringify({ year: year, county: request.location[0] }),
      })
        .then((res) => res.json())
        .then((data) => {
          setTown(data.data);
        })
        .catch((err) => console.error(err));
    }
    if (request.location[0] !== "全國") fetchData(request.year);
  }, [request]);

  return (
    <div className="pl-[calc(var(--sp-8)/2*3)] bg-[var(--color-bg)] rounded-full flex items-center basis-full xl:basis-auto">
      <span className="material-icons text-[var(--gray-800)] hidden xl:block">
        search
      </span>
      <button
        className={
          "body2 text-[var(--color-text-primary)] px-[calc(var(--sp-8)/2*3)] py-[5px] flex justify-between items-center group relative xl:px-[calc(var(--sp-8)/2*3)] xl:py-[9px] xl:body1 " +
          (isDesktop ? "w-[194px]" : "flex-1")
        }
      >
        {request.location[0]}
        <span className="material-icons text-[var(--color-text-primary)]">
          expand_more
        </span>
        <ul className="w-full max-h-[300px] overflow-auto py-[var(--sp-8)] rounded-[var(--sp-8)] border-[1px] border-[var(--color-line)] bg-[var(--color-default-white)] flex-col hidden absolute top-[42px] left-0 group-hover:block">
          {/* <SelectItem
              text={"全國"}
              clickHandler={() => clickHandler(0, "全國")}
            /> */}
          {county &&
            county.map((item, index) => {
              return (
                <SelectItem
                  key={index}
                  text={item}
                  clickHandler={() => clickHandler(0, item)}
                />
              );
            })}
        </ul>
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="16"
        viewBox="0 0 2 16"
        fill="none"
      >
        <path d="M1 16L1 4.20274e-07" stroke="#334155" />
      </svg>
      <button
        className={
          "body2 text-[var(--color-gray-600)] px-[calc(var(--sp-8)/2*3)] py-[5px] flex justify-between items-center group relative xl:px-[calc(var(--sp-8)/2*3)] xl:py-[9px] xl:body1 " +
          (request.location[1] !== "選擇區域"
            ? "text-[var(--color-text-primary)] "
            : "") +
          (isDesktop ? "w-[194px]" : "flex-1")
        }
      >
        {request.location[1]}
        <span className="material-icons text-[var(--color-text-primary)]">
          expand_more
        </span>
        {request.location[0] !== "全國" && (
          <ul className="w-full max-h-[300px] overflow-auto py-[var(--sp-8)] rounded-[var(--sp-8)] border-[1px] border-[var(--color-line)] bg-[var(--color-default-white)] flex-col hidden absolute top-[42px] left-0 group-hover:block">
            {town &&
              town.map((item, index) => {
                return (
                  <SelectItem
                    key={index + 22}
                    text={item}
                    clickHandler={() => clickHandler(1, item)}
                  />
                );
              })}
          </ul>
        )}
      </button>
    </div>
  );
}
