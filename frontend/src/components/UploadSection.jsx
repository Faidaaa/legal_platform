import React, { useState } from "react";
import "../styles/UploadSection.css";

function UploadSection() {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    const allowedTypes = [
      "application/pdf",
      "image/png",
      "image/jpeg"
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      alert("Please upload a PDF, PNG, or JPG file.");
      return;
    }

    setFile(selectedFile);
  };

  const handleFileChange = (event) => {
    handleFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const droppedFile = event.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <section className="upload-section" id="upload">

      <div className="upload-container">

        {/* Heading */}
        <div className="upload-heading">
          <h2>Upload Your Legal Document</h2>

          <p>
            Upload a legal document and let our platform
            make it easier to understand.
          </p>
        </div>

        {/* Upload area */}
        <div
          className={`upload-box ${isDragging ? "dragging" : ""}`}
          onDragOver={(event) => {
            event.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
        >

          {!file ? (
            <>
              <div className="upload-icon">
                ↑
              </div>

              <h3>Drop your document here</h3>

              <p>
                or choose a file from your device
              </p>

              <label className="browse-button">
                Browse Files

                <input
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg"
                  onChange={handleFileChange}
                />
              </label>

              <span className="upload-info">
                Supported formats: PDF, PNG, JPG, JPEG
              </span>
            </>
          ) : (
            <div className="selected-file">

              <div className="file-icon">
                📄
              </div>

              <div className="file-details">
                <h3>{file.name}</h3>

                <p>
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>

              <button
                className="remove-file"
                onClick={removeFile}
              >
                Remove
              </button>

            </div>
          )}

        </div>

        {/* Continue button */}
        {file && (
          <div className="upload-action">
            <button className="process-button">
              Continue
              <span>→</span>
            </button>
          </div>
        )}

      </div>

    </section>
  );
}

export default UploadSection;