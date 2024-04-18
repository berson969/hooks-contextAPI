import React, {useEffect, useState} from 'react';
import List from "./List.tsx";
import Details from "./Details.tsx";
import {DetailProps, UserType} from "../models";



const UseEffect: React.FC = () => {
	const [users, setUsers] = useState<UserType[]>([])
	const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
	const [selectedUser, setSelectedUser] = useState<DetailProps | null>(null);
	const [loading, setLoading] = useState<boolean>(true);


	useEffect(() => {
		document.title = "useEffect";
		fetchData();
	}, []);

	useEffect(() => {
		if (selectedUserId !== null) {
			fetchData(selectedUserId.toString())
		}
	}, [selectedUserId]);

	const fetchData = async (id: string = 'users') => {
		try {
			setLoading(true);
			const response = await fetch(`${import.meta.env.VITE_BASE_USEEFFECT_URL}/${id}.json`)
			if (response.ok) {
				const userData = await response.json();
				if (id !== "users") {
					setSelectedUser(userData);
				} else {
					setUsers(userData);
				}
			} else {
				console.error('Failed to fetch user data:', response.statusText);
			}
		} catch (error) {
			console.error('Error fetching user data:', error);
		} finally {
			setLoading(false);
		}
	}
	const handleSelectUser = (id: number) => {
		setSelectedUserId(id);
	};

	return (
		<div className="container mx-auto flex gap-12 ">
			{ loading
				? <p className="mt-20">Loading...</p>
				: (
					<div>
						<List onSelect={handleSelectUser} active={selectedUserId} users={users}/>
					</div>
				)
			}
			{ selectedUser
				? <Details info={selectedUser} loading={loading}/>
				: null
			}

		</div>
	);
};

export default UseEffect;
