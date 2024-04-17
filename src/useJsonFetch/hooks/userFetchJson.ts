import userFetchJsonProps from "../models";
import {useEffect, useState} from "react";

const useFetchJson = (url: string, opts: any={}): userFetchJsonProps => {

	const [data, setData] = useState<{}>({});
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		fetchData()
	}, [])
	const fetchData = async () => {
		setLoading(true);
		try {
			const response = await fetch(url, opts);
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			const jsonData = await response.json();
			console.log('jsonData', jsonData)
			setData(jsonData);
		} catch (err: any) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	return { data, loading, error };
};

export default useFetchJson;
