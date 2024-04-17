export interface UserType {
	id: number;
	name: string;
}

export interface ListProps {
	onSelect: (id: number) => void;
	users: UserType[];
}

export interface DetailsProps {
	info: {
		id: number;
		name: string;
		avatar: string;
		details: {
			city: string;
			company: string;
			position: string;
			}
	}
}
