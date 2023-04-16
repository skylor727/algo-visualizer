import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ArrayNumberBox from "~/components/ArrayNumberBox";
import NavBar from "~/components/NavBar";

const Home: NextPage = () => {
  const array = [1, 2, 3];
  return (
    <>
      <NavBar />
      <h1 className="text-center text-3xl">Algo Visualizer</h1>
      <div className="container">
        <ul>
          {array.map((el, idx) => (
            <ArrayNumberBox key={idx} value={el} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
