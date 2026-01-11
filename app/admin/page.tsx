import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const reviewsCount = await prisma.review.count();
  const pendingReviewsCount = await prisma.review.count({
    where: { isApproved: false },
  });
  const inquiriesCount = await prisma.contactInquiry.count();
  const galleryCount = await prisma.galleryImage.count();

  const cards = [
    { title: "Total Reviews", value: reviewsCount },
    {
      title: "Pending Reviews",
      value: pendingReviewsCount,
      highlight: pendingReviewsCount > 0,
    },
    { title: "Inquiries", value: inquiriesCount },
    { title: "Gallery Images", value: galleryCount },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`bg-white p-6 rounded-lg shadow-sm border ${
              card.highlight ? "border-red-200 bg-red-50" : "border-gray-200"
            }`}
          >
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              {card.title}
            </h3>
            <p
              className={`text-4xl font-bold mt-2 ${
                card.highlight ? "text-red-700" : "text-gray-900"
              }`}
            >
              {card.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
        <div className="flex gap-4">
          {/* Placeholder for quick actions */}
          <p className="text-gray-500 text-sm">
            Select a module from the sidebar to manage content.
          </p>
        </div>
      </div>
    </div>
  );
}
