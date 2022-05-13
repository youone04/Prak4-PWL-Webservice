import { Collapse, Form } from "react-bootstrap";
import { useState } from "react";
import swal from 'sweetalert';

const Komentar = (props) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataKomentar, setDataKomentar] = useState([]);
  const [username , setUsername] = useState('');
  const [komentar , setKomentar] = useState('');
  const [loadingPost , setLoadingPost] = useState(false);

  const getDataKoment = async(id) => {
    setLoading(true);
    try {
      const data = await fetch(
        `${process.env.REACT_APP_API}/api/komentar/${id}`
      );
      const hasil = await data.json();
      setDataKomentar(hasil.data);
      setLoading(false);
      setOpen(!open);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  const hanldeOpenComent =  (id) => {
    getDataKoment(id)
  };
  

  const handlePostKomentar = async(project_id) => {
    if(username === '' || komentar === ''){
      swal('oops',"Lengkapi Form", "warning");
      return
    }
    setLoadingPost(true);
    const dataSend = {
      username,
      komentar,
      project_id
    }
    try{
     const data =  await fetch(`${process.env.REACT_APP_API}/api/komentar`,{
        method:'POST',
        headers:{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(dataSend)
      })

      const hasil = await data.json();
      if(hasil.status === 200){
        setUsername('');
        setKomentar('');
        getDataKoment(props.id)
        swal('success',"Berhasil", "success")
      }else{
        swal('oop',"Kesalahan", "error")
      }
      setLoadingPost(false);
    }catch(error){
      setLoadingPost(false);
      swal('oop',"Kesalahan", "error")
      // console.log(error)
    }
  }
  

  return (
    <>
      {loading ? (
        <p>loading ...</p>
      ) : (
        <span onClick={() => hanldeOpenComent(props.id)} className="m-3">
          <i
            style={{ fontSize: 25, cursor: "pointer" }}
            className="fa fa-comment-o"
            aria-hidden="true"
          ></i>
        </span>
      )}

      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="mt-3">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Nama" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control value={komentar} as="textarea" onChange={(e) => setKomentar(e.target.value)} rows={3} placeholder="Komentar ..." />
             {
               loadingPost?
               <button type="button"className="btn btn-primary m-1" disabled>Loading ...</button>:
               <button type="button" onClick={() => handlePostKomentar(props.id)} className="btn btn-primary m-1">Kirim</button>
             }
            </Form.Group>
          </div>
          {dataKomentar.map((comm, id) => {
            return (
                <div key={id} className="mb-3">
                  <b>{comm.username}</b>
                  <br />
                  <p>{comm.komentar}</p>
                </div>
            );
          })}
        </div>
      </Collapse>
    </>
  );
};
export default Komentar;
