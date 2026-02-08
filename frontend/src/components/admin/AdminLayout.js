// import { Outlet, useNavigate } from 'react-router-dom';
// import { LayoutDashboard, FolderOpen, Star, LogOut, Mail } from 'lucide-react';
// import { useState } from 'react';

// export default function AdminLayout() {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('projects');

//   const handleLogout = () => {
//     localStorage.removeItem('adminToken');
//     navigate('/admin/login');
//   };

//   const tabs = [
//     { id: 'projects', icon: FolderOpen, label: 'Projects' },
//     { id: 'reviews', icon: Star, label: 'Reviews' },
//     { id: 'contacts', icon: Mail, label: 'Contacts' },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white border-r border-[#E2E8F0] fixed h-full">
//         <div className="p-6 border-b border-[#E2E8F0]">
//           <div className="flex items-center space-x-3">
//             <img 
//               src="https://customer-assets.emergentagent.com/job_dcbfcb33-f727-4503-be07-af4fc803bc4e/artifacts/318nxd4a_Screenshot%202026-02-07%20at%2010.15.58%E2%80%AFPM.png" 
//               alt="WebSynthix Logo" 
//               className="h-10 w-10"
//             />
//             <div>
//               <h1 className="text-lg font-bold text-[#0F172A]">WebSynthix</h1>
//               <p className="text-xs text-[#64748B]">Admin Panel</p>
//             </div>
//           </div>
//         </div>

//         <nav className="p-4">
//           {tabs.map((tab) => {
//             const Icon = tab.icon;
//             return (
//               <button
//                 key={tab.id}
//                 data-testid={`sidebar-${tab.id}-btn`}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md mb-2 transition-colors ${
//                   activeTab === tab.id
//                     ? 'bg-purple-50 text-purple-600'
//                     : 'text-[#64748B] hover:bg-[#F8FAFC]'
//                 }`}
//               >
//                 <Icon size={20} />
//                 <span className="font-medium">{tab.label}</span>
//               </button>
//             );
//           })}
//         </nav>

//         <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#E2E8F0]">
//           <button
//             data-testid="logout-btn"
//             onClick={handleLogout}
//             className="w-full flex items-center space-x-3 px-4 py-3 rounded-md text-red-600 hover:bg-red-50 transition-colors"
//           >
//             <LogOut size={20} />
//             <span className="font-medium">Logout</span>
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 ml-64 p-8">
//         <Outlet context={{ activeTab, setActiveTab }} />
//       </main>
//     </div>
//   );
// }
import { Outlet, useNavigate } from "react-router-dom";
import { FolderOpen, Star, Mail, LogOut } from "lucide-react";
import { useState } from "react";

export default function AdminLayout() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("projects");

  const tabs = [
    { id: "projects", icon: FolderOpen, label: "Projects" },
    { id: "reviews", icon: Star, label: "Reviews" },
    { id: "contacts", icon: Mail, label: "Contacts" },
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#140020] via-[#1b0033] to-[#050505] text-white">

      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 backdrop-blur bg-white/5">

        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-bold text-purple-400">WebSynthix</h1>
          <p className="text-sm text-gray-400">Admin Panel</p>
        </div>

        <nav className="p-4 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  activeTab === tab.id
                    ? "bg-purple-600/20 text-purple-400"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-white/10">
          <button
            onClick={() => {
              localStorage.removeItem("adminToken");
              navigate("/admin/login");
            }}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-10">
        <Outlet context={{ activeTab, setActiveTab }} />
      </main>

    </div>
  );
}