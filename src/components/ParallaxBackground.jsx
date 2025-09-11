import { useScroll, motion, useTransform, useSpring } from "motion/react";

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const background3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const background2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const background1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* background Sky */}
        <div
          className="absolute inset-0 -z-50 w-full h-screen"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* mountain layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40 "
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: background3Y,
          }}
        />
        {/* planet  */}
        <motion.div
          className="absolute inset-0 -z-30 "
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />
        {/* mountain layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20 "
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: background2Y,
          }}
        />
        {/* mountain layer 1 */}
        <motion.div
          className="absolute inset-0 -z-10 "
          style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: background1Y,
          }}
        />
      </div>
    </section>
  );
}
