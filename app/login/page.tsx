import Link from "next/link";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <>
      <div className="w-full">
        <div className="w-full bg-[#F6F5FF]">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <div className="h-[286px] flex flex-col justify-center">
              <h1 className="josefin-sans text-4xl font-extrabold text-[#101750]">
                My Account
              </h1>
              <div className="flex gap-1 font-medium">
                <div>
                  <Link href={"/"}>Home</Link>
                </div>
                <div>
                  <Link href={"/"}>. Pages</Link>
                </div>
                <div className="text-[#FB2E86]">
                  <p>. My Account</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#F6F5FF]">
          <div className="w-[90%] max-w-[1400px] mx-auto"></div>
        </div>

        <LoginForm />

        <div className="w-full my-16">
          <div className="h-[100%] w-[90%] flex items-center max-w-[1400px] mx-auto">
            <div className="weWorkWith h-28 w-full mx-auto"></div>
          </div>
        </div>
      </div>
    </>
  );
}
