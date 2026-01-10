import prisma from "@/lib/prisma";
import Image from "next/image";
import { deleteGalleryImage } from "./actions";
import GalleryForm from "./GalleryForm";

export default async function AdminGalleryPage() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Manage Gallery</h1>

      <GalleryForm />

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="relative group aspect-3/4 bg-gray-100 rounded overflow-hidden"
          >
            <Image
              src={img.url}
              alt={img.title || ""}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <form action={deleteGalleryImage.bind(null, img.id)}>
                <button className="text-white text-xs font-bold uppercase border border-white px-4 py-2 hover:bg-white hover:text-black transition">
                  Delete
                </button>
              </form>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[10px] p-2 truncate">
              {img.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
