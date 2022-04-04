import { Line } from "react-chartjs-2";
import { useState } from "react";

const Diagram = ({ pricesOneWeek, pricesEightWeeks }) => {
  //-------- USESTATE ------------------------
  const [diagramSwitched, setDiagramSwitched] = useState(true);

  //-------- FUNCTIONS -----------------------
  const changePeriod = () => {
    setDiagramSwitched(!diagramSwitched);
  };

  return (
    <div className="main">
      <div className="price-chart-container">
        <div className="price-chart-header">
          <div className="price-chart-header-title">
            Preisentwicklung Bitcoin
          </div>
          <button className="btn" onClick={changePeriod}>
            Zeitspanne ändern
          </button>
        </div>
        <div className="chart">
          {diagramSwitched ? (
            //-------- One Week
            <Line
              data={{
                labels: pricesOneWeek.map((element) => element.x),

                datasets: [
                  {
                    label: "USD For One Bitcoin One Week",
                    data: pricesOneWeek.map((element) => element.y),
                    fill: false,
                    borderColor: ["rgba(29, 241, 255, 1)"],
                    borderWidth: 3,
                    color: ["rgba(255, 255, 255, 1)"],
                  },
                ],
              }}
              options={{
                elements: {
                  line: {
                    tension: 0,
                  },
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: false,
                      },
                    },
                  ],
                },
              }}
              responsive={true}
            />
          ) : (
            //-------- 8 Weeks
            <Line
              data={{
                labels: pricesEightWeeks.map((element) => element.x),

                datasets: [
                  {
                    label: "USD For One Bitcoin Eight Weeks",
                    data: pricesEightWeeks.map((element) => element.y),
                    fill: false,
                    borderColor: ["rgba(29, 241, 255, 1)"],
                    borderWidth: 3,
                    color: ["rgba(255, 255, 255, 1)"],
                  },
                ],
              }}
              options={{
                elements: {
                  line: {
                    tension: 0,
                  },
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: false,
                      },
                    },
                  ],
                },
              }}
              responsive={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Diagram;
