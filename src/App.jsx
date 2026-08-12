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
        targetUseraccount.balance += debits;
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
      IbanNumber: branchCode + accountNumber,
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
    branchCode: 567,
  };

  const cityBranch = {
    branchName: "City Branch",
    branchCode: 789,
  };

  const canttBranch = {
    branchName: "Cantt Branch",
    branchCode: 345,
  };
  const initialAccounts = [
    createBankAccount("Ali", mainBranch, 12000),
    createBankAccount("Ahmed", cityBranch, 20000),
    createBankAccount("Sara", canttBranch, 15000),
  ];

  const [accounts, setAccounts] = useState(initialAccounts);
  const [activeAccountNumber, setActiveAccountNumber] = useState(
    accounts[0].accountNumber,
  );

  const onDebit = (amount, targetAccountNumber) => {
    if (!amount || !targetAccountNumber) return;
    setAccounts((prev) => {
      const UpdatedAccounts = [...prev];
      const targetAccount = UpdatedAccounts.find(
        (acc) => acc.accountNumber == targetAccountNumber,
      );
      const senderAccount = UpdatedAccounts.find(
        (acc) => acc.accountNumber == activeAccountNumber,
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
        (acc) => acc.accountNumber == activeAccountNumber,
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
      ></QuickTransferCard>
      <AvailableBalance></AvailableBalance>
      <TransactionTable></TransactionTable>
    </>
  );
}
