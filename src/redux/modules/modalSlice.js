import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogInModalOpen: false,
  isSignUpModalOpen: false,
  isAlertModalOpen: false,
  isProfileModalOpen: false,
  isPasswordModalOpen: false,
  isConfirmModalOpen: false,
  alertMessage: ''
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    toggleLogInModal: (state) => {
      state.isLogInModalOpen = !state.isLogInModalOpen;
    },
    toggleSignUpModal: (state) => {
      state.isSignUpModalOpen = !state.isSignUpModalOpen;
    },
    toggleAlertModal: (state) => {
      state.isAlertModalOpen = !state.isAlertModalOpen;
    },
    toggleProfileModal: (state) => {
      state.isProfileModalOpen = !state.isProfileModalOpen;
    },
    togglePasswordModal: (state) => {
      state.isPasswordModalOpen = !state.isPasswordModalOpen;
    },
    toggleConfirmModal: (state) => {
      state.isConfirmModalOpen = !state.isConfirmModalOpen;
    },
    setAlertMessage: (state, action) => {
      state.alertMessage = action.payload;
    },
    clearAlertMessage: (state) => {
      state.alertMessage = '';
    }
  }
});

export const {
  toggleLogInModal,
  toggleSignUpModal,
  toggleAlertModal,
  toggleProfileModal,
  togglePasswordModal,
  toggleConfirmModal,
  setAlertMessage,
  clearAlertMessage
} = modalsSlice.actions;

export default modalsSlice.reducer;
