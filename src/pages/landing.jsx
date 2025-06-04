import Project from "../components/project"
import data from "../assets/data"

function Landing() {
    return (
        <div className="landing">
            <section className="intro">
                <h1>Hi, I'm Renaldas</h1>
                <p className="intro_extra"> Interactive design student at Kristiania</p>
                <p className="intro_description">I enjoy any sort of IT work really. Have experience in IT customer support, coding and onsite IT-support. I'm a person who is dedicated to their work. I like to get work done, i don't like to be idle for too long. Currently on the lookout for any sort of IT work. If i sound like the person you are looking for. Then please reach out!</p>
                <div className="btn_wrapper">
                    <a href="/about" className="intro_button">More information</a>
                </div>  
            </section>
            <div className="divider"></div>
            <section className="projects">
                <div className="projects_container">
                    <h2>GitHub projects</h2>
                    <p>My public GitHub projects</p>
                    <div className="project_wrapper">
                        {data.projects_github.map((project, index) =>(
                            <Project title={project.title} desc={project.description} href={project.link} key={index}/>
                        ))}
                    </div>
                </div>
                <div className="divider"></div>
                <div className="projects_container">
                    <h2>Other projects</h2>
                    <p>My other projects</p>
                    <div className="project_wrapper">
                        {data.projects_other.map((project, index) =>(
                            <Project title={project.title} desc={project.description} href={project.link} key={index}/>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing