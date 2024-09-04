import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
interface ForecastDataProps {
  dates: string[];
  temperatures: number[];
  recipitations: number[];
}
export default function ForecastData({
  dates,
  recipitations,
  temperatures,
}: ForecastDataProps) {
  dates = dates.map((date) => {
    const d = new Date(date);
    return `${d.getDate()} ${months[d.getMonth()]}`;
  });
  const data_1 = {
    labels: dates,
    datasets: [
      {
        label: "Temperature °C",
        data: temperatures,
        fill: false,
        backgroundColor: "red",
        borderColor: "#FF00004D",
      },
    ],
  };
  const options_1 = {
    scales: {
      x: {
        ticks: {
          color: "blue", // X-axis label color
        },
        grid: {
          color: "blue", // X-axis grid line color
        },
      },
      y: {
        ticks: {
          color: "green", // Y-axis label color
        },
        grid: {
          color: "green", // Y-axis grid line color     
        },
      },
    },
  };
  const options_2 = {
    
    scales: {
      x: {
        ticks: {
          color: "red", // X-axis label color
        },
        grid: {
          color: "red", // X-axis grid line color
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "green", // Y-axis label color
        },
        grid: {
          color: "green", // Y-axis grid line color     
        },
      },
    },
  };
  const data_2 = {
    labels: dates,
    datasets: [
      {
        label: "Recipitation",
        data: recipitations,
        fill: false,
        backgroundColor: "blue",
        borderColor: "#0000FF4D",
      },
    ],
  };
  return (
    <div className="bg-400 p-4 xs:p-7 sm:p-10 h-auto flex flex-col items-center gap-y-4 xs:gap-y-7 sm:gap-y-10   rounded-md">
      <h2 className="uppercase text-3xl font-montserrat text-900 font-black tracking-wider ">
        Forecast Data
      </h2>
      <div className="flex gap-x-4 xs:gap-x-7 sm:gap-x-10 justify-between w-full flex-auto">
        <div className="w-1/2 flex flex-col gap-y-3">
          <Line options={options_1} data={data_1} />
          <p className="self-center text-center text-10 font-semibold  uppercase text-lg">Temperature versus Date</p>
        </div>
        <div className="w-1/2 flex flex-col gap-y-3">
          <Line  options={options_2} data={data_2} />
          <p className="self-center text-center text-10 font-semibold  uppercase text-lg">Recipitation versus Date</p>
        </div>
      </div>
    </div>
  );
}
