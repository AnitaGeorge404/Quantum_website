import { useState } from "react";
import Card from "./Card";
import Photo from "./Images/fakeImage.jpg";
import "./Gallery.css";

export default function ImageGallery() {

  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Photo Gallery</h2>

      <div className="gallery-row">
        <div className="gallery-track">
          <Card onClick={() => setOpen(true)} />
          <Card onClick={() => setOpen(true)} />
          <Card onClick={() => setOpen(true)} />
          <Card onClick={() => setOpen(true)} />
          <Card onClick={() => setOpen(true)} />
          <Card onClick={() => setOpen(true)} />
          <Card onClick={() => setOpen(true)} />
          <Card onClick={() => setOpen(true)} />
        </div>
      </div>

      {open && (
  <div className="popup" onClick={() => setOpen(false)}>
    <div
      className="popup-content"
      onClick={(e) => e.stopPropagation()}
    >
      <img src={Photo} className="popup-image" />
    </div>
  </div>
)}
    </div>
  );
}