import { Accordion } from "components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { publicRoutes } from "routes";
import { faqAccordion } from "services";
export const Faq = () => {
  return (
    <div className="flex justify-between flex-col sm:flex-row max-w-_1140 m-auto text-gray-200 mt-5 sm:mt-_132 px-8">
      <motion.div className="flex-1 text-center flex flex-col">
        <h2 className="text-2xl sm:text-_40 font-semibold mb-5">
          Frequently Asked <br /> Questions
        </h2>
        <p className="text-sm">
          Our plants are picked carefully to fit any <br /> home condition.
        </p>
        <motion.p className="sm:hidden">
          <Link
            to={publicRoutes.plantCare.path}
            className="text-green-100 underline"
          >
            plant care library
          </Link>
        </motion.p>
      </motion.div>
      <motion.div className="flex-1">
        <Accordion data={faqAccordion} line="bottom" />
      </motion.div>
    </div>
  );
};
