import { Link } from "react-router-dom";
import { Carousel } from "./carousel/carousel";


export const Homepage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="hero-section flex items-center">
        
      </div>

      <Carousel />

      <p className="w-10/12 my-5 text-lg font-bold mx-auto text-center">
        If you have any questions contact{" "}
        <a className="text-blue-800" href="mailto:sidnoor15@gmail.com">
          Siddiqua Noorien
        </a>
      </p>
    </div>
  );
};