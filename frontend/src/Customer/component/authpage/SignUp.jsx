import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUser, register } from "../../../State/Auth/Action";

const SignUp = ({ closeAuth }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt =  localStorage.getItem("jwt")

  const auth = useSelector((store) => store.auth);

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(register(signupData));
    // console.log("userData" ,signupData )
  };

  useEffect(() => {
    if (jwt) {
      dispatch(getUser());
      navigate("/");
    }
  }, [jwt]);

  return (
    <div className="signup flex flex-col items-center justify-center fixed top-0 left-0 h-screen w-full bg-gray-200/20">
      <div className="bg-white p-6 rounded-lg flex flex-col justify-evenly shadow-md w-96 h-[60vh] relative">
        <Link
          to="/"
          onClick={closeAuth}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </Link>
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handlerSubmit}>
          <div className="w-full">
            <div className="w-full flex gap-2">
              <input
                className="p-2 mb-2 border w-1/2 outline-none rounded-md"
                placeholder="First Name"
                name="firstName"
                value={signupData.firstName}
                onChange={handleChange}
                required
              />
              <input
                className="p-2 mb-2 border w-1/2 outline-none rounded-md"
                placeholder="Last Name"
                name="lastName"
                value={signupData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              className="p-2 mb-2 border w-full outline-none rounded-md"
              placeholder="Email"
              name="email"
              value={signupData.email}
              onChange={handleChange}
              required
            />
            <input
              className="p-2 mb-2 border w-full outline-none rounded-md"
              placeholder="Password"
              type="password"
              name="password"
              value={signupData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Sign Up
            </button>
            <p className="mt-2 text-sm">
              Already have an account?
              <Link className="text-blue-500" to="/signin">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
