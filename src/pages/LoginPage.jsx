import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle login submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost/homecare/login.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await res.text();

            if (result.includes("success")) {
                setMessage("Login successful!");

                // Redirect to homepage after 1 second
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else {
                setMessage(result);
            }
        } catch (error) {
            setMessage("Could not connect to server.");
        }
    };

    return (
        <main className="flex items-center justify-center">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg m-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Welcome
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Log in to access your account
                    </p>
                </div>

                {message && (
                    <p className="text-center text-blue-700/90 font-semibold">{message}</p>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-lg space-y-4">
                        <div>
                            <input
                                className="form-input rounded-lg block w-full px-4 py-3 border bg-background-light border-gray-300 text-slate-900 text-sm focus:outline-none"
                                name="email"
                                id="email"
                                placeholder="Email address"
                                required
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <input
                                className="form-input rounded-lg block w-full px-4 py-3 border bg-background-light border-gray-300 text-slate-900 text-sm focus:outline-none"
                                name="password"
                                placeholder="Password"
                                id="password"
                                required
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-end">
                        <a className="text-sm font-medium text-blue-700/90 hover:text-blue-700/80" href="#">
                            Forgot Password?
                        </a>
                    </div>

                    <div>
                        <button
                            className="w-full flex justify-center py-3 px-4 text-sm font-bold rounded-lg text-white bg-blue-700/90 hover:bg-blue-700/80 transition-colors"
                            type="submit" id="loginBtn">
                            Log In
                        </button>
                    </div>

                    <p className="text-center text-sm text-gray-600">
                        Don't have an account?
                        <Link  to="/sign-up" className="font-medium text-blue-700/90 hover:text-blue-700/80 ml-1" >
                            Create Account
                        </Link>
                    </p>
                </form>
            </div>
        </main>
    );
};

export default LoginPage;
