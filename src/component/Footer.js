function Footer() {

    return (
        <div className = "App-footer">

            <div className = "footer-text">
                 <span className = "footer-text">Contact</span>
                 <span className = "footer-text-bold"><b> Me</b></span>
            </div>

            <div className = "footer-channel">
                <img className = "footer-img footer-1" src = "./footer/Git.svg" alt = "Git"/>
                <img className = "footer-img footer-2" src = "./footer/Instagram.svg" alt = "Instagram"/>
                <img className = "footer-img footer-3" src = "./footer/Email.svg" alt = "Email"/>
                <img className = "footer-img footer-4" src = "./footer/telpon.svg" alt = "Telephone"/>
            </div>

            <img className = "footer-wave" src = "./footer/wave.svg" alt = "waves"/>
         
        </div>
    );
        

    }

export default Footer;