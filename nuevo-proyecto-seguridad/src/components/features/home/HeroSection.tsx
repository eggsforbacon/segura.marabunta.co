'use client';


/* import Link from 'next/link';
import { featureCards } from '@/data/featureCardsData'; */
import {ChevronsDown} from 'lucide-react';
import {motion, Variants} from 'framer-motion';

import loopAnimation from "../../../../public/animations/loop.json";
import Lottie from "lottie-react";
import {useRef} from 'react';


const fadeInVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeInOut',
        },
    },
};

const HeroSection = () => {
    const ref = useRef<HTMLDivElement>(null);

    return (


        <section ref={ref} className="relative w-full bg-black text-white py-20 md:py-20 md:pb-14 overflow-hidden">


            <div className="container mx-auto px-6  pb-18 z-100 relative">
                <div className="relative z-10 -top-10 flex flex-col items-center text-center space-y-8">


                    <div className="grid grid-cols-1 md:grid-cols-2 ml-10 md:gap-8 items-center w-full max-w-7xl">
                        <motion.div
                            variants={fadeInVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{once: true, amount: 0.3}}
                            className="text-left"
                        >
                            <h1 className="text-5xl md:text-7xl  pb-16 font-extrabold">
                                Bienvenidos/as
                            </h1>
                            <h1 className="text-3xl md:text-4xl  pb-8 font-extrabold">
                                Portal de bienestar, seguridad y salud en el trabajo
                            </h1>
                            <p className="text-lg md:text-xl ">
                                Bienvenidos/as a esta zona segura. En este portal, podrás encontrar {"todo"} lo que necesitas
                                saber para garantizar tu bienestar y el de tus compañeros. ¡Te invitamos a explorarlo y
                                tomarte muy en serio tu seguridad y salud en el trabajo!
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{once: true, amount: 0.3}}
                            transition={{delay: 0.4}}
                            className="flex justify-center"
                        >
                            <Lottie
                                animationData={loopAnimation}
                                loop={true}
                                autoplay={true}
                                className="w-full max-w-[300px] md:max-w-[450px] h-auto"
                            />
                        </motion.div>

                    </div>
                </div>
                <div className="absolute bottom-0 left-1/2  -translate-x-1/2 z-10">
                    <ChevronsDown className="w-10 h-10 text-white/50 animate-bounce"/>
                </div>
            </div>


            {/*
      <div className="container mx-auto px-6 pt-10 relative  z-100">
              <h2 className="text-3xl font-bold text-center text-white mb-12">
                Explora Nuestras Herramientas
              </h2>
              <div className="grid grid-cols-1  z-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featureCards.map((card, index) => (
                  <div
                    key={index}
                    
                    className="bg-white/5 backdrop-blur-md  border border-white/10 rounded-2xl p-6 flex flex-col group transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2"
                  >
                    <div className="text-cyan-400 mb-4">{card.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 flex-grow mb-6">
                      {card.description}
                    </p>
                    <Link
                      href={card.href}
                      className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:text-white transition-colors"
                    >
                      Ver más
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </div> */}
        </section>
    );
};

export default HeroSection;