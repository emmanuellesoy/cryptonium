import { Grid } from "@mui/material";

export const GridCentered = ({
  marginTop = 8,
  xs = 12,
  config = {},
  children,
}) => {
  return (
    <Grid
      marginTop={marginTop}
      display="flex"
      item
      xs={xs}
      justifyContent="center"
      alignItems="center"
      {...config}
    >
      {children}
    </Grid>
  );
};
