import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { GrDashboard } from "react-icons/gr";

export default function AdminSidebar() {
  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: <GrDashboard /> },
    { name: "Inquiries", href: "/admin/inquiries", icon: <FaComments /> },
    { name: "Reviews", href: "/admin/reviews", icon: <FaStar /> },
    { name: "Gallery", href: "/admin/gallery", icon: <FaImage /> },
    { name: "Home", href: "/", icon: <FaHome /> },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white h-full p-6 overflow-y-auto">
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
            <div className="flex items-center">
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
