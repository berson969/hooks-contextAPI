import React from 'react';
import useFetchJson from "../hooks/userFetchJson"

const QueryComponent: React.FC<{ query: string }> = ({ query }) => {
	console.log('query', query)
	const { data, loading, error } = useFetchJson(`http://localhost:7070/${query}`);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div>
			<h2>Data:</h2>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
};

export default QueryComponent;
