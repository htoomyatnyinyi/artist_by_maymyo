"use client";

import { addGalleryImage } from "./actions";
import { useActionState, useState, useRef } from "react";

const initialState = {
  message: "",
  success: false,
};

export default function GalleryForm() {
  const [state, formAction, pending] = useActionState(
    addGalleryImage,
    initialState
  );
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle image preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-8">
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Gallery Upload
          </h2>
          <p className="text-gray-500 text-sm">
            Add high-quality images to your professional portfolio.
          </p>
        </div>

        {state.message && (
          <div
            className={`mb-6 p-4 rounded-xl text-sm font-medium flex items-center gap-3 ${
              state.success
                ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                : "bg-rose-50 text-rose-700 border border-rose-100"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-current shrink-0" />
            {state.message}
          </div>
        )}

        <form action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: File Upload Area */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Image Asset
              </label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className={`relative group cursor-pointer border-2 border-dashed rounded-2xl transition-all duration-200 aspect-video flex flex-col items-center justify-center overflow-hidden
                  ${
                    preview
                      ? "border-indigo-400"
                      : "border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/30"
                  }`}
              >
                {preview ? (
                  <>
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-medium">
                      Change Image
                    </div>
                  </>
                ) : (
                  <div className="text-center p-6">
                    <div className="mx-auto h-12 w-12 text-gray-400 group-hover:text-indigo-500 transition-colors">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      PNG, JPG up to 10MB
                    </p>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  name="file"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  required
                />
              </div>
            </div>

            {/* Right Column: Metadata */}
            <div className="flex flex-col gap-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  Image Title
                </label>
                <input
                  name="title"
                  type="text"
                  placeholder="e.g. Summer Sunset in Paris"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  Category
                </label>
                <select
                  name="category"
                  defaultValue="Bridal"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 outline-none transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207L10%2012L15%207%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-length:20px_20px bg-right_1rem_center bg-no-repeat"
                >
                  <option value="Bridal">Bridal</option>
                  <option value="Editorial">Editorial</option>
                  <option value="Occasion">Occasion</option>
                </select>
              </div>

              <div className="mt-auto pt-4">
                <button
                  type="submit"
                  disabled={pending}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
                >
                  {pending ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Uploading...
                    </>
                  ) : (
                    "Publish Image"
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// "use client";

// // import { useFormStatus } from "react-dom";
// import { addGalleryImage } from "./actions";
// import { useActionState } from "react";

// const initialState = {
//   message: "",
//   success: false,
// };

// function SubmitButton({ status }: { status: any }) {
//   return (
//     <button
//       type="submit"
//       disabled={status}
//       className="bg-black text-white px-6 py-2 rounded text-sm font-bold uppercase h-10 w-32 disabled:opacity-50 disabled:cursor-not-allowed"
//     >
//       {status ? "Uploading..." : "Add"}
//     </button>
//   );
// }

// export default function GalleryForm() {
//   const [state, formAction, pending] = useActionState(
//     addGalleryImage,
//     initialState
//   );

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
//       <h2 className="text-lg font-bold mb-4">Add New Image</h2>

//       {state.message && (
//         <div
//           className={`mb-4 p-3 rounded text-sm ${
//             state.success
//               ? "bg-green-50 text-green-800"
//               : "bg-red-50 text-red-800"
//           }`}
//         >
//           {state.message}
//         </div>
//       )}

//       <form
//         action={formAction}
//         className="flex flex-col md:flex-row gap-4 items-end"
//       >
//         <div className="flex-1 space-y-1 w-full">
//           <label className="text-xs font-bold uppercase">Upload Image</label>
//           <input
//             name="file"
//             type="file"
//             accept="image/*"
//             required
//             className="w-full border p-2 rounded"
//           />
//         </div>
//         <div className="flex-1 space-y-1 w-full">
//           <label className="text-xs font-bold uppercase">Title</label>
//           <input
//             name="title"
//             type="text"
//             required
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         <div className="w-full md:w-48 space-y-1">
//           <label className="text-xs font-bold uppercase">Category</label>
//           <select
//             name="category"
//             defaultValue="Bridal"
//             className="w-full border p-2 rounded"
//           >
//             <option value="Bridal">Bridal</option>
//             <option value="Editorial">Editorial</option>
//             <option value="Occasion">Occasion</option>
//           </select>
//         </div>
//         <SubmitButton status={pending} />
//       </form>
//     </div>
//   );
// }
