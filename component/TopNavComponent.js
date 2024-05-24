import React from "react";
import Image from "next/image";

export default function TopNav() {
	return (
		<div class="shadow py-2 top-nav d-flex flex-wrap justify-content-between align-items-center">
			<div class="logo-wrapper"></div>
			<nav class="nav-bar">
				<ul class="menu d-flex flex-wrap">
					<li class="menu-item">
						<a href="#">
							<span class="icon-wrap">
								<img
									width="22"
									height="17"
									src="/images/icons/home.svg"
									alt="home"
								/>
							</span>
							<span class="text-holder">Overview</span>
						</a>
					</li>
					<li class="menu-item active">
						<a href="#">
							<span class="icon-wrap">
								<img
									width="22"
									height="17"
									src="/images/icons/group.svg"
									alt="users"
								/>
							</span>
							<span class="text-holder">Patient</span>
						</a>
					</li>
					<li class="menu-item">
						<a href="#">
							<span class="icon-wrap">
								<img
									width="22"
									height="17"
									src="/images/icons/calendar_today.svg"
									alt="calendar"
								/>
							</span>
							<span class="text-holder">Schedule</span>
						</a>
					</li>
					<li class="menu-item">
						<a href="#">
							<span class="icon-wrap">
								<img
									width="22"
									height="17"
									src="/images/icons/chat.svg"
									alt="message"
								/>
							</span>
							<span class="text-holder">Message</span>
						</a>
					</li>
					<li class="menu-item">
						<a href="#">
							<span class="icon-wrap">
								<img
									width="22"
									height="17"
									src="/images/icons/credit_card.svg"
									alt="credit-card"
								/>
							</span>
							<span class="text-holder">Transaction</span>
						</a>
					</li>
				</ul>
			</nav>
			<div class="profile-card d-flex align-items-center">
				<div class="profile-avatar border me-2">
					<img
						src="/images/senior-woman-doctor-and-portrait-smile.png"
						alt="Avatar"
					/>
				</div>
				<div>
					<div class="profile-body">Dr. Jose Simmons</div>
					<div class="profile-header">General Practitioner</div>
				</div>
				<div class="p-2 border-start ms-auto">
					<img
						src="/images/icons/settings.svg"
						alt="Settings"
					/>
					<img
						src="/images/icons/more_vertical.svg"
						class="ms-2"
						alt="More Options"
					/>
				</div>
			</div>
		</div>
	);
}
