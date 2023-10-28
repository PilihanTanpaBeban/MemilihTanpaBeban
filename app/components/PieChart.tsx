import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { primaryColor, secondaryColor } from "../../public/colors";
import { AspectRatio, rem } from "@mantine/core";

const data = [
  { id: 1, value: "Yes", count: 263 },
  { id: 2, value: "No", count: 542 },
];

const PieChart = () => {
  const [userData, setUserData] = useState({
    labels: data.map((data) => data.value),
    datasets: [
      {
        label: "Users Gained",
        data: data.map((data) => data.count),
        backgroundColor: [secondaryColor, primaryColor],
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <AspectRatio ratio={1} w={rem(300)}>
      <Pie data={userData} options={options} />
    </AspectRatio>
  );
};

export default PieChart;
