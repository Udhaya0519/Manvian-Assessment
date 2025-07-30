import { Link } from "react-router-dom";


function Hero() {
   return (
      <div className="hero bg-base-200 flex-[1]">
         <div className="hero-content text-center">
            <div>
               <h1 className="text-5xl font-bold">
                  Welcome to the Employee Portal
               </h1>
               <p className="py-6">
                  This is a simple internal system where employees can register,
                  View all registered users, apply for leave and Check the
                  status of your leave applications.
               </p>
               <Link to="/register">
                   <button
                      className="btn btn-primary"
                   >
                      Get Started
                   </button>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default Hero;
