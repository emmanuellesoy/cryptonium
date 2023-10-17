"use client";
import { Grid, Button } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { VariableSizeList as List } from "react-window";

import { GridCentered } from "@/components/GridCentered";
import { Header } from "@/components/Header";
import { getAssets } from "@/api/coincap";
import { RenderRow } from "@/components/RenderRow";
import { FavoritesContext } from "@/context/favoritesContext";

export default function Page() {
  const [coins, setCoins] = useState([]);
  const [serverData, setServerData] = useState([]);
  const [showFavs, setShowFavs] = useState(false);
  const { favorites } = useContext(FavoritesContext);

  useEffect(() => {
    getAssets().then((data) => setServerData(data));
  }, []);

  useEffect(() => {
    if (showFavs) {
      setCoins(favorites);
    } else {
      setCoins(serverData);
    }
  }, [showFavs, serverData]);

  return (
    <Grid container spacing={2}>
      <Header text="Feed" />
      <GridCentered>
        <Button
          color="secondary"
          onClick={() => {
            if (showFavs) {
              setShowFavs(false);
            } else {
              setShowFavs(true);
            }
          }}
        >
          {showFavs ? "Ver todas las monedas" : "Ver favoritos"}
        </Button>
      </GridCentered>
      <GridCentered>
        <List
          innerElementType="ul"
          itemCount={coins.length}
          itemSize={() => 20}
          height={500}
          width="100%"
        >
          {({ index }) => {
            return <RenderRow index={index} {...coins?.[index]}></RenderRow>;
          }}
        </List>
      </GridCentered>
    </Grid>
  );
}
