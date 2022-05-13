import { CardGroup, Card, Col } from "react-bootstrap";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  divTop: {
    marginTop: 50,
  },
  textKeahlian: {
    color: "#247881",
  },
  card: {
    border: "none",
    margin: 8,
  },
  cardImg: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "5%",
  },
});

const Keahlian = (props) => {
  const classes = useStyles();


  return (
    <>
      <div className={classes.divTop}>
        <center>
          <h3 className={classes.textKeahlian}>KEAHLIAN</h3>
          <hr />
          <CardGroup className="text-center">
            {props.data.map((d, i) => {
              return (
                <Col key={i} lg={4} data-aos="zoom-out">
                  <Card className={classes.card}>
                    <Card.Img
                      className={classes.cardImg}
                      variant="top"
                      src={d.gambar}
                    />
                    <Card.Body>
                      <Card.Title>{d.judul}</Card.Title>
                      <Card.Text>
                       {d.keterangan}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Footer>
                  </Card>
                </Col>
              );
            })}
          </CardGroup>
        </center>
      </div>
    </>
  );
};
export default Keahlian;
