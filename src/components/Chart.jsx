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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Overview",
      data: [10, 30, 80, 40, 60, 90, 70],
      borderColor: "#1DA1F2",
      backgroundColor: "rgba(29, 161, 242, 0.2)",
      fill: true,
    },
  ],
};

const Chart = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-md shadow-md mt-6">
      <h3 className="text-lg font-bold mb-4">Overview</h3>
      <Line data={data} />
    </div>
  );
};

export default Chart;
