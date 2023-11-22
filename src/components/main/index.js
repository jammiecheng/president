export default function Main({ children }) {
  return (
    <main className="w-[90%] h-full mx-auto mt-[101px] mb-[calc(var(--spacing-1)*9)] py-[var(--spacing-4)] flex flex-col gap-[var(--spacing-4)] xl:mt-[72px] xl:flex-row">
      {children}
    </main>
  );
}
