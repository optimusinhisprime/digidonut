import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./store";

export const projectDetailsSlice = createSlice({
  name: "projectDetails",
  initialState: {
    servicesRequired: [""],
    budgetAmount: {},
  },
  reducers: {
    setServiceRequired: (state, action: PayloadAction<string>) => {
      state.servicesRequired.push(action.payload);
    },
    //     setBudgetAmount: (
    //       state,
    //       action: PayloadAction<{ key: string; value: string }>
    //     ) => {
    //       const { key, value } = action.payload;
    //       state.budgetAmount[key] = value;
    //     },
  },
});

export const { setServiceRequired } = projectDetailsSlice.actions;

export const selectServicesRequired = (state: initialState) =>
  state.projectDetails.servicesRequired;
