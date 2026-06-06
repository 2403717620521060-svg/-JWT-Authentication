import { useEffect, useState } from "react";

function Dashboard() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/trips`)
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);

  return (
    <div className="container">
      <h1>AI Travel Planner</h1>

      {trips.map((trip) => (
        <div key={trip._id}>
          <h3>{trip.destination}</h3>
          <p>Days: {trip.days}</p>
          <p>Budget: ₹{trip.budget}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Dashboard;