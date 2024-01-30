export default function ImageHolder({ onAddImage, fileInputRef }) {
  return (
    <>
      <image>Image Here</image>
      <input
        type="file"
        accept="image/*"
        onChange={onAddImage}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
    </>
  );
}
