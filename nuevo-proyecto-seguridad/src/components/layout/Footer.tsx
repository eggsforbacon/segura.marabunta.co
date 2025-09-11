import Link from "next/link";
import { ScrollToTop } from "./ScrollToTop";
import { InteractiveLogo } from "./InteractiveLogo";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="sticky inset-x-0 bottom-0 z-10 bg-black  text-gray-300">
      <ScrollToTop
        className={
          "animate-float-up-sm border-2 p-6 rounded-full border-transparent transition duration-300 ease-back hover:border-x-amber-300 flex w-min mx-auto "
        }
      />
      <section
        className={
          "w-full flex flex-col items-center justify-center h-full md:h-auto leading-[4rem] pt-16 md:pt-4 pb-4 "
        }
      >
        <ul className="w-full flex items-center justify-center gap-4 -mt-24 md:mt-0 px-6 lg:px-32 flex-wrap md:gap-10  xl:gap-14  2xl:gap-16 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl !tracking-[-0.05em] font-light text-off-white">
          <li className="text-center w-24 grow">
            <Link
              href={"https://www.facebook.com/marabuntaagencia"}
              target={"_blank"}
              rel={"noreferrer"}
              className="inline-block relative transition-all duration-300 hover:scale-105 hover:text-red-500
                         before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2px] before:opacity-0 before:transition-all before:duration-300 before:bg-red-500 hover:before:w-full hover:before:opacity-100"
            >
              Facebook
            </Link>
          </li>
          <li className="text-center w-24 grow">
            <Link
              href={"https://co.linkedin.com/company/marabunta"}
              target={"_blank"}
              rel={"noreferrer"}
              className="inline-block relative transition-all duration-300 hover:scale-105 hover:text-red-500
                         before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2px] before:opacity-0 before:transition-all before:duration-300 before:bg-red-500 hover:before:w-full hover:before:opacity-100"
            >
              LinkedIn
            </Link>
          </li>

          <li className="text-center w-24 grow">
            <Link
              href={"mailto:info@marabunta.co"}
              className="inline-block relative transition-all duration-300 hover:scale-105 hover:text-red-500 before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2px] before:opacity-0 before:transition-all before:duration-300 before:bg-red-500 hover:before:w-full hover:before:opacity-100"
            >
              E-mail
            </Link>
          </li>
          <li className="text-center w-24 grow">
            <Link
              href={"https://www.behance.net/MarabuntaAgencia"}
              className="inline-block relative transition-all duration-300 hover:scale-105 hover:text-red-500 before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2px] before:opacity-0 before:transition-all before:duration-300 before:bg-red-500 hover:before:w-full hover:before:opacity-100"
            >
              Behance
            </Link>
          </li>
          <li className="text-center w-24 grow">
            <Link
              href={"https://www.instagram.com/marabuntaagenciacreativa/"}
              className="inline-block relative transition-all duration-300 hover:scale-105 hover:text-red-500 before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2px] before:opacity-0 before:transition-all before:duration-300 before:bg-red-500 hover:before:w-full hover:before:opacity-100"
            >
              Instagram
            </Link>
          </li>
        </ul>
      </section>

      <div className="container  mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
          {/* Columna 1 */}
          <div
            className={
              "flex flex-row items-center justify-between w-full md:hidden mt-8"
            }
          >
            <ul
              className={
                "text-sm flex flex-col items-start justify-start gap-2 text-off-white font-light"
              }
            >
              <li>
                <Link
                  className={
                    "transition duration-300 ease-in-out hover:text-cyan-400 focus:text-white"
                  }
                  href={"tel:+576024072035"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  (602) 407 2035
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "transition duration-300 ease-in-out hover:text-cyan-400 focus:text-white"
                  }
                  href={"mailto:info@marabunta.co"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  info@marabunta.co
                </Link>
              </li>
              <li>
                <Link
                  className={
                    "transition duration-300 ease-in-out hover:text-cyan-400 focus:text-white"
                  }
                  href={"https://goo.gl/maps/2tR1LGMZnG4zo3CSA"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  Calle 8 oeste #28-45, Cali
                </Link>
              </li>
            </ul>
            <div className="flex justify-end md:order-2">
              <InteractiveLogo />
            </div>
          </div>

          <ul
            className={
              "hidden md:flex md:w-1/3 md:order-1 text-sm md:text-base flex-col items-start justify-start gap-2 text-off-white font-light md:mb-12"
            }
          >
            <li>
              <Link
                className={
                  "transition duration-300 ease-in-out hover:text-cyan-400 focus:text-white"
                }
                href={"tel:+576024072035"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                (602) 407 2035
              </Link>
            </li>
            <li>
              <Link
                className={
                  "transition duration-300 ease-in-out hover:text-cyan-400 focus:text-white"
                }
                href={"mailto:info@marabunta.co"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                info@marabunta.co
              </Link>
            </li>
            <li>
              <Link
                className={
                  "transition duration-300 ease-in-out hover:text-cyan-400 focus:text-white"
                }
                href={"https://goo.gl/maps/2tR1LGMZnG4zo3CSA"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                Calle 8 oeste #28-45, Cali
              </Link>
            </li>
          </ul>

          <div className="hidden md:flex justify-end md:order-2">
            <InteractiveLogo />
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm">
          <p>
            {" "}
            Marabunta® Agencia Creativa • Comunicamos Ideas &copy;{" "}
            {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
