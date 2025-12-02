import React from 'react';
import { Grid } from '@mui/material';
import AddressCard from '../AddressCard/AddressCard';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const DeliveryAddressForm = () => {

    const handlesubmit=(e)=> {
        e.preventDefault();
        console.log("address")
        const data = new FormData(e.currentTarget);
        const address= {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            address: data.get('address'),
            city: data.get('city'),
            zip: data.get('zip'),
            state: data.get('state'),
            phoneNumber: data.get('phoneNumber'),
        }
        console.log("address",address)
    }
    return (
        <div>
            <Grid container spacing={4} alignItems="flex-start">

                <Grid item xs={12} lg={5} className="border rounded-r-md shadow-md h-[30.5rem] overflow-y-scroll">

                    <div className="p-5 py-7 border-b cursor-pointer">
                        <AddressCard />
                        <Button sx={{ mt: 2, bgcolor: "blue" }} size="large" variant="contained" color="primary">
                            Add New Address
                        </Button>
                    </div>

                </Grid>

                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-l-md shadow-md p-5">
                        <form onSubmit={handlesubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                            

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First Name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Last Name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>

                                <Grid item xs={12} className="col-span-2">
                                    <TextField
                                        required
                                        id="address"
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        autoComplete="shipping address-line1"
                                        multiline
                                        rows={4}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="City"
                                        fullWidth
                                        autoComplete="shipping address-level2"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="zip"
                                        name="zip"
                                        label="Zip / Postal code"
                                        fullWidth
                                        autoComplete="shipping postal-code"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="state"
                                        name="state"
                                        label="State/Province/Region"
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        label="Phone Number"
                                        fullWidth
                                        autoComplete="tel-national"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Button type="submit" sx={{ mt: 2, bgcolor: "blue" }} size="large" variant="contained" color="primary">
                                        Submit
                                    </Button>
                                </Grid>

                        

                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div >
    );
}

export default DeliveryAddressForm;