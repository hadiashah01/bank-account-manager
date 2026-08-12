import Header from "./components/Header/Header";
import TransactionTable from "./components/TransactionTable/TransactionTable";
import QuickTransferCard from "./components/QuickTransferCard/QuickTransferCard";
import AccountsCard from "./components/AccountsCard/AccountsCard";
import AvailableBalance from "./components/AvailableBalance/AvailableBalance";
import { useState } from "react";

export default function App() {
  function createBankAccount(userFullName, branchInfo, depositAmount) {
    const accountNumber =
      Math.floor(Math.random() * 900000000000) + 100000000000;
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
        return userBalance;
      }
    }
    function updateDebits(debits, targetUseraccount) {
      if (debits + debitedToday <= dailyDebitLimit) {
        userBalance -= debits;
        targetUseraccount.updateCredits(debits);
        debitedToday += debits;
        TransactionRecords.push({
          userBalance,
          actionType: "debit",
          time: new Date(),
        });
        return userBalance;
      }
    }
    function TransactionHistory() {
      return TransactionRecords;
    }
    return {
      userFullName,
      accountNumber,
      IbanNumber: branchCode +" " + String(accountNumber).slice(1,5) +" " + String(accountNumber).slice(-4),
      get balance() {
        return userBalance;
      },
      updateDebits,
      updateCredits,
      TransactionHistory,
    };
  }
  const mainBranch = {
    branchName: "Main Branch",
    branchCode: "PB57",
  };

  const cityBranch = {
    branchName: "City Branch",
    branchCode: "GB79",
  };

  const canttBranch = {
    branchName: "Cantt Branch",
    branchCode: "US35",
  };

  const [accounts, setAccounts] = useState( [
    createBankAccount("Ali", mainBranch, 12000),
    createBankAccount("Ahmed", cityBranch, 20000),
    createBankAccount("Sara", canttBranch, 15000),
  ]);
  const [activeAccount, setActiveAccount] = useState(
    accounts[0],
  );

  const onDebit = (amount, targetAccountNumber) => {
    if (!amount || !targetAccountNumber) return;
    setAccounts((prev) => {
      const UpdatedAccounts = [...prev];
      const targetAccount = UpdatedAccounts.find(
        (acc) => acc.accountNumber == targetAccountNumber,
      );
      const senderAccount = UpdatedAccounts.find(
        (acc) => acc.accountNumber == activeAccount.accountNumber,
      );
      if (!senderAccount || !targetAccount) return UpdatedAccounts;
      senderAccount.updateDebits(Number(amount), targetAccount);
      return UpdatedAccounts;
    });
  };
  const onCredit = (amount) => {
    if (!amount) return;
    setAccounts((prev) => {
      const UpdatedAccounts = [...prev];
      const account = UpdatedAccounts.find(
        (acc) => acc.accountNumber == activeAccount.accountNumber,
      );
      if (!account) return UpdatedAccounts;
      account.updateCredits(Number(amount));
      return UpdatedAccounts;
    });
  };
  return (
    <>
      <Header></Header>
      <AccountsCard accounts={accounts}></AccountsCard>
      <QuickTransferCard
        onCredit={onCredit}
        onDebit={onDebit}
        accounts={accounts}
      ></QuickTransferCard>
      <AvailableBalance activeAccount={activeAccount}></AvailableBalance>
      <TransactionTable></TransactionTable>
    </>
  );
}
