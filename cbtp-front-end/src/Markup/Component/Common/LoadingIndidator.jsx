import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingIndicator = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <CircularProgress />
    </div>
  );
};

export default LoadingIndicator;