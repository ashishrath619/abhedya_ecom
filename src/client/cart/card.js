import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      // margin: theme.spacing(0),
      width: theme.spacing(37),
      height: theme.spacing(26.5),
    },
  },
}));
var imglist = [
  {
    id: 1,
    url:
      "https://us.123rf.com/450wm/nicoelnino/nicoelnino1710/nicoelnino171000012/88776113-business-process-management-and-automation-concept-with-icons-of-hiring-workflow-document-validation.jpg?ver=6",
  },
  {
    id: 2,
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlqkFAIgVNo6sxZdnsqKFKD4uk2nnkoDXvPg&usqp=CAU",
  },
];

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Paper variant="outlined" square> */}
      <div>
        <img
          src="https://us.123rf.com/450wm/nicoelnino/nicoelnino1710/nicoelnino171000012/88776113-business-process-management-and-automation-concept-with-icons-of-hiring-workflow-document-validation.jpg?ver=6"
          width="300"
        />
      </div>
      {/* </Paper> */}
    </div>
  );
}
