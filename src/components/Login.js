import { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  console.warn("jeewan.thapa9@gmail.com", "tracknerd@123");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(email, "##", password);

    const fetchData = await fetch(
      "https://staging-api.tracknerd.io/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password: password }),
      }
    );

    const userData = await fetchData.json();
    const { token } = userData;
    // console.log(userData, "userData");
    if (token) {
      props.getUserDetail(userData);
      // console.log(userData);
    } else {
      alert("Incorrect Email OR Password");
      event.target.reset();
    }
  };

  const showPasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="h-[200px] sm:mx-[10%] my-[5%] md:mx-[33%] md:my-[8%] shadow-lg border ">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 shadow-lg bg-purple-100 ">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://d33wubrfki0l68.cloudfront.net/bfad864aea33a259d945066bbefc38f83ff0255f/8dbcc/images/tracknerd-logo-4.png"
              alt="Company-logo"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <h5 className="mt-2 text-sm justify-center mx-auto text-center italic text-purple-300 ">
              One Stop Solution For Your Fleet Needs
            </h5>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className=" rounded-md shadow-sm">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="exampleInputEmail1"
                onChange={(event) => setEmail(event.target.value)}
                required
                className="relative block w-full appearance-none rounded  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
              <div className="mt-2">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="exampleInputPassword1"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center" onClick={showPasswordToggle}>
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Show Password
                </label>
              </div>

              <div className="text-sm disabled">
                <a
                  href="#"
                  className="disabled font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
