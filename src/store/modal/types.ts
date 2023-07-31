export interface IEditModal {
  description?: string;
  name?: string;
  avatar?: File | string;
  background?: File | string;
}
interface FotoModal {
  foto: File;
}

export interface IModal {
  isEditModal: boolean;
  isNotifModal: boolean;
  isCreatePostModal: boolean;
  editModal: IEditModal | null;
  fotoModal: FotoModal | null;
  isPhotoModal: boolean;
  IsPostModal: boolean;
}
