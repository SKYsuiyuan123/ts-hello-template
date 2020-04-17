import React from "react";

type Hello = {
  hellostr: string;
};

const Hello = (props: Hello) => <h3>{props.hellostr}</h3>;

export { Hello };
