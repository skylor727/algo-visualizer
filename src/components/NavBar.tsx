import Link from "next/link";
import { useRouter } from "next/router";
export const NavBar = () => {
  const Router = useRouter();
  const handlePathChange = (path: string) => {
    Router.push(path);
  };

  return (
    <>
      <header>
        <Link href="/LinearSearch" onClick={() => handlePathChange("LinearSearch")}>
          <span>Linear Search</span>
        </Link>
        <span> | </span>
        <span>algo2</span>
        <span> | </span>
        <span>algo3</span>
      </header>
    </>
  );
};

export default NavBar;
