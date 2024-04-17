import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';

import { HomePage } from "./HomePage.tsx";


import UseEffect from "./useEffect/conponents/UseEffect.tsx";
import Authentication from "./authentication/components/Authentication.tsx";
import ComponentUseFetchJson from "./useJsonFetch/components/ComponentUseFetchJson.tsx";
import QueryComponent from "./useJsonFetch/components/QueryComponent.tsx";

function App() {

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/use-effect" element={<UseEffect />} />

					<Route path="/use-fetch-json" element={<ComponentUseFetchJson />} />

					<Route path="/with-data" element={<QueryComponent query="data" />} />
					<Route path="/with-error" element={<QueryComponent query="error" />} />
					<Route path="/with-loading" element={<QueryComponent query="loading" />} />

					<Route path="/authentication" element={<Authentication />} />
				</Routes>
			</BrowserRouter>

		</div>
	)
}

export default App
