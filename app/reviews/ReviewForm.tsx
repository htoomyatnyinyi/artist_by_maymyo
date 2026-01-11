"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitReview } from "./actions";

const initialState = {
  message: "",
  success: false,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-block px-8 py-3 bg-black text-white text-xs font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors disabled:opacity-50"
    >
      {pending ? "Submitting..." : "Submit Review"}
    </button>
  );
}

export default function ReviewForm() {
  const [state, formAction] = useActionState(submitReview, initialState);

  if (state.success) {
    return (
      <div className="p-6 bg-green-50 text-green-800 rounded-md border border-green-100">
        <p className="font-medium text-lg mb-2">Thank you!</p>
        <p className="text-sm">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="text-left space-y-6 bg-[#f9f9f9] text-gray-500 p-8 md:p-12 rounded-sm border border-gray-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="clientName"
            className="text-xs font-bold uppercase tracking-wider"
          >
            Your Name
          </label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-black transition-colors"
            placeholder="Enter your name"
          />
          {state.errors?.clientName && (
            <p className="text-red-500 text-xs mt-1">
              {state.errors.clientName[0]}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="rating"
            className="text-xs font-bold uppercase tracking-wider text-gray-800"
          >
            Rating
          </label>
          <select
            id="rating"
            name="rating"
            className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-black transition-colors"
            defaultValue="5"
          >
            <option value="5">5 ★★★★★</option>
            <option value="4">4 ★★★★☆</option>
            <option value="3">3 ★★★☆☆</option>
            <option value="2">2 ★★☆☆☆</option>
            <option value="1">1 ★☆☆☆☆</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="comment"
          className="text-xs font-bold uppercase tracking-wider text-gray-800"
        >
          Your Review
        </label>
        <textarea
          id="comment"
          name="comment"
          rows={4}
          className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-black transition-colors resize-none"
          placeholder="Tell us about your experience..."
        />
        {state.errors?.comment && (
          <p className="text-red-500 text-xs mt-1">{state.errors.comment[0]}</p>
        )}
      </div>

      <div className="pt-2">
        <SubmitButton />
      </div>

      {state.message && !state.success && (
        <p className="text-red-500 text-sm mt-4 text-center">{state.message}</p>
      )}
    </form>
  );
}
