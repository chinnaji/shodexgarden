import React from "react";
import AdminNavbar from "./AdminNavbar";

function AdminLayout({ children }) {
  return (
    <div>
      <AdminNavbar />
      <main>{children}</main>
    </div>
  );
}

export default AdminLayout;
