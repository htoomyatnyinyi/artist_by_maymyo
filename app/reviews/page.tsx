import prisma from "@/lib/prisma";
import Image from "next/image";
// import ReviewForm from "./ReviewForm";
import ReviewForm from "./ReviewForm";

async function getReviews() {
  const reviews = await prisma.review.findMany({
    where: { isApproved: true },
    orderBy: { createdAt: "desc" },
  });
  return reviews;
}

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <div className="pt-24 min-h-screen bg-[#fcfcfc]">
      {/* Header */}
      <section className="py-16 text-center px-6">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
          Testimonials
        </p>
        <h1 className="text-4xl md:text-6xl font-serif mb-6">Client Love</h1>
        <p className="max-w-xl mx-auto text-gray-500 font-light leading-relaxed">
          Kind words from beautiful faces. It is an honor to be a part of your
          special moments.
        </p>
      </section>

      {/* Reviews Grid */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No reviews yet. Be the first to share your experience!
            </p>
          ) : (
            reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  <p className="text-gray-600 italic font-light leading-relaxed">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                <div className="flex items-center mt-6 gap-4">
                  {review.imageUrl ? (
                    <Image
                      src={review.imageUrl}
                      alt={review.clientName}
                      width={40}
                      height={40}
                      className="rounded-full object-cover w-10 h-10 border border-gray-200"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold">
                      {review.clientName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider">
                      {review.clientName}
                    </h4>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                      Verified Client
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Submission Form Section */}
      <section className="bg-white border-t border-gray-100 py-24 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-serif">Share Your Experience</h2>
          <p className="text-gray-500 font-light">
            Have we worked together? I would love to hear your thoughts.
          </p>

          <ReviewForm />
        </div>
      </section>
    </div>
  );
}
