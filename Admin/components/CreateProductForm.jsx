import { Description } from "@headlessui/react";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../State/Product/Action";


const initialSizes = [
    { name: "S", quantity: 0},
    { name: "M", quantity: 0},
    { name: "L", quantity: 0},
];


const CreateProductForm =()=>{

    const [productData, setProductData] =useState({
        imageUrl: "",
        brand: "",
        title: "",
        color: "",
        discountedPrice:"",
        price:"",
        discountPresent:"",
        size:initialSizes,
        quantity:"",
        topLavelCategory:"",
        secondLavelCategory:"",
        thirdLavelCategory:"",
        Description:""
    });

    const dispatch = useDispatch();
    const jwt= localStorage.getItem("jwt")

    const handleChange = (e) => {
        const {name, value}=e.target;
        setProductData((prevState)=> ({
           ...prevState,[name]: value  
        }));
    };

    const handleSizeChange = (e, index)=> {
        let {name, value}=e.target;
        name==="size_quantity"?name="quantity":name=e.target.name;

        const sizes =[...productData.size];
        sizes[index][name]=value;
        setProductData((prevState)=>({
            ...prevState,size:sizes,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct({data:productData,jwt}))
        console.log(productData);
    };


    return (
        <div className="p-10">
            <Typography
            variant="h3"
            sx={{textAlign:"center"}}
            className="py-10 text-center"
            >
                    Add New product
            </Typography>
            <form onSubmit={handleSubmit}
            className="createProductContainer min-h-screen">

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                        fullWidth
                        label="image URL"
                        name="imageUrl"
                        value={productData.imageUrl}
                        onChange={handleChange}/>

                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                        fullWidth
                        label="Band"
                        name="brand"
                        value={productData.brand}
                        onChange={handleChange}/>
                        
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                        fullWidth
                        label="Title"
                        name="title"
                        value={productData.title}
                        onChange={handleChange}/>
                        
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                        fullWidth
                        label="Color"
                        name="color"
                        value={productData.color}
                        onChange={handleChange}/>
                        
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                        fullWidth
                        label="Quantity"
                        name="quantity"
                        value={productData.quantity}
                        onChange={handleChange}/>
                        
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                        fullWidth
                        label="Price"
                        name="price"
                        value={productData.price}
                        onChange={handleChange}/>
                        
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                        fullWidth
                        label="Discount Price"
                        name="discount price"
                        value={productData.discountedPrice}
                        onChange={handleChange}/>
                        
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                        fullWidth
                        label="Discounted percentage"
                        name="discounted percentage"
                        value={productData.discountPresent}
                        onChange={handleChange}/>
                        
                    </Grid>

                    <Grid item xs={6} sm={4}>

                        <FormControl fullWidth>

                            <InputLabel> Top Level Category </InputLabel>

                            <Select
                            name="top Lavel Category"
                            value={productData.topLavelCategory}
                            onChange={handleChange}
                            label="Top Level Category">


                                <MenuItem value ="men"> Men</MenuItem>
                                <MenuItem value ="kids"> kids</MenuItem>
                                <MenuItem value ="women"> woMen</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={4}>

                        <FormControl fullWidth>

                            <InputLabel> second Level Category </InputLabel>

                            <Select
                            name="secont Lavel Category"
                            value={productData.secondLavelCategory}
                            onChange={handleChange}
                            label="second Level Category">


                                <MenuItem value ="clothing"> clothing</MenuItem>
                                <MenuItem value ="accessories"> accessories</MenuItem>
                                <MenuItem value ="brands"> brand</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={4}>

                        <FormControl fullWidth>

                            <InputLabel> Third Level Category </InputLabel>

                            <Select
                            name="top Lavel Category"
                            value={productData.thirdLavelCategory}
                            onChange={handleChange}
                            label="Third Level Category">


                                <MenuItem value ="Shirt"> shirt</MenuItem>
                                <MenuItem value ="t-shirt"> t-shirt </MenuItem>
                                <MenuItem value ="pant"> pant </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        label="Descrition"
                        multiline
                        name="descriptin"
                        rows={3}
                        onChange={handleChange}
                        value={productData.Description}/>
                    </Grid>

                    {productData.size.map((size, index) => (
                        <Grit container item spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                 label="size name"
                                 name="name"
                                 value={size.name}
                                 onChange={(event)=> handleSizeChange(event, index)}
                                 required
                                 fullWidth/>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                 label="Quantity"
                                 name="size quantity"
                                 type="number"
                                 onChange={(event)=> handleSizeChange(event, index)}
                                 required
                                 fullWidth/>
                            </Grid>
                        </Grit> 
                    ))}

                    <Grid item xs={12}>
                        <Button
                        variant="container"
                        sx={{p:1.8}}
                        className="py-20"
                        size="large"
                        type="submit">

                            Add New Product
                        </Button>
                    </Grid>
                     
                </Grid>
            </form>
        </div>
    )
}
export default CreateProductForm