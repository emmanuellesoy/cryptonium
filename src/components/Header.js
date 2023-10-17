"use client";

import { useContext, useEffect } from "react";
import { Button } from "@mui/material";

import { GridCentered } from "@/components/GridCentered";
import { Typography } from "@/components/Typography";
import Link from "next/link";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";

export const Header = ({ text = "", linkToFeed = false }) => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!user?.logged) {
      router.push("/");
    }
  }, [user]);

  return (
    <>
      <GridCentered item marginTop={4}>
        <Typography
          variant="h1"
          align="center"
          sx={{ fontSize: 32, fontWeight: "bold", color: "#9C27B0" }}
        >
          {text}
        </Typography>
      </GridCentered>
      <GridCentered item xs={12} marginTop={1} config={{ sm: 5 }}>
        <Typography>
          {user?.fullName ?? "Usuario desconocido | name"}
        </Typography>
      </GridCentered>
      <GridCentered item xs={12} sm={6} marginTop={1} config={{ sm: 5 }}>
        <Typography>{user?.email ?? "Usuario desconocido | email"}</Typography>
      </GridCentered>
      {linkToFeed && (
        <GridCentered item xs={12} marginTop={0} config={{ sm: 2 }}>
          <Typography sx={{ fontSize: 12 }}>
            <Link href="/feed">Regresar al Feed de momedas</Link>
          </Typography>
        </GridCentered>
      )}
      <GridCentered item xs={12} marginTop={0} config={{ sm: 2 }}>
        <Button
          color="secondary"
          variant="text"
          onClick={() => setUser({ ...user, logged: false })}
        >
          Cerrar Sesión
        </Button>
      </GridCentered>
    </>
  );
};
