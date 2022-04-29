
import {CardGroup , Card, Col} from 'react-bootstrap'
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  divTop: {
    marginTop:50
  },
  textKeahlian: {
    color:'#247881'
  },
  card: {
    border:'none',
    margin: 8
  },
  cardImg: {
    width: '30%',
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius: '30%'
  }
});

const Keahlian = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.divTop}>
          <center>
          <h3 className={classes.textKeahlian}>KEAHLIAN</h3>
          <hr/>
          <CardGroup className="text-center">
            <Col lg={4}  data-aos="zoom-out"> 
            <Card className={classes.card} >
              <Card.Img className={classes.cardImg} variant="top" src="https://aphki.or.id//post/avatar.png" />
              <Card.Body>
                <Card.Title>React JS</Card.Title>
                <Card.Text>
                React JS adalah sebuah pustaka/library javascript yang bersifat open source untuk membangun User Interface
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            </Col>
            <Col lg={4}  data-aos="zoom-out"> 
            <Card  style={{border:'none'}} className="m-3">
            <Card.Img  className={classes.cardImg} variant="top" src="https://aphki.or.id//post/avatar.png" />
              <Card.Body>
                <Card.Title>Next Js</Card.Title>
                <Card.Text>
                NextJS, Framework dari library reactjs untuk memudahkan pembuatan aplikasi react dalam mengembangkan aplikasi tersebut
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            </Col>
           <Col lg={4}  data-aos="zoom-out"> 
            <Card  style={{border:'none'}} className="m-3">
            <Card.Img className={classes.cardImg} variant="top" src="https://aphki.or.id//post/avatar.png" />
              <Card.Body>
                <Card.Title>Express Js</Card.Title>
                <Card.Text>
                Express JS adalah salah satu framework dari NodeJS yang digunakan untuk membangun aplikasi dari sisi back end secara efektif dan optimal.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            </Col>
          </CardGroup>
          </center>
        </div>
    </>
  );
};
export default Keahlian;
