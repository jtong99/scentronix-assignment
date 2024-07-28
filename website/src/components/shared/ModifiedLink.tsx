import { Link, LinkProps } from "@mui/material";
import React from "react";

import { Url } from "next/dist/shared/lib/router/router";

function CustomLink(props: LinkProps & { href: Url }, ref: React.Ref<HTMLAnchorElement>) {
  return (
    <Link
      ref={ref}
      {...props}
    />
  );
}

export default React.forwardRef(CustomLink);
