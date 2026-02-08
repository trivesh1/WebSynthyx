// import { useState, useEffect } from 'react';
// import { useOutletContext } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'sonner';
// import ProjectsTab from './tabs/ProjectsTab';
// import ReviewsTab from './tabs/ReviewsTab';
// import ContactsTab from './tabs/ContactsTab';

// const BACKEND_URL = process.env.REACT_APP_API;

// const API = `${BACKEND_URL}/api`;

// export default function AdminDashboard() {
//   const { activeTab } = useOutletContext();
//   const [projects, setProjects] = useState([]);
//   const [reviews, setReviews] = useState([]);
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const token = localStorage.getItem('adminToken');
//   const axiosConfig = {
//     headers: { Authorization: `Bearer ${token}` }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const [projectsRes, reviewsRes, contactsRes] = await Promise.all([
//         axios.get(`${API}/projects`),
//         axios.get(`${API}/reviews`),
//         axios.get(`${API}/contacts`, axiosConfig)
//       ]);
//       setProjects(projectsRes.data);
//       setReviews(reviewsRes.data);
//       setContacts(contactsRes.data);
//     } catch (error) {
//       toast.error('Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const addProject = async (projectData) => {
//     try {
//       const response = await axios.post(`${API}/projects`, projectData, axiosConfig);
//       setProjects([response.data, ...projects]);
//       toast.success('Project added successfully!');
//       return true;
//     } catch (error) {
//       toast.error('Failed to add project');
//       return false;
//     }
//   };

//   const updateProject = async (id, projectData) => {
//     try {
//       const response = await axios.put(`${API}/projects/${id}`, projectData, axiosConfig);
//       setProjects(projects.map(p => p.id === id ? response.data : p));
//       toast.success('Project updated successfully!');
//       return true;
//     } catch (error) {
//       toast.error('Failed to update project');
//       return false;
//     }
//   };

//   const deleteProject = async (id) => {
//     try {
//       await axios.delete(`${API}/projects/${id}`, axiosConfig);
//       setProjects(projects.filter(p => p.id !== id));
//       toast.success('Project deleted successfully!');
//     } catch (error) {
//       toast.error('Failed to delete project');
//     }
//   };

//   const approveReview = async (id) => {
//     try {
//       const response = await axios.put(`${API}/reviews/${id}/approve`, {}, axiosConfig);
//       setReviews(reviews.map(r => r.id === id ? response.data : r));
//       toast.success('Review approved!');
//     } catch (error) {
//       toast.error('Failed to approve review');
//     }
//   };

//   const deleteReview = async (id) => {
//     try {
//       await axios.delete(`${API}/reviews/${id}`, axiosConfig);
//       setReviews(reviews.filter(r => r.id !== id));
//       toast.success('Review deleted successfully!');
//     } catch (error) {
//       toast.error('Failed to delete review');
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-64">
//         <div className="animate-spin w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full"></div>
//       </div>
//     );
//   }

//   return (
//     <div data-testid="admin-dashboard">
//       {activeTab === 'projects' && (
//         <ProjectsTab
//           projects={projects}
//           addProject={addProject}
//           updateProject={updateProject}
//           deleteProject={deleteProject}
//         />
//       )}
//       {activeTab === 'reviews' && (
//         <ReviewsTab
//           reviews={reviews}
//           approveReview={approveReview}
//           deleteReview={deleteReview}
//         />
//       )}
//       {activeTab === 'contacts' && (
//         <ContactsTab contacts={contacts} />
//       )}
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import ProjectsTab from "./tabs/ProjectsTab";
import ReviewsTab from "./tabs/ReviewsTab";
import ContactsTab from "./tabs/ContactsTab";

const BACKEND_URL = process.env.REACT_APP_API;
const API = `${BACKEND_URL}/api`;

export default function AdminDashboard() {
  const { activeTab } = useOutletContext();
  const [projects, setProjects] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("adminToken");

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [projectsRes, reviewsRes, contactsRes] = await Promise.all([
        axios.get(`${API}/projects`),
        axios.get(`${API}/reviews`),
        axios.get(`${API}/contacts`, axiosConfig),
      ]);

      setProjects(projectsRes.data);
      setReviews(reviewsRes.data);
      setContacts(contactsRes.data);
    } catch (error) {
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  const addProject = async (projectData) => {
    try {
      const res = await axios.post(`${API}/projects`, projectData, axiosConfig);
      setProjects([res.data, ...projects]);
      toast.success("Project added");
      return true;
    } catch {
      toast.error("Add project failed");
      return false;
    }
  };

  const updateProject = async (id, projectData) => {
    try {
      const res = await axios.put(`${API}/projects/${id}`, projectData, axiosConfig);
      setProjects(projects.map((p) => (p._id === id ? res.data : p)));
      toast.success("Project updated");
      return true;
    } catch {
      toast.error("Update failed");
      return false;
    }
  };

  const deleteProject = async (id) => {
    try {
      await axios.delete(`${API}/projects/${id}`, axiosConfig);
      setProjects(projects.filter((p) => p._id !== id));
      toast.success("Project deleted");
    } catch {
      toast.error("Delete failed");
    }
  };

  const approveReview = async (id) => {
    try {
      const res = await axios.put(`${API}/reviews/${id}/approve`, {}, axiosConfig);
      setReviews(reviews.map((r) => (r._id === id ? res.data : r)));
      toast.success("Review approved");
    } catch {
      toast.error("Approve failed");
    }
  };

  const deleteReview = async (id) => {
    try {
      await axios.delete(`${API}/reviews/${id}`, axiosConfig);
      setReviews(reviews.filter((r) => r._id !== id));
      toast.success("Review deleted");
    } catch {
      toast.error("Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin w-10 h-10 border-4 border-gray-300 border-t-gray-800 rounded-full"></div>
      </div>
    );
  }

  return (
    <div>
      {activeTab === "projects" && (
        <ProjectsTab
          projects={projects}
          addProject={addProject}
          updateProject={updateProject}
          deleteProject={deleteProject}
        />
      )}

      {activeTab === "reviews" && (
        <ReviewsTab
          reviews={reviews}
          approveReview={approveReview}
          deleteReview={deleteReview}
        />
      )}

      {activeTab === "contacts" && <ContactsTab contacts={contacts} />}
    </div>
  );
}
