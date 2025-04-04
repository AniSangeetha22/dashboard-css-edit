import { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../adminPages/Home.css";

export const BarChartHome = () => {
  const { totalorders, fetchTotalOrders, products, fetchPosts } =
    useContext(ProductContext);

  useEffect(() => {
    fetchTotalOrders();
  }, []);
  useEffect(() => {
    fetchPosts();
  }, []);
  // const [chartWidth1, setChartWidth1] = useState(
  //   window.innerWidth > 768 ? 600 : 300
  // );

  // useEffect(() => {
  //   const handleResize = () => {
  //     setChartWidth1(window.innerWidth > 768 ? 600 : 300);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  console.log("Bar Chart");
  console.log(totalorders);

  return (
    <div className="charth4">
      <h4>BarChart</h4>

      <ResponsiveContainer width={600} height={300}>
        <BarChart
          width={600}
          height={300}
          data={totalorders}
          margin={{
            right: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="users.username" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#2563eb" />
          <Bar dataKey="quantity" fill="#780000" />

          <Bar dataKey="username" fill="#264653" />
          {/* <Bar dataKey="subamt" fill="#8b5cf6" /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
