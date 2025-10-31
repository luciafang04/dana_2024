import { ComponentProps } from "react";


export const NavMenu = (props: ComponentProps<"div">) => (
  <div
    {...props}
    className="text-lg font-bold font-serif"
  >
    Solo el pueblo salva al pueblo
  </div>
);
