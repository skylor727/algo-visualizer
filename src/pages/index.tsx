import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ArrayNumberBox from "~/components/ArrayNumberBox";
import NavBar from "~/components/NavBar";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <h1 className="text-center text-3xl">Algo Visualizer</h1>
    </>
  );
};

export default Home;
