import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="mt-44 flex flex-col w-full h-full items-center ">
      <div className="heading font-bold text-4xl gap-2 items-center md:items-start flex flex-col font-Poppins">
        <span>Welcome to</span>
        <span className="text-orange-500 font-Pacifico text-4xl md:text-5xl">
          TASTY VOYAGE
        </span>
      </div>
      <div className="subHeading text-lg ml-24 mt-4 ">
        - Created by Apurva Gaurav
      </div>
      <Link to={"/"}>
        <button className="bg-orange-500 rounded-md hover:bg-orange-600 transition-all text-white font-bold font-Poppins mt-16 p-3">
          Explore Restaurants
        </button>
      </Link>
    </div>
  );
};

export default About;
