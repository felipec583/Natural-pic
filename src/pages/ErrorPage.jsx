import { useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  });
  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen ">
        <h1 className="text-2xl font-bold">Oops!</h1>
        <p>Hubo un error. Esta página no existe</p>
        <p>
          <i>
            {error.statusText} {error.status}
          </i>
        </p>
        <div className="flex flex-col items-center">
          <p>Redirigiendo a Home</p>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
