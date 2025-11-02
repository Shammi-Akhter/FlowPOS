import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
};

const imageReveal: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const buttonReveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" }
  }
};

const Partner = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-16">
      <div className="container mx-auto">

        {/* Row 1 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3, margin: "0px 0px -80px 0px" }}
          style={{ willChange: "transform, opacity" }}
        >
          <motion.div className="flex justify-center" variants={imageReveal}>
            <img
              src="/images/partner1.avif"
              alt="POS Support Team"
              className="rounded-2xl shadow-md w-full max-w-md md:max-w-lg object-cover block"
            />
          </motion.div>

          <motion.div variants={container} className="space-y-4">
            <motion.h1
              className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-emerald-500"
              variants={fadeUp}
            >
              Your trusted partner in growth.
            </motion.h1>

            <motion.p className="text-gray-600 text-lg leading-relaxed" variants={fadeUp}>
              Our POS platform helps to simplify sales, manage inventory, and serve customers faster — all in one powerful dashboard. With 24/7 support, you’re never alone in running your business.
            </motion.p>

            <motion.a
              href="/contact"
              className="inline-block text-white px-6 py-3 rounded-full font-medium transition bg-gradient-to-r from-black to-emerald-500 hover:opacity-90"
              variants={buttonReveal}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Meet our expert team →
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:pl-10 pl-0"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3, margin: "0px 0px -80px 0px" }}
          style={{ willChange: "transform, opacity" }}
        >
          <motion.div variants={container} className="space-y-4">
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-0 bg-clip-text text-transparent bg-gradient-to-r from-black to-emerald-500"
              variants={fadeUp}
            >
              Empowering Your Business Through Seamless Collaboration
            </motion.h1>

            <motion.p className="text-gray-600 text-lg leading-relaxed" variants={fadeUp}>
              Our dedicated support and smart POS solutions work hand-in-hand with your team to simplify operations, boost efficiency, and drive long-term success.
            </motion.p>

            <motion.a
              href="/contact"
              className="inline-block text-white px-6 py-3 rounded-full font-medium transition bg-gradient-to-r from-black to-emerald-500 hover:opacity-90"
              variants={buttonReveal}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Meet our expert team →
            </motion.a>
          </motion.div>

          <motion.div className="flex justify-center" variants={imageReveal}>
            <img
              src="/images/partner2.jpg"
              alt="POS Support Team"
              className="rounded-2xl shadow-md w-full max-w-md md:max-w-lg object-cover block"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Partner;
