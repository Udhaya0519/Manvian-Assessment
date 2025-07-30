import { Link } from "react-router-dom";

function Navbar() {
   return (
      <div className="navbar bg-base-100 shadow-sm">
         <div className="flex-1">
            <Link className="btn btn-ghost text-xl" to="/">Home</Link>
         </div>
         <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
               <li>
                  <Link to="/register">Register</Link>
               </li>
               <li>
                  <details>
                     <summary className="w-[115px]">Menu</summary>
                     <ul className="bg-base-100 rounded-t-none p-2">
                        <li>
                           <Link to="/users">users</Link>
                        </li>
                        <li>
                           <Link to="/apply-leave">Apply leave</Link>
                        </li>
                     </ul>
                  </details>
               </li>
            </ul>
         </div>
      </div>
   );
}

export default Navbar;
