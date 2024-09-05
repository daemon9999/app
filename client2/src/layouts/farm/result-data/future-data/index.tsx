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
interface FutureDataProps {
  dates: string[];
  wps: number[];
  totalWater: number[];
}
export default function FutureData({
  dates,
  wps,
  totalWater,
}: FutureDataProps) {
  dates = dates.map((date) => {
    const d = new Date(date);
    return `${d.getDate()} ${months[d.getMonth()]}`;
  });
  const data_1 = {
    labels: dates,
    datasets: [
      {
        label: "Water per square meter",
        data: wps,
        fill: false,
        backgroundColor: "orange",
        borderColor: "#FF00004D",
      },
    ],
  };
  const options_1 = {
    responsive: true,
    maintainAspectRatio: false, 
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
          color: "green",
        }, // Y-axis label color

        grid: {
          color: "green", // Y-axis grid line color
        },
      },
    },
  };
  const options_2 = {
    responsive: true,
    maintainAspectRatio: false, 
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
        ticks: {
          color: "green", // Y-axis label color
          callback: (value: number | string) => {
            // Format the y-axis labels as 20.5 * 10^5
            const numValue = Number(value);
            const exponent = Math.floor(Math.log10(numValue));
            const mantissa = (numValue / Math.pow(10, exponent)).toFixed(1);
            return `${mantissa} * 10^${exponent}` as string;
          },
        },
        grid: {
          color: "green", // Y-axis grid line color
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return context.raw.toFixed(10);
          },
        },
      },
    },
  };
  const data_2 = {
    labels: dates,
    datasets: [
      {
        label: "Total water",
        data: totalWater,
        fill: false,
        backgroundColor: "blue",
        borderColor: "#0000FF4D",
      },
    ],
  };
  return (
    <div className="bg-400 p-4 xs:p-7 sm:p-10 h-auto flex flex-col items-center gap-y-4 xs:gap-y-7 sm:gap-y-10   rounded-md">
      <h2 className="uppercase text-3xl font-montserrat text-900 font-black tracking-wider ">
        Future Data
      </h2>
      <div className="flex gap-y-10  md:flex-row flex-col gap-x-10 justify-between w-full flex-auto">
        <div className="w-full md:w-1/2 flex flex-col gap-y-3">
          <div style={{ width: "100%", height: "auto", minHeight: "300px" }}><Line options={options_1} data={data_1} /></div>
          <p className="self-center text-center text-10 font-semibold  uppercase text-lg">
            Amount of water per square meter versus Date
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-y-3">
          <div style={{ width: "100%", height: "auto", minHeight: "300px" }}><Line options={options_2} data={data_2} /></div>
          <p className="self-center text-center text-10 font-semibold  uppercase text-lg">
            Total water versus Date
          </p>
        </div>
      </div>
    </div>
  );
}
