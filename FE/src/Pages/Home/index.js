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

  const [keahlian, setKeahlian] = useState({
    data: [],
    loading: true,
    error: null,
  });

  const [project, setProject] = useState({
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
        data: hasil.data,
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

 const getDataKeahlian = async () => {
    try {
      const data = await fetch(`${process.env.REACT_APP_API}/api/keahlian`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const hasil = await data.json();
      setKeahlian({
        ...data,
        data: hasil.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setKeahlian({
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

  const getDataProject = async () => {
    try {
      const data = await fetch(`${process.env.REACT_APP_API}/api/project`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const hasil = await data.json();
      setProject({
        ...data,
        data: hasil.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setProject({
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
    getDataKeahlian();
    getDataProject();
  }, []);

  return (
    <>
      {data.loading || keahlian.loading || project.loading ? (
        <center>
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>:
          </div>
        </center>
      ) : data.error || keahlian.error || project.error ? (
        <div className="alert alert-danger text-center" role="alert">
          {data.error || keahlian.error || project.error}
        </div>
      ) : (
        <div>
          <NavbarTop />
          <Cards data={data.data}/>
          <Keahlian data={keahlian.data} />
          <Project data={project.data} />
          <Footer />
        </div>
      )}
    </>
  );
};
export default Home;
