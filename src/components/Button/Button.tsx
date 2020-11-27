import * as React from "react";

type Props = {
  text: string;
};

const Button: React.FC<Props> = ({ text }) => <button>{text}</button>;
export default Button;
