import Link from "next/link";

export default function AdminSidebar() {
  const menuItems = [
    { name: "Dashboard", href: "/admin" },
    { name: "Inquiries", href: "/admin/inquiries" },
    { name: "Reviews", href: "/admin/reviews" },
    { name: "Gallery", href: "/admin/gallery" },
    { name: "Home", href: "/" },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-6 fixed">
      <div className="mb-10">
        <h2 className="text-xl font-bold tracking-widest uppercase">Admin</h2>
        <p className="text-xs text-gray-400 mt-1">Makeup Artist By Maymyo</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block px-4 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
