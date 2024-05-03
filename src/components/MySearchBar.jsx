import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MySearchBar = (props) => {
  const navigation = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigation(`/MyMeteo/${props.city}`);
  };
  return (
    <Container className=" d-flex flex-column justify-content-center align-items-center mt-4">
        <h1 className="mb-5">Epic-Meteo</h1>
      <Form className="mb-3 w-75  d-flex " onSubmit={(e) => onSubmit(e)}>
        <Button id="basic-addon1">
          <i className="bi bi-search"></i>
        </Button>
        <Form.Control
          placeholder="Inserisci una città"
          required
          aria-describedby="basic-addon1"
        
          onChange={(e) => props.setCity(e.target.value)}
        />
      </Form>
    </Container>
  );
};
export default MySearchBar;
