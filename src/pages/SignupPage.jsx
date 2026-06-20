import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Password match validation
        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match!");
            return;
        }

        // Send data to PHP API
        try {
            const response = await fetch("http://localhost/homecare/register.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const result = await response.text();
            setMessage(result);
        } catch (error) {
            setMessage("Error connecting to server");
        }
    };

    return (
        <main className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl w-full max-w-md space-y-8 bg-white">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-slate-900">
                        Create Account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Join our platform to find trusted local professionals.
                    </p>
                </div>

                {/* Show Message */}
                {message && (
                    <p className="text-center text-red-600 font-semibold">{message}</p>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3 rounded-md shadow-sm -space-y-px p-5">

                        <div>
                            <input
                                className="rounded-lg block w-full px-4 py-3 border border-gray-300 text-sm"
                                name="name"
                                placeholder="Full Name"
                                required
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <input
                                className="rounded-lg block w-full px-4 py-3 border border-gray-300 text-sm"
                                name="email"
                                placeholder="Email Address"
                                required
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <input
                                className="rounded-lg block w-full px-4 py-3 border border-gray-300 text-sm"
                                name="password"
                                placeholder="Password"
                                required
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <input
                                className="rounded-lg block w-full px-4 py-3 border border-gray-300 text-sm"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                required
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            className="w-full py-3 px-4 text-sm font-bold rounded-lg text-white bg-blue-700 hover:bg-blue-600 transition-colors"
                            type="submit" >
                            Sign Up
                        </button>

                        <div className="text-center text-sm">
                            <p className="text-gray-600">
                                Already have an account?
                                <Link
                                    to="/login"
                                    className="font-medium text-blue-700 ml-1">
                                    Login
                                </Link>
                            </p>
                        </div>

                    </div>
                </form>
            </div>
        </main>
    );
};

export default SignupPage;
