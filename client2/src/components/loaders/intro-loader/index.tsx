import { CirclesWithBar } from "react-loader-spinner";

export default function IntroLoader() {
  return (
  
      <CirclesWithBar
        height="200"
        width="200"
        color="#ADC645"
        outerCircleColor="#ADC645"
        innerCircleColor="#ADC645"
        barColor="#ADC645"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    
  );
}
