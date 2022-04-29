import Footer from "../../Components/Footer";
import NavbarTop from "../../Components/Navbar";
import Cards from "./Cards";
import Keahlian from "./Keahlian";
import Project from "./Project";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState({
    data: [],
    loading: true,
    error: null,
  });

  const getDataProfile = async () => {
    try {
      const data = await fetch(`${process.env.REACT_APP_API}/api/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const hasil = await data.json();
      setData({
        ...data,
        data: hasil,
        loading: false,
        error: null,
      });
    } catch (error) {
      setData({
        ...data,
        data: [],
        loading: false,
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  return (
    <>
      {data.loading ? (
        <center>
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>:
          </div>
        </center>
      ) : data.error ? (
        <div className="alert alert-danger text-center" role="alert">
          {data.error}
        </div>
      ) : (
        <div>
          <NavbarTop />
          <Cards data={data.data.data}/>
          <Keahlian />
          <Project />
          <Footer />
        </div>
      )}
    </>
  );
};
export default Home;
