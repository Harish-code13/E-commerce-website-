import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
const Footer = () => {
    return (
        <div>
            <Grid className="bg-black text-white text-center mt-10"
                container
                sx={{ bgcolor: "black", color: "white", p: 3 }} >

                <Grid item px={13}>
                    <Typography className="pb-5" variant="h6">Company</Typography>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>About Us</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Careers</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Blog</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Contact Us</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>jobs</Button>
                    </div>
                </Grid>

                <Grid item px={12}>
                    <Typography className="pb-5" variant="h6">Solutions</Typography>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Markets</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Analytics</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Commerce</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Insights</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>Support</Button>
                    </div>
                </Grid>

                <Grid item px={12}>
                    <Typography className="pb-5" variant="h6">Documentation</Typography>
                    <div>
                        <Button className="pb-3" variant="h3" gutterBottom>Guides</Button>
                    </div>
                    <div>
                        <Button className="pb-3" variant="h3" gutterBottom>API Reference</Button>
                    </div>
                    <div>
                        <Button className="pb-3" variant="h3" gutterBottom>Legal</Button>
                    </div>

                </Grid>
                 <Grid item px={12}>
                    <Typography className="pb-5" variant="h6">Legal</Typography>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>terms</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>privacy</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6" gutterBottom>claims</Button>
                    </div>

                </Grid>

            </Grid>
            <div className="bg-black text-white">
                <Typography className="text-center py-5" variant="body2">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </Typography>   
                </div>
        </div>
    )
}
export default Footer;