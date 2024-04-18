import React from 'react';
import {ListProps} from "../models";

const List : React.FC<ListProps> = ({ onSelect, active,  users }) => {
	return (
		<div className="w-[200px] mt-20">
			<ul>
				{users.map(user => (
					<li key={user.id}
						onClick={() => onSelect(user.id)}
						className={`border border-gray-300 p-3 w-fill ${active === user.id ? 'bg-sky-700 text-white' : 'bg-white text-gray-700'}`}
					>
						{user.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default List;
