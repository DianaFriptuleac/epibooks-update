import { Alert, Button } from "react-bootstrap"
import { useState } from "react"

const Welcome = function(){

    const[show, setShow] = useState(true)
    return(
        <>
        <h3 className="text-center my-3 fw-bold">
        Enciclopedia Italiana
        </h3>
        <div className="d-flex justify-content-center">
        <Alert show={show} variant="warning" className="w-50">
        <Alert.Heading>Privacy</Alert.Heading>
        <p>
        Accetta i termini e le condizioni
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-warning">
            Accetta
          </Button>
        </div>
      </Alert>
      </div>
        </>
    )
}
export default Welcome