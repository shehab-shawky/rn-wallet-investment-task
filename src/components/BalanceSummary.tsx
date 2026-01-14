import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import AmountCard from "./amountCard";

const formatCurrency = (value: number) =>
  `${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
  })} SAR`;

export default function BalanceSummary() {
  const { available, invested } = useSelector(
    (state: RootState) => state.wallet
  );

  const total = available + invested;

  return (
    <View style={styles.container}>
      <AmountCard name={"available"} amount={available} />
      <AmountCard name={"Invested"} amount={invested} />
      <AmountCard name={"Total"} amount={total} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "#2b2b2a",
    borderRadius: 8,
    alignSelf: "center",
    marginVertical: 30,
  },
});
