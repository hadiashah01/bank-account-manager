import "./AvailableBalance.css";

export default function AvailableBalance({ activeAccount }) {
  return (
    <div className="balance-card">
      <div className="card-header">
        <p>Available Balance</p>
        <span className="badge">Active</span>
      </div>
      <h2 className="amount">
        {activeAccount.balance}
        <span>.00</span>
      </h2>

      <div className="details-wrap">
        <div className="details">
          <label>Account Holder</label>
          <p>{activeAccount.userFullName}</p>
        </div>
        <div className="details">
          <label>Account Number</label>
          <p>{activeAccount.accountNumber}</p>
        </div>
        <div className="details">
          <label>IBAN</label>
          <p>{activeAccount.IbanNumber}</p>
        </div>
        <div className="details">
          <label>Daily credit/debit limit</label>
          <p>$5000</p>
        </div>
        <div className="details">
          <label>Monthly credit/debit limit</label>
          <p>$150000</p>
        </div>
      </div>
    </div>
  );
}
