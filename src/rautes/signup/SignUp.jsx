import "./SignUp.css";
// import loginLogo from "../../assets/images/login_logo.png";
import { Si1Password } from "react-icons/si";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="subscribe_box-signup">
            {/* <img src={loginLogo} alt="" /> */}
            <div className="signup-box">
                <div className="signup-registr-box">
                    <h1 className="introduction-signup">Create account</h1>
                    <form className="form-signup" action="">
                        <div className="username-input-box-signup">
                            <label htmlFor="username-input-signup">Your name</label>
                            <input
                                id="username-input-signup"
                                placeholder="First and last name"
                                className="username-input-signup"
                                type="text"
                            />
                        </div>
                        <div className="email-input-box-signup">
                            <label htmlFor="email-input-signup">Email</label>
                            <input
                                required
                                type="text"
                                name=""
                                id="email-input-signup"
                                className="email-input-signup"
                            />
                        </div>
                        <div className="password-input-box-signup">
                            <label htmlFor="password-input-signup">Password</label>
                            <input
                                required
                                id="password-input-signup"
                                placeholder="At least 6 characters"
                                className="password-input-signup"
                                type="text"
                            />
                            <div className="warning-box-signup">
                                <Si1Password />{" "}
                                <span>Passwords must be at least 6 characters.</span>
                            </div>
                        </div>
                        <div className="password-input-repeat-box">
                            <label htmlFor="password-input-repeat-signup">
                                Re-enter password
                            </label>
                            <input
                                required
                                id="password-input-repeat-signup"
                                className="password-input-repeat-signup"
                                type="text"
                            />
                        </div>
                        <button className="btn-create-account-signup">
                            Create your Amazon account{" "}
                        </button>
                    </form>
                    <p className="signup-conditions-text">
                        By continuing, you agree to Amazon's{" "}
                        <span className="condition-text-signup-link">
                            {" "}
                            Conditions of Use{" "}
                        </span>{" "}
                        and{" "}
                        <span className="condition-text-signup-link"> Privacy Notice </span>
                        .{" "}
                    </p>
                    <div className="moreinfo-box-signup">
                        <p>Already have an account?</p>{" "}
                        <Link to="/login" className="signin-link-account">
                            Sign in <FaCaretRight />{" "}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Signup;