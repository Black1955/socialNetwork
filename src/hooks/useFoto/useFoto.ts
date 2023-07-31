import { useEffect, useState } from "react";

export const useFoto = (file: File | string | undefined) => {
  const [foto, setFoto] = useState<string | ArrayBuffer | null | undefined>();
  const reader = new FileReader();
  useEffect(() => {
    if (file && file instanceof File) {
      reader.onload = event => {
        setFoto(event.target?.result);
      };
    } else if (file) {
      setFoto(file);
    }
  }, [file]);
  if (file && file instanceof File) {
    reader.readAsDataURL(file);
  }
  return [foto];
};
