// components/ContactForm.tsx
import { useState } from "react";
import DynamicShadowText from "./DynamicShadowText";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Error sending message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 mb-12 md:flex-row md:justify-center">
      <span className="text-4xl mt-12">
        <DynamicShadowText text="Reach out!" />
      </span>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-end">
        <div className="flex gap-2 items-end">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="border-2 border-dotted border-blossom rounded bg-floral-white px-1"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-2 items-end">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="border-2 border-dotted border-blossom rounded bg-floral-white px-1"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-2 items-end">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            className="border-2 border-dotted border-blossom rounded bg-floral-white px-1"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Send</button>
        <p>{status}</p>
      </form>
    </div>
  );
};

export default ContactForm;
