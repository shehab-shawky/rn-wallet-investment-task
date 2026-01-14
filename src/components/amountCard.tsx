import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface CardAmountProps {
  name: string;
  amount: number;
}

const AmountCard = (props: CardAmountProps) => {
  const { name, amount } = props;

  const formatCurrency = (value: number) =>
    `${value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
    })} SAR`;

  return (
    <View style={styles.container}>
      <Text style={styles.font}> {name}</Text>
      <Text style={styles.font}> {formatCurrency(amount)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(14, 188, 204, 0.8)",
    borderRadius: 20,
    marginEnd: 10,
  },
  font: { color: "#cc360ecc", fontWeight: "bold", marginBottom: 10 },
});
export default AmountCard;
