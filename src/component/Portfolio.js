function Portfolio() {
    return (
        <div className = "portfolio">

            <div className = "portfolio-text">
                <span className = "portfolio-text-normal">My </span>
                <span className = "portfolio-text-bold"><b>Portfolio</b></span>
            </div>

            <div className = "boxes" >

                <div className = "each-box port-1">
                    <img src = "./portfolio/SendPay 1.svg" alt = "portfolio1" className = "port-1-1"/>    
                    <p className = "each-box-text-top"><b>Send</b>Pay</p>       
                </div>
                <div className = "each-box port-2">
                    <img src = "./portfolio/e-commerce 1 1.svg" alt = "portfolio2" className = "port-1-2"/>
                    <p className = "each-box-text-top"><b>E-</b>commerce</p>
                </div>
                <div className = "each-box port-3">
                    <img src = "./portfolio/Edtech 1.svg" alt = "portfolio2" className = "port-1-3"/>
                    <p className = "each-box-text-top"><b>Ed</b>tech</p>
                </div>

            </div>
        

        </div>
    )
}


export default Portfolio;