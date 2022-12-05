import { Accordion } from "components";
import { motion } from "framer-motion";
import { faqAccordion } from "services";
export const Faq = () => {
  return (
    <div className="flex justify-between max-w-_1140 m-auto text-gray-200 mt-_132">
      <motion.div className="flex-1">
        <h2 className="text-2xl sm:text-_40 font-semibold mb-5">
          Frequently Asked <br /> Questions
        </h2>
        <p className="text-sm">
          Our plants are picked carefully to fit any <br /> home condition.
        </p>
      </motion.div>
      <motion.div className="flex-1">
        <Accordion data={faqAccordion} />
      </motion.div>
    </div>
  );
};
