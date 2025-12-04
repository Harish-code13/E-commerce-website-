import React from 'react';
import { Grid } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate=useNavigate();

    return (
        <div className='p-5 shadow-md hover-2xl border'>
            <Grid onClick={()=>navigate(`account/order/${5}`)} container spacing={2} sx={{justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w-[10rem] h-[10rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/t/j/u/s-pink-kurta-lilen-spoque-original-imagnfkwk5gpfmzx.jpeg?q=70"/>
                        <div className='ml-10 space-y-2'>
                            <p className=''>men slim shite</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: m</p>
                            <p className='opacity-50 text-xs font-semibold'>color: black</p>

                        </div>
                    </div>

                </Grid>
                <Grid item xs={2}>
                    <p>$499</p>

                </Grid>
                <Grid item xs={4}>
                    {true && <div><p>
                        <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                        <span>
                            Delivered on march 03
                        </span>
                    </p>
                    <p className='text-xs'>
                        your Item Has been Delivered
                    </p>
                    </div>} 

                   {false && <p>
                        <span>
                            Expected Delivery on march 03
                        </span>
                    </p>}

                </Grid>
                 
            </Grid>
        </div>
    );
}    

export default OrderCard;