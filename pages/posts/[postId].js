import fetch from "cross-fetch";
import Header from "../../components/Header";
import { Grid, Container, Typography } from "@material-ui/core";

export default function Post({ post }) {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              component="h1"
              style={{ marginBottom: 32 }}
            >
              {post.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" style={{ marginBottom: 32 }}>
              by Tom Smith
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{post.body}</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export async function getServerSideProps({ query }) {
  return new Promise((resolve) => {
    setTimeout(async () => {
      resolve({
        props: {
          post: await fetch(
            `https://jsonplaceholder.typicode.com/posts/${query.postId}`
          ).then((res) => res.json()),
        },
      });
    }, 2000);
  });
}
