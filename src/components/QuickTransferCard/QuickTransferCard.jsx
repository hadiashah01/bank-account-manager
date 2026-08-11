import "./QuickTransferCard.css";
import { useState } from "react";
export default function QuickTransferCard({ onDebit, onCredit }) {
  const [targetId, setTargetId] = useState(5678);
  const [amount, setAmount] = useState("");
  const [showSelect, setShowSelect] = useState(false);
  return (
    <div className="quick-transfer-card">
      <div className="transfer-card-top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#002fcb"
        >
          <path d="m280-80 160-300-320-40 480-460h80L520-580l320 40L360-80h-80Zm222-247 161-154-269-34 63-117-160 154 268 33-63 118Zm-22-153Z" />
        </svg>
        <h2>Quick Transfer</h2>
      </div>
      {showSelect && (
        <>
          <label className="transfer-label" htmlFor="transferTo">
            Transfer To
          </label>
          <br />
          <select
            id="transferTo"
            defaultValue="5678"
            onChange={(e) => setTargetId(e.target.value)}
          >
            <option value="1234">Checking Account ****1234</option>
            <option value="5678">Savings Account ****5678</option>
            <option value="9012">Credit Card ****9012</option>
          </select>
          <br />
        </>
      )}
      <label htmlFor="Amount">Amount</label>
      <br />
      <input
        placeholder="$ 0.00"
        type="text"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <br />
      <button
        className="credit-button"
        onClick={() => {
          onCredit(amount);
          setAmount("");
        }}
      >
        Credit
      </button>
      <button
        onClick={() => {
          if (!showSelect) {
            setShowSelect(true);
          } else {
             
            onDebit(amount, targetId);
            setAmount("");
            setShowSelect(false);
          }
        }}
      >
        Debit
      </button>
    </div>
  );
}
