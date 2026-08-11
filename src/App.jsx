import Header from "./components/Header/Header";
import TransactionTable from "./components/TransactionTable/TransactionTable";
import QuickTransferCard from "./components/QuickTransferCard/QuickTransferCard";
import AccountsCard from "./components/AccountsCard/AccountsCard";
import AvailableBalance from "./components/AvailableBalance/AvailableBalance";
import { useState } from "react";

export default function App() {
  return (
    <>
      <Header></Header>
      <AccountsCard></AccountsCard>
      <QuickTransferCard></QuickTransferCard>
      <AvailableBalance></AvailableBalance>
      <TransactionTable></TransactionTable>
    </>
  );
}
