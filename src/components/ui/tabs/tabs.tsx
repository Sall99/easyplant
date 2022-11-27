import { useState, FC } from "react";
import { ITabs } from "@types";
import clsx from "clsx";

export const Tabs: FC<ITabs> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center text-gray-200">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={clsx(
              activeTab === index ? "bg-pink-100 rounded-_30" : "",
              "px-4 py-2 cursor-pointer text-sm font-semibold text-gray-200"
            )}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
};
