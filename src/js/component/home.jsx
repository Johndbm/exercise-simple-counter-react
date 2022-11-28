import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({counter, one, two, three, four}) => {
	return (
		<>
			<div className="container text-center bg-dark text-white py-5 my-5">
				<div className="row row-cols-12">
					<div className="col">
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
							<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
							<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
						</svg>
					</div>
					<div className="col">{Math.floor(four % 10)}</div>
					<div className="col">{Math.floor(three % 10)}</div>
					<div className="col">{Math.floor(two % 10)}</div>
					<div className="col">{one % 10}</div>
				</div>
			</div>
			{/* BONUS
			<div className="container text-center">
				<div className="row row-cols-3 justify-content-center my-2">
					<button type="button" className="btn btn-dark">Countdown</button>
				</div>
				<div className="row row-cols-3 justify-content-center">
					<button type="button" className="btn btn-dark">Stop</button>
					<button type="button" className="btn btn-dark">Reset</button>
					<button type="button" className="btn btn-dark">Resume</button>
				</div>
			</div> */}
		</>
	);
};

export default Home;
