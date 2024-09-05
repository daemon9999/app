import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";
import { FaChartArea, FaDownload } from "react-icons/fa";
import {
  MdOutlineBroadcastOnHome,
  MdRecommend,
  MdReportProblem,
} from "react-icons/md";
import { SiStatuspal } from "react-icons/si";

interface FarmDataProps {
  selectedLoc: number;
  img: string;
  hectare: string[];
  problems: string[];
  status: string[];
  recommendations: string[];
  setForecastLoading: Dispatch<SetStateAction<"loading" | "success" | "init">>;
  forecastLoading: "loading" | "success" | "init";
}
export default function FarmData({
  selectedLoc,
  hectare,
  img,
  problems,
  recommendations,
  status,
  forecastLoading,
  setForecastLoading,
}: FarmDataProps) {
  return (
    <div className="flex gap-x-5 lg:flex-row flex-col gap-y-5">
      <span className="w-full lg:w-1/2">
        <img
          src={img}
          alt={`Map image ${selectedLoc}`}
          className="w-full h-auto"
        />
      </span>
      <div
        className={classNames(
          "flex flex-col flex-auto  bg-100 items-end gap-y-4 xs:gap-y-7 sm:gap-y-10   justify-center  rounded min-h-[600px] p-4 xs:p-7 sm:p-10"
        )}
      >
        <h3 className="uppercase text-3xl  font-montserrat text-400 font-black tracking-wider ">
          The result data of your farm
        </h3>

        <div className="flex-auto w-full rounded-lg p-3 xs:p-6  bg-400 flex flex-col font-montserrat text-base xs:text-xl gap-y-4">
          <div className="flex xs:flex-row flex-col items-center gap-x-3">
           
            <strong className="flex items-center gap-x-3"> <span>
              <FaChartArea size={22} />
            </span>The area of field:</strong>
            <span>{hectare[0]}</span>
          </div>

          <div className="flex xs:flex-row flex-col items-center gap-x-3">
            
            <strong className="flex items-center gap-x-3"><span>
              <SiStatuspal size={22} />
            </span>The current status:</strong>

            <span>
              <span
                className={classNames(
                  `inline-flex w-4 h-4  rounded-full mr-2`,
                  {
                    "bg-500": status[0] === "Normal",
                    "bg-red-500": status[0] === "Bad",
                    "bg-900": status[0] === "Good",
                  }
                )}
              ></span>
              {status[0]}
            </span>
          </div>

          <div className="flex items-center gap-x-3 flex-col xs:flex-row">
          
            <strong className="flex items-center gap-x-3 ">  <span>
              <MdReportProblem size={22} />
            </span>Problems:</strong>
          </div>
          <ul className="list-disc ml-10 -mt-2 xs:text-start text-center">
            {problems.map((problem, index) => (
              <li key={index}>{problem}</li>
            ))}
          </ul>

          <div className="flex items-center gap-x-3 flex-col xs:flex-row">
           
            <strong className="flex items-center gap-x-3"> <span>
              <MdRecommend size={22} />
            </span>Recommendations:</strong>
          </div>
          <ul className="list-disc ml-10 -mt-2 xs:text-start text-center">
            {recommendations.map((recommendation, index) => (
              <li key={index}>{recommendation}</li>
            ))}
          </ul>
          <div className="flex sm:flex-row flex-col gap-y-4 items-center w-full mt-auto gap-x-4">
            {forecastLoading === "init" && (
              <button
                type="button"
                
                onClick={() => {
                  setForecastLoading("loading");
                }}
                className="bg-30 w-full sm:w-1/2 py-2 rounded-md text-400 flex items-center gap-x-2 justify-center hover:bg-transparent border border-30 hover:text-30 transition-all duration-300"
              >
                <MdOutlineBroadcastOnHome size={28} />
                Forecast future
              </button>
            )}
          
          </div>
        </div>
      </div>
    </div>
  );
}
