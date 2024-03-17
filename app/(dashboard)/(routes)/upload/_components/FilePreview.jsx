import { ScanEye, X } from "lucide-react";
import React from "react";

const FilePreview = ({ file, removeFile }) => {
  return (
    <div className="flex items-center gap-2 justify-between mt-5 border rounded-md p-2 border-blue-400">
      <div className="flex gap-2 items-center p-2">
        <ScanEye width={50} height={50} alt="file" />
        <div className="text-left">
          <h1>{file.name}</h1>
          <h3 className="text-sm text-gray-400">
            {file.type} / {(file.size / 1024 / 1024).toFixed(2)} MB
          </h3>
        </div>
      </div>
      <X className="text-red-500 cursor-pointer" onClick={() => removeFile()} />
    </div>
  );
};

export default FilePreview;
