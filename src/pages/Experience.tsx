function Experience() {
	return (
		<div id="experience" className="bg-teal-400 p-10">
			<div className="container mx-auto">
				<h2 className="font-logo text-7xl my-4 font-black text-white">
					where i've worked
				</h2>
				<br/>
				<div className="flex flex-col md:grid grid-cols-4 w-full gap-8 my-5 w-full font-logo">
					<p className="bg-white p-10 rounded-lg relative">
						<div
							className="absolute text-lg -top-4 -left-4 bg-red-500 text-white rounded-full px-4 py-2 font-bold font-logo"
						>
							04
						</div>
						<span className="text-sm">Oct 2023 - Present</span>
						<br/>
						<br/>
						<p>Software Contractor</p>
						<a
							target="_blank"
							href="https://readyspaces.com"
							className="text-orange-600 font-bold"
						>
							<h3 className="text-2xl">
								ReadySpaces
							</h3>
						</a>
					</p>
					<p className="bg-white p-10 rounded-lg relative">
						<div
							className="absolute text-lg -top-4 -left-4 bg-red-500 text-white rounded-full px-4 py-2 font-bold font-logo"
						>
							03
						</div>
						<span className="text-sm">Sep 2022 - Sep 2023</span>
						<br/>
						<br/>
						<p>Software Engineer I</p>
						<a
							target="_blank"
							href="https://deepsource.com"
							className="text-orange-600 font-bold"
						>
							<h3 className="text-2xl">
								DeepSource
							</h3>
						</a>
					</p>
					<p className="bg-white p-10 rounded-lg relative">
						<div
							className="absolute text-lg -top-4 -left-4 bg-red-500 text-white rounded-full px-4 py-2 font-bold font-logo"
						>
							02
						</div>
						<span className="text-sm">Aug 2020 - Sep 2022</span>
						<br/>
						<br/>
						<p>Associate<br/>Software Engineer II</p>
						<a
							target="_blank"
							href="https://optum.com"
							className="text-orange-600 font-bold"
						>
							<h3 className="text-2xl">
								Optum
							</h3>
						</a>
					</p>
					<p className="bg-white p-10 rounded-lg relative">
						<div
							className="absolute text-lg -top-4 -left-4 bg-red-500 text-white rounded-full px-4 py-2 font-bold font-logo"
						>
							01
						</div>
						<span className="text-sm">Jul 2019 - Oct 2019</span>
						<br/>
						<br/>
						<p>Software Engineering Intern</p>
						<a
							target="_blank"
							href="https://prifina.com"
							className="text-orange-600 font-bold"
						>
							<h3 className="text-2xl">
								Prifina
							</h3>
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Experience;
