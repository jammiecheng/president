import { useContext } from "react";
import { locationContext, yearContext } from "../../App";
import Avatar from "../avatar";
import person1 from "../../images/person1.svg";
import person2 from "../../images/person2.svg";
import person3 from "../../images/person3.svg";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Article({ children }) {
  const { area } = useContext(locationContext);
  const { year } = useContext(yearContext);

  const data = [
    { id: 1, votes: 100 },
    { id: 2, votes: 50 },
  ];
  // p-[var(--spacing-5)] bg-[var(--color-neutral-3)] rounded-[var(--spacing-4)] xl:p-[var(--spacing-7)]
  return (
    <article className="flex-1 h-full ">
      <h2 className="mb-[var(--spacing-4)] px-[var(--spacing-5)]">
        {year}年
        {area[0] === "縣市" ? "全臺" : area.toString().split(",").join("")}
        開票結果
      </h2>
      <div className="flex justify-between items-center flex-wrap border-2 border-[var(--color-neutral-3)] rounded-[var(--spacing-4)]">
        <ul className="p-[var(--spacing-5)] flex-col gap-[var(--spacing-2)] xl:p-[var(--spacing-7)]">
          <li className="person-item">
            <Avatar img={person1} political={1} />
            <div>
              <h6>八點黨</h6>
              <h5>兔兔</h5>
              <h5>{}票</h5>
            </div>
          </li>
          <li className="person-item">
            <Avatar img={person2} political={2} />
            <div>
              <h6>勢不可黨</h6>
              <h5>喵喵</h5>
              <h5>{}票</h5>
            </div>
          </li>
          <li className="person-item">
            <Avatar img={person3} political={3} />
            <div>
              <h6>兵來將黨</h6>
              <h5>狗勾</h5>
              <h5>{}票</h5>
            </div>
          </li>
        </ul>
        <ResponsiveContainer
          width={window.innerWidth > 768 ? "50%" : "100%"}
          height={300}
        >
          <PieChart>
            <Pie
              data={data}
              dataKey={"votes"}
              nameKey={"id"}
              outerRadius={100}
              fill="#111111"
            ></Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-[var(--spacing-4)] border-2 border-[var(--color-neutral-3)] rounded-[var(--spacing-4)]">
        <ResponsiveContainer
          width={window.innerWidth > 768 ? "50%" : "100%"}
          height={300}
        >
          <PieChart>
            <Pie
              data={data}
              dataKey={"votes"}
              nameKey={"id"}
              innerRadius={60}
              outerRadius={100}
              fill="#111111"
            ></Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-[var(--spacing-4)] border-2 border-[var(--color-neutral-3)] rounded-[var(--spacing-4)]">
        <ResponsiveContainer height={300}>
          <LineChart
            data={data}
            margin={{ top: 20, bottom: 20, left: 0, right: 30 }}
          >
            <XAxis dataKey={"id"} />
            <YAxis />
            <CartesianGrid strokeDasharray={"5 5"} />
            <Tooltip />
            <Legend verticalAlign="top" height={40} />
            <Line type="monotone" dataKey="votes" name="得票數"></Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}
