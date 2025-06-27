import React, { useState } from "react";
function Mytabs({ emner }){
    return <h2> emner </h2>;
  }
function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await fetch("http://localhost:8000/upload/", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      alert("Uploaded: " + data.filename);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };
  

  return (
    
    <div style={{ padding: "20px" }}>
      <h1>Take a Photo</h1>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
      />
      {previewUrl && (
        <>
          <img
            src={previewUrl}
            alt="preview"
            style={{ width: "300px", marginTop: "10px" }}
          />
          <br />
          <button onClick={handleUpload}>Upload Photo</button>
        </>
      )}
    </div>
  );
}

export default App;