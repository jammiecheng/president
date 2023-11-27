import { useContext } from "react";
import logo from "../../images/logo.png";
import Button from "../button";
import SearchGroup from "../searchGroup";
import SelectItem from "../select-item";
import { requestContext, windowSizeContext } from "../../App";

export default function Nav() {
  const { request, setRequest } = useContext(requestContext);
  const { isDesktop } = useContext(windowSizeContext);

  const clickHandler = (e) => {
    setRequest((prev) => ({ year: e, location: prev.location }));
  };

  return (
    <nav className="w-full px-[var(--sp-16)] py-[9px] bg-[var(--color-default-white)] flex justify-between items-center z-50 fixed top-0 xl:px-[var(--sp-24)] xl:py-[calc(var(--sp-8)/2*3)]">
      <div className="flex justify-between items-center flex-wrap gap-[var(--sp-8)] xl:gap-[var(--sp-24)]">
        <ul className="gap-[5px] xl:gap-[var(--sp-8)]">
          <li>
            <img src={logo} alt="logo" className="h-[23px] xl:h-[33px]" />
          </li>
          <li>
            <h2 className="[font-family:Mantou_Sans] text-[var(--color-text-primary)] font-normal text-[19px] xl:text-[28.11px]">
              台灣歷年總統 都幾?
            </h2>
          </li>
        </ul>
        <div className="flex items-center gap-[calc(var(--sp-8)/2)] xl:gap-[calc(var(--sp-8)/2*3)] xl:w-[194px]">
          <h6 className="text-[var(--color-text-primary)] hidden xl:block">
            選擇年份
          </h6>
          <Button
            customClass={"!rounded-full group relative"}
            size={isDesktop ? "md" : "sm"}
            fill={"none"}
          >
            <div className="body2 flex justify-between items-center text-[var(--color-text-primary)] xl:body1">
              {request.year}
              <span className="material-icons">expand_more</span>
            </div>
            <ul className="w-full py-[var(--sp-8)] rounded-[var(--sp-8)] border-[1px] border-[var(--color-line)] bg-[var(--color-default-white)] flex-col hidden absolute top-[40px] left-0 group-hover:block z-20">
              <SelectItem text={2020} clickHandler={() => clickHandler(2020)} />
              <SelectItem text={2016} clickHandler={() => clickHandler(2016)} />
              <SelectItem text={2012} clickHandler={() => clickHandler(2012)} />
              <SelectItem text={2008} clickHandler={() => clickHandler(2008)} />
              <SelectItem text={2004} clickHandler={() => clickHandler(2004)} />
              <SelectItem text={2000} clickHandler={() => clickHandler(2000)} />
              <SelectItem text={1996} clickHandler={() => clickHandler(1996)} />
            </ul>
          </Button>
        </div>
        <SearchGroup />
      </div>
      <ul className="gap-[var(--sp-16)] hidden xl:flex">
        <li className="body1 text-[var(--color-text-primary)]">分享</li>
        <li>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <circle cx="11.1039" cy="11.5172" r="10.9828" fill="#D4009B" />
              <path
                d="M15.1944 14.876L15.6823 11.7762H12.6303V9.76548C12.6303 8.91723 13.0559 8.08989 14.4228 8.08989H15.8113V5.45083C15.8113 5.45083 14.5518 5.24138 13.3482 5.24138C10.8336 5.24138 9.19153 6.72636 9.19153 9.41361V11.7762H6.39746V14.876H9.19153V22.3702C9.75247 22.456 10.3263 22.5 10.9109 22.5C11.4955 22.5 12.0694 22.456 12.6303 22.3702V14.876H15.1944Z"
                fill="white"
              />
            </svg>
          </button>
        </li>
        <li>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <rect
                x="0.0869141"
                y="0.534485"
                width="21.9655"
                height="21.9655"
                rx="4.7069"
                fill="#D4009B"
              />
              <path
                d="M16.5608 7.20258C16.5608 7.85247 16.034 8.37931 15.3841 8.37931C14.7342 8.37931 14.2074 7.85247 14.2074 7.20258C14.2074 6.55269 14.7342 6.02586 15.3841 6.02586C16.034 6.02586 16.5608 6.55269 16.5608 7.20258Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0694 15.4397C13.2357 15.4397 14.9919 13.6835 14.9919 11.5172C14.9919 9.35095 13.2357 7.59482 11.0694 7.59482C8.90315 7.59482 7.14702 9.35095 7.14702 11.5172C7.14702 13.6835 8.90315 15.4397 11.0694 15.4397ZM11.0694 13.8707C12.3692 13.8707 13.4229 12.817 13.4229 11.5172C13.4229 10.2175 12.3692 9.16379 11.0694 9.16379C9.76966 9.16379 8.71599 10.2175 8.71599 11.5172C8.71599 12.817 9.76966 13.8707 11.0694 13.8707Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.22461 11.2034C3.22461 8.56733 3.22461 7.24928 3.73763 6.24242C4.1889 5.35676 4.90896 4.6367 5.79462 4.18543C6.80148 3.67241 8.11953 3.67241 10.7556 3.67241H11.3832C14.0193 3.67241 15.3374 3.67241 16.3443 4.18543C17.2299 4.6367 17.95 5.35676 18.4012 6.24242C18.9143 7.24928 18.9143 8.56733 18.9143 11.2034V11.831C18.9143 14.4671 18.9143 15.7852 18.4012 16.7921C17.95 17.6777 17.2299 18.3978 16.3443 18.849C15.3374 19.3621 14.0193 19.3621 11.3832 19.3621H10.7556C8.11953 19.3621 6.80148 19.3621 5.79462 18.849C4.90896 18.3978 4.1889 17.6777 3.73763 16.7921C3.22461 15.7852 3.22461 14.4671 3.22461 11.831V11.2034ZM10.7556 5.24137H11.3832C12.7272 5.24137 13.6408 5.24259 14.3469 5.30029C15.0348 5.35649 15.3866 5.45836 15.632 5.58339C16.2224 5.88423 16.7024 6.36427 17.0033 6.95472C17.1283 7.2001 17.2302 7.55187 17.2864 8.23973C17.3441 8.9459 17.3453 9.8595 17.3453 11.2034V11.831C17.3453 13.175 17.3441 14.0886 17.2864 14.7947C17.2302 15.4826 17.1283 15.8344 17.0033 16.0798C16.7024 16.6702 16.2224 17.1502 15.632 17.4511C15.3866 17.5761 15.0348 17.678 14.3469 17.7342C13.6408 17.7919 12.7272 17.7931 11.3832 17.7931H10.7556C9.4117 17.7931 8.4981 17.7919 7.79193 17.7342C7.10407 17.678 6.7523 17.5761 6.50692 17.4511C5.91648 17.1502 5.43643 16.6702 5.13559 16.0798C5.01056 15.8344 4.90869 15.4826 4.85249 14.7947C4.7948 14.0886 4.79357 13.175 4.79357 11.831V11.2034C4.79357 9.8595 4.7948 8.9459 4.85249 8.23973C4.90869 7.55187 5.01056 7.2001 5.13559 6.95472C5.43643 6.36427 5.91648 5.88423 6.50692 5.58339C6.7523 5.45836 7.10407 5.35649 7.79193 5.30029C8.4981 5.24259 9.4117 5.24137 10.7556 5.24137Z"
                fill="white"
              />
            </svg>
          </button>
        </li>
        <li>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="17"
              viewBox="0 0 22 17"
              fill="none"
            >
              <path
                d="M0.243569 3.76414C0.344399 2.21182 1.59244 0.995276 3.14612 0.918302C5.39596 0.806839 8.61162 0.672409 11.0345 0.672409C13.4574 0.672409 16.6731 0.806839 18.9229 0.918302C20.4766 0.995276 21.7246 2.21182 21.8255 3.76414C21.9221 5.25138 22.0173 7.08137 22.0173 8.51724C22.0173 9.95311 21.9221 11.7831 21.8255 13.2703C21.7246 14.8227 20.4766 16.0392 18.9229 16.1162C16.6731 16.2276 13.4574 16.3621 11.0345 16.3621C8.61162 16.3621 5.39596 16.2276 3.14612 16.1162C1.59244 16.0392 0.344399 14.8226 0.243569 13.2703C0.146966 11.7831 0.0517578 9.95311 0.0517578 8.51724C0.0517578 7.08137 0.146966 5.25138 0.243569 3.76414Z"
                fill="#D4009B"
              />
              <path
                d="M8.68066 5.37929V11.6551L14.9565 8.51722L8.68066 5.37929Z"
                fill="white"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}
