import React from "react";
import SettingCellIcon from '@mui/icons-material/SettingsCell'
import {AccountCircle, Height, TrendingUp} from '@mui/icons-material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import MoreVertIcon from '@mui/icons-materialMoreVert'
import { CardHeader, Grid, IconButton, Typography, Avatar, Box} from "@mui/material";


const salesData =[
    {
        stats:'245k',
        title:"sales",
        color:"#2B33E2",
        icon:<TrendingUp sx={{fontSize:"1.75rem"}}/>
    },

    {
        stats:'12.45k',
        title:"Customers",
        color:"#22CB5C",
        icon:<AccountCircle sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats:'2.45k',
        title:"Products",
        color:"#DE4839",
        icon:<SettingCellIcon sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats:'24.5k',
        title:"Revenue",
        color:"#12B0E8",
        icon:<AttachMoneyIcon sx={{fontSize:"1.75rem"}}/>
    }
]

const renderStats = () =>{
    return salesData.map((item,index)=>(
        <Grid item sx={12} sm={3} key={index}>
            <Box sx={{
                display:"flex",alignItems:"center"
            }}>
                <Avatar variant='rounded' sx={{
                    mr:3,
                    widht:44,
                    Height:44,
                    boxShadow:3,
                    color:"common.white",
                    background:`${item.color}`
                }}> 
                {item.icon}
                    </Avatar>

                    <Box sx={{display:'flex',flexDirection:'column'}}>

                        <Typography variant="caption">{item.title}</Typography>
                        <Typography variant="h6">{item.status}</Typography>
                    </Box>

            </Box>

        </Grid>
    ))
}


const MonthlyOverView =()=>{
    return (
<Card sx={{bgcolor:"#242B2E",color:"whiten"}}>
    <CardHeader title="MOnthly Overview"
    action={
        <IconButton size="small">
            <MoreVertIcon/>
        </IconButton>
    }
    subheader={
        <Typography variant="body2">

            <Box component="span" sx={{fontWeight:600, mx:2}}>

                Total 48.55% groth

            </Box>
            this month
        </Typography>
    }
    titleTypographyProps={{
        sx:{
            mb:2.5,
            lineHeight:'2rem !important',
            letterSpacing:'.15px !important'
        }
    }}
    />
    <CartContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
        <Grid container spacing={[5,0]}>
            {renderStats()}

        </Grid>
    </CartContent>
</Card>
    )
}

export default MonthlyOverView