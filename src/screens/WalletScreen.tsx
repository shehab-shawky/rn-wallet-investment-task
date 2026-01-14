import React from "react";
import { View, Text, FlatList } from "react-native";
import BalanceSummary from "../components/BalanceSummary";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Transaction } from "../store/walletSlice";

export default function WalletScreen() {
  const transactions = useSelector(
    (state: RootState) => state.wallet.transactions
  );

  const renderTransaction = ({ item }: { item: Transaction }) => {
    return (
      <View
        style={{
          paddingVertical: 8,
          borderBottomWidth: 1,
          borderColor: "#ccc",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{item.type}</Text>
        <Text>Amount: {item.amount} SAR</Text>
        <Text>Date: {item.date}</Text>
      </View>
    );
  };
  return (
    <View style={{ padding: 16 }}>
      <BalanceSummary />
      <Text style={{ fontWeight: "bold", marginVertical: 30, fontSize: 25 }}>
        Transactions
      </Text>

      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No transactions yet.</Text>}
      />
    </View>
  );
}
