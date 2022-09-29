
function Profile() {
    return (
        <div className = "profile-section">
            <div className = "profile-text">
                <p className = "profile-text-greeting">
                Hi!
                </p>
                <p className = "profile-text-introducing">I'm Adisorn Meerat.<br/> 
                a Full Stack developer</p>
                <p className = "profile-text-details"> I am based in Bangkok, Thailand<br/>
                I am coding with a clean and beautiful problem <br/>
                solving in mind.</p>    
            </div>
                <img src = "heroImg 1.svg" alt = "profile-image" className = "profile-image"/>
                <img className = "hamburger-menu" src = "hamburger-menu.svg" alt = "hamburger-menu"/>

        </div>
    )
}


export default Profile;