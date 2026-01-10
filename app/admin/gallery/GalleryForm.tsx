"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { addGalleryImage } from "./actions";

const initialState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-black text-white px-6 py-2 rounded text-sm font-bold uppercase h-10 w-32 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Uploading..." : "Add"}
    </button>
  );
}

export default function GalleryForm() {
  // @ts-ignore - Types for useActionState can be tricky with server actions sometimes depending on next/react versions
  const [state, formAction] = useActionState(addGalleryImage, initialState);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
      <h2 className="text-lg font-bold mb-4">Add New Image</h2>

      {state.message && (
        <div
          className={`mb-4 p-3 rounded text-sm ${
            state.success
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {state.message}
        </div>
      )}

      <form
        action={formAction}
        className="flex flex-col md:flex-row gap-4 items-end"
      >
        <div className="flex-1 space-y-1 w-full">
          <label className="text-xs font-bold uppercase">Upload Image</label>
          <input
            name="file"
            type="file"
            accept="image/*"
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="w-full md:w-48 space-y-1">
          <label className="text-xs font-bold uppercase">Category</label>
          <select name="category" className="w-full border p-2 rounded">
            <option value="Bridal">Bridal</option>
            <option value="Editorial">Editorial</option>
            <option value="Occasion">Occasion</option>
          </select>
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}
