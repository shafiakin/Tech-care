// AsideRight.js
import React from "react";

const AsideRight = ({ patients, selectedPatient, handleClick }) => {
	return (
		<div className="card border-0 shadow ">
			<div className="p-2 d-flex justify-content-between align-items-center">
				<h4>Patient</h4>
				<div>
					<img
						src="/images/icons/search.svg"
						width="18"
						height="18"
					/>
				</div>
			</div>
			<div className="border-bottom">
				{patients.map((patient, index) => (
					<div
						className={`profile-card d-flex justify-content-between patientList ${
							selectedPatient && selectedPatient.name === patient.name
								? "selected"
								: ""
						}`}
						key={index + 1}
						onClick={() => handleClick(patient)}>
						<div className="d-flex justify-content-between">
							<div className="profile-avatar border me-2">
								<img
									src={patient.profile_picture}
									alt="Avatar"
								/>
							</div>
							<div>
								<div className="profile-body">{patient.name}</div>
								<div className="profile-header">
									{patient.gender} {patient.age}
								</div>
							</div>
						</div>
						<div>
							<img
								src="/images/icons/more_horizontal.svg"
								alt="more_horizontal"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AsideRight;
