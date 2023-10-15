import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.theadTransaction}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }, index) => {
          const color = index % 2 === 0 ? '#fff' : '#C0C0C0';
          const statusStyle = {
            backgroundColor: color,
          };
          return (
            <tr key={id} className={css.trTransaction} style={statusStyle}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
