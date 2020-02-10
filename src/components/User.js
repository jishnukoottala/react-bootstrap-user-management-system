import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAt,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

const User = props => {
  const { username, name, email, address } = props.user;
  return (
    <div className="mb-4 col col-lg-4">
      <Card style={{ minHeight: "450px" }}>
        <CardImg
          top
          width="350px"
          height="250px"
          src={`//joeschmoe.io/api/v1/${username}`}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            <FontAwesomeIcon
              icon={faUser}
              swapOpacity
              style={{ marginRight: "7px", color: "#626890" }}
            />
            {name}
          </CardTitle>
          <CardSubtitle>
            <FontAwesomeIcon
              icon={faAt}
              swapOpacity
              style={{ marginRight: "5px", color: "#626890" }}
            />
            {email}
          </CardSubtitle>
          <CardText>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              swapOpacity
              style={{ marginRight: "5px", color: "#626890" }}
            />
            {address.suite},{address.street},{address.city}
          </CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default User;
