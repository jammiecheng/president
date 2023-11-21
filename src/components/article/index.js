import { useContext } from "react";
import { locationContext, yearContext } from "../../App";
import Avatar from "../avatar";
import person1 from "../../images/person1.svg";
import person2 from "../../images/person2.svg";
import person3 from "../../images/person3.svg";

export default function Article({ children }) {
  const { area } = useContext(locationContext);
  const { year } = useContext(yearContext);

  return (
    <article className="flex-1 h-full p-[var(--spacing-4)] bg-[var(--color-neutral-3)] rounded-full">
      <h2>
        {year}年{area[0] === "縣市" ? "全臺" : area.toString()}開票結果
      </h2>
      <div className="bg-[var(--color-neutral-1)] rounded-full">
        <div>
          <Avatar img={person1} political={1} />
          <h5></h5>
        </div>
        <div>
          <Avatar img={person2} political={2} />
        </div>
        <div>
          <Avatar img={person3} political={3} />
        </div>
      </div>
    </article>
  );
}
