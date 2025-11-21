import React from "react";

const HomeSectionCard = () => {
    return (
        <div className="cursor-pointer flex flex-col item-center bg-white
         rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
            <div className="h-[13rem] w-[10rem]">
                <img className="object-cover object-top w-full h-full" src="https://louisphilippe.abfrl.in/blog/wp-content/uploads/2022/10/blog15.jpg"/>
            </div>
            <div className="p-4">
                <h3 className="text-lg font font-medium text-gray-900">Nofiler</h3>
                <p className="mt-2 text-sm text-gray-500">Men solid pure cotton straight kurta</p>
            </div>
            
        </div>
    )
}
export default HomeSectionCard;