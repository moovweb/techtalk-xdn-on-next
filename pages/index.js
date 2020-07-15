import Header from "../components/Header";
import fetch from "cross-fetch";
import Link from "next/link";
import { Container, Grid } from "@material-ui/core";
import PostListItem from "../components/PostListItem";
import Prefetch from "@xdn/react/Prefetch";

export default function Home({ posts }) {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            {posts.map((post, i) => (
              <Link
                key={i}
                href="/posts/[postId]"
                as={`/posts/${post.id}`}
                passHref
              >
                <Prefetch>
                  <a style={{ textDecoration: "none" }}>
                    <PostListItem post={post} />
                  </a>
                </Prefetch>
              </Link>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());

  return {
    props: {
      posts,
    },
  };
}
