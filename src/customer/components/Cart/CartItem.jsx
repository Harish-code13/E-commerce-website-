import { Icon, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const CartItem = () => {
    return (
        <div className="p-5 shadow-lg boarder rounded-md">
            <div className="flex items-center">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img className="w-full h-full object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/t/j/u/s-pink-kurta-lilen-spoque-original-imagnfkwk5gpfmzx.jpeg?q=70" />

                </div>
                <div className="ml-5 space-y-1">
                    <p className="font-semibold"> Men Printed Pure Silk Straight Kurta</p>
                    <p className="opacity-70">Size: M, pink </p>
                    <p className="opacity-70 mt-2">Seller: SG LEMAN</p>
                    <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                        <p className='font-semibold'>$499 </p>
                        <p className='opacity-50 line-through'>$999</p>
                        <p className='text-green-600 font-semibold'>5% off</p>
                    </div>

                </div>
                

            </div>
            <div className="lg:flex items-center lg:space-x-10 pt-4">
                    <div className="flex items-center space-x-2">
                        <IconButton sx={{color:"blue"}}>
                            <RemoveCircleOutlineIcon />
                        </IconButton>

                        <span className="py-1 px-7 border rounded-sm">1</span>
                            <IconButton sx={{color:"blue"}}>
                                <AddCircleOutlineIcon />
                            </IconButton>

                        
                    </div>
                    <button className="text-blue-600 mt-4 lg:mt-0">Remove</button>
                </div>

        </div>
    );
}

export default CartItem;