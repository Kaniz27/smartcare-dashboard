"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

interface DonationFormData {
  name: string;
  phone: string;
  amount: number;
}

const DonationComponent: React.FC = () => {
  const [formData, setFormData] = useState<DonationFormData>({
    name: "",
    phone: "",
    amount: 0,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || formData.amount <= 0) {
      toast.error("Fill all required ❌");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      toast.success(
        `Thanks ${formData.name}! ৳${formData.amount}Donation Done  `
      );

      setFormData({ name: "", phone: "", amount: 0 });
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
            className="w-full border rounded px-3 py-2"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Phone Number"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Amount (৳)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount || ""}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter Amount"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#2b6771] text-white py-2 rounded hover:bg-[#234d57]"
        >
          {isSubmitting ? "Processing..." : "Donate"}
        </button>
      </form>
    </div>
  );
};

export default DonationComponent;
