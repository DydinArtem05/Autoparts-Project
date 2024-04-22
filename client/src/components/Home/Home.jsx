import React from "react";
import styles from '../../styles/Home.module.css';
import NavMenu from "./NavMenu";
import BestParts from "./BestParts";

const Home = () => {

    return (
        <main>
            <NavMenu route="/" />
            <BestParts />
        </main>
    );
}

export default Home;