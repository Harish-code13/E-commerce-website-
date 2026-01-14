import React, { useEffect } from "react";
import { TableCell, TableBody, TableHead, TableRow, Table, TableContainer, Avatar, Button, CardHeader } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const ProductTable = () => {
  const dispatch =useDispatch();
  const {products}=useSelector(store=>store);

  console.log("product ----",products)

  const handleProductDelete=(productId)=>{
    dispatch(deleteProduct(productId))
  }

    useEffect(()=>{
            const data={
              category:"",
              color: [],
              size: [],
              minPrice:0,
              maxPrice: 110000,
              discount: 0,
              sortBy: "price_low",
              pageNumber:1,
              pageSize: 1,
              Stock: ""
            }
            dispatch(findProducts(data));
        
    },[products.deleteProduct])

    return (
        <div className="p-5 text-white">
            <Card className="mt-2">
                <CardHeader title="All Product"/>

                <TableContainer sx={{bgcolor:'#242b2E',}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="left">title</TableCell>
            <TableCell align="left">category</TableCell>
            <TableCell align="left">price</TableCell>
            <TableCell align="left">quantity</TableCell>
            <TableCell align="left">delete</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {products?.products?.content?.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="left">
                    <Avatar src={item.imageUrl}></Avatar>
                </TableCell>

              <TableCell align="left" scope="row">
                {item.title}
              </TableCell>
              
              <TableCell align="left">{item.category.name}</TableCell>
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">{item.quantity}</TableCell>
              <TableCell align="left">
                <Button onClick={()=>handleProductDelete(item.id)} variant="outline">Delete</Button>
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
export default ProductTable