import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
import BalanceSummary from "../components/BalanceSummary";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { Opportunity } from "../types/opportunity";
import { getOpportunities } from "../services/opportunities.service";
import { useDispatch } from "react-redux";
import { resetReducer } from "../store/walletSlice";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    getOpportunities()
      .then((data) => setOpportunities(data))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }: { item: Opportunity }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("OpportunityDetails", {
            opportunityId: item.id,
          })
        }
        style={{
          paddingVertical: 12,
          backgroundColor: "rgba(14, 188, 204, 0.8)",
          marginEnd: 20,
          borderRadius: 10,
          marginBottom: 20,
          padding: 10,
        }}
      >
        <Text>{item.name}</Text>
        <Text>
          {item.return}% • {item.duration} months • Min {item.min} SAR
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ paddingStart: 10 }}>
      <Button
        title="Go to Wallet"
        onPress={() => navigation.navigate("Wallet")}
      />

      <BalanceSummary />

      <Text style={{ fontWeight: "bold", marginVertical: 20 }}>
        Investment Opportunities
      </Text>

      <FlatList
        data={opportunities}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <TouchableOpacity
        onPress={() => dispatch(resetReducer())}
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 50,
          backgroundColor: "rgba(14, 188, 204, 0.8)",
          padding: 30,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            alignSelf: "center",
            color: "red",
          }}
        >
          Reset
        </Text>
      </TouchableOpacity>
    </View>
  );
}
