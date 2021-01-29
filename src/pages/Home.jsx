import React from 'react';

const Home = () => {
	return (
		<div>
			<header>
				<h1> Inside Voice</h1>
				<a href="./pages/create-playlist.html">Create Playlist</a>
				<a href="./pages/signin-signup.html">.Sign In / Sign Up</a>
				<a href="./pages/help.html">Help</a>
				<a href="./pages/accountsettings.html">Account Settings</a>
			</header>
			<div>
				<input type="text" id="search-bar" />
				<input type="button" id="search-button">
					Search
				</input>
			</div>
			<h1>Songs You May Like</h1>
			<img src="https://headlineplanet.com/home/wp-content/uploads/2021/01/Olivia-Rodrigo-Drivers-License-758x758.jpg" />
		</div>
	);
};

export default Home;
