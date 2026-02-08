// import { Mail, Calendar } from 'lucide-react';

// export default function ContactsTab({ contacts }) {
//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   return (
//     <div>
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-[#0F172A]">Contact Messages</h1>
//         <p className="text-[#64748B] mt-2">View messages from website visitors</p>
//       </div>

//       <div className="space-y-4">
//         {contacts.length === 0 ? (
//           <div className="bg-white border border-[#E2E8F0] rounded-lg p-12 text-center text-[#64748B]">
//             No messages yet
//           </div>
//         ) : (
//           contacts.map((contact, index) => (
//             <div key={contact.id} className="bg-white border border-[#E2E8F0] rounded-lg p-6" data-testid={`admin-contact-${index}`}>
//               <div className="flex items-start justify-between mb-4">
//                 <div>
//                   <h3 className="text-lg font-semibold text-[#0F172A] mb-1">{contact.name}</h3>
//                   <div className="flex items-center space-x-2 text-sm text-[#64748B]">
//                     <Mail size={14} />
//                     <span>{contact.email}</span>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-2 text-sm text-[#64748B]">
//                   <Calendar size={14} />
//                   <span>{formatDate(contact.createdAt)}</span>
//                 </div>
//               </div>
//               <p className="text-[#64748B]">{contact.message}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }
import { Mail, Calendar } from "lucide-react";

export default function ContactsTab({ contacts }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Contact Messages</h1>
        <p className="text-gray-400 mt-2">View messages from website visitors</p>
      </div>

      <div className="space-y-4">
        {contacts.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-lg p-12 text-center text-gray-400">
            No messages yet
          </div>
        ) : (
          contacts.map((contact, index) => (
            <div
              key={contact._id || index}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {contact.name}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Mail size={14} />
                    {contact.email}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar size={14} />
                  {formatDate(contact.createdAt)}
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {contact.message}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}