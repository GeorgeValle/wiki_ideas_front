import './BouncyLoading.css';

function BouncyLoading() {
    return (
        <span className = "loader">
            <span className = "loader__ball"></span>
            <span className = "loader__ball"></span>
            <span className = "loader__ball"></span>
        </span>
    )
}

export default BouncyLoading