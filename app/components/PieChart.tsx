import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { primaryColor, secondaryColor } from "../../public/colors";
import { AspectRatio, rem } from "@mantine/core";
import { get, onValue, ref } from "firebase/database";
import { database } from "../../public/firebase";

const PieChart = () => {
  const [yesCount, setYesCount] = useState(5);
  const [noCount, setNoCount] = useState(12);

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

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <AspectRatio ratio={1} w={rem(300)}>
        <Pie
          data={{
            datasets: [
              {
                label:"Respon:",
                data:[yesCount,noCount],
                backgroundColor: [primaryColor,secondaryColor],
              },
            ],
          }}
          options={options}
        />
    </AspectRatio>
  );
};

export default PieChart;
