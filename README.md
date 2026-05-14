An application that lets you search movies and add them to a watchlist on your localStorage.

This React app uses Vite, React Router, and OMDB API, it is deployed on Vercel. 

Tech Stack: 
	Frontend:
		React 18, React Router v6, Vite, CSS
	Data & Storage:
			OMDB API (https://www.omdbapi.com)
		localStorage
	Tooling & Deployment:
		Git + Github
		Vercel

How to run locally:
	Clone the repo:
		" cd movie-watchlist-react "
	Install dependencies:
		" npm install "
	Add your own API key from OMDB (https://www.omdbapi.com):
		Create .env file in root of project.
			Place this in .env file - VITE_PUBLIC_OMDB_KEY=your_api_key_here
		Create a new API key (omdbapi.com/apikey.aspx)
		Place key in .env file
	Start server:
		" npm run dev "
	Open browser: 
		http://localhost:5173
		
What I learned from this project so far: 
	How to convert a code base from vanilla JS to React
	Lifting state up, and useEffect in React
	Error handelling for bad requests
	Responsive design
	