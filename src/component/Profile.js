
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
                <img src = "heroImg 1.svg" className = "profile-image"/>
                <img src = "hamburger-menu.svg" className = "hamburger-menu" />

        </div>
    )
}


export default Profile;