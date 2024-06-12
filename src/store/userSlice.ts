import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  name: string;
}

interface UserState {
  loading: boolean;
  message: string | null;
  error: boolean;
  data: User | null;
}

const initialState: UserState = {
  loading: false,
  message: null,
  error: false,
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeValue(state, action: PayloadAction<{ value: any }>) {
      state.data = action.payload.value;
    },
    submitForm(state) {
      state.loading = true;
      state.message = null;
    },
    updateSuccess(
      state,
      action: PayloadAction<{ maessage: string; data: User }>
    ) {
      state.loading = false;
      state.error = false;
      state.message = action.payload.maessage;
      state.data = action.payload.data;
    },
    updateFailue(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = true;
      state.message = action.payload;
    },
  },
});

export const { submitForm, updateSuccess, updateFailue, changeValue } =
  userSlice.actions;
export default userSlice.reducer;
