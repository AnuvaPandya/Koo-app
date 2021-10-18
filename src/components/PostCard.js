import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Paper } from "@mui/material";

export default function PostCard({ title, body }) {
  return (
    <div style={styles.containerStyle}>
      <Paper>
        <Card raised={true} variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {body}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
}

const styles = {
  containerStyle: {
    marginLeft: "25%",
    marginRight: "25%",
    borderRadius: "50%",
  },
};
