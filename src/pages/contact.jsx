import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
    return (
        <div className="contact">
            <h1>Contact</h1>
            <div className="divider"></div>
            <p>You can get in touch using these methods</p>
            <div className="contact_method">
                <div className="contact_method_icon">
                    <FaGithub/>
                    <h2 className="contact_method_header">GitHub</h2>
                </div>
                <a target="_blank" href="https://github.com/RenaldasDalinkevicius">https://github.com/RenaldasDalinkevicius</a>
            </div>
            <div className="contact_method">
                <div className="contact_method_icon">
                <MdEmail/>
                    <h2 className="contact_method_header">Email</h2>
                </div>
                <a href="mailto:renaldas.dalinkevicius@gmail.com">renaldas.dalinkevicius@gmail.com</a>
            </div>
            <div className="contact_method">
                <div className="contact_method_icon">
                    <FaLinkedin/>
                    <h2 className="contact_method_header">Linkedin</h2>
                </div>
                <a target="_blank" href="https://linkedin.com/in/renaldas-dalinkevicius">www.linkedin.com/in/renaldas-dalinkevicius</a>
            </div>
        </div>
    )
}

export default Contact