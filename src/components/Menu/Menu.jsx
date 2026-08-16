import "./Menu.css";
export default function Menu() {
  return (
    <div className="menu">
      <div className="menu-header">
        <h2>Bank Manager</h2>
        <div className="profile">
          <div className="profile-image"></div>
          <p>Welcome back</p>
          <p>Verified Account</p>
        </div>
      </div>
      <ul className="menu-body">
        <li className="dashboard">
          <p>Dashboard</p>
        </li>
        <li className="accounts">
          <p>Accounts</p>
        </li>
        <li className="transactions">
          <p>Transactions</p>
        </li>
        <li className="payments">
          <p>Payments</p>
        </li>
      </ul>
    </div>
  );
}
