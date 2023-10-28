import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { primaryColor, secondaryColor } from "../../public/colors";
import { AspectRatio, rem } from "@mantine/core";
import { ref } from "firebase/database";
import { database } from "../../public/firebase";
import { readFirebaseData } from "../../public/firebase.service";

const data = [
  { id: 1, value: "Yes", count: 263 },
  { id: 2, value: "No", count: 542 },
];

const votingPath = 'voting';

// Define references for the two objects (obj1 and obj2)
const yesValue = ref(database, `${votingPath}/yes/`);
const noValue = ref(database, `${votingPath}/no/`);

const PieChart = () => {
  useEffect(() => {
    readFirebaseData(yesValue);
    readFirebaseData(noValue);
  });

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
