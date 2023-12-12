/* Wraps both sign-in and sing-up function */
import { useUserContext } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {

  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to='/'/>
      ) : (<>
      <section className="flex flex-1 justify-center items-center py-10 flex-col">
        <Outlet/>
      </section>
      <img 
        src="/assets/1.png"
        alt="logo"
        className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
        />
      </>)}
    </>
  )
}

export default AuthLayout