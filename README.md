# RN Wallet Investment Task

A simple React Native (Expo) application demonstrating wallet balance,
investment opportunities, and basic state management using Redux Toolkit.

## Tech Stack

- React Native (Expo)
- TypeScript
- Redux Toolkit
- React Navigation
- Yarn

## Features

- Wallet balance summary (available & invested)
- List of investment opportunities (mocked data)
- Opportunity details screen
- Invest flow with validation (insufficient balance handling)
- Transaction history (deposits & investments)

## Project Structure

src/
├─ components/
├─ screens/
├─ navigation/
├─ store/
├─ services/
└─ types/

## Notes

Investment opportunities are mocked and loaded via a simulated service.
Redux is used only for wallet state (not for static opportunity data).
Error handling is managed via Redux state (no thrown errors in reducers).

## Possible Improvements

API integration
Unit tests
Pagination for opportunities
Better UI/UX polish
