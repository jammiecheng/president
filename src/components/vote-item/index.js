export default function VoteItem({
  county,
  group1,
  group2,
  group3,
  votes,
  votesPercent,
  clickHandler,
}) {
  return (
    <tr
      className="flex items-center bg-[var(--color-default-white)] border-b-[1px] border-b-[var(--color-line)] rounded-[var(--sp-8)] cursor-pointer hover:bg-[var(--color-hover)]"
      onClick={clickHandler}
    >
      <td className="w-[15%]">
        <h6 className="pr-[var(--sp-24)] pl-[var(--sp-8)] py-[calc(var(--sp-8)/2*3)] text-[var(--color-text-primary)]">
          {county}
        </h6>
      </td>
      <td className="w-[20%] pr-[var(--sp-24)] py-[calc(var(--sp-8)/2*3)] body2 text-[var(--color-text-primary)]"></td>
      <td className="w-[15%] pr-[var(--sp-24)] py-[calc(var(--sp-8)/2*3)] body2 text-[var(--color-text-primary)]">
        <img className="w-[var(--sp-32)] rounded-[var(--sp-16)]" />
        <span>{}</span>
      </td>
      <td className="w-[15%] pr-[var(--sp-24)] py-[calc(var(--sp-8)/2*3)] body2 text-[var(--color-text-primary)]">
        {votes}
      </td>
      <td className="w-[15%] pr-[var(--sp-24)] py-[calc(var(--sp-8)/2*3)] body2 text-[var(--color-text-primary)]">
        {Math.round(votesPercent)}%
      </td>
      <td className="text-right w-[20%] body2 text-[var(--color-text-primary)]">
        <span className="material-icons">chevron_right</span>
      </td>
    </tr>
  );
}
