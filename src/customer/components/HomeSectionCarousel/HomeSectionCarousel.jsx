import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from "@mui/material/Button";
import { mens_kurta } from "../../../Data/mens_kurta";

const HomeSectionCarousel = ({ sectionName = "", Data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  // make `data` safe when Data prop is not provided
  const data = Array.isArray(Data) && Data.length ? Data : mens_kurta;

  const items = data.slice(0, 10).map((item, idx) => (
    <HomeSectionCard key={item.id || idx} product={item} />
  ));

  const carouselRef = useRef(null);

  const slideprev = () => {
    setActiveIndex((i) => {
      const next = Math.max(0, i - 1);
      if (carouselRef.current && typeof carouselRef.current.slideTo === "function") {
        try { carouselRef.current.slideTo(next); } catch (e) { /* ignore */ }
      }
      console.log("slidePrev ->", next);
      return next;
    });
  };

  const slideNext = () => {
    setActiveIndex((i) => {
      const next = Math.min(items.length - 1, i + 1);
      if (carouselRef.current && typeof carouselRef.current.slideTo === "function") {
        try { carouselRef.current.slideTo(next); } catch (e) { /* ignore */ }
      }
      console.log("slideNext ->", next);
      return next;
    });
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {activeIndex > 0 && (
          <Button
            onClick={slideprev}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon sx={{ color: "black", transform: "rotate(90deg)" }} />
          </Button>
        )}

        {activeIndex < items.length - 1 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowRightIcon sx={{ color: "black", transform: "rotate(-90deg)" }} />
          </Button>
        )}

      </div>
    </div>
  )
}
export default HomeSectionCarousel;