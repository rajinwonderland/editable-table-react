import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: "fixed",
    right: 10,
    bottom: 0
  }
});

function FloatingActionButtons(props) {
  const { classes, ...rest } = props;
  return (
    <Button
      variant="fab"
      color="primary"
      aria-label="add"
      className={classes.button}
      {...rest}
    >
      <AddIcon />
    </Button>
  );
}

export default withStyles(styles)(FloatingActionButtons);
