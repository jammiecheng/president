import { useContext, useEffect, useState } from "react";
import candidate1 from "../../images/candidate1.png";
import candidate2 from "../../images/candidate2.png";
import candidate3 from "../../images/candidate3.png";
import Bread from "../bread";
import Footer from "../footer";
import { requestContext, windowSizeContext } from "../../App";
import { location, votes } from "../../data";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import VoteItem from "../vote-item";
import HorizenBar from "../horizenBar";
// import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip
);

export default function Content() {
  const { request, setRequest } = useContext(requestContext);
  const { isDesktop } = useContext(windowSizeContext);

  const [data, setData] = useState([]);
  const [total, setTotal] = useState([]);

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

  const donutChartData = {
    labels: ["投票率", "未投票率"],
    datasets: [
      {
        label: "# of Votes",
        data: [total.投票率, 100 - parseInt(total.投票率)],
        backgroundColor: ["#D4009B", "#E2E8F0"],
      },
    ],
  };

  const votesCountData = {
    labels: ["1996", "2000", "2004", "2008", "2012", "2016", "2020"],
    datasets: [
      {
        label: "蝙蝠黨",
        data: [
          parseInt(votes[0].data[0].data[0].第一組),
          parseInt(votes[0].data[0].data[0].第一組),
          parseInt(votes[0].data[0].data[0].第一組),
          parseInt(votes[0].data[0].data[0].第一組),
          parseInt(votes[0].data[0].data[0].第一組),
          parseInt(votes[0].data[0].data[0].第一組),
          parseInt(votes[0].data[0].data[0].第一組),
        ],
        backgroundColor: "#8082FF",
      },
      {
        label: "弓箭黨",
        data: [
          parseInt(votes[0].data[0].data[0].第二組),
          parseInt(votes[0].data[0].data[0].第二組),
          parseInt(votes[0].data[0].data[0].第二組),
          parseInt(votes[0].data[0].data[0].第二組),
          parseInt(votes[0].data[0].data[0].第二組),
          parseInt(votes[0].data[0].data[0].第二組),
          parseInt(votes[0].data[0].data[0].第二組),
        ],
        backgroundColor: "#F4A76F",
      },
      {
        label: "木棍黨",
        data: [
          parseInt(votes[0].data[0].data[0].第三組),
          parseInt(votes[0].data[0].data[0].第三組),
          parseInt(votes[0].data[0].data[0].第三組),
          parseInt(votes[0].data[0].data[0].第三組),
          parseInt(votes[0].data[0].data[0].第三組),
          parseInt(votes[0].data[0].data[0].第三組),
          parseInt(votes[0].data[0].data[0].第三組),
        ],
        backgroundColor: "#57D2A9",
      },
    ],
  };

  const votesPercentData = {
    labels: ["1996", "2000", "2004", "2008", "2012", "2016", "2020"],
    datasets: [
      {
        label: "蝙蝠黨",
        data: [
          parseInt(votes[0].data[0].data[0].第一組) /
            parseInt(votes[0].data[0].data[0].投票數),
          parseInt(votes[0].data[0].data[0].第一組) /
            parseInt(votes[0].data[0].data[0].投票數),
          parseInt(votes[0].data[0].data[0].第一組) /
            parseInt(votes[0].data[0].data[0].投票數),
          parseInt(votes[0].data[0].data[0].第一組) /
            parseInt(votes[0].data[0].data[0].投票數),
          parseInt(votes[0].data[0].data[0].第一組) /
            parseInt(votes[0].data[0].data[0].投票數),
          parseInt(votes[0].data[0].data[0].第一組) /
            parseInt(votes[0].data[0].data[0].投票數),
          parseInt(votes[0].data[0].data[0].第一組) /
            parseInt(votes[0].data[0].data[0].投票數),
        ],
        backgroundColor: "#8082FF",
        borderColor: "#8082FF",
      },
      {
        label: "弓箭黨",
        data: [
          parseInt(votes[0].data[0].data[0].第二組) /
            parseInt(votes[0].data[0].data[0].投票數),
          parseInt(votes[0].data[0].data[0].第二組) /
            parseInt(votes[0].data[0].data[0].投票數),
          parseInt(votes[0].data[0].data[0].第二組) /
            parseInt(votes[0].data[0].data[0].投票數),
          parseInt(votes[0].data[0].data[0].第二組) /
            parseInt(votes[0].data[0].data[0].投票數),
          parseInt(votes[0].data[0].data[0].第二組) /
            parseInt(votes[0].data[0].data[0].投票數),
          parseInt(votes[0].data[0].data[0].第二組) /
            parseInt(votes[0].data[0].data[0].投票數),
          parseInt(votes[0].data[0].data[0].第二組) /
            parseInt(votes[0].data[0].data[0].投票數),
        ],
        backgroundColor: "#F4A76F",
        borderColor: "#F4A76F",
      },
      {
        label: "木棍黨",
        data: [
          parseInt(votes[0].data[0].data[0].第三組) /
            parseInt(votes[0].data[0].data[0].投票數),
          parseInt(votes[0].data[0].data[0].第三組) /
            parseInt(votes[0].data[0].data[0].投票數),
          parseInt(votes[0].data[0].data[0].第三組) /
            parseInt(votes[0].data[0].data[0].投票數),
          parseInt(votes[0].data[0].data[0].第三組) /
            parseInt(votes[0].data[0].data[0].投票數),
          parseInt(votes[0].data[0].data[0].第三組) /
            parseInt(votes[0].data[0].data[0].投票數),
          parseInt(votes[0].data[0].data[0].第三組) /
            parseInt(votes[0].data[0].data[0].投票數),
          parseInt(votes[0].data[0].data[0].第三組) /
            parseInt(votes[0].data[0].data[0].投票數),
        ],
        backgroundColor: "#57D2A9",
        borderColor: "#57D2A9",
      },
    ],
  };

  const options = {
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const backHandler = () => {
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

  const clickHandler = (e) => {
    const county = Object.keys(location);
    county.map((element) => {
      if (element === e) {
        setRequest((prev) => ({ year: prev.year, location: [e, "選擇區域"] }));
      } else if (request.location[0] !== "全部") {
        setRequest((prev) => ({
          year: prev.year,
          location: [prev.location[0], e],
        }));
      }
      return "";
    });
  };

  return (
    <div className="w-full bg-[var(--color-default-white)] overflow-auto xl:w-3/4">
      <div className="w-full px-[var(--sp-16)] xl:px-[var(--sp-48)]">
        <h3 className="flex items-center text-[var(--color-text-primary)] pt-[var(--sp-32)] pb-[calc(var(--sp-8)/2*3)]">
          {request.location[0] !== "全部" && (
            <button
              className="material-icons p-[var(--sp-8)] rounded-full bg-[var(--color-bg)] mr-[10px]"
              onClick={backHandler}
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
              <ul className="mb-[calc(var(--sp-8)/2*3)] items-start gap-[var(--sp-8)] flex-col xl:flex-row xl:gap-[calc(var(--sp-8)*5)]">
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
              <HorizenBar
                group1={Math.round(
                  (parseInt(total.第一組) / parseInt(total.有效票數)) * 100
                )}
                group2={Math.round(
                  (parseInt(total.第二組) / parseInt(total.有效票數)) * 100
                )}
                group3={Math.round(
                  (parseInt(total.第三組) / parseInt(total.有效票數)) * 100
                )}
              />
            </div>
            <div className="flex-1 bg-[var(--color-default-white)] px-[var(--sp-24)] py-[calc(var(--sp-8)/2*3)] rounded-[calc(var(--sp-8)/2*3)] flex items-center gap-[calc(var(--sp-8)*5)] xl:py-[var(--sp-16)]">
              <div className="w-[124px] relative">
                <Doughnut data={donutChartData} />
                <div className="flex flex-col justify-center items-center absolute top-0 left-0 bottom-0 right-0">
                  <p className="body2 text-[var(--color-text-primary)] text-center">
                    投票率
                  </p>
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
                    {data[0] && Math.round(data[0].投票率) + "%"}
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
                  <p className="small text-[var(--color-text-primary)]">
                    蝙蝠黨
                  </p>
                </li>
                <li className="flex items-center gap-[calc(var(--sp-8)/2)]">
                  <span className="rounded-full w-[var(--sp-8)] h-[var(--sp-8)] bg-[var(--color-role-2)]"></span>
                  <p className="small text-[var(--color-text-primary)]">
                    弓箭黨
                  </p>
                </li>
                <li className="flex items-center gap-[calc(var(--sp-8)/2)]">
                  <span className="rounded-full w-[var(--sp-8)] h-[var(--sp-8)] bg-[var(--color-role-3)]"></span>
                  <p className="small text-[var(--color-text-primary)]">
                    木棍黨
                  </p>
                </li>
              </ul>
            </div>
            <div className="p-[var(--sp-24)] pt-[calc(var(--sp-8)/2*3)] overflow-x-scroll">
              <Bar data={votesCountData} options={options} />
            </div>
          </div>
          <div className="flex-1 border-[1px] border-[var(--color-line)] rounded-[calc(var(--sp-8)/2*3)]">
            <div className="flex items-center justify-between px-[var(--sp-16)] pt-[var(--sp-24)] pb-[calc(var(--sp-8)/2*3)]">
              <h5>歷屆政黨得票率</h5>
              <ul className="gap-[calc(var(--sp-8)/2)]">
                <li className="flex items-center gap-[calc(var(--sp-8)/2)]">
                  <span className="rounded-full w-[var(--sp-8)] h-[var(--sp-8)] bg-[var(--color-role-1)]"></span>
                  <p className="small text-[var(--color-text-primary)]">
                    蝙蝠黨
                  </p>
                </li>
                <li className="flex items-center gap-[calc(var(--sp-8)/2)]">
                  <span className="rounded-full w-[var(--sp-8)] h-[var(--sp-8)] bg-[var(--color-role-2)]"></span>
                  <p className="small text-[var(--color-text-primary)]">
                    弓箭黨
                  </p>
                </li>
                <li className="flex items-center gap-[calc(var(--sp-8)/2)]">
                  <span className="rounded-full w-[var(--sp-8)] h-[var(--sp-8)] bg-[var(--color-role-3)]"></span>
                  <p className="small text-[var(--color-text-primary)]">
                    木棍黨
                  </p>
                </li>
              </ul>
            </div>
            <div className="p-[var(--sp-24)] pt-[calc(var(--sp-8)/2*3)] overflow-x-scroll">
              <Line data={votesPercentData} options={options} />
            </div>
          </div>
        </div>
        <div>
          <h5 className="text-[var(--color-text-primary)] pt-[var(--sp-16)] pb-[var(--sp-8)]">
            各縣市投票總覽
          </h5>
          <table className="w-full mb-[calc(var(--sp-32)+var(--sp-8))]">
            <thead className="w-full flex bg-[var(--color-bg)] p-[var(--sp-8)] rounded-[calc(var(--sp-8)/2)]">
              <th className="body2 pr-[var(--sp-24)] text-[var(--color-text-primary)] text-left">
                {!isDesktop ? "地區" : "縣市"}
              </th>
              {isDesktop && (
                <>
                  <th className="body2 w-[20%] pr-[var(--sp-24)] text-[var(--color-text-primary)] text-left">
                    得票率
                  </th>
                  <th className="body2 w-[15%] pr-[var(--sp-24)] text-[var(--color-text-primary)] text-left">
                    當選人
                  </th>
                  <th className="body2 w-[15%] pr-[var(--sp-24)] text-[var(--color-text-primary)] text-left">
                    投票數
                  </th>
                  <th className="body2 w-[15%] pr-[var(--sp-24)] text-[var(--color-text-primary)] text-left">
                    投票率
                  </th>
                </>
              )}
            </thead>
            <tbody className="w-full">
              {data
                .filter((element) => element.行政區別 !== "總計")
                .map((item, index) => {
                  return (
                    <VoteItem
                      key={index}
                      county={item.行政區別}
                      group1={parseInt(item.第一組)}
                      group2={parseInt(item.第二組)}
                      group3={parseInt(item.第三組)}
                      votes={item.投票數}
                      votesPercent={item.投票率}
                      clickHandler={() => clickHandler(item.行政區別)}
                    >
                      <HorizenBar
                        group1={Math.round(
                          (parseInt(item.第一組) / parseInt(item.有效票數)) *
                            100
                        )}
                        group2={Math.round(
                          (parseInt(item.第二組) / parseInt(item.有效票數)) *
                            100
                        )}
                        group3={Math.round(
                          (parseInt(item.第三組) / parseInt(item.有效票數)) *
                            100
                        )}
                      />
                    </VoteItem>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      {isDesktop && <Footer />}
    </div>
  );
}
