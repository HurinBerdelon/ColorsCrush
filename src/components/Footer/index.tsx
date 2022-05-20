import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import project from '../../../package.json'
import { Container } from './style'

export function Footer(): JSX.Element {

    return (
        <Container>
            <div>
                Develodived by Fernando Cardozo (HurinBerdelon)
                <ul className="mediaLinks">
                    <a href="#"><GitHubIcon /></a>
                    <a href="#"><LinkedInIcon /> </a>
                </ul>
            </div>
            <p>version: {project.version}</p>
        </Container>
    )
}