export default function Bread({ state, text, clickHandler }) {
  return (
    <button
      className={
        "text-base leading-none font-medium " +
        (state === "now"
          ? "text-[var(--color-primary)]"
          : "text-[var(--color-text-secondary)]")
      }
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}
