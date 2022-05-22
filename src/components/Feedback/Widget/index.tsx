import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from '../WidgetForm'
import { Container } from './style'

export function Widget(): JSX.Element {

    return (
        <Container>

            <Popover className='popover'>

                <Popover.Panel>
                    <WidgetForm />
                </Popover.Panel>

                <Popover.Button className='button group'>
                    <ChatTeardropDots className='icon' />

                    <span className='span'>
                        <span>
                            Feedback
                        </span>
                    </span>
                </Popover.Button>

            </Popover>
        </Container>
    )
}