// import { useState } from 'react';
// import { Plus, Edit2, Trash2, X } from 'lucide-react';

// export default function ProjectsTab({ projects, addProject, updateProject, deleteProject }) {
//   const [showModal, setShowModal] = useState(false);
//   const [editingProject, setEditingProject] = useState(null);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     techStack: '',
//     image: ''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const success = editingProject
//       ? await updateProject(editingProject.id, formData)
//       : await addProject(formData);
    
//     if (success) {
//       setShowModal(false);
//       setEditingProject(null);
//       setFormData({ title: '', description: '', techStack: '', image: '' });
//     }
//   };

//   const handleEdit = (project) => {
//     setEditingProject(project);
//     setFormData({
//       title: project.title,
//       description: project.description,
//       techStack: project.techStack,
//       image: project.image
//     });
//     setShowModal(true);
//   };

//   const handleClose = () => {
//     setShowModal(false);
//     setEditingProject(null);
//     setFormData({ title: '', description: '', techStack: '', image: '' });
//   };

//   return (
//     <div>
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-3xl font-bold text-[#0F172A]">Projects</h1>
//         <button
//           data-testid="add-project-btn"
//           onClick={() => setShowModal(true)}
//           className="bg-purple-600 text-white hover:bg-purple-700 rounded-md px-4 py-2 font-medium transition-colors flex items-center space-x-2"
//         >
//           <Plus size={20} />
//           <span>Add Project</span>
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project, index) => (
//           <div key={project.id} className="bg-white border border-[#E2E8F0] rounded-lg overflow-hidden" data-testid={`admin-project-${index}`}>
//             <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-[#0F172A] mb-2">{project.title}</h3>
//               <p className="text-[#64748B] text-sm mb-3 line-clamp-2">{project.description}</p>
//               <p className="text-xs text-[#64748B] mb-4">{project.techStack}</p>
//               <div className="flex space-x-2">
//                 <button
//                   data-testid={`edit-project-${index}`}
//                   onClick={() => handleEdit(project)}
//                   className="flex-1 border border-purple-600 text-purple-600 hover:bg-purple-50 rounded-md px-3 py-2 text-sm font-medium transition-colors flex items-center justify-center space-x-1"
//                 >
//                   <Edit2 size={16} />
//                   <span>Edit</span>
//                 </button>
//                 <button
//                   data-testid={`delete-project-${index}`}
//                   onClick={() => deleteProject(project.id)}
//                   className="flex-1 border border-red-600 text-red-600 hover:bg-red-50 rounded-md px-3 py-2 text-sm font-medium transition-colors flex items-center justify-center space-x-1"
//                 >
//                   <Trash2 size={16} />
//                   <span>Delete</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg max-w-2xl w-full p-6">
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-2xl font-bold text-[#0F172A]">
//                 {editingProject ? 'Edit Project' : 'Add New Project'}
//               </h2>
//               <button onClick={handleClose} className="text-[#64748B] hover:text-[#0F172A]">
//                 <X size={24} />
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-[#0F172A] text-sm font-medium mb-2">Title</label>
//                 <input
//                   data-testid="project-title-input"
//                   type="text"
//                   required
//                   value={formData.title}
//                   onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                   className="w-full border border-[#E2E8F0] rounded-md px-4 py-2 text-[#0F172A] focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
//                   placeholder="Project title"
//                 />
//               </div>

//               <div>
//                 <label className="block text-[#0F172A] text-sm font-medium mb-2">Description</label>
//                 <textarea
//                   data-testid="project-description-input"
//                   required
//                   value={formData.description}
//                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                   rows={3}
//                   className="w-full border border-[#E2E8F0] rounded-md px-4 py-2 text-[#0F172A] focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
//                   placeholder="Project description"
//                 />
//               </div>

//               <div>
//                 <label className="block text-[#0F172A] text-sm font-medium mb-2">Tech Stack (comma-separated)</label>
//                 <input
//                   data-testid="project-techstack-input"
//                   type="text"
//                   required
//                   value={formData.techStack}
//                   onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
//                   className="w-full border border-[#E2E8F0] rounded-md px-4 py-2 text-[#0F172A] focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
//                   placeholder="React, Node.js, MongoDB"
//                 />
//               </div>

//               <div>
//                 <label className="block text-[#0F172A] text-sm font-medium mb-2">Image URL</label>
//                 <input
//                   data-testid="project-image-input"
//                   type="url"
//                   required
//                   value={formData.image}
//                   onChange={(e) => setFormData({ ...formData, image: e.target.value })}
//                   className="w-full border border-[#E2E8F0] rounded-md px-4 py-2 text-[#0F172A] focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
//                   placeholder="https://example.com/image.jpg"
//                 />
//               </div>

//               <div className="flex space-x-3 pt-4">
//                 <button
//                   type="button"
//                   onClick={handleClose}
//                   className="flex-1 border border-[#E2E8F0] text-[#64748B] hover:bg-[#F8FAFC] rounded-md px-4 py-2 font-medium transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   data-testid="project-submit-btn"
//                   className="flex-1 bg-purple-600 text-white hover:bg-purple-700 rounded-md px-4 py-2 font-medium transition-colors"
//                 >
//                   {editingProject ? 'Update' : 'Add'} Project
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );

// }
// import { useState } from "react";
// import { Plus, Edit2, Trash2, X } from "lucide-react";

// export default function ProjectsTab({ projects, addProject, updateProject, deleteProject }) {
//   const [showModal, setShowModal] = useState(false);
//   const [editingProject, setEditingProject] = useState(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     techStack: "",
//     image: ""
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const success = editingProject
//       ? await updateProject(editingProject._id, formData)
//       : await addProject(formData);

//     if (success) {
//       setShowModal(false);
//       setEditingProject(null);
//       setFormData({ title: "", description: "", techStack: "", image: "" });
//     }
//   };

//   const handleEdit = (project) => {
//     setEditingProject(project);
//     setFormData(project);
//     setShowModal(true);
//   };

//   const handleClose = () => {
//     setShowModal(false);
//     setEditingProject(null);
//     setFormData({ title: "", description: "", techStack: "", image: "" });
//   };

//   return (
//     <div>

//       {/* HEADER */}
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-3xl font-bold text-white">Projects</h1>

//         <button
//           onClick={() => setShowModal(true)}
//           className="bg-purple-600 hover:bg-purple-700 text-white rounded-md px-4 py-2 flex items-center gap-2"
//         >
//           <Plus size={18} />
//           Add Project
//         </button>
//       </div>

//       {/* GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//         {projects.map((project) => (
//           <div
//             key={project._id}
//             className="bg-white/5 backdrop-blur border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition"
//           >

//             <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />

//             <div className="p-4">

//               <h3 className="text-lg font-semibold text-white mb-2">
//                 {project.title}
//               </h3>

//               <p className="text-gray-300 text-sm mb-3">
//                 {project.description}
//               </p>

//               <p className="text-xs text-gray-400 mb-4">
//                 {project.techStack}
//               </p>

//               <div className="flex gap-2">

//                 <button
//                   onClick={() => handleEdit(project)}
//                   className="flex-1 border border-purple-500/40 text-purple-400 hover:bg-purple-500/10 rounded-md px-3 py-2 text-sm flex items-center justify-center gap-1"
//                 >
//                   <Edit2 size={14} /> Edit
//                 </button>

//                 <button
//                   onClick={() => deleteProject(project._id)}
//                   className="flex-1 border border-red-500/40 text-red-400 hover:bg-red-500/10 rounded-md px-3 py-2 text-sm flex items-center justify-center gap-1"
//                 >
//                   <Trash2 size={14} /> Delete
//                 </button>

//               </div>

//             </div>
//           </div>
//         ))}
//       </div>

//       {/* MODAL */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-50">

//           <div className="bg-[#12001f] border border-white/10 rounded-xl w-full max-w-xl p-6">

//             <div className="flex justify-between mb-6">
//               <h2 className="text-xl font-semibold text-white">
//                 {editingProject ? "Edit Project" : "Add Project"}
//               </h2>

//               <button onClick={handleClose} className="text-gray-400 hover:text-white">
//                 <X />
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">

//               {["title", "description", "techStack", "image"].map((field) => (
//                 <input
//                   key={field}
//                   required
//                   placeholder={field.toUpperCase()}
//                   value={formData[field]}
//                   onChange={(e) =>
//                     setFormData({ ...formData, [field]: e.target.value })
//                   }
//                   className="w-full bg-black/30 border border-white/10 rounded-md px-4 py-2 text-white outline-none focus:ring focus:ring-purple-500"
//                 />
//               ))}

//               <div className="flex gap-3 pt-4">

//                 <button
//                   type="button"
//                   onClick={handleClose}
//                   className="flex-1 border border-white/10 text-gray-300 rounded-md py-2 hover:bg-white/5"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   className="flex-1 bg-purple-600 hover:bg-purple-700 text-white rounded-md py-2"
//                 >
//                   Save
//                 </button>

//               </div>

//             </form>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }
// import { useState } from "react";
// import { Plus, Edit2, Trash2, X } from "lucide-react";

// export default function ProjectsTab({ projects, addProject, updateProject, deleteProject }) {
//   const [showModal, setShowModal] = useState(false);
//   const [editingProject, setEditingProject] = useState(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     techStack: "",
//     image: ""
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const success = editingProject
//       ? await updateProject(editingProject.id, formData)
//       : await addProject(formData);

//     if (success) {
//       setShowModal(false);
//       setEditingProject(null);
//       setFormData({ title: "", description: "", techStack: "", image: "" });
//     }
//   };

//   const handleEdit = (project) => {
//     setEditingProject(project);
//     setFormData({
//       title: project.title,
//       description: project.description,
//       techStack: project.techStack,
//       image: project.image
//     });
//     setShowModal(true);
//   };

//   const handleClose = () => {
//     setShowModal(false);
//     setEditingProject(null);
//     setFormData({ title: "", description: "", techStack: "", image: "" });
//   };

//   return (
//     <div>
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-3xl font-bold text-white">Projects</h1>

//         <button
//           data-testid="add-project-btn"
//           onClick={() => setShowModal(true)}
//           className="bg-purple-600 hover:bg-purple-700 text-white rounded-md px-4 py-2 flex items-center gap-2"
//         >
//           <Plus size={20} />
//           Add Project
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project, index) => (
//           <div
//             key={project.id}
//             data-testid={`admin-project-${index}`}
//             className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition"
//           >
//             <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />

//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-white mb-2">
//                 {project.title}
//               </h3>

//               <p className="text-gray-300 text-sm mb-3 line-clamp-2">
//                 {project.description}
//               </p>

//               <p className="text-xs text-gray-400 mb-4">
//                 {project.techStack}
//               </p>

//               <div className="flex space-x-2">

//                 <button
//                   data-testid={`edit-project-${index}`}
//                   onClick={() => handleEdit(project)}
//                   className="flex-1 border border-purple-500/40 text-purple-400 hover:bg-purple-500/10 rounded-md px-3 py-2 text-sm flex items-center justify-center gap-1"
//                 >
//                   <Edit2 size={16} />
//                   Edit
//                 </button>

//                 <button
//                   data-testid={`delete-project-${index}`}
//                   onClick={() => deleteProject(project.id)}
//                   className="flex-1 border border-red-500/40 text-red-400 hover:bg-red-500/10 rounded-md px-3 py-2 text-sm flex items-center justify-center gap-1"
//                 >
//                   <Trash2 size={16} />
//                   Delete
//                 </button>

//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
//           <div className="bg-[#12001f] border border-white/10 rounded-lg max-w-2xl w-full p-6">

//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-2xl font-bold text-white">
//                 {editingProject ? "Edit Project" : "Add New Project"}
//               </h2>

//               <button onClick={handleClose} className="text-gray-400 hover:text-white">
//                 <X size={24} />
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">

//               {["title","description","techStack","image"].map((field) => (
//                 <input
//                   key={field}
//                   required
//                   value={formData[field]}
//                   onChange={(e)=>setFormData({...formData,[field]:e.target.value})}
//                   placeholder={field.toUpperCase()}
//                   className="w-full bg-black/30 border border-white/10 rounded-md px-4 py-2 text-white outline-none focus:ring focus:ring-purple-500"
//                 />
//               ))}

//               <div className="flex space-x-3 pt-4">

//                 <button
//                   type="button"
//                   onClick={handleClose}
//                   className="flex-1 border border-white/10 text-gray-300 hover:bg-white/5 rounded-md px-4 py-2"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   data-testid="project-submit-btn"
//                   className="flex-1 bg-purple-600 hover:bg-purple-700 text-white rounded-md px-4 py-2"
//                 >
//                   {editingProject ? "Update" : "Add"} Project
//                 </button>

//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import { useState } from 'react';
import { Plus, Edit2, Trash2, X } from 'lucide-react';

export default function ProjectsTab({ projects, addProject, updateProject, deleteProject }) {
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: '',
    image: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = editingProject
      ? await updateProject(editingProject.id, formData)
      : await addProject(formData);
    
    if (success) {
      setShowModal(false);
      setEditingProject(null);
      setFormData({ title: '', description: '', techStack: '', image: '' });
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      techStack: project.techStack,
      image: project.image
    });
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setEditingProject(null);
    setFormData({ title: '', description: '', techStack: '', image: '' });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">Projects</h1>

        <button
          data-testid="add-project-btn"
          onClick={() => setShowModal(true)}
          className="bg-purple-600 text-white hover:bg-purple-700 rounded-md px-4 py-2 font-medium transition-colors flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Add Project</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-testid={`admin-project-${index}`}
            className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                {project.description}
              </p>

              <p className="text-xs text-gray-400 mb-4">
                {project.techStack}
              </p>

              <div className="flex space-x-2">
                <button
                  data-testid={`edit-project-${index}`}
                  onClick={() => handleEdit(project)}
                  className="flex-1 border border-purple-500/40 text-purple-400 hover:bg-purple-500/10 rounded-md px-3 py-2 text-sm font-medium transition-colors flex items-center justify-center space-x-1"
                >
                  <Edit2 size={16} />
                  <span>Edit</span>
                </button>

                <button
                  data-testid={`delete-project-${index}`}
                  onClick={() => deleteProject(project.id)}
                  className="flex-1 border border-red-500/40 text-red-400 hover:bg-red-500/10 rounded-md px-3 py-2 text-sm font-medium transition-colors flex items-center justify-center space-x-1"
                >
                  <Trash2 size={16} />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-[#12001f] border border-white/10 rounded-lg max-w-2xl w-full p-6">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {editingProject ? 'Edit Project' : 'Add New Project'}
              </h2>

              <button onClick={handleClose} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Title</label>
                <input
                  data-testid="project-title-input"
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-black/30 border border-white/10 rounded-md px-4 py-2 text-white outline-none focus:ring focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Description</label>
                <textarea
                  data-testid="project-description-input"
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full bg-black/30 border border-white/10 rounded-md px-4 py-2 text-white outline-none focus:ring focus:ring-purple-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Tech Stack</label>
                <input
                  data-testid="project-techstack-input"
                  type="text"
                  required
                  value={formData.techStack}
                  onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                  className="w-full bg-black/30 border border-white/10 rounded-md px-4 py-2 text-white outline-none focus:ring focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Image URL</label>
                <input
                  data-testid="project-image-input"
                  type="url"
                  required
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full bg-black/30 border border-white/10 rounded-md px-4 py-2 text-white outline-none focus:ring focus:ring-purple-500"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 border border-white/10 text-gray-300 hover:bg-white/5 rounded-md px-4 py-2 font-medium"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  data-testid="project-submit-btn"
                  className="flex-1 bg-purple-600 text-white hover:bg-purple-700 rounded-md px-4 py-2 font-medium"
                >
                  {editingProject ? 'Update' : 'Add'} Project
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}