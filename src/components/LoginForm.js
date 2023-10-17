import { useState, useContext } from "react";
import { Grid, TextField, Button, Alert } from "@mui/material";

import { GridCentered } from "./GridCentered";
import { UserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const { username: sessionUserName, password: sessionPassword } = user;

  const handleForm = () => {
    if (username === sessionUserName && password === sessionPassword) {
      setUser({ ...user, logged: true });
      router.push("/");
    } else {
      setError(true);
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleForm();
      }}
    >
      <Grid>
        {error && (
          <GridCentered>
            <Alert severity="error">Usuario o contraseña no válidos.</Alert>
          </GridCentered>
        )}
        <GridCentered marginTop={1}>
          <TextField
            id="standard-basic"
            label="Nombre de usuario"
            variant="standard"
            color="secondary"
            placeholder="myCoolUserName"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </GridCentered>
        <GridCentered marginTop={1}>
          <TextField
            id="standard-basic"
            label="Contraseña"
            variant="standard"
            color="secondary"
            placeholder="Contraseña"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </GridCentered>
        <GridCentered marginTop={6}>
          <Button type="submit" color="secondary">
            Iniciar Sesión
          </Button>
        </GridCentered>
        <GridCentered marginTop={6}>
          <Button
            type="button"
            color="secondary"
            onClick={() => router.push("/signup")}
          >
            Registrarse
          </Button>
        </GridCentered>
      </Grid>
    </form>
  );
};
