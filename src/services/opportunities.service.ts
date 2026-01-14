import { OPPORTUNITIES_MOCK } from "../data/opportunities.mock";
import { Opportunity } from "../types/opportunity";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getOpportunities = async (): Promise<Opportunity[]> => {
  await delay(1000);
  return OPPORTUNITIES_MOCK;
};

export const getOpportunityById = async (
  id: string
): Promise<Opportunity | undefined> => {
  await delay(1000);
  return OPPORTUNITIES_MOCK.find((item) => item.id === id);
};
