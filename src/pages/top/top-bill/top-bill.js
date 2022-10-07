import { RiMoneyCnyCircleFill } from 'react-icons/ri';

export default function TopBill() {
    var totalBill = 999999;

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
        </div>
    )
}