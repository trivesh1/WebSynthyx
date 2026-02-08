// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'sonner';
// import { Lock, Mail } from 'lucide-react';

// const BACKEND_URL = process.env.REACT_APP_API;
// const API = `${BACKEND_URL}/api`;
// console.log(API)

// export default function AdminLogin() {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await axios.post(`${API}/login`, credentials);
//       localStorage.setItem('adminToken', response.data.token);
//       toast.success('Login successful!');
//       navigate('/admin/dashboard');
//     } catch (error) {
//       toast.error('Invalid credentials');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6">
//       <div className="max-w-md w-full">
//         <div className="text-center mb-8">
//           <img 
//             src="https://customer-assets.emergentagent.com/job_dcbfcb33-f727-4503-be07-af4fc803bc4e/artifacts/318nxd4a_Screenshot%202026-02-07%20at%2010.15.58%E2%80%AFPM.png" 
//             alt="WebSynthix Logo" 
//             className="h-16 w-16 mx-auto mb-4"
//           />
//           <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Admin Login</h1>
//           <p className="text-[#64748B]">Sign in to manage your website</p>
//         </div>

//         <div className="bg-white rounded-lg border border-[#E2E8F0] p-8">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-[#0F172A] text-sm font-medium mb-2" htmlFor="admin-email">
//                 Email
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]" size={20} />
//                 <input
//                   id="admin-email"
//                   data-testid="admin-email-input"
//                   type="email"
//                   required
//                   value={credentials.email}
//                   onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
//                   className="w-full border border-[#E2E8F0] rounded-md pl-10 pr-4 py-2 text-[#0F172A] focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
//                   placeholder="admin@websynthix.com"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-[#0F172A] text-sm font-medium mb-2" htmlFor="admin-password">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]" size={20} />
//                 <input
//                   id="admin-password"
//                   data-testid="admin-password-input"
//                   type="password"
//                   required
//                   value={credentials.password}
//                   onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
//                   className="w-full border border-[#E2E8F0] rounded-md pl-10 pr-4 py-2 text-[#0F172A] focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
//                   placeholder="••••••••"
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               data-testid="admin-login-btn"
//               disabled={loading}
//               className="w-full bg-purple-600 text-white hover:bg-purple-700 rounded-md px-4 py-2 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? 'Signing in...' : 'Sign In'}
//             </button>
//           </form>

//           <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-md">
           
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "sonner";
// import { Lock, Mail } from "lucide-react";

// const BACKEND_URL = process.env.REACT_APP_API;
// const API = `${BACKEND_URL}/api`;

// export default function AdminLogin() {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await axios.post(`${API}/login`, credentials);
//       localStorage.setItem("adminToken", res.data.token);
//       toast.success("Login successful");
//       navigate("/admin/dashboard");
//     } catch {
//       toast.error("Invalid credentials");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
//       <div className="max-w-md w-full">

//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//             Admin Login
//           </h1>
//           <p className="text-gray-500">
//             Sign in to manage your website
//           </p>
//         </div>

//         <div className="bg-white rounded-lg border p-8">

//           <form onSubmit={handleSubmit} className="space-y-6">

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email
//               </label>

//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

//                 <input
//                   type="email"
//                   required
//                   value={credentials.email}
//                   onChange={(e) =>
//                     setCredentials({ ...credentials, email: e.target.value })
//                   }
//                   className="w-full border rounded pl-10 pr-4 py-2 outline-none focus:ring"
//                   placeholder="admin@websynthyx.com"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Password
//               </label>

//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

//                 <input
//                   type="password"
//                   required
//                   value={credentials.password}
//                   onChange={(e) =>
//                     setCredentials({ ...credentials, password: e.target.value })
//                   }
//                   className="w-full border rounded pl-10 pr-4 py-2 outline-none focus:ring"
//                   placeholder="••••••••"
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-gray-900 text-white rounded py-2 hover:bg-gray-800 disabled:opacity-50"
//             >
//               {loading ? "Signing in..." : "Sign In"}
//             </button>
//           </form>

//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import { Lock, Mail } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_API;
const API = `${BACKEND_URL}/api`;
console.log(API)

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${API}/login`, credentials);
      localStorage.setItem('adminToken', response.data.token);
      toast.success('Login successful!');
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
      <div className="max-w-md w-full">

        <div className="text-center mb-8">
          <img 
            src="https://customer-assets.emergentagent.com/job_dcbfcb33-f727-4503-be07-af4fc803bc4e/artifacts/318nxd4a_Screenshot%202026-02-07%20at%2010.15.58%E2%80%AFPM.png" 
            alt="WebSynthix Logo" 
            className="h-16 w-16 mx-auto mb-4"
          />

          <h1 className="text-3xl font-bold text-white mb-2">
            Admin Login
          </h1>

          <p className="text-gray-400">
            Sign in to manage your website
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur">

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

                <input
                  data-testid="admin-email-input"
                  type="email"
                  required
                  value={credentials.email}
                  onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  className="w-full bg-black/30 border border-white/10 rounded-md pl-10 pr-4 py-2 text-white outline-none focus:ring focus:ring-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

                <input
                  data-testid="admin-password-input"
                  type="password"
                  required
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full bg-black/30 border border-white/10 rounded-md pl-10 pr-4 py-2 text-white outline-none focus:ring focus:ring-purple-500"
                />
              </div>
            </div>

            <button
              type="submit"
              data-testid="admin-login-btn"
              disabled={loading}
              className="w-full bg-purple-600 text-white hover:bg-purple-700 rounded-md px-4 py-2 font-medium disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}