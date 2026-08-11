import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
function createBankAccount(userFullName, branchInfo, depositAmount) {
  let branchName = branchInfo.branchName;
  let branchCode = branchInfo.branchCode;
  const dailyCreditLimit = 5000;
  const dailyDebitLimit = 5000;
  const monthlyCreditLimit = 150000;
  const monthlyDebitLimit = 150000;
  let userBalance = depositAmount;
  let creditedToday = 0;
  let debitedToday = 0;
  let TransactionRecords = [];
  function updateCredits(credits) {
    if (credits + creditedToday <= dailyCreditLimit) {
      userBalance += credits;
      creditedToday += credits;
      TransactionRecords.push({
        userBalance,
        actionType: " credit",
        time: new Date(),
      });
    }
  }
  function updateDebits(debits, targetUseraccount) {
    if (debits + debitedToday <= dailyDebitLimit) {
      userBalance -= debits;
      targetUseraccount += debits;
      debitedToday += debits;
      TransactionRecords.push({
        userBalance,
        actionType: "debit",
        time: new Date(),
      });
    }
  }
  function TransactionHistory() {
    return TransactionRecords;
  }
  return {
    userFullName,
    accountNumber: 675445266598,
    IbanNumber: branchCode + "675445",
    updateDebits,
    updateCredits,
    TransactionHistory
  };
}

  
createRoot(document.getElementById("root")).render(
  <StrictMode>
   <App></App>
  </StrictMode>,
);
