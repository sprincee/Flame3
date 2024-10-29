"use client";  // Ensures this component runs on the client-side

import { useState } from "react";
import { useAuth, useSigninWithEmailAndPassword, useCreateUserWithEmailAndPassword } from "reactfire";

export default function AuthPage() {
  const auth = useAuth();  // Access Firebase Auth instance
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSigninWithEmailAndPassword(auth);
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signInWithEmailAndPassword(email, password);
    alert("Logged in successfully!");
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    alert("Account created successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign In / Register</h1>

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded w-80"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-80"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>

      <button
        onClick={handleRegister}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Register
      </button>
    </div>
  );
}
