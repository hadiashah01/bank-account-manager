import "./AccountsCard.css";
import { useState } from "react";

export default function AccountsCard({
  accounts,
  activeAccount,
  setActiveAccount,
}) {
  return (
    <div className="accounts-card">
      <div className="accounts-card-top">
        <h2>Your Accounts</h2>
        <span>
          <a href="#">
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill=" #005BCB"
            >
              <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
            </svg>
          </a>
        </span>
      </div>
      <ul className="account-card-wrapper">
        <li
          className={`checking-card ${activeAccount == accounts[0] ? " active" : ""}`}
          onClick={() => setActiveAccount(accounts[0])}
        >
          <div className="card-header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#005BCB"
            >
              <path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z" />
            </svg>
            <div>
              <span className="account-type">{accounts[0].branchName}</span>
              <h3 className="account-holder">{accounts[0].userFullName}</h3>
            </div>
          </div>
          <div className="card-body">
            <span className="card-number">****{String(accounts[0].accountNumber).slice(1,5)}</span>
            <p className="account-balance">${accounts[0].balance}</p>
          </div>
        </li>
        <li
          className={`saving-card ${activeAccount == accounts[1] ? "active" : ""}`}
          onClick={() => setActiveAccount(accounts[1])}
        >
          <div className="card-header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#005BCB"
            >
              <path d="M668.5-531.5Q680-543 680-560t-11.5-28.5Q657-600 640-600t-28.5 11.5Q600-577 600-560t11.5 28.5Q623-520 640-520t28.5-11.5ZM320-600h200v-80H320v80ZM180-120q-34-114-67-227.5T80-580q0-92 64-156t156-64h200q29-38 70.5-59t89.5-21q25 0 42.5 17.5T720-820q0 6-1.5 12t-3.5 11q-4 11-7.5 22.5T702-751l91 91h87v279l-113 37-67 224H480v-80h-80v80H180Zm60-80h80v-80h240v80h80l62-206 98-33v-141h-40L620-720q0-20 2.5-38.5T630-796q-29 8-51 27.5T547-720H300q-58 0-99 41t-41 99q0 98 27 191.5T240-200Zm240-298Z" />
            </svg>
            <div>
              <span className="account-type">{accounts[1].branchName}</span>
              <h3 className="account-holder">{accounts[1].userFullName}</h3>
            </div>
          </div>
          <div className="card-body">
            <span className="card-number">****{String(accounts[1].accountNumber).slice(1,5)}</span>
            <p className="account-balance">${accounts[1].balance}</p>
          </div>
        </li>

        <li
          className={`credit-card ${activeAccount == accounts[2] ? "active" : ""}`}
          onClick={() => setActiveAccount(accounts[2])}
        >
          <div className="card-header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#005BCB"
            >
              <path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z" />
            </svg>
            <div>
              <span className="account-type">{accounts[2].branchName}</span>
              <h3 className="account-holder">{accounts[2].userFullName}</h3>
            </div>
          </div>
          <div className="card-body">
            <span className="card-number">****{String(accounts[2].accountNumber).slice(1,5)}</span>
            <p className="account-balance">${accounts[2].balance}</p>
          </div>
        </li>
        <li className="add-card ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="44px"
            viewBox="0 -960 960 960"
            width="44px"
            fill="#011fca"
          >
            <path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z" />
          </svg>
          <p>Open New Accounts </p>
        </li>
      </ul>
    </div>
  );
}
