document.addEventListener("DOMContentLoaded", () => {

    const app = document.getElementById("app");
    const navLinks = document.querySelectorAll(".nav-link");

    const pages = {
        home: `
            <section class="page dynamic-page home-pg">
                <h1>HELLO I'M SWATHI</h1>
            </section>
        `,
        about: `
            <section class="page dynamic-page about-pg">
                <h2>ABOUT ME</h2>
                <p>
                    Analytical and detail-oriented Computer Science Engineering student with strong foundations in Machine Learning, Data
                    Science, Statistical Analysis, and Data Engineering workflows.<br> Experienced in handling large datasets, data preprocessing,
                    exploratory data analysis, model building, and visualization using modern analytical tools.<br> 
                    Skilled in SQL, Python, and datadriven decision-making, with hands-on exposure to AI/ML applications, predictive modelling<br>
                    Adept at problem solving, documentation, and communicating insights clearly across diverse audiences
                </p>
                <div id="Resume">
                    <a href="Resume2.pdf" download>
                        <button class="btn">Click to view my Resume</button>
                    </a>
                </div>
                <div id="icons">
                    <a href="https://www.linkedin.com/in/swathi-yuvaraj-848122253/">
                        <img id="linkedin" class="icon" src="images/linkedin-logo.png" alt="LinkedIn">
                    </a>
                    <a href="https://github.com/Swathi17Y" target="_blank">
                        <img id="github" class="icon" src="images/git.jpg" alt="GitHub"> 
                    </a>
                    <a href="mailto:swathyyuva3@gmail.com" target="_blank">
                        <img id="Mail" class="icon" src="images/gmail.png" alt="Gmail">
                    </a>
                </div>
            </section>
        `,
        projects: `
            <section class="page dynamic-page project-pg">
                <h2>My Projects</h2>
                <div class="projects-wrapper">
                    <div class="container">
                        <a href="TSO.html">
                            <img src="images/pso-img.png" onclick="ProjectBox()" >
                            <p>Traffic Signal Optimzation</p>
                        </a>
                        <button class="open-popup" data-popup="popup">View Description</button>
                    </div>
                    
                    <div class="popup" id="popup">
                        <div class="close-btn"> x </div>
                        <h1>Traffic Signal Optimization</h1>
                        <p>
                            Traffic jams are significant issues faced by cities, leading to delays, more fuel consumption, and pollution to the environment.
                            In this study, we propose a novel adaptive traffic signal control system based on real-time vehicle embeddings that integrates CNNs
                            with particle swarm optimization (PSO). The CNN analyses live streams from traffic cameras to detect and classify vehicles and
                            provide accurate and real-time traffic density statistics. This data is then used to dynamically optimize traffic signal timings using the
                            PSO algorithm to minimize delays and balance the flow of traffic across the crossings. The integrated method uses the strength of CNN
                            for learning accuracy on visual data interpretation and PSO for quickly exploring the solution space in high-dimensional search
                            space, thus helping to deliver reliable and flexible traffic scenarios.Simulation results reveal considerable achievements in decreasing
                            wait times, traffic delays, and pollutants, underlining the system's potential to transform
                        </p>
                    </div>
                    
                    
                    <div class="containerT">
                        <a href="C:\Users\swath\Desktop\Customer_Segmentation.ipynb">
                            <img src="images/CS.jpg" >
                            <p> Customer Segmentation</p>
                        </a>
                        <button class="open-popup" data-popup="popup2" >View Description</button>
                    </div>
                    
                    <div class="popup" id="popup2">
                        <div class="close-btn"> x </div>
                        <h1>Customer Segmentation</h1>
                        <p>Clustering group of customers based on their annual income, spending score and age to improve their shopping experience</p>
                    </div>
                    
                    
                    <div class="containerTH">
                        <a href="C:\Users\swath\Desktop\Smart_Hospital_Analytics.pbix">
                            <img src="images/SH.jpg" >
                            <p>Smart Hospital Analytics</p>
                        </a>
                        <button class="open-popup" data-popup="popup3">View Description</button>
                    </div>
                    
                    <div class="popup" id="popup3">
                        <div class="close-btn"> x </div>
                        <h1>Smart Hospital Analytics System</h1>
                        <p>
                            Done using PowerBI
                        </p>
                    </div>
                </div> 
                    <a href="https://github.com/Swathi17Y?tab=repositories" >
                        <button class="btn">View more Projects</button>
                    </a>
            </section>
        `,
        
        skills: `
            <section class="page dynamic-page skills-pg">
                <h2>Skills</h2>
                <ul>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>AI/ML</li>
                </ul>
            </section>
        `
    };

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            
            
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
            
       
            const pageName = link.getAttribute("data-page");
            
          
            if (pages[pageName]) {
                app.innerHTML = pages[pageName];
                
                
                initializeEventListeners();
            }
        });
    });


    function initializeEventListeners() {
        document.querySelectorAll(".open-popup").forEach(button => {
            button.addEventListener("click", function() {
                const popupId = this.getAttribute("data-popup");
                document.getElementById(popupId).classList.add("active");
            });
        });
     
        document.querySelectorAll(".close-btn").forEach(closeBtn => {
            closeBtn.addEventListener("click", function() {
                this.parentElement.classList.remove("active");
            });
        });

        const icons = document.querySelectorAll(".icon");
        icons.forEach(icon => {
            icon.addEventListener("mouseenter", () => {
                icon.style.transform = "scale(1.3)";
            });
            icon.addEventListener("mouseleave", () => {
                icon.style.transform = "scale(1)";
            });
        });
    }

    initializeEventListeners();
});