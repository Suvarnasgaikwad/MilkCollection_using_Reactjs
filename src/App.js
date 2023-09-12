import "./App.css";
import Sidebar from "./components/sideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, OurAim, OurVision } from "./pages/Home";
import {
Services,
ServicesOne,
ServicesTwo,
ServicesThree,
} from "./pages/Services";
import { Events, EventsOne, EventsTwo } from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
function App() {
return (
	<div className="App">
	<Router>
	<Sidebar />
	<Routes>
	 
		<Route path='/home' element={<Home/>} />
		<Route path='/home/aim' element={<OurAim/>} />
		<Route path='/home/vision' element={<OurVision/>} />
		<Route path='/services' element={<Services/>} />
		<Route path='/services/services1' element={<ServicesOne/>} />
		<Route path='/services/services2' element={<ServicesTwo/>} />
		<Route path='/services/services3' element={<ServicesThree/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/events' element={<Events/>} />
		<Route path='/events/events1' element={<EventsOne/>} />
		<Route path='/events/events2' element={<EventsTwo/>} />
		<Route path='/support' element={<Support/>} />
	</Routes>
	</Router>
	</div>
);
}

export default App;
