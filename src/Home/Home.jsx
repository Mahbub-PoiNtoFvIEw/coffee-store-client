import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Coffee from "../components/Coffee";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="grid grid-cols-2 gap-4">
      {coffees.map((aCoffee) => (
        <Coffee 
        key={aCoffee._id} 
        aCoffee={aCoffee}
        coffees={coffees}
        setCoffees={setCoffees}
        ></Coffee>
      ))}
    </div>
  );
};

export default Home;
