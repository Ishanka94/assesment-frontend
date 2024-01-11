import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlinePencil, HiTrash  } from "react-icons/hi";

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
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Review Details</strong>
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
