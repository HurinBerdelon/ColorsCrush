import { Formik, Form, Field, FormikValues } from 'formik'
import * as yup from 'yup'
import { LOCALSTORE_KEY } from "../../../config";
import { useGame } from "../../../hooks/useGame";
import { Container } from "./style";
import { Loading } from "../../Feedback/WidgetForm/ScreenshotButton.tsx/Loading";
import { useRouter } from 'next/router';

export function StartGameForm(): JSX.Element {

    const { player, setPlayer, isGameLoading, setIsGameLoading } = useGame()
    const router = useRouter()

    const initialValues = {
        name: ''
    }

    function handleSubmit(values: FormikValues) {
        setIsGameLoading(true)

        if (player) {
            localStorage.setItem(`player_${LOCALSTORE_KEY}`, JSON.stringify({
                ...player,
                name: values.name,
            }))

            setPlayer({
                ...player,
                name: values.name,
            })
        } else {

            localStorage.setItem(`player_${LOCALSTORE_KEY}`, JSON.stringify({
                name: values.name,
                gamesAvailable: ['light']
            }))

            setPlayer({
                name: values.name,
                gamesAvailable: ['light']
            })
        }

        router.push('/gameboard')
    }

    const nameSchema = yup.object().shape({
        name: yup.string().required('Name is Required')
    })

    return (
        <Container>
            <Formik
                initialValues={initialValues}
                onSubmit={values => handleSubmit(values)}
                validationSchema={nameSchema}
            >
                {({ errors }) => (
                    <Form>
                        <Field
                            type='text'
                            name='name'
                            className={errors.name ? 'errorMessage' : ''}
                            placeholder={errors.name ? errors.name : (player ? player.name : "Your Name")}
                        />

                        <button
                            className="submitForm"
                            type='submit'
                            disabled={errors.name ? true : false}
                        >
                            {isGameLoading ? <Loading /> : 'Start'}
                        </button>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}