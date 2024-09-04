import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Concept() {
  return (
    <section id="concept" className="relative ">
      <span className="w-full h-[500px] sm:h-auto flex">
        <img src="/images/main-bg-3.webp" className="w-full  h-full sm:h-auto object-cover" alt="" />
      </span>
      <div className="w-full h-full bg-gradient-to-r from-800 from-1% to-transparent absolute top-0 left-0"></div>

      <div className=" absolute top-5 lg:top-10 left-5 lg:left-10 ">
        <div className=" text-400 px-4 py-3 w-full md:w-[400px] rounded-md text-lg">
          <strong className="text-lg xs:text-xl font-montserrat">
            Suni Ekinchi does the listening so you can get the most out of every
            acre!
          </strong>
          <p className="mt-4 text-sm xs:text-base">
            Each farm is different. Every field is unique. Use Suni Ekinchi year
            round to make data driven decisions to maximize your return on every
            acre. We’re your data partner to seamlessly collect, store, and
            visualize critical field data. Monitor and measure the impact of
            your agronomic decisions on your fields to optimize yield and
            maximize profit.
          </p>
        </div>
      </div>
      <Link
        to={"/contact"}
        className={`bg-gradient-to-r hover:from-100 hover:to-20 transition-all duration-300
           from-20 to-100 shadow-md font-medium shadow-100 text-400 absolute flex items-center whitespace-nowrap
           justify-center  right-1/2 translate-x-1/2  bottom-10 xs:translate-x-0 xs:right-10 lg:bottom-20  lg:right-20 
            gap-x-3
            text-sm xs:text-lg lg:text-2xl rounded-lg px-3 py-2`}
      >
        Contact for more information
        <FaArrowRight />
      </Link>
    </section>
  );
}
