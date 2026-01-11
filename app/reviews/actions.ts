"use server";

import { z } from "zod";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const reviewSchema = z.object({
  clientName: z.string().min(1, "Name is required"),
  rating: z.coerce.number().min(1).max(5),
  comment: z.string().min(10, "Review must be at least 10 characters"),
});

export type ReviewState = {
  message: string;
  success?: boolean;
  errors?: {
    clientName?: string[];
    rating?: string[];
    comment?: string[];
  };
};

export async function submitReview(
  prevState: ReviewState,
  formData: FormData
): Promise<ReviewState> {
  const clientName = formData.get("clientName") as string;
  const rating = formData.get("rating");
  const comment = formData.get("comment") as string;

  const validatedFields = reviewSchema.safeParse({
    clientName,
    rating,
    comment,
  });

  if (!validatedFields.success) {
    return {
      message: "Please fix the errors below.",
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.review.create({
      data: {
        clientName: validatedFields.data.clientName,
        rating: validatedFields.data.rating,
        comment: validatedFields.data.comment,
        isApproved: false, // Default to false, requiring admin approval
      },
    });

    revalidatePath("/reviews");
    revalidatePath("/admin");
    revalidatePath("/admin/reviews");

    return {
      success: true,
      message: "Review submitted for approval! Thank you.",
    };
  } catch (error) {
    console.error("Failed to submit review:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
