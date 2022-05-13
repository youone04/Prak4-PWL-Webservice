import { CardGroup, Card, Col } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import Komentar from "../../Components/Komentar";

const useStyles = createUseStyles({
  divTop: {
    marginTop: 150,
    backgroundColor: "white",
  },
  textProject: {
    color: "#247881",
  },
  card: {
    boxShadow: "0 0 13px 0",
    border: "none",
    margin: 16,
  },
  cardImg: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const Project = (props) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.divTop}>
        <center>
        <h3 className={classes.textProject}>PROJECT YANG TELAH DIBUAT</h3>
        </center>

        <hr />
        <CardGroup>
          {props.data.map((project, i) => {
            return (
              <Col key={i} lg={4} data-aos="zoom-out">
                <Card className={classes.card}>
                  <Card.Img
                    variant="top"
                    className={classes.cardImg}
                    src={project.gambar}
                  />
                  <Card.Body>
                    <Card.Title> {project.judul}</Card.Title>
                    <Card.Text>{project.keterangan}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                      <Komentar id={project.id} />
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </CardGroup>
      </div>
    </>
  );
};
export default Project;
