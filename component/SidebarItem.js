"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const SidebarItem = ({ icon: Icon, title, path }) => {
  const currentPath = usePathname();
  return (
    <li className={`rounded-start-pill sidebar-item py-2 px-2 mx-lg-0 px-lg-4 ${currentPath.startsWith(path) ? "active" : ""}`}>
      <Link
        className="sidebar-link icon-link text-gray-300 fw-medium"
        href={path}
      >
        <Icon className="page-title me-lg-2" />
        <span className="d-none d-lg-block">{title}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
