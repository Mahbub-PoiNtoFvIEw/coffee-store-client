import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Coffee from "../components/Coffee";
import { Helmet } from "react-helmet";
import SideNav from "../SideNav/SideNav";
import Juice from "../components/Juice";

const Home = () => {
  const { loadedCoffee, loadedJuice } = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee);
  const [juices, setJuice] = useState(loadedJuice);
  return (
    <div className="grid grid-cols-5 md:max-w-7xl mx-auto">
      <Helmet>
        <title>DrinksStore</title>
      </Helmet>
      <div className="col-span-1">
        <SideNav></SideNav>
      </div>
      <div className="col-span-4">
        <div>
        <h2 className="text-center font-bold text-4xl my-6">Coffee Items</h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 px-2">
            {coffees.map((aCoffee) => (
              <Coffee
                key={aCoffee._id}
                aCoffee={aCoffee}
                coffees={coffees}
                setCoffees={setCoffees}
              ></Coffee>
            ))}
          </div>
          <h2 className="text-center font-bold text-4xl my-6">Juice Items</h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 px-2">
            {juices.map((juice) => (
              <Juice
                key={juice._id}
                juice={juice}
                juices={juices}
                setJuice={setJuice}
              ></Juice>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
