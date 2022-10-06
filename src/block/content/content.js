import { Routes, Route } from 'react-router-dom';
import './content.css';
import Top from '../../pages/top/top';
import Bill from '../../pages/bill/bill';
import EnergySaving from '../../pages/energy-saving/energy-saving';
import Notification from '../../pages/notification/notification';
import MyPage from '../../pages/my-page/my-page';

function Content() {
    return (
        <div id="content">
            <Routes>
                <Route path="/" element={<Top />} />
                <Route path="/bill" element={<Bill />} />
                <Route path="/energy-saving" element={<EnergySaving />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/my-page" element={<MyPage />} />
            </Routes>
        </div>
    )
}

export default Content;