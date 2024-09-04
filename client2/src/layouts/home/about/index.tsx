import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-10 shadow-md shadow-100">
      <div className="container mx-auto w-[90%] flex gap-y-8 md:flex-row flex-col gap-x-10 items-center xs:items-stretch">
        <div className="flex flex-col md:text-end text-center flex-auto items-center  md:items-end order-1 md:order-2 gap-y-4">
          <h4 className="text-2xl xs:text-3xl sm:text-4xl  whitespace-nowrap font-black tracking-widest text-10 uppercase font-montserrat  ">
            About us
          </h4>
          <p className=" text-lg xs:text-xl sm:text-2xl font-semibold text-700 ">
            The leading minds in technology, data science and agronomy are
            working to address the great challenge of our time...
          </p>
          <Link
            to={"https://technofest-blog.vercel.app/#about"}
            target="_blank"
            className="bg-100 px-4 border border-100 hover:bg-transparent hover:text-100 transition-all duration-300 py-1 text-lg xs:text-xl font-medium text-400 rounded"
          >
            Explore more{" "}
          </Link>
        </div>

        <div className="grid grid-cols-1 place-items-center  xs:place-items-stretch xs:grid-cols-3 md:grid-cols-2 w-2/3 xs:w-full  lg:grid-cols-3   md:w-1/2  lg:w-2/3 flex-shrink-0 gap-x-5 gap-y-5 xl:gap-x-10 order-2 md:order-1">
          <span className="w-full h-auto hover:scale-[1.15] transition-all cursor-pointer filter saturate-[1.2]">
            <img
              src="/images/main-bg.webp"
              alt="Main Background Image"
              className="w-full h-auto rounded-[100px]"
            />
          </span>

          <span className="w-full h-auto hover:scale-[1.15] transition-all cursor-pointer filter saturate-[1.2]">
            <img
              src="/images/main-bg-2.webp"
              alt="Main Background Image"
              className="w-full h-auto rounded-[100px]"
            />
          </span>
          <span className="w-full h-auto hover:scale-[1.15] transition-all cursor-pointer filter saturate-[1.2]">
            <img
              src="/images/intro-image.png"
              alt="Main Background Image"
              className="w-full h-auto rounded-[100px]"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
