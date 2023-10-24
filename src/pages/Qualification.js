import React from 'react';

const Qualification = () =>{
    return (

        <div className="container-fluid py-5" id="qualification">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style={{"-webkit-text-stroke": "1px #dee2e6"}}>Quality</h1>
                <h1 className="position-absolute text-uppercase text-primary">Education & Expericence</h1>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h3 className="mb-4">My Education</h3>
                    <div className="border-left border-primary pt-2 pl-4 ml-2">
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style={{"top": "2px", "left": "-32px"}}></i>
                            <h5 className="font-weight-bold mb-1">Masters in Computer Application</h5>
                            <p className="mb-2"><strong>Guru Gobind Singh Indraprastha University</strong> | <small>2016 - 2019</small></p>
                            <div>
								<label className="achievements"><strong>Projects:</strong></label>

								<ul className="achievementsPoints">
								  <li>Virtual Home Medical System</li>
								  <li>Banking System</li>
								  <li>Image Processing Using OpenCV</li>
								</ul>
							</div>
                        </div>
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style={{"top": "2px", "left": "-32px"}}></i>
                            <h5 className="font-weight-bold mb-1">Bachelors in Computer Application</h5>
                            <p className="mb-2"><strong>Jamia Hamdard University</strong> | <small>2011 - 2014</small></p>
                            <div>
								<label className="achievements"><strong>Projects:</strong></label>

								<ul className="achievementsPoints">
								  <li>Railway Management System</li>
								</ul>
							</div>
                        </div>
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style={{"top": "2px", "left": "-32px"}}></i>
                            <h5 className="font-weight-bold mb-1">Senior Secondary School</h5>
                            <p className="mb-2"><strong>Govt. Boys Senior Secondary School No. 1</strong> | <small>2010 - 2011</small></p>
                            
							{/* <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p> */}
                        </div>
						<div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style={{"top": "2px", "left": "-32px"}}></i>
                            <h5 className="font-weight-bold mb-1">Secondary School</h5>
                            <p className="mb-2"><strong>City Convent Secondary School</strong> | <small>2009 - 2010</small></p>
                            
							{/* <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h3 className="mb-4">My Expericence</h3>
                    <div className="border-left border-primary pt-2 pl-4 ml-2">
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style={{"top": "2px", "left": "-32px"}}></i>
                            <h5 className="font-weight-bold mb-1">JAVA Developer</h5>
                            {/* <p className="mb-2"><strong>Acutec Global Service LLP</strong> | <small>2021 - Present</small></p> */}
							
								<div>
									<label className="achievements"><strong>Achievements/Tasks</strong></label>

										<ul className="achievementsPoints">
										  <li>Designing, building and maintaining Java-based applications & websites.</li>
										  <li>Contributing and taking part software and architectural development activities.</li>
										  <li>Developing well-designed, efficient, and testable code.</li>
										  <li>Troubleshooting and resolving the reported issues and replying to queries in a timely manner</li>
										  <li>Troubleshooting and resolving the reported issues and replying to queries in a timely manner</li>
										  <li>Improve the code quality by implementing best practices.</li>
										  <li>Producing detailed design documentation.</li>
										</ul>
								</div>
                        </div>
						

						
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style={{"top": "2px", "left": "-32px"}}></i>
                            <h5 className="font-weight-bold mb-1">NATIONAL CERTIFICATE IN MODULAR EMPLOYABLE SKILLS</h5>
                            <p className="mb-2"><strong>National Council for Vocational Training under sector Information and Communication Technology of Web Designing module</strong> | <small>02/2014 - 03/2014</small></p>
							
                            {/* <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p> */}
							
                        </div>
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style={{"top": "2px","left": "-32px"}}></i>
                            <h5 className="font-weight-bold mb-1">NATIONAL CERTIFICATE IN MODULAR EMPLOYABLE SKILLS</h5>
                            <p className="mb-2"><strong>National Council for Vocational Training under sector Soft Skills of Soft Skills for Base Line Staff in Service Sector</strong> | <small>08/2012 - 09/2012</small></p>
                            
							{/* <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p> */}
							
                        </div>
						
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Qualification;