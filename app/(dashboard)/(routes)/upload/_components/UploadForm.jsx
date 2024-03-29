import React, { useState } from "react";
import AlertMsg from "./AlertMsg";
import FilePreview from "./FilePreview";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);

  const onFileSelection = (fileInfo) => {
    if (file && file.size > 2000000) {
      console.log("File is greater then 2 MB");
      setError(true);
      return;
    }
    setFile(fileInfo);
    console.log(fileInfo);
  };

  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-blue-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-lg text-center md:text-2xl text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or{" "}
              <strong className="text-primary"> drag</strong> and{" "}
              <strong className="text-primary">drop</strong>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (Max Size : 2 MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) => onFileSelection(e.target.files[0])}
          />
        </label>
      </div>
      {file && (
        <FilePreview
          file={file}
          removeFile={() => {
            setFile(null);
          }}
        />
      )}
      <button
        disabled={!file}
        className="w-[30%] p-2 bg-primary text-white rounded-full disabled:bg-gray-400"
      >
        Upload
      </button>
      {error && <AlertMsg msg={"Max File Size is 2 MB"} />}
    </div>
  );
};

export default UploadForm;
