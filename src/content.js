import { Routes, Route } from 'react-router-dom';
import Top from './pages/top';
import Bill from './pages/bill';

function Content() {
    return (
        <div id="content">
            <Routes>
                <Route path="/" element={<Top />} />
                <Route path="/top" element={<Top />} />
                <Route path="/bill" element={<Bill />} />
            </Routes>
        </div>
    )
}

export default Content