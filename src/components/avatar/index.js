export default function Avatar({ img, political }) {
  return (
    <div
      className={
        "rounded-[var(--spacing-1)] overflow-hidden " +
        (political === 1
          ? "bg-[var(--color-primary-3)]"
          : political === 2
            ? "bg-[var(--color-secondary-3)]"
            : "bg-[var(--color-thirdary-3)]")
      }
    >
      <img
        src={img}
        alt=""
        className="rounded-[var(--spacing-1)] overflow-hidden"
      />
    </div>
  );
}
