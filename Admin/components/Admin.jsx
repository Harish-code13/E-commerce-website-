import { useTheme } from "@emotion/react";
import React from "react";
import { use } from "react";
import { useState } from "react";
import { Box, CssBaseline, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import { InboxIcon } from "@heroicons/react/24/outline";
import { MailIcon } from "@heroicons/react/24/outline";
import EmailIcon from '@mui/icons-material/Email';
import InboxIcon from '@mui/icons-material/Inbox';
import DashbordIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateProductForm from "./CreateProductForm";
import ProductTable from "./ProductTable";
import OrderTable from "./OrderTable";
import CustomersTable from "./CustomersTable";
import AdminDashboard from "./Dashboard";



const menu = [
  { name: "Dashboard", link: "/admin",icon:<DashboardIcon/> },
  { name: "Users", link: "/admin/users",icon:<User/> },
  { name: "Settings", link: "/admin/settings",icon:<Setting/> },
  { name: "products", link: "/admin/products",icon:<Product/> },
  { name: "orders", link: "/admin/orders",icon:<Order/> },
  { name: "add product", link: "/admin/add-product" ,icon:<AddProduct/>},
  { name: "",path:"" }
];

const Admin = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate = useNavigate();

    const drawer=(
        <Box
        sx={{
            overflow:"auto",
            display:"flex",
            flexDirection:"column", 
            justifyContent:"space-between",
            height:"100%"
        }}
        >
            <>
            {/* {isLargeScreen && <Toolbar />}*/}

           <List>
             {menu.map((item, index) => (
               <ListItemButton key={item.name} disablePadding onClick={() => navigate(item.link)}>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                     <ListItemText>{item.name}</ListItemText>
                </ListItemButton>
             ))}
           </List>
            </>
          

           <List>

               <ListItemButton disablePadding>
                    <ListItemIcon>
                        <AccountCircleIcon/>
                    </ListItemIcon>
                   <ListItemText> Account</ListItemText>
                </ListItemButton>
           </List>  
           
        </Box>
    )



  return (
    <div>
        <div className="flex h-[100vh]">

            <CssBaseline/>
            <div className="w-[15%] border border-r-gray-300 h-fullfixed top-0">
                {drawer}
            </div>
                
            
            <div className="w-[85%] h-full ml-[15%]">
                <Routes>
                    <Route path="/" element={<AdminDashboard/>}></Route>
                    <Route path="product/create" element={<CreateProductForm/>}></Route>
                    <Route path="/products" element={<ProductTable/>}></Route>
                    <Route path="/Orders" element={<OrderTable/>}></Route>
                    <Route path="/customers" element={<CustomersTable/>}></Route>
                </Routes>
            </div>

        </div>
    </div>
  );
}
export default Admin;