"use client";

import { useState } from "react";
import { useTypedSelector } from "core/hooks";
import { REGISTER_FORM_FIELDS } from "core/utils/consts";
import { register } from "core/actions/auth";
import { useTypedDispatch } from "core/hooks";
import { useRouter } from "next/navigation";
import { Oval } from "react-loader-spinner";
import { frontendRoutes } from "core/routes/frontendRoutes";

export default function RegisterPage() {
  const dispatch = useTypedDispatch();
  const router = useRouter();
  const register_success = useTypedSelector(
    (state) => state.authRoot.register_success
  );
  const isAuthenticated = useTypedSelector(
    (state) => state.authRoot.isAuthenticated
  );

  const loading = useTypedSelector((state) => state.authRoot.loading);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    re_password: "",
  });

  const { first_name, last_name, username, password, re_password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      register({ first_name, last_name, username, password, re_password })
    );
  };

  if (typeof window !== "undefined" && isAuthenticated)
    router.push(frontendRoutes.dashboard);

  if (register_success) router.push(frontendRoutes.auth.login);

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2 text-center">
        httpOnly Auth | Register
      </h1>
      <p className="text-gray-600 text-center mb-6">
        Register page for this auth tutorial.
      </p>

      <form
        className="bg-white shadow-md rounded-2xl p-6 space-y-4"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl font-semibold mb-4">Create Account</h3>

        {REGISTER_FORM_FIELDS.map((field) => (
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
              height={20}
              width={20}
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
            Create Account
          </button>
        )}
      </form>
    </div>
  );
}
