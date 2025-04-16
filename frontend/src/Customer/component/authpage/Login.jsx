import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getUser, login } from "../../../State/Auth/Action";


const Login = ({ closeAuth }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const jwt  = localStorage.getItem("jwt")

  const auth = useSelector((store) => store.auth);


  const [loginData, setLoginDataData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDataData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
     dispatch(login(loginData));
    //  console.log("userData" ,loginData )

  };

    useEffect(() => {
      if (jwt) {
        dispatch(getUser());
        navigate("/");
      }
    }, [jwt]);

 

  return (
    <>
      <div
        className={`Login  flex  flex-col items-center justify-center fixed top-0  left-0 h-screen w-full bg-gray-200/50   `}
      >
        <div className="bg-white p-6 rounded-lg shadow-md w-96 h-[50vh] relative flex  flex-col justify-evenly">
          <Link
            to="/"
            onClick={closeAuth}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
          >
            &times;
          </Link>

          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handlerSubmit}>
            <div className="w-full">
              <input
                className="p-2 mb-2 border w-full outline-none rounded-md"
                placeholder="Email"
                name="email"
                required
                value={loginData.email}
                onChange={handleChange}
              />
              <input
                className="p-2 mb-2 border w-full outline-none rounded-md"
                placeholder="Password"
                name="password"
                required
                value={loginData.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Login
              </button>
              <p className="mt-2 text-sm">
                Don’t have an account?{" "}
                <Link
                  className="text-blue-500"
                  onClick={closeAuth}
                  to="/signup"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
