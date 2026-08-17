import "./Menu.css";
export default function Menu() {
  return (
    <div className="menu">
      <div className="menu-header">
        <h2>Bank Manager</h2>
        <div className="profile">
          <div className="profile-image">
            <img src="./public/profile-photo.jpg" alt="profile-photo" />
          </div>
          <div className="profile-text">
            <p className="welcome-text">Welcome back</p>
            <p className="verified-text">Verified Account</p>
          </div>
        </div>
      </div>
      <ul className="menu-body">
        <li className="dashboard">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=" #005bcb"><path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"/></svg>
          <p>Dashboard</p>
        </li>
        <li className="accounts">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill=" #39393c"
          >
            <path d="M200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v100h-80v-100H200v560h560v-100h80v100q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm280-80v-240H520v240h280Zm-117.5-77.5Q700-455 700-480t-17.5-42.5Q665-540 640-540t-42.5 17.5Q580-505 580-480t17.5 42.5Q615-420 640-420t42.5-17.5Z" />
          </svg>
          <p>Accounts</p>
        </li>
        <li className="transactions">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill=" #39393c"
          >
            <path d="M240-80q-50 0-85-35t-35-85v-120h120v-560l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-560H320v440h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h240v80H360Zm0 120v-80h240v80H360Zm320-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600Zm0 120q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm-40 0v-80 80Z" />
          </svg>
          <p>Transactions</p>
        </li>
        <li className="payments">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill=" #39393c"
          >
            <path d="M240-170Q136-197 68-282T0-480q0-113 68-198t172-112v84q-71 24-115.5 86T80-480q0 78 44.5 140T240-254v84Zm320 10q-133 0-226.5-93.5T240-480q0-133 93.5-226.5T560-800q66 0 124 25t102 69l-56 56q-33-33-76.5-51.5T560-720q-100 0-170 70t-70 170q0 100 70 170t170 70q50 0 93.5-18.5T730-310l56 56q-44 44-102 69t-124 25Zm240-160-56-56 64-64H520v-80h288l-64-64 56-56 160 160-160 160Z" />
          </svg>
          <p>Payments</p>
        </li>
      </ul>
    </div>
  );
}
