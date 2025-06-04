import data from "../assets/data"

function About() {
    return (
        <div className="about">
            <section className="about_intro">
                <h1>About</h1>
                <div className="divider"></div>
                <p>Hi, I'm Renaldas Dalinkevicius, a 25-year-old Interaction Design student based in Oslo, with a background in IT operations and a growing expertise in web development. My journey began as a driftstekniker at Helse Vest IKT, where I gained hands-on experience with client operations, technical troubleshooting, and ensuring smooth IT infrastructure for a demanding hospital environment. Over time, my curiosity for digital products led me deeper into design and development, setting me on a path to blend technical rigor with a creative mindset.</p>
                <p>I thrive in bridging the gap between user needs and technical solutions. My toolbox includes React, HTML, CSS, JavaScript, and Flutter—skills I’ve refined through immersive courses like Kodehode and real-world experience as a junior developer at GDA-education AS. I’m well-versed in wireframing and prototyping with Figma, always with an eye toward accessibility and universal design. Whether it’s collaborating on a team project or taking initiative in self-driven tasks, I’m dedicated to delivering solutions that are not only functional but also intuitive and user-centered.</p>
                <p>As I near the end of my studies in Interaction Design at Kristiania Fagskole, I’m eager to translate my diverse background into impactful projects. I’m a structured, adaptable professional who thrives in fast-paced environments and is always looking to grow. My next chapter? Joining a team where I can leverage my technical skills, creative thinking, and passion for inclusive design to build experiences that make a difference.</p>
                <p>If you're interested in working together, feel free to reach out to me here:</p>
                <a href="mailto:renaldas.dalinkevicius@gmail.com">renaldas.dalinkevicius@gmail.com</a>
                <a href="/docs/cv.pdf" target="_blank" rel="noopener noreferrer">Download my cv</a>
            </section>
            <div className="divider"></div>
            <section className="cv">
                <h2>Experience</h2>
                {data.cv_experience.map((experience, index) => (
                    <div className="cv_container" key={index}>
                        {/* Image for later? <img src="" alt="" /> */}
                        <div className="cv_text_container">
                            <h3>{experience.title}</h3>
                            <p>{experience.secondary_title}</p>
                            <p className="cv_text_date">{experience.date}</p>
                        </div>
                    </div>
                ))}
                <div className="divider"></div>
                <h2>School</h2>
                {data.cv_school.map((school, index) => (
                    <div className="cv_container" key={index}>
                        {/* Image for later? <img src="" alt="" /> */}
                        <div className="cv_text_container">
                            <h3>{school.title}</h3>
                            <p>{school.secondary_title}</p>
                            <p className="cv_text_date">{school.date}</p>
                            {/*{index < data.cv_school.length -1 &&<div className="divider"></div>}*/}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default About