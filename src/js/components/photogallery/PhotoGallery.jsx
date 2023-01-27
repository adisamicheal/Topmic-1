import React from "react";
import images from "./photogalleryData";
import Hero from "../hero/HeroImage";

function showImages() {
  return images.map((item) => (
    <div key={item.key} className="imageContainer">
      <div className="img" style={{ backgroundImage: `url('${item.path}')` }} />
      <div className="photoCaption">
        <p>Photo Caption. {item.caption}</p>
      </div>
    </div>
  ));
}

const Gallery = () => (
  <div>
    <Hero style={"photogallery-img"} />
    <div id="photogallery">
      <div>
        <h2 className="photogalleryH2">Topmic Photo Gallery</h2>
        <div className="yellowBox" />
        <p className="photogalleryP">
          Explore our vibrant photo gallery and see the smiling faces of our
          students as they learn, play, and grow at [school name]. From
          classroom activities to field trips and special events, you will see the
          joy and engagement that fills our school every day.
        </p>
      </div>
      <div className="showImages">{showImages()}</div>
    </div>
  </div>
);

export default Gallery;
