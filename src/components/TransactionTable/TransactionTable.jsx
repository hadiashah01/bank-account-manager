import "./TransactionTable.css";
export default function TransactionTable() {
  return (
    <div className="transaction-table">
      <div className="table-top">
        <h2>Recent Transactions</h2>
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
            <tr>
              <td className="date">
                <time>
                  Oct 24, 2023 <br />
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
            <tr>
              <td className="date">
                <time>
                  June 24, 2018 <br />
                  <span>14:30 PM</span>
                </time>
              </td>
              <td>
                <div className="credit"> Credit</div>
              </td>
              <td>
                <div className="credit-amount"> +$150.00</div>
              </td>
            </tr>
            <tr>
              <td className="date">
                <time>
                  Jan 24, 2026 <br />
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
        <a href="#">View All Transactions</a>
      </div>
    </div>
  );
}
