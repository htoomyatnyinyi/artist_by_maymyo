"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import cloudinary from "@/lib/cloudinary";

const schema = z.object({
  title: z.string().optional(),
  category: z.string().optional(),
});

export type GalleryState = {
  message?: string;
  success?: boolean;
};

export async function addGalleryImage(
  prevState: GalleryState,
  formData: FormData
): Promise<GalleryState> {
  const file = formData.get("file") as File;
  const title = formData.get("title") as string;
  const category = formData.get("category") as string;

  if (!file || file.size === 0) {
    return { success: false, message: "No file provided" };
  }

  const validation = schema.safeParse({ title, category });
  if (!validation.success) {
    return { success: false, message: "Invalid input" };
  }

  try {
    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudinary using a stream
    const result = await new Promise<any>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "makeup-artist-portfolio",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
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
    console.error("Upload failed:", error);
    return { success: false, message: "Upload failed" };
  }
}

export async function deleteGalleryImage(id: string) {
  await prisma.galleryImage.delete({ where: { id } });
  revalidatePath("/gallery");
  revalidatePath("/admin/gallery");
}
