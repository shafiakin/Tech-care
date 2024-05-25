import React from "react";
import Image from "next/image";

export default function TopNav() {
	return (
		<div className="shadow top-nav d-flex flex-wrap justify-content-between align-items-center">
			<div className="logo-wrapper p-2">
				<Image
					src="/images/TestLogo.svg"
					width={150}
					height={150} // You need to add the height property
					className="img-fluid"
					alt="Test Logo" // Alt text is required
				/>
			</div>
			<nav className="nav-bar">
				<ul className="menu d-flex flex-wrap">
					<li className="menu-item">
						<a href="#">
							<span className="icon-wrap">
								<Image
									width={22}
									height={17}
									className="img-fluid"
									src="/images/icons/home.svg"
									alt="home"
								/>
							</span>
							<span className="text-holder">Overview</span>
						</a>
					</li>
					<li className="menu-item active">
						<a href="#">
							<span className="icon-wrap">
								<Image
									width={22}
									height={17}
									className="img-fluid"
									src="/images/icons/group.svg"
									alt="users"
								/>
							</span>
							<span className="text-holder">Patient</span>
						</a>
					</li>
					<li className="menu-item">
						<a href="#">
							<span className="icon-wrap">
								<Image
									width={22}
									height={17}
									className="img-fluid"
									src="/images/icons/calendar_today.svg"
									alt="calendar"
								/>
							</span>
							<span className="text-holder">Schedule</span>
						</a>
					</li>
					<li className="menu-item">
						<a href="#">
							<span className="icon-wrap">
								<Image
									width={22}
									height={17}
									className="img-fluid"
									src="/images/icons/chat.svg"
									alt="message"
								/>
							</span>
							<span className="text-holder">Message</span>
						</a>
					</li>
					<li className="menu-item">
						<a href="#">
							<span className="icon-wrap">
								<Image
									width={22}
									height={17}
									className="img-fluid"
									src="/images/icons/credit_card.svg"
									alt="credit-card"
								/>
							</span>
							<span className="text-holder">Transaction</span>
						</a>
					</li>
				</ul>
			</nav>
			<div className="profile-card d-flex align-items-center">
				<div className="profile-avatar border me-2">
					<Image
						width={200}
						height={200}
						src="/images/senior-woman-doctor-and-portrait-smile.png"
						alt="Avatar"
					/>
				</div>
				<div className="me-2">
					<div className="profile-body">Dr. Jose Simmons</div>
					<div className="profile-header">General Practitioner</div>
				</div>
				<div className="p-2 border-start ms-auto">
					<Image
						src="/images/icons/settings.svg"
						alt="Settings"
						width={17}
						height={17}
					/>
					<Image
						src="/images/icons/more_vertical.svg"
						className="ms-2"
						alt="More Options"
						width={17}
						height={17}
					/>
				</div>
			</div>
		</div>
	);
}
