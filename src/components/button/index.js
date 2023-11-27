export default function Button({
  size,
  fill,
  children,
  customClass,
  clickHandler,
}) {
  return (
    <button
      className={
        "flex-1 rounded-md " +
        (size === "sm"
          ? "px-[calc(var(--sp-8)/2*3)] py-[calc(var(--sp-8)/2)] "
          : size === "md"
          ? "px-[var(--sp-16)] py-[var(--sp-8)] "
          : "px-[var(--sp-24)] py-[var(--sp-16)] ") +
        (fill === "fill"
          ? "bg-[var(--color-primary)] "
          : "bg-[var(--color-bg)] ") +
        customClass
      }
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
