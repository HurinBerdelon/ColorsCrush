import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import project from '../../../package.json'
import { Container } from './style'

export function Footer(): JSX.Element {

    return (
        <Container>
            <p>version: {project.version}</p>
            <div>
                Developed by Fernando Cardozo (HurinBerdelon)
                <ul className="mediaLinks">
                    <a href="https://github.com/HurinBerdelon/candyCrush"><GitHubIcon /></a>
                    <a href="https://www.linkedin.com/in/fernando-henrique-p-cardozo/"><LinkedInIcon /> </a>
                </ul>
            </div>
        </Container>
    )
}