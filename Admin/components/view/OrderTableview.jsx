import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, deliveredOrder, getOrders, shipOrders } from "../../State/Admin/Order/Action";
import { TableCell, TableRow, TableBody, TableHead, CardHeader, TableContainer, Card, Button, Avatar, AvatarGroup } from "@mui/material";
import { Menu, MenuItem } from "@headlessui/react";

const OrderTableview = () => {

    const [anchorEl, setAnchorEl] = React.useState  ([]);
    const open = Boolean(anchorEl);

    const handleClick = (event,index) => {
        const newAnchorElArray=[...anchorEl];
        newAnchorElArray[index]=event.currentTarget
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (index) => {
        const newAnchorElArray=[...anchorEl];
        newAnchorElArray[index]=null
        setAnchorEl(null);
    };

    const dispatch = useDispatch();

    const { adminOrder } = useSelector(store => store)

    useEffect(() => {
        dispatch(getOrders())
    }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deleteOrder])

    console.log("admin order", adminOrder);

    const handleShipedOrder = () => {
        dispatch(shipOrders(orderId))
        console.log("handle shipped order", orderId)
        handleClose()
    }

    const handleConfirmedOrder = () => {
        dispatch(confirmOrder(orderId))
        console.log("handle confirm order", orderId)
        handleClose()
    }

    const handleDeliveredOrder = () => {
        dispatch(deliveredOrder(orderId))
        console.log("handle delivered order", orderId)
        handleClose()
    }

    const handleDeletedOrder = () => {
        dispatch(deleteOrder(orderId))
        console.log("handle deleted order", orderId)
        handleClose()
    }

    return (
        <div>
            <Card className="mt-2">
                <CardHeader title="recent Orders" />

                <TableContainer sx={{ bgcolor: '#242b2E', }} component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell align="left">title</TableCell>
                                <TableCell align="left">id</TableCell>
                                <TableCell align="left">price</TableCell>
                                <TableCell align="left">status</TableCell>
                                


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {adminOrder?.Orders?.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">
                                        <AvatarGroup>{item.orderItems.map((OrderItem) =>
                                            <p> {OrderItem.products.title}</p>)}</AvatarGroup>

                                    </TableCell>

                                    <TableCell align="left" scope="row">
                                        {item.title}
                                    </TableCell>

                                    <TableCell align="left">{item.id}</TableCell>
                                    <TableCell align="left">{item.totalprice}</TableCell>
                                    <TableCell align="left"> <span className={`text-white px-5 py-2 rounded-full
                                        ${item.orderStatus === "CONFIRMED" ? "bg-[green]" :
                                            item.orderStatus === "SHIPPED" ? "bg-[blue]" :
                                                item.orderStatus === "PLACED" ? "bg-[green]" :
                                                    item.orderStatus === "PENDING" ? "bg-[black]" :
                                                        "bg-[red]"}`}> {item.orderStatus}</span>
                                    </TableCell>

                                  

                                    
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </div>
    )
}
export default OrderTableview