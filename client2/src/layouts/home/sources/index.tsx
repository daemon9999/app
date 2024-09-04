import { IconType } from "react-icons";
import { BsDropletHalf, BsFillBarChartLineFill } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import { FaSunPlantWilt } from "react-icons/fa6";
import { MdOutlineEdgesensorHigh, MdSatelliteAlt } from "react-icons/md";
import { TbTrees } from "react-icons/tb";


interface SourceItem {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}
export default function Sources() {
  const sources: SourceItem[] = [
    {
      id: 1,
      title: "Sensor",
      description: "Network of low-cost soil sensors",
      icon: MdOutlineEdgesensorHigh,
    },
    {
      id: 2,
      title: "Field scouting",
      description: "Up-to-date digital journal of your fields",
      icon: FaSunPlantWilt,
    },
    {
      id: 3,
      title: "Satellite",
      description: "Monitor large or remote areas",
      icon: MdSatelliteAlt,
    },
    {
      id: 4,
      title: "Weather",
      description: "Supplementary public weather data",
      icon: TbTrees,
    },
    {
      id: 5,
      title: "Soil",
      description: "Type, temperature, texture and moisture",
      icon: BsDropletHalf,
    },
    {
      id: 6,
      title: "Crop",
      description: "Cultivation plans and overview",
      icon: BsFillBarChartLineFill,
    },
  ];
  return (
    <section className="bg-100 py-10 shadow-md shadow-10" id="resources">
      <div className="container flex flex-col gap-y-10 items-center mx-auto w-[90%] text-400">
        <div className="flex flex-col items-center gap-y-4 mr-1 text-center">
          <h5 className="uppercase text-4xl tracking-wider font-montserrat font-black ">
            Multiple Data Sources
          </h5>
          <p className="text-xl font-medium ">
            Valuable Insights collected 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 place-items-center xs:place-items-stretch xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 w-full  h-auto">
          {sources.map((source: SourceItem) => (
            <div
              key={source.id}
              className="inline-flex w-1/2 xs:w-full text-center flex-col items-center border border-400 hover:text-100 h-auto cursor-pointer transition-all duration-300 text-400 p-2 xs:p-4 rounded-lg gap-y-2 xs:gap-y-4  hover:bg-400"
            >
              <span>
                <source.icon size={40} />
              </span>
              <p className="text-xl font-medium">{source.title}</p>
              <p className="text-center ">{source.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-300 w-full xs:w-3/4 md:w-1/2 px-4 py-3 flex items-start gap-x-3 rounded font-semibold  text-sm xs:text-base  leading-7 tracking-wider">
          <span className="mt-1">
            <FaInfoCircle size={24} />
          </span>
          The leading minds in technology, data science and agronomy are working
          to address the great challenge of our time. Learn how we’re helping
          farmers sustainably grow enough for a growing world.
        </div>
      </div>
    </section>
  );
}
