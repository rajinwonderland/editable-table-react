import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  delete: {
    color: "red"
  },
  add: {
    color: "green"
  }
};

function DeleteButton(props) {
  const { classes, ...rest } = props;
  return (
    <IconButton className={classes.delete} aria-label="Delete" {...rest}>
      <DeleteIcon />
    </IconButton>
  );
}

function AddButton(props) {
  const { classes, ...rest } = props;
  return (
    <IconButton className={classes.add} aria-label="Add" {...rest}>
      <AddIcon />
    </IconButton>
  );
}

export const Add = withStyles(styles)(AddButton);
export const Delete = withStyles(styles)(DeleteButton);
