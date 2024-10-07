import "./Tile.css";

import { memo } from "react";

import { Avatar, Card, CardContent, Typography } from "@mui/material";

export const Tile = memo(({ avatar_url, id, login }) => {
  return (
    <Card className="tile" data-testid="tile" key={id}>
      <Avatar
        src={avatar_url}
        alt={login}
        sx={{ width: 56, height: 56, marginRight: "1rem" }}
      />

      <CardContent>
        <Typography variant="h6">{login}</Typography>
      </CardContent>
    </Card>
  );
});
