"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTypedDispatch, useTypedSelector } from "core/hooks";
import { login } from "core/actions/auth"; // ✅ your createAsyncThunk login
import { Oval } from "react-loader-spinner";
import { LOGIN_FORM_FIELDS } from "core/utils/consts";
import { frontendRoutes } from "core/routes/frontendRoutes";

export default function Login() {
  const dispatch = useTypedDispatch();
  const router = useRouter();

  // 🔑 Grab state from createSlice
  const isAuthenticated = useTypedSelector(
    (state) => state.authRoot.isAuthenticated
  );
  const loading = useTypedSelector((state) => state.authRoot.loading);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  // Reset form on unmount or after successful login
  useEffect(() => {
    if (isAuthenticated) {
      // If login succeeded, redirect
      router.push(frontendRoutes.dashboard);
    }
  }, [isAuthenticated, router]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      dispatch(login({ username, password }));
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2 text-center">
        httpOnly Auth | Login
      </h1>
      <p className="text-gray-600 text-center mb-6">
        Login page for this auth tutorial.
      </p>

      <form
        className="bg-white shadow-md rounded-2xl p-6 space-y-4"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl font-semibold mb-4">Log into your Account</h3>

        {LOGIN_FORM_FIELDS.map((field) => (
          <div key={field.name} className="flex flex-col">
            <label
              htmlFor={field.name}
              className="mb-1 text-sm font-medium text-gray-700"
            >
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              value={formData[field.name as keyof typeof formData]}
              onChange={onChange}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
        ))}

        {loading ? (
          <button className="flex justify-center mt-4 w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">
            <Oval
              height={40}
              width={40}
              color="#2563eb"
              secondaryColor="#93c5fd"
              strokeWidth={4}
              strokeWidthSecondary={4}
              ariaLabel="loading"
            />
          </button>
        ) : (
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        )}
      </form>
    </div>
  );
}
