import { configureStore } from "@reduxjs/toolkit";
import { projectDetailsSlice } from "./projectDetailsSlice";

type BudgetAmount = {
  [key: string]: string;
};

export interface initialState {
  projectDetails: {
    servicesRequired: string[];
    budgetAmount: BudgetAmount;
  };
}

export default configureStore({
  reducer: {
    projectDetails: projectDetailsSlice.reducer,
  },
});
