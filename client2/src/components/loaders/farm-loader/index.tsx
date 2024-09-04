import { Radio, ThreeCircles } from "react-loader-spinner";
import React from "react";
export default function FarmLoader({ id }: { id: number }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  if (id === 0) {
    return <div ref={ref}>salam</div>;
  }
  if (id === 1) {
    return (
      <Radio
        visible={true}
        height="140"
        width="140"
        colors={["#D4D21B", "#7F9B22", "#60861C"]}
        ariaLabel="radio-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  } else {
    return (
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        outerCircleColor="#60861C"
        innerCircleColor="#7F9B22"
        middleCircleColor="#D4D21B"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }
}
