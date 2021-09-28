import React, { useContext, useState } from "react";
import { SettingsContext } from "../context/setting";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
function todoItem(props) {
  const Settings = useContext(SettingsContext);
  const [page, setPage] = useState({ min: 0, max: Settings.itemsPerPage });

  const card = (itemsList) => {
    return itemsList.map((item, idx) => {
      if (idx >= page.min && idx < page.max) {
        if (Settings.showCompleted == false) {
          if (item.complete) {
            return null;
          }
        }
        return (
          <Card key={item.id}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.text}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Assigned to: {item.assignee}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Difficulty: {item.difficulty}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => props.toggleComplete(item.id)}
              >
                Complete: {item.complete.toString()}
              </Button>
            </CardActions>
          </Card>
        );
      } else {
        return null;
      }
    });
  };

  const setting = useContext(SettingsContext);
  return (
    <>
      {card(props.list)}
      <Button
        size="small"
        onClick={() =>
          page.min > 0
            ? setPage({
                min: page.min - Settings.itemsPerPage,
                max: page.max - Settings.itemsPerPage,
              })
            : null
        }
      >
        previous
      </Button>
      <Button
        size="small"
        onClick={() =>
          page.max < props.list.length
            ? setPage({ min: page.max, max: page.max + Settings.itemsPerPage })
            : null
        }
      >
        next
      </Button>
    </>
  );
}

export default todoItem;
