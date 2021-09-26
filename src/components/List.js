import { Card, H5, H4, Button, Classes, Elevation } from "@blueprintjs/core";
import React, { useContext } from "react";
import SettingsContext from "../context/setting";
function todoItem(props) {
  const setting = useContext(SettingsContext);
  return props.list.map((item) => (
    <Card
      class="bp3-card .modifier .bp3-elevation-3"
      interactive={true}
      elevation={Elevation.TWO}
      key={item.id}
    >
      <H4>{item.text}</H4>
      <p>
        <small>Difficulty: {item.difficulty}</small>
      </p>
      <p>
        <small>Assigned to: {item.assignee}</small>{" "}
      </p>
      <Button
        className={Classes.BUTTON}
        onClick={() => props.toggleComplete(item.id)}
      >
        Complete: {item.complete.toString()}
      </Button>
    </Card>
  ));
}

export default todoItem;
