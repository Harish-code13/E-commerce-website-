import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTraker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarsIcon from '@mui/icons-material/Stars';

const OrderDetails =() => {
    return (
        <div className="px-10 lg:px-20">
            <div> 
                <h1 className="font-bold text-xl py-7"> Delivery Details</h1>
               <AddressCard/> 
            </div>
            <div className="py-20">
                <OrderTracker activeStep={3}/>
            </div>
            <Grid className="space-y-5 " container>
                {[1,1,1,1].map((item)=><Grid item container className="shadow-xl rounded-md p-5 border" sx={{alignItems:"center",justifyContent:"space-between"}}>
                    <Grid item xs={6}>
                        <div className="flex items-center space-x-4">
                            <img className="w-[5rem] h-[5rem] object-cover object-top"
                             src="https://rukminim1.flixcart.com/image/612/612/kmns7m80/jean/9/5/o/36-black-36-coper-buck-original-imagfg9edbsneu2s.jpeg?q=70"/>
                             <div className="space-y-2 ml-5">
                                <p className="font-bold">Men jeans</p>
                                <p className="space-x-5 opacity-50 text-xs font-semibold"><span>color: black</span><span>Size:34</span> </p>
                                <p className="semi-bold">Seller: linaria</p>
                                <p>$699</p>
                             </div>
                        </div>

                    </Grid>

                    <Grid item>
                        <Box sx={{color:deepPurple[500]}}>
                            <StarsIcon sx={{fontSize:"2rem"}} className="px-2"/>
                            <span>Rate & Review Product</span>

                        </Box>
                    </Grid>

                </Grid>)}
                

            </Grid>
            
        </div>
    )
}

export default OrderDetails