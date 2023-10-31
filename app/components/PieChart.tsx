import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { primaryColor, secondaryColor } from "../../public/colors";
import { AspectRatio, rem } from "@mantine/core";
import { get, onValue, ref } from "firebase/database";
import { database } from "../../public/firebase";

const PieChart = () => {
  const [yesCount, setYesCount] = useState(1);
  const [noCount, setNoCount] = useState(1);

  const votingPath = "voting";

  // Define references for the two objects (obj1 and obj2)
  const yesValue = ref(database, `${votingPath}/yes/`);
  const noValue = ref(database, `${votingPath}/no/`);

  useEffect(() => {
    const yesVoteRef = yesValue;
    const noVoteRef = noValue;

    const unsubscribeYes = onValue(yesVoteRef, (snapshot) => {
      const dataYes = snapshot.val();
      setYesCount(dataYes !== null ? dataYes : 0);
    });

    const unsubscribeNo = onValue(noVoteRef, (snapshot) => {
      const dataNo = snapshot.val();
      setNoCount(dataNo !== null ? dataNo : 0);
    });

    return () => {
      // Clean up the listeners when the component unmounts
      unsubscribeYes();
      unsubscribeNo();
    };
  }, []);

  Chart.register(ChartDataLabels);

  const labels = ["Ya", "Tidak"]; // Add your labels here

  const options: any = {
    plugins: {
      tooltip: {
        enabled: false // <-- this option disables tooltips
      },
      datalabels: {
        color: "white",
        font: {
          size: 18,
          family: '"Montserrat", sans-serif',
          weight: "bold",
        },
        textAlign: "center", // Align the labels to the center
        formatter: (value: any, context: any) => {
          const total = context.dataset.data.reduce(
            (acc: any, data: any) => acc + data,
            0
          );
          const percentage = ((value / total) * 100).toFixed(2) + "%";
          const label = labels[context.dataIndex]; // Get the label for this data point

          return `${label}\n${percentage}`;
        },
      },
      legend: {
        display: false, // Hide the legend
      },
    },
  };

  const dataOption = {
    labels: ["Ya", "Tidak"],
    datasets: [
      {
        label: "Respon",
        data: [yesCount, noCount],
        backgroundColor: [primaryColor, secondaryColor],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <AspectRatio ratio={1} w={rem(400)}>
      <Pie data={dataOption} options={options} />
    </AspectRatio>
  );
};

export default PieChart;
