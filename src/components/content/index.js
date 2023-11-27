import { useContext, useEffect, useState } from "react";
import candidate1 from "../../images/candidate1.png";
import candidate2 from "../../images/candidate2.png";
import candidate3 from "../../images/candidate3.png";
import Bread from "../bread";
import Footer from "../footer";
import { requestContext, windowSizeContext } from "../../App";
import { votes } from "../../data";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart as ChartJS } from "chart.js";

ChartJS.register(ArcElement);

export default function Content() {
  const { request, setRequest } = useContext(requestContext);
  const { isDesktop } = useContext(windowSizeContext);

  const [data, setData] = useState({});
  const [total, setTotal] = useState({});

  useEffect(() => {
    votes.map((element) => {
      if (element.year === request.year) {
        return element.data.map((item) => {
          if (item.county === request.location[0]) {
            setTotal(item.data[0]);
            setData(item.data);
          }
          return "";
        });
      }
      return "";
    });
  }, [request]);

  const chartData = {
    labels: ["投票率", "未投票率"],
    datasets: [
      {
        label: "# of Votes",
        data: [total.投票率, 100 - parseInt(total.投票率)],
        backgroundColor: ["#D4009B", "#E2E8F0"],
      },
    ],
  };

  const dountOptions = {};

  const clickHandler = () => {
    if (request.location[1] !== "選擇區域") {
      setRequest((prev) => ({
        year: prev.year,
        location: [prev.location[0], "選擇區域"],
      }));
    } else {
      setRequest((prev) => ({
        year: prev.year,
        location: ["全部", "選擇區域"],
      }));
    }
  };

  return (
    <div className="w-full bg-[var(--color-default-white)] px-[var(--sp-16)] xl:px-[var(--sp-48)] xl:w-3/4">
      <h3 className="flex items-center text-[var(--color-text-primary)] pt-[var(--sp-32)] pb-[calc(var(--sp-8)/2*3)]">
        {request.location[0] !== "全部" && (
          <button
            className="material-icons p-[var(--sp-8)] rounded-full bg-[var(--color-bg)] mr-[10px]"
            onClick={clickHandler}
          >
            arrow_back
          </button>
        )}
        {request.location[0] === "全部"
          ? "全臺縣市總統得票"
          : request.location[1] === "選擇區域"
          ? request.location[0]
          : request.location[1]}
      </h3>
      {request.location[0] !== "全部" ? (
        <div className="pt-[var(--sp-8)] pb-[calc(var(--sp-8)*5/2)] gap-[var(--sp-8)] items-center hidden xl:flex">
          <Bread
            text={"全臺縣市總統得票 / "}
            clickHandler={() =>
              setRequest((prev) => ({
                year: prev.year,
                location: ["全部", "選擇區域"],
              }))
            }
          />
          {request.location[1] === "選擇區域" ? (
            <Bread
              state={"now"}
              text={request.location[0]}
              clickHandler={() =>
                setRequest((prev) => ({
                  year: prev.year,
                  location: [request.location[0], "選擇區域"],
                }))
              }
            />
          ) : (
            <>
              <Bread
                text={request.location[0] + " / "}
                clickHandler={() =>
                  setRequest((prev) => ({
                    year: prev.year,
                    location: [request.location[0], "選擇區域"],
                  }))
                }
              />
              <Bread state={"now"} text={request.location[1]} />
            </>
          )}
        </div>
      ) : (
        <></>
      )}
      <div className="bg-[#f3f4f4] rounded-[calc(var(--sp-8)/2*3)] px-[var(--sp-16)] pb-[var(--sp-16)] mb-[var(--sp-24)]">
        <h5 className="pt-[var(--sp-24)] pb-[var(--sp-16)] text-[var(--color-text-primary)]">
          總統得票數
        </h5>
        <div className="flex items-stretch gap-[var(--sp-16)] flex-col xl:flex-row">
          <div className="flex-1 bg-[var(--color-default-white)] p-[var(--sp-16)] rounded-[calc(var(--sp-8)/2*3)] xl:px-[var(--sp-24)]">
            <ul className="items-start gap-[var(--sp-8)] flex-col xl:flex-row xl:gap-[calc(var(--sp-8)*5)] xl:justify-between">
              <li className="flex items-start gap-[calc(var(--sp-8)/2*3)]">
                <img
                  src={candidate1}
                  alt={"candidate1"}
                  className="w-[var(--sp-48)]"
                />
                <div>
                  <p className="small text-[var(--color-text-secondary)] mb-[calc(var(--sp-8)/4)]">
                    蝙蝠黨
                  </p>
                  <p className="body1 text-[var(--color-text-primary)] mb-[calc(var(--sp-8)/4)]">
                    德古拉
                  </p>
                  <div className="flex items-center">
                    <h6 className="text-[var(--color-text-primary)]">
                      {data[0] && data[0].第一組}
                    </h6>
                    <span className="body2 text-[var(--color-text-primary)]">
                      票
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-[calc(var(--sp-8)/2*3)]">
                <img
                  src={candidate2}
                  alt={"candidate2"}
                  className="w-[var(--sp-48)]"
                />
                <div>
                  <p className="small text-[var(--color-text-secondary)] mb-[calc(var(--sp-8)/4)]">
                    弓箭黨
                  </p>
                  <p className="body1 text-[var(--color-text-primary)] mb-[calc(var(--sp-8)/4)]">
                    林克
                  </p>
                  <div className="flex items-center">
                    <h6 className="text-[var(--color-text-primary)]">
                      {data[0] && data[0].第二組}
                    </h6>
                    <span className="body2 text-[var(--color-text-primary)]">
                      票
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-[calc(var(--sp-8)/2*3)]">
                <img
                  src={candidate3}
                  alt={"candidate3"}
                  className="w-[var(--sp-48)]"
                />
                <div>
                  <p className="small text-[var(--color-text-secondary)] mb-[calc(var(--sp-8)/4)]">
                    木棍黨
                  </p>
                  <p className="body1 text-[var(--color-text-primary)] mb-[calc(var(--sp-8)/4)]">
                    綠巨魔
                  </p>
                  <div className="flex items-center">
                    <h6 className="text-[var(--color-text-primary)]">
                      {data[0] && data[0].第三組}
                    </h6>
                    <span className="body2 text-[var(--color-text-primary)]">
                      票
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <div></div>
          </div>
          <div className="flex-1 bg-[var(--color-default-white)] px-[var(--sp-24)] py-[calc(var(--sp-8)/2*3)] rounded-[calc(var(--sp-8)/2*3)] flex gap-[calc(var(--sp-8)*5)] xl:py-[var(--sp-16)]">
            <div className="w-[124px] relative">
              <Doughnut data={chartData} options={dountOptions} />
              <div className="flex flex-col justify-center items-center absolute top-0 left-0 bottom-0 right-0">
                <p className="body2 text-[var(--color-text-primary)] text-center">投票率</p>
                <h5 className="text-[var(--color-primary)] text-center">
                  {request.location[0] === "全部"
                    ? Math.round(total.投票率) + "%"
                    : Math.round(data[0].投票率) + "%"}
                </h5>
              </div>
            </div>
            <div className="flex flex-wrap gap-[var(--sp-16)_var(--sp-48)]">
              <div className="basis-full xl:basis-[calc(50%-24px)]">
                <p className="text-[var(--color-text-secondary)] body2">
                  投票數
                </p>
                <h6 className="text-[var(--color-text-primary)]">
                  {data[0] && data[0].投票數}
                </h6>
              </div>
              <div className="basis-full xl:basis-[calc(50%-24px)]">
                <p className="text-[var(--color-text-secondary)] body2">
                  投票率
                </p>
                <h6 className="text-[var(--color-text-primary)]">
                  {data[0] && Math.round(data[0].投票率)+ "%"}
                </h6>
              </div>
              <div className="basis-full xl:basis-[calc(50%-24px)]">
                <p className="text-[var(--color-text-secondary)] body2">
                  有效票數
                </p>
                <h6 className="text-[var(--color-text-primary)]">
                  {data[0] && data[0].有效票數}
                </h6>
              </div>
              <div className="basis-full xl:basis-[calc(50%-24px)]">
                <p className="text-[var(--color-text-secondary)] body2">
                  無效票數
                </p>
                <h6 className="text-[var(--color-text-primary)]">
                  {data[0] && data[0].無效票數}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[var(--sp-24)] mb-[var(--sp-24)] flex-col xl:flex-row">
        <div className="flex-1 border-[1px] border-[var(--color-line)] rounded-[calc(var(--sp-8)/2*3)]">
          <div className="flex items-center justify-between px-[var(--sp-16)] pt-[var(--sp-24)] pb-[calc(var(--sp-8)/2*3)]">
            <h5>歷屆政黨得票數</h5>
            <ul className="gap-[calc(var(--sp-8)/2)]">
              <li className="flex items-center gap-[calc(var(--sp-8)/2)]">
                <span className="rounded-full w-[var(--sp-8)] h-[var(--sp-8)] bg-[var(--color-role-1)]"></span>
                <p className="small text-[var(--color-text-primary)]">蝙蝠黨</p>
              </li>
              <li className="flex items-center gap-[calc(var(--sp-8)/2)]">
                <span className="rounded-full w-[var(--sp-8)] h-[var(--sp-8)] bg-[var(--color-role-2)]"></span>
                <p className="small text-[var(--color-text-primary)]">弓箭黨</p>
              </li>
              <li className="flex items-center gap-[calc(var(--sp-8)/2)]">
                <span className="rounded-full w-[var(--sp-8)] h-[var(--sp-8)] bg-[var(--color-role-3)]"></span>
                <p className="small text-[var(--color-text-primary)]">木棍黨</p>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="flex-1 border-[1px] border-[var(--color-line)] rounded-[calc(var(--sp-8)/2*3)]">
          <div className="flex items-center justify-between px-[var(--sp-16)] pt-[var(--sp-24)] pb-[calc(var(--sp-8)/2*3)]">
            <h5>歷屆政黨得票數</h5>
            <ul className="gap-[calc(var(--sp-8)/2)]">
              <li className="flex items-center gap-[calc(var(--sp-8)/2)]">
                <span className="rounded-full w-[var(--sp-8)] h-[var(--sp-8)] bg-[var(--color-role-1)]"></span>
                <p className="small text-[var(--color-text-primary)]">蝙蝠黨</p>
              </li>
              <li className="flex items-center gap-[calc(var(--sp-8)/2)]">
                <span className="rounded-full w-[var(--sp-8)] h-[var(--sp-8)] bg-[var(--color-role-2)]"></span>
                <p className="small text-[var(--color-text-primary)]">弓箭黨</p>
              </li>
              <li className="flex items-center gap-[calc(var(--sp-8)/2)]">
                <span className="rounded-full w-[var(--sp-8)] h-[var(--sp-8)] bg-[var(--color-role-3)]"></span>
                <p className="small text-[var(--color-text-primary)]">木棍黨</p>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <h5 className="text-[var(--color-text-primary)] pt-[var(--sp-16)] pb-[var(--sp-8)]">
          各縣市投票總覽
        </h5>
        <div className="flex bg-[var(--color-bg)] p-[var(--sp-8)] rounded-[calc(var(--sp-8)/2)] xl:rounded-[calc(var(--sp-8)/2*3)]">
          <span className="body2 w-[222px] pr-[var(--sp-24)] text-[var(--color-text-primary)]">
            {!isDesktop ? "地區" : "縣市"}
          </span>
          {isDesktop && (
            <>
              <span className="body2 w-[333px] pr-[var(--sp-24)] text-[var(--color-text-primary)]">
                得票率
              </span>
              <span className="body2 w-[222px] pr-[var(--sp-24)] text-[var(--color-text-primary)]">
                當選人
              </span>
              <span className="body2 w-[222px] pr-[var(--sp-24)] text-[var(--color-text-primary)]">
                投票數
              </span>
              <span className="body2 w-[222px] pr-[var(--sp-24)] text-[var(--color-text-primary)]">
                投票率
              </span>
            </>
          )}
        </div>
      </div>
      {isDesktop && <Footer />}
    </div>
  );
}
