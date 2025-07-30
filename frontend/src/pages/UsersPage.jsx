import UsersTable from "../components/UsersTable";

function UsersPage() {
   return (
      <div className="px-4">
         <h1 className="text-4xl md:text-5xl font-bold text-center mt-6">
            Employees
         </h1>
         <UsersTable />
      </div>
   );
}

export default UsersPage;
