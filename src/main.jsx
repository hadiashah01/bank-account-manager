import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

function createBankAccount(userFullName, branchInfo, depositAmount) {
  let branchName = branchInfo.branchName;
  let branchCode = branchInfo.branchCode;
  const dailyCreditLimit = 5000;
  const dailyDebitLimit = 5000;
  const monthlyCreditLimit = 150000;
  const monthlyDebitLimit = 150000;
  let userBalance = 0;
  return (accountDetails = {
    userFullName,
    accountNumber: 675445266598,
    IbanNumber: branchCode + "675445",
  });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
