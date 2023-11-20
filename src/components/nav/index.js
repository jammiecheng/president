export default function Nav() {
  return (
    <nav className="w-full m-[var(--spacing-2)] p-[var(--spacing-4)] bg-[var(--color-neutral-1)] flex fixed top-[var(--spacing-2)] [backdrop-filter:4px]">
      <h1 className="logo">歷年總統大選開票地圖</h1>
      <ul className="flex-1 justify-evenly">
        <li className="nav-date-item">
          <button>1996</button>
        </li>
        <li className="nav-date-item">
          <button>2000</button>
        </li>
        <li className="nav-date-item">
          <button>2004</button>
        </li>
        <li className="nav-date-item">
          <button>2008</button>
        </li>
        <li className="nav-date-item">
          <button>2012</button>
        </li>
        <li className="nav-date-item">
          <button>2016</button>
        </li>
        <li className="nav-date-item">
          <button>2020</button>
        </li>
      </ul>
    </nav>
  );
}
