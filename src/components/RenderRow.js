import { useContext, useState, useEffect } from "react";
import { Grid, Icon } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Star from "@mui/icons-material/Star";
import Link from "next/link";

import { Typography } from "@/components/Typography";
import { formatPrice } from "@/libs/formatter";
import { FavoritesContext } from "@/context/favoritesContext";

export const RenderRow = ({
  id = "",
  priceUsd = 0,
  index = 0,
  isFav = false,
}) => {
  const [thisIsFavorite, setThisIsFavorite] = useState(isFav);
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const addFavorite = () => {
    const filteredFavorites = favorites.filter(
      (favorite) => favorite.id !== id
    );
    const newFavorites = filteredFavorites.concat([
      { id, priceUsd, index, isFav: true },
    ]);
    setFavorites(newFavorites);
  };

  return (
    <li
      style={{
        margin: 8,
        backgroundColor: index % 2 ? "#9C7AD8" : "#EF7BA8",
      }}
    >
      <Grid container>
        <Grid item xs={6} margin="auto">
          <Link href={`/feed/${id}`}>
            <Typography sx={{ color: "#fff", marginLeft: 1 }}>{id}</Typography>
          </Link>
        </Grid>
        <Grid item xs={5} margin="auto">
          <Link href={`/feed/${id}`}>
            <Typography sx={{ color: "#fff", marginLeft: 1, fontSize: 12 }}>
              {formatPrice(priceUsd)} us dls.
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={1} margin="auto">
          <Icon
            component={thisIsFavorite ? Star : StarBorderIcon}
            color="#fff"
            onClick={() => {
              setThisIsFavorite(true);
              addFavorite();
            }}
          />
        </Grid>
      </Grid>
    </li>
  );
};
