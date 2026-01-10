"use client";

import { useActionState } from "react";
import { sendContactForm } from "./actions";

const initialState = {
  message: "",
  success: false,
  fieldValues: {
    name: "",
    email: "",
    subject: "",
    message: "",
  },
};

function SubmitButton() {
  // We can use useFormStatus here if we want loading state,
  // but for simplicity we'll just style the button.
  // To use useFormStatus, we'd need to extract this button to a component inside the form.
  // importing from react-dom is common for us
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-black text-white text-xs font-bold uppercase tracking-widest py-4 hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}

// Helper to get pending status
import { useFormStatus } from "react-dom";

export default function ContactPage() {
  const [state, formAction] = useActionState(sendContactForm, initialState);

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-16 text-center px-6">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
          Inquiries
        </p>
        <h1 className="text-4xl md:text-6xl font-serif mb-6">Get in Touch</h1>
        <p className="max-w-xl mx-auto text-gray-500 font-light leading-relaxed">
          For bookings, collaborations, or just to say hello, please fill out
          the form below. I typically respond within 24 hours.
        </p>
      </section>

      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
          {/* Contact Info */}
          <div className="w-full md:w-1/3 space-y-12">
            <div>
              <h3 className="text-xl font-serif mb-4">Location</h3>
              <p className="text-gray-500 font-light">
                Based in Yangon, Myanmar.
                <br />
                Available for travel worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">Contact</h3>
              <p className="text-gray-500 font-light">
                <a
                  href="mailto:hello@maymyo.com"
                  className="hover:text-black transition-colors"
                >
                  hello@maymyo.com
                </a>
                <br />
                +95 9 123 456 789
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">Social</h3>
              <div className="flex space-x-6 text-sm text-gray-500 font-bold uppercase tracking-wider">
                <a href="#" className="hover:text-black transition-colors">
                  Instagram
                </a>
                <a href="#" className="hover:text-black transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full md:w-2/3">
            <form action={formAction} className="space-y-8">
              {state.message && (
                <div
                  className={`p-4 text-sm ${
                    state.success
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {state.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold uppercase tracking-wider text-gray-800"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={state.fieldValues?.name}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300 text-gray-800"
                    placeholder="Jane Doe"
                  />
                  {state.errors?.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {state.errors.name[0]}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold uppercase tracking-wider text-gray-800"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={state.fieldValues?.email}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300 text-gray-800"
                    placeholder="jane@example.com"
                  />
                  {state.errors?.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {state.errors.email[0]}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-xs font-bold uppercase tracking-wider text-gray-800"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  defaultValue={state.fieldValues?.subject}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300 text-gray-800"
                  placeholder="Bridal Inquiry, Collaboration, etc."
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-bold uppercase tracking-wider text-gray-800"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  defaultValue={state.fieldValues?.message}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300 text-gray-800 resize-none"
                  placeholder="Tell me about your event..."
                />
                {state.errors?.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {state.errors.message[0]}
                  </p>
                )}
              </div>

              <div className="pt-4">
                <SubmitButton />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
