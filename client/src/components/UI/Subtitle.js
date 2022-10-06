import Typography from "@mui/material/Typography";

function Subtitle({ subtitle }) {
  return (
    <Typography component="h3" variant="h6" sx={{ fontWeight: "bold" }}>
      {subtitle}
    </Typography>
  );
}

export default Subtitle;
