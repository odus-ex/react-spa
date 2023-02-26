import React from "react";
import ReactImageGallery from "react-image-gallery";

import "./gallery.scss";

function Gallery() {
  const images = [
    {
      original: "https://placedog.net/500",
      thumbnail: "https://placedog.net/500",
    },
    {
      original: "https://placedog.net/600",
      thumbnail: "https://placedog.net/600",
    },
    {
      original: "https://placedog.net/700",
      thumbnail: "https://placedog.net/700",
    },
  ];

  return <ReactImageGallery items={images} />;
}

export default Gallery;
