"use client";
import { useEffect, useState } from "react";
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

import { GridCentered } from "@/components/GridCentered";
import { getHistory } from "@/api/coincap";
import { formatDate, formatPrice } from "@/libs/formatter";
import { Header } from "@/components/Header";

export default function Page(props) {
  const { params: { id = "Moneda no encontrada" } = {} } = props;
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getHistory(id).then((data) => setHistory(data));
  }, [id]);

  return (
    <Grid container spacing={2}>
      <Header text={id} linkToFeed />
      <GridCentered>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 320 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Fecha y Hora</TableCell>
                <TableCell align="right">Precio en dolares</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {history.map((element) => (
                <TableRow
                  key={element.time}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {formatDate(element.date)}
                  </TableCell>
                  <TableCell align="right">
                    {formatPrice(element.priceUsd)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </GridCentered>
    </Grid>
  );
}
