import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export function toastSuccess() {
    toast.success(`Game Saved`, {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    })
}