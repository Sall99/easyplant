import { Disclosure } from "@headlessui/react";
import { IAccordion } from "@types";
import { FC } from "react";
import { Icon } from "../form";

export const Accordion: FC<IAccordion> = ({ data }) => {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-md  text-gray-200">
        {data.map(({ title, Content }, index: number) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <div className="border-b border-gray-300 mb-5"></div>
                <Disclosure.Button className="flex w-full justify-between items-center py-2 text-left font-semibold text-lg">
                  <span>{title}</span>
                  <Icon name={open ? "Minus" : "Add"} />
                </Disclosure.Button>

                <Disclosure.Panel className="pt-4 pb-2">
                  <Content />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};
