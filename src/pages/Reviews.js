import React, { useState, useEffect, useContext } from "react";
import { HiOutlinePencil, HiTrash  } from "react-icons/hi";
import AddReviewDetails from "../components/AddReviewDetails";
import AuthContext from "../context/AuthContext";

const reviewList = [
	{
		reviewerId: '1',
		reviewerName: 'Test',
		summary: 'Good',
		rating: '5.0',
		reviewTime: '2022-05-17T03:24:00'
	},
	{
		reviewerId: '2',
		reviewerName: 'Test',
		summary: 'Good',
		rating: '5.0',
		reviewTime: '2022-05-17T03:24:00'
	},
    {
		reviewerId: '3',
		reviewerName: 'Test',
		summary: 'Good',
		rating: '5.0',
		reviewTime: '2022-05-17T03:24:00'
	},
    {
		reviewerId: '4',
		reviewerName: 'Test',
		summary: 'Good',
		rating: '5.0',
		reviewTime: '2022-05-17T03:24:00'
	},
]

export default function Reviews() {
	const [showReviewModal, setReviewModal] = useState(false);
	const [reviews, setAllReviews] = useState([]);

	const authContext = useContext(AuthContext);

	const addReviewModalSetting = () => {
		setReviewModal(!showReviewModal);
	};

	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			{showReviewModal && (
          <AddReviewDetails
		  addReviewModalSetting={addReviewModalSetting}
		  reviews={reviews}
            authContext={authContext}
          />
        )}
			<strong className="text-gray-700 font-medium">Review Details</strong>
			<div className="flex gap-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs  rounded"
				onClick={addReviewModalSetting}
              >
                {/* <Link to="/inventory/add-product">Add Product</Link> */}
                Add Review
              </button>
            </div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>Reviewer ID</th>
							<th>Reviewer Name</th>
							<th>summary</th>
							<th>Rating</th>
							<th>Review Time</th>
						</tr>
					</thead>
					<tbody>
						{reviewList.map((review) => (
							<tr key={review.id}>
								<td>
									{review.reviewerId}
								</td>
								<td>
									{review.reviewerName}
								</td>
								<td>
									{review.summary}
								</td>
								{/* <td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td> */}
                                <td>{review.rating}</td>
								<td>{review.reviewTime}</td>
								{/* <td>{getOrderStatus(order.current_order_status)}</td> */}
                                <td>
                                    <button>
                                        <HiOutlinePencil />
                                    </button>
                                </td>
                                <td>
                                    <button>
                                        <HiTrash />
                                    </button>
                                </td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
