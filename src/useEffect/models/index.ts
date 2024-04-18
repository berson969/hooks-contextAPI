export interface UserType {
	id: number;
	name: string;
}

export interface ListProps {
	onSelect: (id: number) => void;
	active: number | null;
	users: UserType[];
}

export interface DetailProps {
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
