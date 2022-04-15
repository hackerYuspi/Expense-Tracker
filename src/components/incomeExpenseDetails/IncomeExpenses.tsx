import useTransactions from "../../useTransactions";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Styles, Title } from "../../types";

ChartJS.register(ArcElement, Tooltip, Legend);

const IncomeExpenses: React.FC<Title> = ({ title }) => {
  const { total, chartData } = useTransactions(title);
  
  const styles: Styles =
    title === "Income"
      ? {
          order: "order-2 lg:order-1",
          borderColor: "blue",
          titleColor: "blue",
          totalColor: "green",
        }
      : {
          order: "order-3",
          borderColor: "red",
          titleColor: "red",
          totalColor: "red",
        };

  return (
    <div
      className={ `incomeExpense ${styles.order} ${styles.borderColor}`}
    >
      <div className={` title ${styles.titleColor}`}>
        {title}
      </div>
      <div className={`iebalance ${styles.totalColor}`}>${total}</div>
      <Doughnut data={chartData} />
    </div>
  );
};

export default IncomeExpenses;