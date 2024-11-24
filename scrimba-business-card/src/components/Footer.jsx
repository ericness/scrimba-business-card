import linkedInLogo from '../assets/linkedin.svg'
import mediumLogo from '../assets/medium.svg'
import githubLogo from '../assets/github.svg'
import blueskyLogo from '../assets/bluesky.svg'

function Footer() {
    return (
        <div className="social-icons">
            <a href="https://linkedin.com/in/ericnessdata" target="_blank">
                <img src={linkedInLogo} className="logo" alt="LinkedIn logo" />
            </a>
            <a href="https://medium.com/@eric.christopher.ness" target="_blank">
                <img src={mediumLogo} className="logo" alt="Medium logo" />
            </a>
            <a href="https://github.com/ericness" target="_blank">
                <img src={githubLogo} className="logo" alt="GitHub logo" />
            </a>
            <a href="https://bsky.app/profile/ericness108.bsky.social" target="_blank">
                <img src={blueskyLogo} className="logo" alt="Blue Sky Digital logo" />
            </a>
        </div>
    )
}

export default Footer
