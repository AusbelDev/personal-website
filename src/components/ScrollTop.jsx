import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
// import { useRef } from "react";
export default function ScrollTop(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  //   const trigger = useScrollTrigger({
  //     target: window ? window() : undefined,
  //     disableHysteresis: true,
  //     threshold: 100,
  //   });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={props.scrolled}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}
