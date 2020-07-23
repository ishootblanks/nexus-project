export function charDataManipulation(data) {
  let dataLabels = [];
  let dataNumbers = [];
  let chartData = {};
  data.forEach((el) => {
    dataLabels.push(el.foodname);
    dataNumbers.push(el.count);
  });
  return (chartData = {
    labels: dataLabels,
    datasets: [
      {
        label: "Favorite food",
        data: dataNumbers,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
      },
    ],
  });
}
