import IntroLoader from "@/components/loaders/intro-loader";
import { BiAnalyse } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <section className="relative mt-2 sm:mt-10 bg-gradient-to-r from-10 to-100 ">
      <div className="container mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10  w-[90%] p-0 py-10 sm:p-10 ">
        <div className="w-full lg:text-start text-center lg:w-[calc(50%-40px)]  lg:items-start items-center flex flex-col gap-y-10 flex-shrink-0">
          <h1 className="font-montserrat tracking-wider font-bold text-3xl xs:text-4xl text-400">
            <span className="text-20">Digital Farming’s</span> Leading Software
            Platform
          </h1>
          <p className=" text-xl text-400 w-full xs:w-[400px]">
            Analyze your farm’s data down to the acre with Climate FieldView
          </p>
          <Link
            to={"/farm"}
            className="flex items-center gap-x-3 px-3 rounded-md py-2 text-base xs:text-xl bg-100 text-400 hover:bg-20 hover:text-100 transition-all duration-300 "
          >
            Explore Your Farm
            <span className="flex-shrink-0">
            <BiAnalyse />
            </span>

          </Link>
        </div>

        <div >
            <IntroLoader/>
        </div>

        <span className="lg:w-[400px] w-full lg:ml-auto ">
          <img src="/images/digital-image-2.webp" className="rounded-md " alt="Digital Intro Image" />
        </span>
      </div>
    </section>
  );
}
