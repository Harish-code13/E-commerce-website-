import React from "react";
import MainCarousel from "../../HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../../Data/mens_kurta";
import { mens_shirts } from "../../../../Data/mens_shirts";
import { mens_jeans } from "../../../../Data/mens_jeans";
const HomePage = () => {
    return (
        <div>
            <MainCarousel/>
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <HomeSectionCarousel sectionName="Men's Kurtas" Data={mens_kurta}/>
                <HomeSectionCarousel sectionName="Men's Jeans" Data={mens_jeans}/>
                <HomeSectionCarousel sectionName="Men's Shirts" Data={mens_shirts}/> 
            </div>

        </div>
    )
}
export default HomePage;