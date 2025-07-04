import React from "react";
import { Button, Typography } from "@mui/material";

const ConsumerButton = ({ onClick, disabled, children, customStyles,startIcon}) => {
  const defaultStyles = {
    backgroundColor: "#ffffff",
    border: "2px solid #475569",
    cursor: "pointer",
    textTransform:"uppercase",
    display: "flex",
    // backgroundColor: "#23CCEF",
   color: "#475569",
    // fontSize: "1px",
    // fontWeight: "bold",
    borderRadius: "8px",
    transition: "background-color 0.3s ease, transform 0.2s ease",

     '&:hover': {
               backgroundColor:'#475569',
               color: '#fff',
                opacity: 0.7,
      transform: "scale(1.02)",
              },
    // "&:hover": {
    //   backgroundColor: "#23CCEF",
    //   opacity: 0.7,
    //   transform: "scale(1.02)",
    // },
    "&:active": {
      transform: "scale(0.98)",
    },
    justifyContent: "center",
    alignItems: "center",
    mt: { xl: 0, lg: 0, md: 0, sm: 1, xs: 1 },
    width: { xl: "21%", lg: "26%", md: "22%", sm: "80%", xs: "80%" },
  };

  return (
    <Button sx={{ ...defaultStyles, ...customStyles }} onClick={onClick} disabled={disabled}
    startIcon={startIcon}
    >
      <Typography
        sx={{

          fontSize: { xl: "17px", lg: "12px", md: "10px", sm: "15px", xs: "15px" },
          fontWeight: "bold",
          textTransform: { xl: "capitalize", lg: "uppercase", md: "uppercase", sm: "uppercase", xs: "uppercase" },
        }}
      >
        {children}
      </Typography>
    </Button>
  );
};

export default ConsumerButton;
