import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Spinner({ size }) {
  return (
    <Box sx={{ textAlign: "center", width: "100%" }}>
      <CircularProgress size={size || 50} />
    </Box>
  );
}

export default Spinner;
