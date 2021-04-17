import React, { FC, useState, useRef, MouseEvent, KeyboardEvent } from "react";

type prop = {
  title: string[];
  content: JSX.Element[];
};

const Tablist: FC<prop> = ({ title, content }) => {
  const randomStr = () => Math.random().toString(32).substring(2);
  const randomId: { current: string[] } = useRef([]);
  const renderCount: { current: number } = useRef(0);

  if (renderCount.current === 0) {
    for (let i = 0, len = title.length; i < len; i++) {
      randomId.current.push(`tab-${randomStr()}`);
    }
    renderCount.current++;
  }

  const [tabState, setTabState] = useState(randomId.current[0]);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setTabState(`${e.currentTarget.getAttribute("aria-controls")}`);
  };

  const keyDownMove = (
    e: KeyboardEvent<HTMLAnchorElement> | any,
    target: Element | null | undefined,
  ) => {
    if (target) {
      target.querySelector("a")?.focus();
      setTabState(`${target.querySelector("a")?.getAttribute("aria-controls")}`);
    } else if (!target && e.currentTarget.closest(".tablist") && e.key === "ArrowRight") {
      setTabState(
        e.currentTarget
          .closest(".tablist")
          ?.querySelector(`:scope > li:first-child > a`)
          .getAttribute("aria-controls"),
      );
      e.currentTarget
        .closest(".tablist")
        ?.querySelector(":scope > li:first-child > a")
        ?.focus();
    } else if (!target && e.currentTarget.closest(".tablist") && e.key === "ArrowLeft") {
      setTabState(
        e.currentTarget
          .closest(".tablist")
          ?.querySelector(`:scope > li:last-child > a`)
          .getAttribute("aria-controls"),
      );
      e.currentTarget
        .closest(".tablist")
        ?.querySelector(":scope > li:last-child > a")
        ?.focus();
    }
  };

  const handleKey = (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "ArrowRight") {
      keyDownMove(e, e.currentTarget.parentElement?.nextElementSibling);
    }
    if (e.key === "ArrowLeft") {
      keyDownMove(e, e.currentTarget.parentElement?.previousElementSibling);
    }
  };

  return (
    <div className="border-b ">
      <ul className="flex flex-row md:flex-col whitespace-nowrap" role="tablist">
        {title.map((title: string, index: number) => (
          <li
            role="presentation"
            key={randomId.current[index]}
            className="p-3 font-bold text-base  hover:border-b-4 text-gray-700 hover:text-green-800 cursor-pointer">
            <a
              href={`#${randomId.current[index]}`}
              tabIndex={tabState === randomId.current[index] ? 0 : -1}
              role="tab"
              aria-controls={randomId.current[index]}
              aria-selected={tabState === randomId.current[index]}
              onClick={e => handleClick(e)}
              onKeyDown={e => handleKey(e)}>
              {title}
            </a>
          </li>
        ))}
      </ul>
      <div>
        {content.map((content, index) => (
          <div
            id={randomId.current[index]}
            key={randomId.current[index]}
            hidden={tabState === randomId.current[index] ? false : true}
            role="tabpanel">
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tablist;
