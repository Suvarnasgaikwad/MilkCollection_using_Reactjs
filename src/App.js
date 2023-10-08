import "./App.css";

import Sidebar from "./components/sideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FarmerList } from "./pages/FarmerList";
import { Registration } from "./components/Registration";
import { MilkCollection } from "./pages/MilkCollection";
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
		<Route path='/reg' element={<Registration/>} />
		<Route path='/farm' element={<FarmerList/>} />
		<Route path='/colect' element={<MilkCollection/>} />
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
