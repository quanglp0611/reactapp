import ListGroup from 'react-bootstrap/ListGroup';

export default function TopTable() {
    const ListItem = ({ label, content }) =>
        <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <span className='text-orange'>
                <span className='dotItem'>■</span>;
                {label}
            </span>
            <span>
                {content}
            </span>
        </ListGroup.Item>


    return (
        <div>
            <ListGroup>
                <ListItem label="請求番号" content="9999-8888-0000" />
                <ListItem label="使用期間" content="2022/7/14 ~ 2022/8/15" />
                <ListItem label="請求額（当月ご利用分" content="～～円" />
            </ListGroup >
        </div >
    )
}