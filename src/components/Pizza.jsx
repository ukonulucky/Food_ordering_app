import React, { useState } from 'react'
import "../styles/Pizza.css"
import { Modal,Button } from "react-bootstrap"
function Pizza({ pizza }) {
    const [variants, setVariants] = useState("small")
    const [quantity, setQuantity] = useState(1)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <div>
      <div className="pizza">
          <h2 onClick={handleShow}>{pizza.name}</h2>
                <div className="pic" onClick={handleShow}>
                    <img src={pizza.image} alt="pizza" />
                </div>
              <div className="content">
                    <div className="varient">
                        <h2>Variants</h2>
                        <select value={variants}   className="form-control" onChange={(e) => {
                            setVariants(e.target.value)
                        }}>
                       {pizza.varients.map(size => (<option value={size}>{size}</option>))}
                      </select>
                  </div>
                    <div className="quantity">
                        <h2>Quantity</h2>
                        <select value={quantity} className="form-control"  onChange={(e) => {
                            setQuantity(e.target.value)
                        }}>
                      {
                              [...Array(10).keys()].map((x, y) => <option value={y + 1}>{ y+1 }</option>
                             
                          )
                      }
                      </select>
                  </div>
                </div>
                <div className="content2 mb-2">
                    <div className="price">
                        <h3>Price: #{pizza.prices[0][variants]  * quantity}</h3>
                    </div>
                    <div className="add px-3 py-2 btn">
                        Add To Cart
                    </div>
                </div>
   
            </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
                    <Modal.Title>{ pizza.name}</Modal.Title>
        </Modal.Header>
                <Modal.Body>
                    <img src={pizza.image} style={{
                        height: "300px",
                        width: "100%",
                        margin:"0 auto"
                        
                    }} />
                <p>    { pizza.description} </p>
        </Modal.Body>
                <Modal.Footer>
                    
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

            </div>
  )
}

export default Pizza