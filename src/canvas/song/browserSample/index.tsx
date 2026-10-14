import React from "react";
import { Composition, registerRoot } from "remotion";
import { BrowserDoorway } from "./BrowserDoorway";
const Root = () => (
  <Composition
    id="BrowserDoorway"
    component={BrowserDoorway}
    durationInFrames={720}
    fps={30}
    width={1280}
    height={720}
  />
);
registerRoot(Root);
