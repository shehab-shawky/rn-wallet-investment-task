import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WalletScreen from "../screens/WalletScreen";
import OpportunityDetailsScreen from "../screens/OpportunityDetailsScreen";

export type RootStackParamList = {
  Home: undefined;
  Wallet: undefined;
  OpportunityDetails: { opportunityId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="Wallet"
        component={WalletScreen}
        options={{ title: "My Wallet" }}
      />
      <Stack.Screen
        name="OpportunityDetails"
        component={OpportunityDetailsScreen}
        options={{ title: "Opportunity Details" }}
      />
    </Stack.Navigator>
  );
}
