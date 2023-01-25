

export default function Layout({ children }) {
    return (
        <div className="container" style={{marginTop:20 + "px", marginBottom:20 + "px"}}>
            {children}
        </div>
    )
}