import { Typography, Card, CardContent, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    "&:hover": {
      boxShadow: theme.shadows[7],
    },
  },
}));

export default function PostListItem({ post }) {
  const classes = useStyles();

  return (
    <Card style={{ margin: "16px 0" }} className={classes.card} elevation={2}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {post.title}
        </Typography>
        <Typography>{post.body}</Typography>
      </CardContent>
    </Card>
  );
}
