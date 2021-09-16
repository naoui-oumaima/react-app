import React from "react";
import { Form } from "react-bootstrap";

const CreateItem = () => {
  return (
    <div className="body">
      <div className="createpage">
        <h1 className="titre">Create new Item</h1>
        <Form>
          <Form.Group controlId="formFile">
            <div className="upFile">Upload File</div>
            <div className="formfile">
              <Form.Control type="file" className="inputfile"/>
              <div className="Upload">
                <h3>JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.</h3>
                <img src="img/file.png" alt=""></img>
                <p>Drag and Drop File</p>
                <p>or browse media on your device</p>
              </div>
            </div>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="formlabel">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Item Name"
              className="formcontrol"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="formlabel">Description</Form.Label>
            <Form.Control
              className="formcontrol"
              as="textarea"
              rows={6}
              placeholder="Description of your item"
            />
          </Form.Group>
          <Form.Group controlId="formGridState">
            <Form.Label className="formlabel">Price</Form.Label>
            <Form.Select className="formcontrol" defaultValue="Enter Price">
              <option>Enter Price</option>
              <option>4.5</option>
              <option>5</option>
              <option>8</option>
            </Form.Select>
          </Form.Group>
          <button className="Createitembtn">Create Item</button>
        </Form>
      </div>
    </div>
  );
};
export default CreateItem;
