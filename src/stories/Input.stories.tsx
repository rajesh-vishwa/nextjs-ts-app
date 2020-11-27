import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Input } from "../components/Input/Input";

storiesOf("Input", module)
  .add("default", () => {
    return <Input />;
  })
  .add("with label", () => {
    return <Input id="test" label={text("Label", "Username")} />;
  })
  .add("with label and text type", () => {
    return (
      <Input
        id="test"
        label={text("Label", "Username")}
        type={text("Type", "text")}
      />
    );
  })
  .add("with label and password type", () => {
    return (
      <Input id="test" label={text("Label", "Password")} type={"password"} />
    );
  });
