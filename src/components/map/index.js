import Button from "../button";
import map from "../../images/map.svg";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Map() {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef();

  const clickHandler = () => {
    setShowModal((prev) => !prev);
  };

  const backdropClickHandler = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  return (
    <>
      <div className="w-full h-[148px] bg-[#e4faff] xl:w-1/4 xl:h-[calc(100vh-72px)] xl:pt-[72px] xl:pl-[13.6px]">
        <div className="w-full h-[148px] bg-[#495057] bg-opacity-60 absolute xl:hidden">
          <Button
            size={"md"}
            fill={"fill"}
            customClass={
              "text-[var(--color-default-white)] ml-[143.5px] mt-[55.5px]"
            }
            clickHandler={clickHandler}
          >
            進入地圖
          </Button>
        </div>
        <img src={map} alt="map" />
      </div>
      {showModal &&
        createPortal(
          <div className="w-full h-full bg-[#495057] bg-opacity-50 z-50 fixed top-0 left-0" onClick={backdropClickHandler}>
            <div ref={ref} className="rounded-2xl bg-[var(--color-default-white)] mx-[var(--sp-16)] my-[var(--sp-24)] overflow-hidden">
              <div className="flex px-[var(--sp-16)] py-[calc(var(--sp-8)/2*3)] justify-between">
                <h6 className="text-[var(--color-text-primary)]">台灣地圖</h6>
                <button
                  className="material-icons text-[var(--color-text-primary)]"
                  onClick={() => setShowModal(false)}
                >
                  cancel
                </button>
              </div>
              <div className="w-[343px] bg-[#e4faff] p-[var(--sp-16)]">
                <img className="w-[95%]" src={map} alt="map" />
              </div>
              <div className="px-[var(--sp-16)] py-[calc(var(--sp-8)/2*3)] flex gap-5">
                <Button
                  size={"md"}
                  customClass={"text-[var(--color-text-primary)] body2"}
                >
                  返回
                </Button>
                <Button
                  size={"md"}
                  fill={"fill"}
                  customClass={"text-[var(--color-default-white)] body2"}
                  clickHandler={clickHandler}
                >
                  搜尋
                </Button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
