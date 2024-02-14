import { useEffect, useState } from "react"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";
import { MdOutlinePending } from "react-icons/md";

const Toast = ({ icon, text, bg, outline, status }) => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        setShow(true)
    }, [])
    useEffect(() => {
        setTimeout(() => {
            if (show) setShow(false)
        }, 4999)
    }, [show])
    const success = {
        border: '1px solid green',
        icon: <IoMdCheckmarkCircleOutline />,
        text: "Success"
    }
    const error = {
        border: '1px solid red',
        icon: <MdErrorOutline />,
        text: "Error"
    }
    const pending = {
        border: '1px solid orange',
        icon: <MdOutlinePending />,
        text: "Pending"
    }
    return (
        <>
            {show && <div className="toast dark:bg-gray-400 dark:text-gray-900" style={{ background: bg, gap: '10px', border: status === 'success' ? success.border : status === 'error' ? error.border : status === 'pending' ? pending.border : `1px solid ${outline}` }}>
                <div className={`text-2xl 
                ${status === 'success' && 'text-[green] dark:text-[#6deb6d]'}
                ${status === 'error' && 'text-[red]'}
                ${status === 'pending' && 'text-[orange]'}
                `}>{icon && icon || status === 'success' && success.icon
                        || status === 'error' && error.icon ||
                        status === 'pending' && pending.icon
                    }</div>
                <div className="flex flex-col">
                    <div className="text-sm font-semibold">{
                        status === 'success' && success.text ||
                        status === 'error' && error.text ||
                        status === 'pending' && pending.text
                    }</div>
                    <div className="text-xs">
                        {text}
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Toast