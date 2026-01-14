import React, { useEffect, useState } from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import { invest } from "../store/walletSlice";
import { getOpportunityById } from "../services/opportunities.service";
import { Opportunity } from "../types/opportunity";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
type Props = NativeStackScreenProps<RootStackParamList, "OpportunityDetails">;

export default function OpportunityDetailsScreen({ route }: Props) {
  const error = useSelector((state: RootState) => state?.wallet?.error);
  const { opportunityId } = route?.params;
  const [opportunity, setOpportunity] = useState<Opportunity | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getOpportunityById(opportunityId).then((result) => {
      if (result) {
        setOpportunity(result);
      }
    });
  }, [opportunityId]);

  if (!opportunity) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={{ padding: 16 }}>
      {error ? (
        <Text
          style={{
            color: "red",
            marginBottom: 12,
            fontWeight: "bold",
            alignSelf: "center",
            fontSize: 20,
          }}
        >
          {error}
        </Text>
      ) : (
        <>
          <Text>{opportunity.name}</Text>
          <Text>Expected return: {opportunity.return}%</Text>
          <Text>Duration: {opportunity.duration} months</Text>
          <Text>Minimum: {opportunity.min} SAR</Text>

          <Button
            title={`Invest ${opportunity.min} SAR`}
            onPress={async () => {
              dispatch(invest(opportunity.min));
            }}
          />
        </>
      )}
    </View>
  );
}
