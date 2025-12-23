"use client";

import React, { useState } from "react";

interface DonationFormData {
  name: string;
  email: string;
  amount: number;
}

const DonationComponent: React.FC = () => {
  const [formData, setFormData] = useState<DonationFormData>({
    name: "",
    email: "",
    amount: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || formData.amount <= 0) {
      alert("Sob field fill korte hobe ar amount 0 er beshi hote hobe");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      // Normally backend API call ekhane hobe
      setIsSubmitting(false);
      setSuccessMessage(
        `Thank you, ${formData.name}! Your donation of $${formData.amount} was successful.`
      );
      setFormData({ name: "", email: "", amount: 0 });
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#2b6771]">
        Donate Now
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Amount ($)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter Amount"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#2b6771] text-white py-2 rounded hover:bg-[#234d57] transition"
        >
          {isSubmitting ? "Processing..." : "Donate"}
        </button>
      </form>

      {successMessage && (
        <p className="mt-4 p-3 bg-green-100 text-green-700 rounded">
          {successMessage}
        </p>
      )}
    </div>
  );
};

export default DonationComponent;
