import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IModal, IEditModal } from "./types";
import { userAPI } from "../../services/user";

const initialState: IModal = {
  isEditModal: false,
  isPhotoModal: false,
  isNotifModal: false,
  isCreatePostModal: false,
  editModal: null,
  fotoModal: null,
  IsPostModal: false,
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showEditModal(state) {
      state.isEditModal = true;
    },
    hideEditModal(state) {
      state.isEditModal = false;
    },
    showNotifModal(state) {
      state.isNotifModal = true;
    },
    hideNotifModal(state) {
      state.isNotifModal = false;
    },
    showCreatePostModal(state) {
      state.isCreatePostModal = true;
    },
    hideCreatePostModal(state) {
      state.isCreatePostModal = false;
    },
    showPhotoModal(state) {
      state.isPhotoModal = true;
    },
    hidePhotoModal(state) {
      state.isPhotoModal = false;
    },
    updateprofile(state, payload: PayloadAction<IEditModal>) {
      if (state.editModal) {
        if (payload.payload.avatar)
          state.editModal.avatar = payload.payload.avatar;
        if (payload.payload.description)
          state.editModal.description = payload.payload.description;
        if (payload.payload.background)
          state.editModal.background = payload.payload.background;
        if (payload.payload.name) state.editModal.name = payload.payload.name;
      }
    },
    PhotoModal(state, payload: PayloadAction<boolean>) {
      state.IsPostModal = payload.payload;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      userAPI.endpoints.refresh.matchFulfilled,
      (state, payload) => {
        state.editModal = {
          avatar: payload.payload.avatar_url,
          background: payload.payload.back_url,
          description: payload.payload.description,
          name: payload.payload.name,
        };
      }
    );
  },
});

export const {
  hideCreatePostModal,
  hideEditModal,
  hideNotifModal,
  showCreatePostModal,
  showEditModal,
  showNotifModal,
  updateprofile,
  hidePhotoModal,
  showPhotoModal,
  PhotoModal,
} = ModalSlice.actions;
