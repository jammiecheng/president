import { useContext } from "react";
import candidate1 from "../../images/candidate1.png";
import candidate2 from "../../images/candidate2.png";
import candidate3 from "../../images/candidate3.png";
import { windowSizeContext } from "../../App";

export default function VoteItem({
  county,
  group1,
  group2,
  group3,
  votes,
  votesPercent,
  clickHandler,
  children,
}) {
  const { isDesktop } = useContext(windowSizeContext);

  return isDesktop ? (
    <tr
      className="flex items-center bg-[var(--color-default-white)] border-b-[1px] border-b-[var(--color-line)] rounded-[var(--sp-8)] cursor-pointer hover:bg-[var(--color-hover)]"
      onClick={clickHandler}
    >
      <td className="w-[15%]">
        <h6 className="pr-[var(--sp-24)] pl-[var(--sp-8)] py-[calc(var(--sp-8)/2*3)] text-[var(--color-text-primary)]">
          {county}
        </h6>
      </td>
      <td className="w-[20%] pr-[var(--sp-24)] py-[calc(var(--sp-8)/2*3)] body2 text-[var(--color-text-primary)]">
        {children}
      </td>
      <td className="w-[15%] pr-[var(--sp-24)] py-[calc(var(--sp-8)/2*3)] body2 text-[var(--color-text-primary)] flex items-center">
        <img
          className="w-[var(--sp-32)] rounded-[var(--sp-16)] mr-[var(--sp-8)]"
          src={
            group1 > group2 && group1 > group3
              ? candidate1
              : group2 > group3 && group2 > group1
              ? candidate2
              : candidate3
          }
          alt={
            group1 > group2 && group1 > group3
              ? candidate1
              : group2 > group3 && group2 > group1
              ? candidate2
              : candidate3
          }
        />
        <span>
          {group1 > group2 && group1 > group3
            ? "德古拉"
            : group2 > group3 && group2 > group1
            ? "林克"
            : "綠巨魔"}
        </span>
      </td>
      <td className="w-[15%] pr-[var(--sp-24)] py-[calc(var(--sp-8)/2*3)] body2 text-[var(--color-text-primary)]">
        {votes}
      </td>
      <td className="w-[15%] pr-[var(--sp-24)] py-[calc(var(--sp-8)/2*3)] body2 text-[var(--color-text-primary)]">
        {Math.round(votesPercent)}%
      </td>
      <td className="text-right w-[18%] body2 text-[var(--color-text-primary)]">
        <span className="material-icons">chevron_right</span>
      </td>
    </tr>
  ) : (
    <tr
      className="flex items-center bg-[var(--color-default-white)] border-b-[1px] border-b-[var(--color-line)] rounded-[var(--sp-8)] cursor-pointer py-[calc(var(--sp-8)/2*3)] hover:bg-[var(--color-hover)]"
      onClick={clickHandler}
    >
      <td>
        <h6 className="pr-[var(--sp-32)] pl-[var(--sp-8)] py-[calc(var(--sp-8)/2*3)] text-[var(--color-text-primary)]">
          {county}
        </h6>
      </td>
      <td className="flex-1">
        <div className="flex items-center mb-[var(--sp-8)]">
          <span className="mr-[var(--sp-8)] text-[var(--color-text-primary)] body2">
            當選人
          </span>
          <img
            className="w-[var(--sp-32)] rounded-[var(--sp-16)] mr-[var(--sp-8)]"
            src={
              group1 > group2 && group1 > group3
                ? candidate1
                : group2 > group3 && group2 > group1
                ? candidate2
                : candidate3
            }
            alt={
              group1 > group2 && group1 > group3
                ? candidate1
                : group2 > group3 && group2 > group1
                ? candidate2
                : candidate3
            }
          />
          <span>
            {group1 > group2 && group1 > group3
              ? "德古拉"
              : group2 > group3 && group2 > group1
              ? "林克"
              : "綠巨魔"}
          </span>
        </div>
        {children}
      </td>
      <td className="w-9 text-right body2 text-[var(--color-text-primary)]">
        <span className="material-icons">chevron_right</span>
      </td>
    </tr>
  );
}
