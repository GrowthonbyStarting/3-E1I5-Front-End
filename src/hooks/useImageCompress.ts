/* eslint-disable no-console */
import { useState } from 'react';
import imageCompression from 'browser-image-compression';

export default function useImageCompress() {
  const [isLoading, setIsLoading] = useState(false);

  const compressImage = async (imageFile: File) => {
    if (isLoading) return;

    setIsLoading(true);

    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 1920,
    };

    try {
      const compressedFile = await imageCompression(imageFile, options);

      setIsLoading(false);

      return compressedFile;
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return { compressImage, isLoading };
}