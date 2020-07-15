import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  LinearProgress,
} from "@material-ui/core";
import Router from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Prefetch from "@xdn/react/Prefetch";

export default function Header() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onStart = () => setLoading(true);
    const onEnd = () => setLoading(false);
    Router.events.on("routeChangeStart", onStart);
    Router.events.on("routeChangeComplete", onEnd);

    return () => {
      Router.events.off("routeChangeStart", onStart);
      Router.events.off("routeChangeComplete", onEnd);
    };
  }, []);

  return (
    <div style={{ paddingBottom: 78 }}>
      <AppBar position="fixed" style={{ marginBottom: 16 }}>
        <Toolbar>
          <Container maxWidth="lg">
            <Link href="/" as="/" passHref>
              <Prefetch>
                <a style={{ textDecoration: "none", color: "white" }}>
                  <Typography variant="h6">My Blog</Typography>
                </a>
              </Prefetch>
            </Link>
          </Container>
        </Toolbar>
        <LinearProgress
          style={{ visibility: loading ? "visible" : "hidden" }}
          color="secondary"
        />
      </AppBar>
    </div>
  );
}
