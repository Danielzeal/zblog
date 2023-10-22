"use client";

import app from "@/libs/firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type Prop = {
  setImage: Dispatch<SetStateAction<string>>;
  image: string;
};

const storage = getStorage(app);

const AddImage = ({ setImage, image }: Prop) => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number | null>(null);

  useEffect(() => {
    if (file) {
      const upload = async () => {
        const fileName = new Date().getTime() + file.name;

        const storageRef = ref(storage, fileName);

        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            console.log("testing", error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImage(downloadURL);
            });
          }
        );
      };

      upload();
    }
  }, [file, setImage]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files as FileList;
    setFile(selectedImage[0]);
  };

  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor='img' className='flex gap-1 flex-col'>
        Image: <br />
        <div className='w-full h-[200px] border rounded-md'>
          <input
            type='file'
            name='img'
            id='img'
            onChange={handleChange}
            className='w-0 h-0'
          />
        </div>
      </label>
      {progress === 100 && <span>Image uploaded successfully</span>}
    </div>
  );
};

export default AddImage;
