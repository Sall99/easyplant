import { motion } from "framer-motion";

const PlantCare = () => {
  return (
    <div className="mt-_10 min-h-screen max-w-_1140 m-auto px-8 flex flex-col items-center justify-center">
      <motion.h2
        className="text-base sm:text-2xl font-semibold text-center mb-7 text-gray-200"
        animate={{
          x: [0, 10, 0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        Sorry, this page is under construction. Please come back later. :) Thank
        you!
      </motion.h2>
      <div className="flex justify-center">
        <img
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt="construction"
        />
      </div>
    </div>
  );
};

export default PlantCare;
