import './index.css';
const Overlay = ({ setIsSidebarOpen }) => {
    return (
        <div onClick={() => { setIsSidebarOpen(false) }} className="overlay">

        </div>
    )
}
export { Overlay }