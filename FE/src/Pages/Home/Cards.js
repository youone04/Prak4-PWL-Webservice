import { Card, Button, Col, Row } from "react-bootstrap";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    border: "none",
    textAlign: "center",
    backgroundImage: `url(${"https://t4.ftcdn.net/jpg/03/59/07/23/360_F_359072340_HwqxP1l6REvZM9a1vd22xLFj0MKYsjd0.jpg"})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'

  },
  cardBody: {
    borderRadius: "0 0 50% 50%",
    fontWeight: "bold",
  
  },
  cardImage: {
    width: "10%",
    borderRadius: "50%",
  },
  col: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 30,
    color: "#247881",
  },
  row: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 30,
  },
  btnCv:{
    width: 120, 
    marginRight: 10
  },
  btnGithub: {
    width: 120
  }
});

const Cards = (props) => {
  const classes = useStyles();
 

  return (
    <Card className={classes.card}>
      <Card.Body className={classes.cardBody}>
        <Card.Img
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          variant="top"
          className={classes.cardImage}
          src="https://aphki.or.id//post/avatar.png"
        />
        <Card.Title
          style={{ color: "#247881" }}
          data-aos="flip-left"
          data-aos-delay="100"
          data-aos-anchor=".example-selector"
        >
         {props.data?.username}
        </Card.Title>
        <Col
          className={classes.col}
          lg={6}
          data-aos="flip-left"
          data-aos-delay="100"
          data-aos-anchor=".example-selector"
        >
          {props.data?.text}
        </Col>

        <Row className={classes.row}>
          <Button
            onClick={() =>
              window.open(
                "https://youone04.github.io/",
                "_blank" // <- This is what makes it open in a new window.
              )
            }
            data-aos="fade-right"
            data-aos-anchor-placement="right-center"
            variant="outline-primary"
            className={classes.btnCv}
          >
              {props.data?.text_cv}
          </Button>{" "}
          <Button
            onClick={() =>
              window.open(
                "https://github.com/youone04",
                "_blank" // <- This is what makes it open in a new window.
              )
            }
            data-aos="fade-left"
            data-aos-anchor-placement="left-center"
            variant="outline-secondary"
            className={classes.btnGithub}
          >
            {props.data?.text_github}
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default Cards;
