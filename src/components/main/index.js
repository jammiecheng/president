export default function Main({ children }) {
  return (
    <main className="flex flex-col mt-[92px] xl:flex-row xl:h-[calc(100vh-66px)] xl:mt-[66px]">
      {children}
    </main>
  );
}
