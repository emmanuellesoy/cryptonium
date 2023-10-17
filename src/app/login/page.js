"use client";
import { Box, Typography, Grid } from "@mui/material";

import { GridCentered } from "@/components/GridCentered";
import { LoginForm } from "@/components/LoginForm";

export default function Page() {
  return (
    <Grid container spacing={2}>
      <GridCentered>
        <Box
          component="img"
          sx={{
            height: 128,
            width: 128,
            borderRadius: "128px",
            alignItems: "center",
            justifyContent: "center",
          }}
          alt="Cryptonium Logo."
          src="https://picsum.photos/128"
        />
      </GridCentered>

      <GridCentered marginTop={4}>
        <Typography
          variant="h1"
          align="center"
          sx={{ fontSize: 32, fontWeight: "bold", color: "#9C27B0" }}
        >
          Iniciar Sesión
        </Typography>
      </GridCentered>
      <GridCentered>
        <LoginForm />
      </GridCentered>
    </Grid>
  );
}
