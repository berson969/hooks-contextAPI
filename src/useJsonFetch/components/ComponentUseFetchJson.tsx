import React from 'react';
import {Link, Outlet} from "react-router-dom";

const ComponentUseFetchJson: React.FC = () => {
	return (
		<div className="container mx-auto my-12">
			<h1 className="text-2xl text-center">Реализация кастомного хука useJsonFetch, который позволяет с помощью fetch осуществлять HTTP-запросы.</h1>
			<ul className="mt-6 text-blue-950 flex flex-col gap-4 underline items-center">

				<li><Link to="/with-data">GET http://localhost:7070/data — успешное получение данных</Link></li>
				<li><Link to="/with-error">GET http://localhost:7070/error — получение 500 ошибки</Link></li>
				<li><Link to="/with-loading">GET http://localhost:7070/loading — индикатор загрузки</Link></li>
			</ul>
			<Outlet />

		</div>
	);
};

export default ComponentUseFetchJson;
