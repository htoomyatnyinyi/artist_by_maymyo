"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import cloudinary from "@/lib/cloudinary";

const schema = z.object({
  file: z.instanceof(File).refine((file) => file.size > 0, {
    message: "File is required",
  }),
  title: z.string().optional(),
  category: z.enum(["Bridal", "Editorial", "Occasional"]),
});

export type GalleryState = {
  message?: string;
  success?: boolean;
};

export async function addGalleryImage(
  prevState: GalleryState,
  formData: FormData
): Promise<GalleryState> {
  try {
    const file = formData.get("file");
    const title = formData.get("title") as string;
    const category = formData.get("category") as string;

    if (!file || !(file instanceof File) || file.size === 0) {
      console.log("File validation failed", { file });
      return { success: false, message: "No file provided" };
    }

    const validation = schema.safeParse({ file, title, category });
    if (!validation.success) {
      console.log("Schema validation failed", validation.error);
      return { success: false, message: "Invalid input" };
    }

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Check if it's an image at all
    if (!file.type.startsWith("image/")) {
      return { message: "File must be an image", success: false };
    }

    // Optional: Limit file size (e.g., 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return { message: "Image must be less than 10MB", success: false };
    }

    // Upload to Cloudinary using a stream
    const result = await new Promise<any>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "makeup-artist-portfolio",
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      uploadStream.end(buffer);
    });

    const url = result.secure_url;

    await prisma.galleryImage.create({
      data: {
        url,
        title: validation.data.title,
        category: validation.data.category,
      },
    });

    revalidatePath("/gallery");
    revalidatePath("/admin/gallery");
    return { success: true };
  } catch (error) {
    console.error("Server Action failed:", error);
    return { success: false, message: "An error occurred during upload." };
  }
}

export async function deleteGalleryImage(id: string) {
  await prisma.galleryImage.delete({ where: { id } });
  revalidatePath("/gallery");
  revalidatePath("/admin/gallery");
}
