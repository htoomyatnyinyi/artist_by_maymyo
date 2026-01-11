import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminInquiriesPage() {
  const inquiries = await prisma.contactInquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Inquiries</h1>
      <div className="space-y-4">
        {inquiries.map((inquiry: any) => (
          <div
            key={inquiry.id}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold">
                  {inquiry.subject || "No Subject"}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  From: {inquiry.name} ({inquiry.email})
                </p>
              </div>
              <span className="text-xs text-gray-400">
                {inquiry.createdAt.toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700 mt-4 whitespace-pre-wrap bg-gray-50 p-4 rounded-md text-sm">
              {inquiry.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
