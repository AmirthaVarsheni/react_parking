
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 400, label: 'Groceries' },
  { id: 1, value: 300, label: 'Utilities' },
  { id: 2, value: 200, label: 'Entertainment' },
  { id: 3, value: 100, label: 'Transportation' },
];

const SpendingPieChart = () => {
  return (

      <PieChart
        series={[
          {
            data,
            highlightScope: { fade: 'global', highlight: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        height={300}
        width={300}
      />
  );
};

export default SpendingPieChart;
