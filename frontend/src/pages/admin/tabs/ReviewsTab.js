import { Star, Check, Trash2 } from 'lucide-react';

export default function ReviewsTab({ reviews, approveReview, deleteReview }) {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0F172A]">Reviews</h1>
        <p className="text-[#64748B] mt-2">Manage customer reviews and approvals</p>
      </div>

      <div className="bg-white border border-[#E2E8F0] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
            <tr>
              <th className="text-left px-6 py-3 text-[#0F172A] font-semibold text-sm">Name</th>
              <th className="text-left px-6 py-3 text-[#0F172A] font-semibold text-sm">Rating</th>
              <th className="text-left px-6 py-3 text-[#0F172A] font-semibold text-sm">Message</th>
              <th className="text-left px-6 py-3 text-[#0F172A] font-semibold text-sm">Status</th>
              <th className="text-left px-6 py-3 text-[#0F172A] font-semibold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-12 text-[#64748B]">
                  No reviews yet
                </td>
              </tr>
            ) : (
              reviews.map((review, index) => (
                <tr key={review.id} className="border-b border-[#E2E8F0] last:border-0" data-testid={`admin-review-${index}`}>
                  <td className="px-6 py-4 text-[#0F172A]">{review.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[#64748B] max-w-xs truncate">{review.message}</td>
                  <td className="px-6 py-4">
                    {review.approved ? (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        Approved
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                        Pending
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      {!review.approved && (
                        <button
                          data-testid={`approve-review-${index}`}
                          onClick={() => approveReview(review.id)}
                          className="text-green-600 hover:text-green-700 transition-colors"
                          title="Approve"
                        >
                          <Check size={20} />
                        </button>
                      )}
                      <button
                        data-testid={`delete-review-${index}`}
                        onClick={() => deleteReview(review.id)}
                        className="text-red-600 hover:text-red-700 transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}