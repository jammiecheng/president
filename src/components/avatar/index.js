export default function Avatar({ img, political }) {
  return (
    <div>
      <img
        src={img}
        alt=""
        className={
          "w-[80px] rounded-[var(--spacing-1)] overflow-hidden 2xl:w-[100px] " +
          (political === 1
            ? "bg-[var(--color-primary-3)]"
            : political === 2
            ? "bg-[var(--color-secondary-3)]"
            : "bg-[var(--color-thirdary-3)]")
        }
      />
    </div>
  );
}
