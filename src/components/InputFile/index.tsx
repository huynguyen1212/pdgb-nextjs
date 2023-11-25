import React, { Dispatch, SetStateAction, useRef } from "react";

interface Props {
  onImageSelected: any;
  setImage: Dispatch<SetStateAction<string>>;
}

const FileInput = ({ onImageSelected, setImage }: Props) => {
  const inputRef: any = useRef();

  const handleOnChange = (event: any) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function (e) {
        onImageSelected(reader.result);
      };
    }
  };

  const onChooseImg = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleOnChange}
        style={{ display: "none" }}
      />

      <button className="btn" onClick={onChooseImg}>
        Choose Image
      </button>
    </div>
  );
};

export default FileInput;
