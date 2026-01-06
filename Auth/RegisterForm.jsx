import React from "react";
import { Button, TextField, Grid } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const RegisterForm = () => {

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const userData ={
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
        };
        console.log("userData", userData);
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-semibold mb-4">Create an account</h2>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last Name"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                autoComplete="email"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                fullWidth
                                autoComplete="new-password"
                                variant="standard"
                            />
                        </Grid>
                        <br/>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </form>

                <div className="mt-4 text-center">
                    <p>
                        Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;