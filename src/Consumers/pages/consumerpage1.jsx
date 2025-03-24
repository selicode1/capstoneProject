import { Link } from "react-router";

export default function SignupPage() {
  return (
    <div className="flex h-screen">
      {/* Left Section: Signup Form */}
      <div className="w-1/2 flex flex-col justify-center px-16 relative">
        {/* Back Button */}
        <button className="absolute top-6 left-6 bg-lime-500 text-black rounded-full w-10 h-10 flex items-center justify-center shadow-md">
          ←
        </button>

        {/* Title */}
        <h2 className="text-3xl font-light">
          As <span className="font-bold text-lime-500">Consumer</span>
        </h2>

        {/* Input Fields */}
        <div className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-gray-500">Email or Username</label>
            <input
              type="text"
              className="w-full border-b border-gray-500 focus:outline-none focus:border-black"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Password</label>
            <input
              type="password"
              className="w-full border-b border-gray-500 focus:outline-none focus:border-black"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Confirm Password</label>
            <input
              type="password"
              className="w-full border-b border-gray-500 focus:outline-none focus:border-black"
            />
          </div>
        </div>

        {/* Sign Up Button */}
        <Link to={'/landing'} className="mt-6 w-full bg-lime-500 text-black py-2 rounded-lg shadow-md">
          Sign Up
        </Link>

        {/* OR Section */}
        <div className="mt-4 text-center text-gray-500">OR</div>

        {/* Social Icons */}
        <div className="mt-4 flex justify-center space-x-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
            alt="Facebook"
            className="w-10"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
            alt="Twitter/X"
            className="w-10"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            alt="Instagram"
            className="w-10"
          />
        </div>
      </div>

      {/* Right Section: Normal Image */}
      <div className="w-1/2">
        <img
          src="https://images.unsplash.com/photo-1509100194014-d49809396daa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMHdvbWFuJTIwaW4lMjBhJTIwZmFybXxlbnwwfHwwfHx8MA%3D%3D"  // Replace with your actual image URL
          alt="Consumer"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
