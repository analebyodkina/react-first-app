import Checkbox from "../UI/Checkbox/Checkbox";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import GoogleIcon from "../icons/GoogleIcon";
import ClosedEyeIcon from "../icons/ClosedEyeIcon";
import CloseIcon from "../icons/CloseIcon";

import "./Login.scss";

function Login() {
  return (
    <>
      <div className="login">
        <h1 className="login__title">NFT Access</h1>
        <div className="login__desc">
          Please fill your detail to access your account.
        </div>

        <form action="get" className="form">
          <Input
            title="Email"
            placeholder="debra.holt@example.com"
            type="email"
            icon={<CloseIcon />}
          />
          <Input
            title="Password"
            placeholder="••••••••"
            type="password"
            icon={<ClosedEyeIcon />}
          />

          <div className="form__row">
            <Checkbox title="Remember me" />
            <a href="/">Forgot Password?</a>
          </div>
          <Button type="submit" title="Sign in"></Button>
          
        </form>
        <Button  title="Sign in with Google" addClass="_secondary" icon={<GoogleIcon />}>
        
        </Button>
        {/* <a href="/" className="login__google">
          <GoogleIcon />
          <span>Sign in with Google</span>
        </a> */}
        <div className="login__sign-up">
          Don’t have an account?{" "}
          <span>
            {" "}
            <a href="/">Sign up</a>
          </span>
        </div>
      </div>
    </>
  );
}

export default Login;
