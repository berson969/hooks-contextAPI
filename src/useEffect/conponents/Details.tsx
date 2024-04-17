import React from 'react';
import {DetailsProps} from "../models";

const Details: React.FC<DetailsProps> = ({ info, loading }) => {
	const { id, name, avatar, details: { city, company, position} } = info;
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg mt-20">
			{ loading
				? <p className="mt-20">Loading...</p>
				: ( <div>
						<img className="w-full" src={avatar} alt={name} />
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2">{name}</div>
							<p className="text-gray-700 text-base">
								<strong>ID:</strong> {id}
							</p>
							<p className="text-gray-700 text-base">
								<strong>City:</strong> {city}
							</p>
							<p className="text-gray-700 text-base">
								<strong>Company:</strong> {company}
							</p>
							<p className="text-gray-700 text-base">
								<strong>Position:</strong> {position}
							</p>
						</div>
					</div>
				)
			}
		</div>
	);
};

export default Details;
