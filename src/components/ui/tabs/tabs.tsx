import { useState, FC, useEffect } from "react";
import { ITabs } from "@types";
import clsx from "clsx";
import { useLocation } from "react-router-dom";

export const Tabs: FC<ITabs> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const tab = query.get("category");

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    // TODO: update url with query params  with react-router-dom

    const query = new URLSearchParams(location.search);
    query.set("category", index.toString());
    window.history.pushState({}, "", `${location.pathname}?${query}`);
  };

  useEffect(() => {
    if (tab) {
      setActiveTab(Number(tab));
    }
  }, [tab]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center text-gray-200">
        {tabs.map(({ id, title }, index) => (
          <div
            key={index}
            className={clsx(
              activeTab === index ? "bg-pink-100 rounded-_30" : "",
              "px-4 py-2 cursor-pointer text-sm font-semibold text-gray-200"
            )}
            onClick={() => handleTabClick(id)}
          >
            {title}
          </div>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
};
