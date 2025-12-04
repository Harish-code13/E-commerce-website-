import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";
const ProductreviewCard = () => {
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className="text-white" sx={{ width: 56, height: 56, bgcolor: "purple" }}>R</Avatar>
                    </Box>
                </Grid>
                <Grid item xs={10}>
                    <div className="space-y-2">
                        <div>
                            <p  className="font-semibold text-lg" >ram</p>
                            <p className="opacity-70">march 3, 2024</p>
                        </div>
                    </div>
                    <Rating value={4.5} name="half-rating" readOnly precision={.5} />
                    <p>This product is really good and meets my expectations.</p>
                </Grid>
            </Grid>
        </div>
    );
}

export default ProductreviewCard;