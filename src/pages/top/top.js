import './top.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopBill from './top-bill/top-bill';

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
                        <div className="top-body" >
                            <Row className="h-100">
                                <Col className="mr-2 top-body-left">
                                    <TopBill />
                                </Col>
                                <Col className="mr-2 top-body-right">

                                </Col>
                            </Row>
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
        </div >
    )
}

export default Top;