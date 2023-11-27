export default function VoteItem({ county }) {
  return (
    <div className="flex bg-[var(--color-default-white)] border-b-[1px] border-b-[var(--color-line)] rounded-[var(--sp-8)]">
      <h6 className="w-[222px] pr-[var(--sp-24)] py-[calc(var(--sp-8)/2*3)]">
        {county}
      </h6>
      <div className="w-[333px] pr-[var(--sp-24)] py-[calc(var(--sp-8)/2*3)]"></div>
      <div className="w-[222px] pr-[var(--sp-24)] py-[calc(var(--sp-8)/2*3)]">
        <img className="w-[var(--sp-32)] rounded-[var(--sp-16)]" />
        <span>{}</span>
      </div>
      <div className="w-[222px] pr-[var(--sp-24)] py-[calc(var(--sp-8)/2*3)]">{}</div>
      <div className="w-[222px] pr-[var(--sp-24)] py-[calc(var(--sp-8)/2*3)]">{}</div>
      <span className="material-icons">chevron_right</span>
    </div>
  );
}
