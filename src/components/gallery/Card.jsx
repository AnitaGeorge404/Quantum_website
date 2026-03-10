import Photo from "./Images/fakeImage.jpg";
import "./Gallery.css";

function Card({ onClick }) {
  return (
    <div className="Card" onClick={onClick}>
      <img src={Photo} alt="Image" className="Image" />
      <h2 className="Title">Photo</h2>
      <p className="Content">
        This is the content explaining<br/> the photo in 2 lines.
      </p>
    </div>
  );
}

export default Card;