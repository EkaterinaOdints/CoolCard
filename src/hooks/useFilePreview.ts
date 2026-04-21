import { useState, useEffect, useCallback } from "react";

export default function useFilePreview() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const updateFilePreview = useCallback((nextFile: File | null) => {
    setPreviewUrl((prev) => {
      if (prev) {
        URL.revokeObjectURL(prev);
      }
      return nextFile ? URL.createObjectURL(nextFile) : null;
    });

    setFile(nextFile);
  }, []);

  return { file, setFile, previewUrl, setPreviewUrl, updateFilePreview };
}
