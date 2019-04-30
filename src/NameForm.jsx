import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormFeedback,
  FormGroup
} from "reactstrap";
import axios from "axios";

class NameForm extends Component {
  constructor() {
    super();
    this.state = { InputValue: "", modal: true, isInvalid: false };
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  //sur chagement de valeur saisie, on interdit un bakspace et on passe la valeur entrée à "Valid"
  handleChange = event => {
    this.setState({ InputValue: event.target.value.replace(/[ ]/gi, "") });
    this.setState({ isInvalid: false });
  };
  //sur click, vérification valeur dans Input
  toggle() {
    const pseudo = this.state.InputValue;
    if (pseudo.length === 0) {
      this.setState({ isInvalid: true });
    } else {
      localStorage.setItem("pseudo", pseudo);
      axios
        .post("http://192.168.88.228:8000/user/subscribe", {
          pseudo: pseudo,
          score: 0
        })
        .then(function(response) {
          console.log(response.data);
          let id = response.data.insertId;
          localStorage.setItem("id", id);
          window.location.reload();
        })
        .catch(function(error) {
          console.log(error);
        });
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }
  }
  render() {
    return (
      <>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            <h3>Login</h3>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Input
                id="name"
                type="text"
                pseudo={this.state.InputValue}
                onChange={this.handleChange}
                invalid={this.state.isInvalid}
                onKeyPress={event => {
                  if (event.key === "Enter") {
                      event.preventDefault();
                      document.getElementById("login").click();
                  }}}
              />
              <FormFeedback>
                Oh Noes... Please enter your nickname guy !
              </FormFeedback>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              color={this.state.isInvalid ? "danger" : "primary"}
              onClick={this.toggle}
              id="login"

            >
              Sign up
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default NameForm;
