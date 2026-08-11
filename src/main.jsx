import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";
import TransactionTable from "./components/TransactionTable/TransactionTable";
import QuickTransferCard from "./components/QuickTransferCard/QuickTransferCard";
import AccountsCard from "./components/AccountsCard/AccountsCard";
import AvailableBalance from "./components/AvailableBalance/AvailableBalance";
function createBankAccount(userFullName, branchInfo, depositAmount) {
  let branchName = branchInfo.branchName;
  let branchCode = branchInfo.branchCode;
  const dailyCreditLimit = 5000;
  const dailyDebitLimit = 5000;
  const monthlyCreditLimit = 150000;
  const monthlyDebitLimit = 150000;
  let userBalance = 0;
  let creditedToday = 0;
  let debitedToday = 0;
  let TransactionRecords = [];
  function updateCredits(credits) {
    if (credits + creditedToday <= dailyCreditLimit) {
      userBalance += credits;
      creditedToday += credits;
      TransactionRecords.push({
        userBalance,
        actionType: credit,
        time: new Date(),
      });
    }
  }
  function updateDebits(debits, targetUseraccount) {
    if (debits + debitedToday <= dailydebitLimit) {
      userBalance -= debits;
      targetUseraccount += debits;
      debitedToday += debits;
      TransactionRecords.push({
        userBalance,
        actionType: debit,
        time: new Date(),
      });
    }
  }
  function TransactionHistory() {
    return TransactionRecords;
  }
  return (accountDetails = {
    userFullName,
    accountNumber: 675445266598,
    IbanNumber: branchCode + "675445",
  });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header></Header>
    <AccountsCard></AccountsCard>
    <QuickTransferCard></QuickTransferCard>
    <AvailableBalance></AvailableBalance>
    <TransactionTable></TransactionTable>
  </StrictMode>,
);
