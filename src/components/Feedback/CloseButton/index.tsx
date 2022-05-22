import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'
import { Container } from './style'

export function CloseButton(): JSX.Element {

    return (
        <Container>

            <Popover.Button className='closeButton' title='Fechar formulário de feedback'>
                <X weight='bold' className='icon' />
            </Popover.Button>
        </Container>
    )
}