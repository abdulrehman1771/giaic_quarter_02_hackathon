export default function LoginForm() {
    return (
      <div className="flex min-h-screen items-center justify-center ">
        <div className="w-full max-w-md bg-white p-9 shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
          <p className="text-center text-gray-600 mb-6">
            Please login using account detail below.
          </p>
          <form>
            <div className="mb-4">
              
              <input
                type="email"
                id="email"
                className="mt-1 py-2 px-1 block w-full border-2 outline-none border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-4">
              
              <input
                type="password"
                id="password"
                className="mt-1 py-2 px-1 block w-full border-2 outline-none border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-end mb-4">
              <a
                href="#"
                className="text-sm text-pink-500 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-pink-500 py-2 px-4 text-white font-medium hover:bg-pink-600 transition"
            >
              Sign In
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an Account?{" "}
            <a
              href="#"
              className="text-pink-500 font-medium hover:underline"
            >
              Create account
            </a>
          </p>
        </div>
      </div>
    );
  }
  