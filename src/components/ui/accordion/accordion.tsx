import { FC } from "react";
import { Disclosure } from "@headlessui/react";
import { IAccordion } from "@types";
import { Icon } from "../form";
import { motion } from "framer-motion";

export const Accordion: FC<IAccordion> = ({ data }) => {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-md  text-gray-200">
        {data.map(({ title, Content }, index: number) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <div className="border-b border-gray-300 mb-5"></div>
                <Disclosure.Button className="flex w-full justify-between items-center py-2 text-left font-semibold text-lg transition duration-500 ease-in-out">
                  <span>{title}</span>
                  {/* add icon motion */}
                  {/* <Icon
                    name={open ? "Minus" : "Add"}
                    // add motion transition to icon
                  
                  /> */}
                  <motion.div transition={{ duration: 0.5 }}>
                    <Icon
                      name={open ? "Minus" : "Add"}
                      className="w-6 h-6 text-gray-200"
                    />
                  </motion.div>
                </Disclosure.Button>

                <Disclosure.Panel className="pt-4 pb-2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Content />
                  </motion.div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};
