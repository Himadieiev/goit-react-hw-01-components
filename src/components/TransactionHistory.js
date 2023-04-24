import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export function TransactionHistory({items}) {
  return (
    <div className={css.container}><table className={css.transactionHistory}>
      <thead>
        <tr className={css.tableRow}>
          <th className={css.tableHead}>Type</th>
          <th className={css.tableHead}>Amount</th>
          <th className={css.tableHead}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={css.tableRow}>{item.type}</td>
            <td className={css.tableRow}>{item.amount}</td>
            <td className={css.tableRow}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
</table></div>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}
