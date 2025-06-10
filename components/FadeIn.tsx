import React, { useContext, createContext } from "react";
import { motion } from "motion/react";

const FadeInStaggerContext = createContext(false);
const viewport = { once: true, margin: "0px 0px -200px" };

function FadeIn(props: any) {
  const isInstaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInstaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    ></motion.div>
  );
}

export default FadeIn;
