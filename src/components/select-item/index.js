export default function SelectItem({ text, clickHandler }) {
  return (
    <li className="text-[var(--color-text-primary)] bg-[var(--color-default-white)] hover:bg-[var(--color-gray-100)]">
      <button className="w-full text-left px-[var(--sp-16)] py-[var(--sp-8)]" onClick={clickHandler}>{text}</button>
    </li>
  );
}
