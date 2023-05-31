import { Hydrate as RQHydrate, HydrateProps } from "react-query";

export default function Hydrate(props: HydrateProps) {
  return <RQHydrate {...props} />;
}
