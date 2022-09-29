function Additional() {
    return (
        <div className = "additional">

            <div className = "additional-text">
                <span className = "additional-text-normal">Additional </span>
                <span className = "additional-text-bold"><b>passions</b></span>
            </div>

            <div className = "boxes" >

                <div className = "each-box add-1">
                    <img src = "./additional/add-1.svg" alt = "passion1"/>
                    <div className = "each-box-text">
                        <p className = "each-box-text-top"><b>Front-End</b> Developer</p>
                        <p className = "each-box-text-bottom"> (Sass, Bootstrap, Tailwind) </p>
                    </div>
                </div>

                <div className = "each-box add-2">
                    <img src = "./additional/add-2.svg" alt = "passion2"/>
                    <div className = "each-box-text">
                        <p className = "each-box-text-top"><b>Back-End</b> Developer</p>    
                        <p className = "each-box-text-bottom"> (NodeJS, Laravel, Codeigniter) </p>
                    </div>
                </div>

                <div className = "each-box add-3">
                     <img src = "./additional/add-3.svg" alt = "passion3"/>
                     <div className = "each-box-text">
                        <p className = "each-box-text-top"><b>UI/UX</b> Designer</p>
                        <p className = "each-box-text-bottom"> (Figma, Zeplin, Adobe XD) </p>
                     </div>
                        
                </div>

            </div>
        

        </div>
    )
}


export default Additional;