import "./TransactionTable.css";
export default function TransactionTable({ TransactionHistory }) {
  return (
    <div className="transaction-table">
      <div className="table-top">
        <h2>Recent transaction</h2>
        <div className="icons">
          <i className="fa-solid fa-arrow-down"></i>
          <i className="fa-solid fa-sliders"></i>
        </div>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Date/Time</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {TransactionHistory?.map((TransactionHistory, index) => (
              <tr key={index}>
                <td className="date">
                  <time>
                    {TransactionHistory.time.toLocaleDateString()}
                    <br />
                    <span>{TransactionHistory.time.toLocaleTimeString()}</span>
                  </time>
                </td>

                <td>
                  <div className={TransactionHistory.actionType}>
                    {TransactionHistory.actionType}
                  </div>
                </td>

                <td>
                  <div>${TransactionHistory.userBalance}</div>
                </td>
              </tr>
            ))}
            <tr>
              <td className="date">
                <time>
                  July 14, 2018
                  <br />
                  <span>14:30 PM</span>
                </time>
              </td>
              <td>
                <div className="debit"> Debit</div>
              </td>
              <td>
                <div className="debit-amount">-$150.00</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-bottom">
       View All Transactions
      </div>
    </div>
  );
}
