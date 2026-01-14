import React from "react";
import styled from "@emotion/styled";
import { Button, CardContent, Typography } from "@mui/material";

const TrignleImg = styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
})
const TrophyImg=styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:"absolute"
})

const Achivement = () => {
    return (
        <Card className="" sx={{position:"relative", bgcolor:"#242B2E", color:"white"}}>
            <CardContent>
                <Typography variant="h6" sx={{letterSpacing:".25px"}}>
                    The King
                </Typography>
                <Typography variant="body2">Congratulations </Typography>
                <Typography variant="h5">599.8k</Typography>

                <Button size="small" variant="contained"> view Sales </Button>

                <TrignleImg src=""></TrignleImg>
                <TrignleImg src=""></TrignleImg>
            </CardContent>
        </Card>
    )
}
export default Achivement