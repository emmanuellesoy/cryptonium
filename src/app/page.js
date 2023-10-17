"use client";

import { useContext, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useRouter } from "next/navigation";

import { GridCentered } from "../components/GridCentered";
import { UserContext } from "@/context/userContext";

export default function Home() {
  const router = useRouter();
  const { user } = useContext(UserContext);

  console.log("user", user);
  useEffect(() => {
    if (user?.logged) {
      router.push("/feed");
    } else {
      router.push("/signup");
    }
  }, []);

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
      <GridCentered>
        <Typography
          variant="h1"
          align="center"
          sx={{ fontSize: 48, fontWeight: "bold", color: "#9C27B0" }}
        >
          Crytounium
        </Typography>
      </GridCentered>
      <GridCentered>
        <Typography variant="p" align="center" sx={{ color: "#9C27B0" }}>
          bienvenido / welcome / いらっしゃいませ
        </Typography>
      </GridCentered>
    </Grid>
  );
}
