export type filetype = "avatar_url" | "back_url";

export interface IUpload {
  file: File;
  type: filetype;
}
