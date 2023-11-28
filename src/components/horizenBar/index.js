export default function HorizenBar({ group1, group2, group3 }) {
  return (
    <div className="w-full h-[18px] rounded-[50px] flex overflow-hidden">
      <div
        style={{ width: group1 + "%" }}
        className="bg-[var(--color-role-1)] text-center small text-[var(--color-default-white)]"
      >
        {group1 > 10 && group1 + "%"}
      </div>
      <div
        style={{ width: group2 + "%" }}
        className="bg-[var(--color-role-2)] text-center small text-[var(--color-default-white)]"
      >
        {group2 > 10 && group2 + "%"}
      </div>
      <div
        style={{ width: group3 + "%" }}
        className="bg-[var(--color-role-3)] text-center small text-[var(--color-default-white)]"
      >
        {group3 > 10 && group3 + "%"}
      </div>
    </div>
  );
}
