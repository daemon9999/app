import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { GiProcessor } from "react-icons/gi";
import FarmLoader from "@/components/loaders/farm-loader";
import axios from "axios";
import FarmData from "./farm-data";
import ForecastData from "./forecast-data";
import FutureData from "./future-data";
interface ResultDataProps {
  selectedLoc: number;
}
export default function ResultData({ selectedLoc }: ResultDataProps) {
  const forecastRef = useRef<HTMLDivElement | null>(null);
  const futureRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState<"loading" | "success" | "init">(
    "init"
  );
  const [forecastLoading, setForecastLoading] = useState<
    "loading" | "success" | "init"
  >("init");
  const [futureLoading, setFutureLoading] = useState<
    "loading" | "success" | "init"
  >("init");
  const [data, setData] = useState<{
    img: string;
    problems: string[];
    status: string[];
    hectare: string[];
    recommendations: string[];
    dates: string[];
    temperatures: number[];
    recipitations: number[];
    wps: number[];
    totalWater: number[];
  }>({
    img: "",
    problems: [],
    status: [],
    hectare: [],
    recommendations: [],
    dates: [],
    recipitations: [],
    temperatures: [],
    totalWater: [],
    wps: [],
  });
  const getSpecImage = () => {
    const request_1 = axios.get(
      `http://localhost:8000/api/spec/${selectedLoc + 1}`
    );
    const request_2 = axios.get(
      `http://localhost:8000/api/insights/${selectedLoc + 1}`
    );
    Promise.all([request_1, request_2])
      .then(
        axios.spread((_response_1, response_2) => {
          const { data } = response_2.data;
          setData((prev) => ({
            ...prev,
            img: `http://localhost:8000/api/spec/${selectedLoc + 1}`,
            hectare: data["Hectare"],
            problems: data["Problems"],
            recommendations: data["Recommendations"],
            status: data["Status"],
          }));
          setIsLoading("success");
        })
      )
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const getForecast = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/forecast/${selectedLoc + 1}`
      );
      const { data: d } = res.data;
      setData((prev) => ({
        ...prev,
        dates: d[0],
        temperatures: d[1],
        recipitations: d[2],
      }));
      setForecastLoading("success");
    } catch (error) {
      console.log(error);
    }
  };

  const getFuture = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/future/${selectedLoc + 1}`
      );
      const { data: d } = res.data;
      setData((prev) => ({
        ...prev,
        wps: d[1],
        totalWater: d[0],
      }));
      setFutureLoading("success");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsLoading("init");
    setForecastLoading("init");
    setFutureLoading("init");
  }, [selectedLoc]);
  useEffect(() => {
    if (isLoading === "loading") {
      getSpecImage();
    }
  }, [isLoading]);
  useEffect(() => {
    if (forecastLoading === "loading") {
      getForecast();
      forecastRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    } 
  }, [forecastLoading]);
  useEffect(() => {
    if (futureLoading === "loading") {
      futureRef.current?.scrollIntoView({
        behavior: "smooth",
      });
      getFuture();
    } 
  }, [futureLoading]);
  if (["init", "loading"].includes(isLoading)) {
    return (
      <>
        <div
          className={classNames(
            "flex flex-col  flex-auto text-center bg-100 items-center justify-center gap-y-2 xs:gap-y-4 rounded h-auto xs:min-h-[600px] p-4 xs:p-10"
          )}
        >
          {isLoading === "init" && (
            <>
              <h3 className="uppercase text-2xl xs:text-3xl  font-montserrat text-400 font-black tracking-wider ">
                Welcome to your farm field!
              </h3>
              <p className="font-montserrat text-400 text-lg xs:text-xl font-semibold  text-center leading-10 w-3/4">
                Let's preprocess your farm to determine the specific features of
                your farm.
              </p>

              <button
                type="button"
                onClick={() => setIsLoading("loading")}
                className="bg-30 w-auto xs:w-1/2 py-2 px-3  rounded-md text-400 flex items-center gap-x-2 justify-center hover:bg-transparent border border-30 hover:text-30 transition-all duration-300 text-xl font-montserrat font-medium"
              >
                <GiProcessor size={28} />
                Preprocess
              </button>
            </>
          )}
          {isLoading === "loading" && <FarmLoader id={1} />}
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col gap-y-4 xs:gap-y-7 sm:gap-y-10">
      {isLoading === "success" && (
        <FarmData
          hectare={data.hectare}
          img={data.img}
          problems={data.problems}
          recommendations={data.recommendations}
          selectedLoc={selectedLoc}
          status={data.status}
          setForecastLoading={setForecastLoading}
          forecastLoading={forecastLoading}
        />
      )}
      {forecastLoading === "loading" && (
        <div ref={forecastRef} className="bg-400 p-10 min-h-[600px] flex items-center  justify-center rounded-md">
          <FarmLoader id={2} />
        </div>
      )}
      {forecastLoading === "success" && (
        <div  className="flex flex-col gap-y-5">
          <ForecastData
            dates={data.dates}
            recipitations={data.recipitations}
            temperatures={data.temperatures}
          />
          {!["loading", "success"].includes(futureLoading) && (
            <button
              className="bg-100 self-center text-500 px-3 py-2 font-medium  text-lg rounded-md"
              onClick={() => setFutureLoading("loading")}
            >
              See data for next five days
            </button>
          )}
        </div>
      )}
      {futureLoading === "loading" && (
        <div ref={futureRef} className="bg-100 p-10 min-h-[600px] flex items-center  justify-center rounded-md">
          <FarmLoader id={1} />
        </div>
      )}
      {futureLoading === "success" && (
        <div  className="flex flex-col gap-y-5">
          <FutureData
            dates={data.dates}
            totalWater={data.totalWater}
            wps={data.wps}
          />
        </div>
      )}
    </div>
  );
}
