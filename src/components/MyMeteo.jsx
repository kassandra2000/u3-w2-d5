import { useEffect, useState } from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MyMeteo = () => {
  const params = useParams();
  const City = params.city;
  const [MyCity, setMyCity] = useState();
  const [dataCity, setDataCity] = useState(null);
  const fetchMeteo = () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${City}&appid=7338c25e1c21f322f556617db48e2025`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Network response was not ok.");
        }
      })
      .then((data) => {
        setMyCity(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };

  const fetchTodayMeteo = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${MyCity[0].lat}&lon=${MyCity[0].lon}&appid=7338c25e1c21f322f556617db48e2025`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Network response was not ok.");
        }
      })
      .then((data2) => {
        setDataCity(data2);
        console.log(data2);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };

  useEffect(() => {
    if (City !== undefined) {
      fetchMeteo();
    }
  }, [City]);

  useEffect(() => {
    if (MyCity) {
      fetchTodayMeteo();
    }
  }, [MyCity]);
  const trasformCelsius = (kelvin) => {
    let celsius = parseFloat(kelvin) - 273.15;
    celsius = celsius.toFixed(2);
    return celsius;
  };

  return (
    dataCity && (
      <>
          <h1 className="text-center mt-5 mb-2">{City}</h1>
        <Container className="mt-5 d-flex justify-content-center">
          {console.log(dataCity.weather[0].icon)}
          <Row>
            <Col>
              <Row>
                <Col xs={12}>
                  <img
                    src={`https://openweathermap.org/img/wn/${dataCity.weather[0].icon}@2x.png`}
                    alt=""
                  />
                </Col>
                <Col xs={12}>{dataCity.weather[0].description}</Col>
                <Col xs={12}>{trasformCelsius(dataCity.main.temp)} °C</Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col xs={12}>
                  <img src="data:image/jpeg;base64,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" />
                </Col>
                <Col xs={12}>Wind:</Col>
                <Col xs={12}>{dataCity.wind.speed} m/s</Col>
              </Row>
            </Col>
            <Col>
             
              <Row>
                  <img  className="img" src="data:image/png;base64,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" />
                <Col xs={12}>Humidity:</Col>
                <Col xs={12}>{dataCity.main.humidity}%</Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    )
  );
};
export default MyMeteo;
