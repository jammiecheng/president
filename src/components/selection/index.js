import { useContext, useState } from "react";
import { locationContext } from "../../App";

export default function Selection() {
  const { area, setArea } = useContext(locationContext);

  return (
    <div className="p-[var(--spacing-4)] bg-[var(--color-neutral-3)] rounded-full flex justify-evenly items-center gap-[var(--spacing-1)] xl:gap-[var(--spacing-4)]">
      <span className="material-symbols-outlined">search</span>
      <button className="selection group">
        <span>{area[0]}</span>
        <span className="material-symbols-outlined">expand_more</span>
        <ul className="option group-hover:block">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </button>
      <hr className="w-[1px] h-full bg-[var(--color-neutral-4)]" />
      <button className="selection">
        <span>{area[1]}</span>
        <span className="material-symbols-outlined">expand_more</span>
      </button>
      <hr className="w-[1px] h-full bg-[var(--color-neutral-4)]" />
      <button className="selection">
        <span>{area[2]}</span>
        <span className="material-symbols-outlined">expand_more</span>
      </button>
    </div>
  );
}
