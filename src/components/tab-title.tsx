import React from "react";
import Helmet from "react-helmet";

export default function TabTitle({ title }: Readonly<{ title?: string }>) {
  const defaultTitle: string = "Gallery Photo";

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
    </Helmet>
  );
}
