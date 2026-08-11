import Header from "./components/Header/Header";
import TransactionTable from "./components/TransactionTable/TransactionTable";
import QuickTransferCard from "./components/QuickTransferCard/QuickTransferCard";
import AccountsCard from "./components/AccountsCard/AccountsCard";
import AvailableBalance from "./components/AvailableBalance/AvailableBalance";
import { useState } from "react";

export default function App() {
  const [accounts, setAccounts] = useState([
    { id: 1234, type: "CHECKING", balance: 12450, holder: "John Doe" },
    {
      id: 5678,
      type: "SAVINGS",
      balance: 40120,
      holder: "John Doe",
    },
    {
      id: 9112,
      type: "CREDITS",
      balance: -12450,
      holder: "John Doe",
    },
  ]);
  const [activeAccountId, setActiveAccountId] = useState(1234);
  return (
    <>
      <Header></Header>
      <AccountsCard accounts={accounts}></AccountsCard>
      <QuickTransferCard></QuickTransferCard>
      <AvailableBalance></AvailableBalance>
      <TransactionTable></TransactionTable>
    </>
  );
}
