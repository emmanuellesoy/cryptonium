import { useState, useContext } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";

import { GridCentered } from "./GridCentered";
import { UserContext } from "@/context/userContext";

export const SignUpForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const router = useRouter();

  const handleForm = () => {
    if (fullName && email && username && password) {
      setUser({ fullName, email, username, password, logged: true });
      router.push("/");
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
        <GridCentered marginTop={1}>
          <TextField
            id="standard-basic"
            label="Nombre completo"
            variant="standard"
            color="secondary"
            placeholder="Fulanito de Tal"
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </GridCentered>
        <GridCentered marginTop={1}>
          <TextField
            id="standard-basic"
            label="Correo"
            variant="standard"
            color="secondary"
            placeholder="ejemplo@ejemplo.com"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </GridCentered>
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
            Crear Cuenta
          </Button>
        </GridCentered>
        <GridCentered marginTop={6}>
          <Button
            type="button"
            color="secondary"
            onClick={() => router.push("/login")}
          >
            Iniciar Sesión
          </Button>
        </GridCentered>
      </Grid>
    </form>
  );
};
