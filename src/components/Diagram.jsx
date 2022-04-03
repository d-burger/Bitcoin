import { Line } from "react-chartjs-2";

const Diagram = ({ pricesOneWeek }) => {
  return (
    <div className="main">
      <div className="price-chart-container">
        <div className="chart">
          <Line
            data={{
              labels: pricesOneWeek.map((element) => element.x),

              datasets: [
                {
                  label: "USD For One Bitcoin",
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
        </div>
      </div>
    </div>
  );
};

export default Diagram;
