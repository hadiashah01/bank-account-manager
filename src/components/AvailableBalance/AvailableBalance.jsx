import "./AvailableBalance.css";

export default function AvailableBalance() {
  return (
    <div className="balance-card">
      <div className="card-header">
        <p>Available Balance</p>
        <span className="badge">Active</span>
      </div>
      <h2 className="amount">$12,450<span>.00</span></h2>

      <div className="details">
        <div>
          <label>Account Holder</label>
          <p>John Doe</p>
        </div>
        <div>
          <label >Account Number</label>
          <p>987654321</p>
        </div>
        <div>
          <label>IBAN</label>
          <p>GB29 0000 1234 5678 9012</p>
        </div>
        <div>
          <label>Daily credit/debit limit</label>
          <p>$5000</p>
        </div>
        <div>
          <label>Monthly credit/debit limit</label>
          <p>$150000</p>
        </div>
      </div>

      
        
      
    </div>
  );
}