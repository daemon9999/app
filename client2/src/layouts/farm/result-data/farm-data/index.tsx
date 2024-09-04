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
          "flex flex-col flex-auto  bg-100 items-end gap-y-10   justify-center  rounded min-h-[600px] p-10"
        )}
      >
        <h3 className="uppercase text-3xl  font-montserrat text-400 font-black tracking-wider ">
          The result data of your farm
        </h3>

        <div className="flex-auto w-full rounded-lg p-6  bg-400 flex flex-col font-montserrat text-xl gap-y-4">
          <div className="flex items-center gap-x-3">
            <span>
              <FaChartArea size={22} />
            </span>
            <strong>The area of field:</strong>
            <span>{hectare[0]}</span>
          </div>

          <div className="flex items-center gap-x-3">
            <span>
              <SiStatuspal size={22} />
            </span>
            <strong>The current status:</strong>

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

          <div className="flex items-center gap-x-3">
            <span>
              <MdReportProblem size={22} />
            </span>
            <strong>Problems:</strong>
          </div>
          <ul className="list-disc ml-10 -mt-2">
            {problems.map((problem, index) => (
              <li key={index}>{problem}</li>
            ))}
          </ul>

          <div className="flex items-center gap-x-3">
            <span>
              <MdRecommend size={22} />
            </span>
            <strong>Recommendations:</strong>
          </div>
          <ul className="list-disc ml-10 -mt-2">
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
            <button
              type="button"
              className="bg-300 w-full sm:w-1/2 py-2 rounded-md text-400 flex items-center gap-x-2 justify-center hover:bg-transparent border border-300  hover:text-300 transition-all duration-300"
            >
              <FaDownload size={22} />
              Download Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
