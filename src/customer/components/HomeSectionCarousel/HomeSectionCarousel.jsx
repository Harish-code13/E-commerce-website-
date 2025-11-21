import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCart from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const HomeSectionCarousel = () => {
    const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
};

const items=[1,1,1,1,1].map((item)=><HomeSectionCart/>)
    return (
        <div className="px-4 lg:px-8 border border-black">
        <div className="relative p-5">
          <AliceCarousel
                items={items}
                disableButtonsControls
                infinite
                responsive={responsive}
            />

<Button
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
  <KeyboardArrowRightIcon sx={{ color: "black",transform:"rotate(-90deg)"}} />
</Button>

     <Button
  variant="contained"
  className="z-50 bg-white"
  sx={{
    position: "absolute",
    top: "8rem",
    left: "0rem",
    transform: "translateX(-50%) rotate(-90deg)",
    bgcolor: "white",
  }}
  aria-label="next"
>
  <KeyboardArrowRightIcon sx={{ color: "black",transform:"rotate(-90deg)"}} />
</Button>       
            
        </div>
        </div>
    )
}
export default HomeSectionCarousel;