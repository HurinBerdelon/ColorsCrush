import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from 'react';
import project from '../../../package.json'
import { ReleasesModal } from '../MainMenu/ReleasesModal';
import { Container } from './style'

export function Footer(): JSX.Element {

    const [isRelesesModalOpen, setIsReleasesModalOpen] = useState(false)

    function handleOpenReleasesModal() {
        setIsReleasesModalOpen(!isRelesesModalOpen)
    }

    return (
        <Container>
            <p>
                version: {project.version}
                <button
                    className="releasesButton"
                    onClick={handleOpenReleasesModal}
                >
                    <h3>Releases</h3>
                </button>
            </p>
            <div>
                Developed by Fernando Cardozo (HurinBerdelon)
                <ul className="mediaLinks">
                    <a target='_blank' href="https://github.com/HurinBerdelon/candyCrush"><GitHubIcon /></a>
                    <a target='_blank' href="https://www.linkedin.com/in/fernando-henrique-p-cardozo/"><LinkedInIcon /> </a>
                </ul>
            </div>


            <ReleasesModal
                handleCloseReleasesModal={handleOpenReleasesModal}
                isReleasesModalOpen={isRelesesModalOpen}
            />
        </Container>
    )
}