import React from "react";
import {
    Box,
    Typography,
    Button,
    useTheme
} from "@mui/material";
import runner from "../assets/images/runner.png";
import { useNavigate } from "react-router-dom";

const BusinessElevatorBanner = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                py: { xs: 4, sm: 6, md: 8, lg: 10, xl: 12 },
                px: { xs: 2, sm: 4, md: 10, lg: 16, xl: 20 },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#FDF7F4",
                    borderRadius: "5px",

                    py: { xs: 4, sm: 5, md: 8, lg: 10 },
                    pl: { xs: 2, sm: 4, md: 8, lg: 12 },
                    pr: { xs: 2, sm: 4, md: 6, lg: 8 },
                    gap: { xs: 4, sm: 3, md: 2 },
                }}
            >
                {/* LEFT SIDE */}
                <Box sx={{ flex: 1 }}>
                    <Typography
                        fontWeight="bold"
                        sx={{
                            mb: 2,
                            color: "#000",
                            fontSize: {
                                xs: "1.6rem",
                                sm: "1.9rem",
                                md: "2.2rem",
                                lg: "2.5rem",
                            },
                            lineHeight: 1.3,
                        }}
                    >
                        READY TO ELEVATE YOUR BUSINESS TO
                        <Box
                            component="span"
                            sx={{
                                display: "block",
                                color: "#FF8C42",
                            }}
                        >
                            NEW HEIGHTS?
                        </Box>
                    </Typography>

                    <Typography
                        sx={{
                            mb: 4,
                            color: "#000",
                            fontSize: {
                                xs: "0.9rem",
                                sm: "1rem",
                                md: "1.05rem",
                                lg: "1.1rem",
                            },
                            maxWidth: "480px",
                        }}
                    >
                        Get in touch with us to partner with our service which is
                        focused on delivering impactful results.
                    </Typography>

                    <Button
                        onClick={() => navigate('/contact')}
                        variant="contained"
                        sx={{
                            backgroundColor: "#F07E2C",
                            color: "#FFFFFF",
                            textTransform: "none",
                            borderRadius: "40px",
                            fontWeight: "bold",

                            px: { xs: 3, sm: 4, md: 5 },
                            py: { xs: 1.2, sm: 1.4 },

                            fontSize: {
                                xs: "0.9rem",
                                sm: "1rem",
                                md: "1.05rem",
                            },

                            '&:hover': {
                                backgroundColor: '#FFFFFF',
                                color: '#F07E2C',
                                boxShadow: '0 6px 18px rgba(254, 197, 54, 0.55)',
                            },
                            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                        }}
                    >
                        Get A Free Consultation
                    </Button>
                </Box>

                {/* RIGHT IMAGE */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: { xs: 3, sm: 0 },
                    }}
                >
                    <img
                        src={runner}
                        alt="Runner"
                        style={{
                            width: "100%",
                            height: "auto",
                            maxWidth: "380px",
                            maxHeight: "360px",
                            objectFit: "contain",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default BusinessElevatorBanner;
