import './top.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Top() {
    return (
        <div>
            <Row>
                <Col sm={8} className="mr-2">
                    <div className='card-pr'>
                        <div className='card-header-pr'>
                            <div className='d-flex justify-content-between'>
                                <h5 className='page-title-pr'>
                                    料金
                                </h5>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className='card-pr'>
                        <div className='card-header-pr'>
                            <div className='d-flex justify-content-between'>
                                <h5 className='page-title-pr'>
                                    通知
                                </h5>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Top;