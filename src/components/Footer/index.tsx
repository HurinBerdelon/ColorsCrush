import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import project from '../../../package.json'
import { ReleasesModal } from '../MainMenu/ReleasesModal';
import { Container } from './style'

export function Footer(): JSX.Element {

    const { t } = useTranslation()

    const [isRelesesModalOpen, setIsReleasesModalOpen] = useState(false)

    function handleOpenReleasesModal() {
        setIsReleasesModalOpen(!isRelesesModalOpen)
    }

    return (
        <Container>
            <p>
                {t('home:version')}: {project.version}
                <button
                    className="releasesButton"
                    onClick={handleOpenReleasesModal}
                >
                    <h3>{t('home:releases')}</h3>
                </button>
            </p>
            <div>
                {t('home:developed-by')} Fernando Cardozo (HurinBerdelon)
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