import { useContext, useEffect, useState } from "react";
import candidate1 from "../../images/candidate1.png";
import candidate2 from "../../images/candidate2.png";
import candidate3 from "../../images/candidate3.png";
import Bread from "../bread";
import Footer from "../footer";
import { requestContext, windowSizeContext } from "../../App";
import { location } from "../../data";
// import { Bar, Doughnut, Line } from "react-chartjs-2";
// import {
//   ArcElement,
//   BarElement,
//   CategoryScale,
//   Chart as ChartJS,
//   LinearScale,
//   LineElement,
//   PointElement,
//   Tooltip,
// } from "chart.js";
import VoteItem from "../vote-item";
import HorizenBar from "../horizenBar";
import { basrUrl } from "../../utils";
import {
  // Bar,
  // BarChart,
  // CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  // Tooltip,
  // XAxis,
  // YAxis,
} from "recharts";

// ChartJS.register(
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Tooltip
// );

export default function Content() {
  const { request, setRequest } = useContext(requestContext);
  const { isDesktop } = useContext(windowSizeContext);

  const [data, setData] = useState([]);
  // const [total, setTotal] = useState([]);

  useEffect(() => {
    async function fetchData(year, county, town) {
      return await fetch(`${basrUrl}/current_data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        body: JSON.stringify({ year: year, county: county, town: town }),
      })
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    }
    if (request.location[1] !== "選擇區域")
      fetchData(request.year, request.location[0], request.location[1]);
    else if (request.location[0] !== "全國")
      fetchData(request.year, request.location[0]);
    else fetchData(request.year);
  }, [request]);

  // useEffect(() => {
  //   votes.map((element) => {
  //     if (element.year === request.year) {
  //       return element.data.map((item) => {
  //         if (item.county === request.location[0]) {
  //           setTotal(item.data[0]);
  //           setData(item.data);
  //         }
  //         return "";
  //       });
  //     }
  //     return "";
  //   });
  // }, [request]);

  // const donutChartData = {
  //   labels: ["投票率", "未投票率"],
  //   datasets: [
  //     {
  //       label: "# of Votes",
  //       data: [total.投票率, 100 - parseInt(total.投票率)],
  //       backgroundColor: ["#D4009B", "#E2E8F0"],
  //     },
  //   ],
  // };

  // const votesCountData = {
  //   labels: ["1996", "2000", "2004", "2008", "2012", "2016", "2020"],
  //   datasets: [
  //     {
  //       label: "蝙蝠黨",
  //       data: [
  //         parseInt(votes[0].data[0].data[0].第一組),
  //         parseInt(votes[0].data[0].data[0].第一組),
  //         parseInt(votes[0].data[0].data[0].第一組),
  //         parseInt(votes[0].data[0].data[0].第一組),
  //         parseInt(votes[0].data[0].data[0].第一組),
  //         parseInt(votes[0].data[0].data[0].第一組),
  //         parseInt(votes[0].data[0].data[0].第一組),
  //       ],
  //       backgroundColor: "#8082FF",
  //     },
  //     {
  //       label: "弓箭黨",
  //       data: [
  //         parseInt(votes[0].data[0].data[0].第二組),
  //         parseInt(votes[0].data[0].data[0].第二組),
  //         parseInt(votes[0].data[0].data[0].第二組),
  //         parseInt(votes[0].data[0].data[0].第二組),
  //         parseInt(votes[0].data[0].data[0].第二組),
  //         parseInt(votes[0].data[0].data[0].第二組),
  //         parseInt(votes[0].data[0].data[0].第二組),
  //       ],
  //       backgroundColor: "#F4A76F",
  //     },
  //     {
  //       label: "木棍黨",
  //       data: [
  //         parseInt(votes[0].data[0].data[0].第三組),
  //         parseInt(votes[0].data[0].data[0].第三組),
  //         parseInt(votes[0].data[0].data[0].第三組),
  //         parseInt(votes[0].data[0].data[0].第三組),
  //         parseInt(votes[0].data[0].data[0].第三組),
  //         parseInt(votes[0].data[0].data[0].第三組),
  //         parseInt(votes[0].data[0].data[0].第三組),
  //       ],
  //       backgroundColor: "#57D2A9",
  //     },
  //   ],
  // };

  // const votesPercentData = {
  //   labels: ["1996", "2000", "2004", "2008", "2012", "2016", "2020"],
  //   datasets: [
  //     {
  //       label: "蝙蝠黨",
  //       data: [
  //         parseInt(votes[0].data[0].data[0].第一組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //         parseInt(votes[0].data[0].data[0].第一組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //         parseInt(votes[0].data[0].data[0].第一組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //         parseInt(votes[0].data[0].data[0].第一組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //         parseInt(votes[0].data[0].data[0].第一組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //         parseInt(votes[0].data[0].data[0].第一組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //         parseInt(votes[0].data[0].data[0].第一組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //       ],
  //       backgroundColor: "#8082FF",
  //       borderColor: "#8082FF",
  //     },
  //     {
  //       label: "弓箭黨",
  //       data: [
  //         parseInt(votes[0].data[0].data[0].第二組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //         parseInt(votes[0].data[0].data[0].第二組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //         parseInt(votes[0].data[0].data[0].第二組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //         parseInt(votes[0].data[0].data[0].第二組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //         parseInt(votes[0].data[0].data[0].第二組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //         parseInt(votes[0].data[0].data[0].第二組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //         parseInt(votes[0].data[0].data[0].第二組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //       ],
  //       backgroundColor: "#F4A76F",
  //       borderColor: "#F4A76F",
  //     },
  //     {
  //       label: "木棍黨",
  //       data: [
  //         parseInt(votes[0].data[0].data[0].第三組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //         parseInt(votes[0].data[0].data[0].第三組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //         parseInt(votes[0].data[0].data[0].第三組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //         parseInt(votes[0].data[0].data[0].第三組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //         parseInt(votes[0].data[0].data[0].第三組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //         parseInt(votes[0].data[0].data[0].第三組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //         parseInt(votes[0].data[0].data[0].第三組) /
  //           parseInt(votes[0].data[0].data[0].投票數),
  //       ],
  //       backgroundColor: "#57D2A9",
  //       borderColor: "#57D2A9",
  //     },
  //   ],
  // };

  // const options = {
  //   interaction: {
  //     mode: "index",
  //     intersect: false,
  //   },
  //   scales: {
  //     x: {
  //       grid: {
  //         display: false,
  //       },
  //     },
  //   },
  // };

  const backHandler = () => {
    if (request.location[1] !== "選擇區域") {
      setRequest((prev) => ({
        year: prev.year,
        location: [prev.location[0], "選擇區域"],
      }));
    } else {
      setRequest((prev) => ({
        year: prev.year,
        location: ["全國", "選擇區域"],
      }));
    }
  };

  const clickHandler = (e) => {
    const county = Object.keys(location);
    county.map((element) => {
      if (element === e) {
        setRequest((prev) => ({ year: prev.year, location: [e, "選擇區域"] }));
      } else if (request.location[0] !== "全國") {
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
          {request.location[0] !== "全國" && (
            <button
              className="material-icons p-[var(--sp-8)] rounded-full bg-[var(--color-bg)] mr-[10px]"
              onClick={backHandler}
            >
              arrow_back
            </button>
          )}
          {request.location[0] === "全國"
            ? "全臺縣市總統得票"
            : request.location[1] === "選擇區域"
            ? request.location[0]
            : request.location[1]}
        </h3>
        {request.location[0] !== "全國" ? (
          <div className="pt-[var(--sp-8)] pb-[calc(var(--sp-8)*5/2)] gap-[var(--sp-8)] items-center hidden xl:flex">
            <Bread
              text={"全臺縣市總統得票 / "}
              clickHandler={() =>
                setRequest((prev) => ({
                  year: prev.year,
                  location: ["全國", "選擇區域"],
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
                        {data["1"]}
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
                        {data["2"]}
                      </h6>
                      <span className="body2 text-[var(--color-text-primary)]">
                        票
                      </span>
                    </div>
                  </div>
                </li>
                {data["3"] !== undefined && (
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
                          {data["3"]}
                        </h6>
                        <span className="body2 text-[var(--color-text-primary)]">
                          票
                        </span>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
              <HorizenBar
                data={data}
                group1={Math.round((data["1"] / data.有效票) * 100)}
                group2={Math.round((data["2"] / data.有效票) * 100)}
                group3={Math.round((data["3"] / data.有效票) * 100)}
              />
            </div>
            <div className="flex-1 bg-[var(--color-default-white)] px-[var(--sp-24)] py-[calc(var(--sp-8)/2*3)] rounded-[calc(var(--sp-8)/2*3)] flex items-center gap-[calc(var(--sp-8)*5)] xl:py-[var(--sp-16)]">
              <div className="w-[124px] relative">
                <ResponsiveContainer width={"100%"} height={"100%"}>
                  <PieChart width={"100%"} height={100}>
                    <Pie
                      data={[
                        {
                          name: "投票率",
                          value: Math.round(
                            (data.投票數 / data.選舉人數) * 100
                          ),
                        },
                        {
                          name: "未投票率",
                          value: Math.round(
                            ((data.選舉人數 - data.投票數) / data.選舉人數) *
                              100
                          ),
                        },
                      ]}
                      dataKey="value"
                      innerRadius={35}
                      outerRadius={50}
                      cx={"50%"}
                      cy={"50%"}
                      fill="#d4009b"
                    />
                  </PieChart>
                </ResponsiveContainer>
                {/* <Doughnut data={donutChartData} /> */}
                <div className="flex flex-col justify-center items-center absolute top-0 left-0 bottom-0 right-0">
                  <p className="body2 text-[var(--color-text-primary)] text-center">
                    投票率
                  </p>
                  <h5 className="text-[var(--color-primary)] text-center">
                    {request.location[0] === "全國"
                      ? Math.round((data.投票數 / data.選舉人數) * 100) + "%"
                      : Math.round((data.投票數 / data.選舉人數) * 100) + "%"}
                  </h5>
                </div>
              </div>
              <div className="flex flex-wrap gap-[var(--sp-16)_var(--sp-48)]">
                <div className="basis-full xl:basis-[calc(50%-24px)]">
                  <p className="text-[var(--color-text-secondary)] body2">
                    投票數
                  </p>
                  <h6 className="text-[var(--color-text-primary)]">
                    {data.投票數}
                  </h6>
                </div>
                <div className="basis-full xl:basis-[calc(50%-24px)]">
                  <p className="text-[var(--color-text-secondary)] body2">
                    投票率
                  </p>
                  <h6 className="text-[var(--color-text-primary)]">
                    {Math.round((data.投票數 / data.選舉人數) * 100) + "%"}
                  </h6>
                </div>
                <div className="basis-full xl:basis-[calc(50%-24px)]">
                  <p className="text-[var(--color-text-secondary)] body2">
                    有效票數
                  </p>
                  <h6 className="text-[var(--color-text-primary)]">
                    {data.有效票}
                  </h6>
                </div>
                <div className="basis-full xl:basis-[calc(50%-24px)]">
                  <p className="text-[var(--color-text-secondary)] body2">
                    無效票數
                  </p>
                  <h6 className="text-[var(--color-text-primary)]">
                    {data.無效票}
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
              {/* {data.indiv && (
                <ResponsiveContainer width={"100%"} height={'100%'}>
                  <BarChart
                    width={600}
                    height={300}
                    data={Object.values(data.indiv)}
                  >
                    <Bar dataKey="1" fill="#8082ff" />
                    <Bar dataKey="2" fill="#f4a76f" />
                    <Bar dataKey="3" fill="#57d2a9" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid />
                  </BarChart>
                </ResponsiveContainer>
              )} */}
              {/* <Bar data={votesCountData} options={options} /> */}
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
              <ResponsiveContainer>
                <LineChart>
                  <Line />
                </LineChart>
              </ResponsiveContainer>
              {/* <Line data={votesPercentData} options={options} /> */}
            </div>
          </div>
        </div>
        <div>
          <h5 className="text-[var(--color-text-primary)] pt-[var(--sp-16)] pb-[var(--sp-8)]">
            各縣市投票總覽
          </h5>
          <table className="w-full mb-[calc(var(--sp-32)+var(--sp-8))]">
            <thead className="w-full flex bg-[var(--color-bg)] p-[var(--sp-8)] rounded-[calc(var(--sp-8)/2)]">
              <th className="body2 pr-[var(--sp-24)] text-[var(--color-text-primary)] text-left xl:w-[15%]">
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
              {data.indiv &&
                Object.values(data.indiv)
                  .filter((item) => item.name !== "全國")
                  .map((item, index) => {
                    return (
                      <VoteItem
                        key={index}
                        county={item.name}
                        group1={item["1"]}
                        group2={item["2"]}
                        group3={item["3"]}
                        votes={item.投票數}
                        votesPercent={Math.round(
                          (item.投票數 / item.選舉人數) * 100
                        )}
                        clickHandler={() => {
                          clickHandler(item.id);
                        }}
                      >
                        {/* <HorizenBar
                          group1={Math.round((item["1"] / item.有效票) * 100)}
                          group2={Math.round((item["2"] / item.有效票) * 100)}
                          group3={Math.round((item["3"] / item.有效票) * 100)}
                        /> */}
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
