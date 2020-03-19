import React from "react";
import "../../styles/TopicTable.scss";

export function TopicTable() {
	return (
		<table className="table">
			<tbody>
				<tr>
					<th scope="row">Icon</th>
					<td>PlayStation</td>
					<td>threads/replies</td>
					<td>Time last posted</td>
				</tr>
				<tr>
					<th scope="row">Icon</th>
					<td>Xbox</td>
					<td>threads/replies</td>
					<td>Time last posted</td>
				</tr>
				<tr>
					<th scope="row">Icon</th>
					<td>Nintendo</td>
					<td>threads/replies</td>
					<td>Time last posted</td>
				</tr>
			</tbody>
		</table>
	);
}
