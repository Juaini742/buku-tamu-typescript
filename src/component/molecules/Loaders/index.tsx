import {motion} from "framer-motion";

const Loaders = () => {
  return (
    <div className="grid place-content-center bg-violet-600 px-4 py-24">
      <BarLoader />
    </div>
  );
};

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        transition={{
          staggerChildren: 0.25,
        }}
        initial="initial"
        animate="animate"
        className="flex gap-1"
      >
        <motion.div variants={variants} className="h-12 w-2 bg-black" />
        <motion.div variants={variants} className="h-12 w-2 bg-black" />
        <motion.div variants={variants} className="h-12 w-2 bg-black" />
        <motion.div variants={variants} className="h-12 w-2 bg-black" />
        <motion.div variants={variants} className="h-12 w-2 bg-black" />
        <div></div>
      </motion.div>
      <div className="mt-5 font-bold">Data anda masih dalam proses</div>
    </div>
  );
};

export default Loaders;
