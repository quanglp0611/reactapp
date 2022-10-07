import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { RiMoneyCnyCircleFill } from 'react-icons/ri';

export default function TopBill() {
    const [totalBill, setTotalBill] = useState(999999);

    return (
        <div>
            <h5 className="child-tittle">
                支払金額
            </h5>
            <div className="d-flex">
                <RiMoneyCnyCircleFill size={32} className="top-bill-icon" />
                <span className="text-orange top-bill-amount">
                    {totalBill.toLocaleString()} 円
                </span>
                <span className='text-muted-pr top-text-tax'>
                    （税込）
                </span>
            </div>
            <div className='top-bill-gr-button'>
                <Button className="light-orange-button">
                    明細を確認する
                </Button>
                <Button className="yellow-button">
                    グラフで確認する
                </Button>
                <Button className="orange-button top-bill-large-button">
                    契約情報を確認する
                </Button>
            </div>
        </div>
    )
}