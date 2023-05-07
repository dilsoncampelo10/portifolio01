import * as C from './styles';

interface CardInterface {
    title: string,
    description: string,
    img: string
}

export default function Card({ title, description, img }: CardInterface) {
    return (
        <C.Box>
            <h2>{title}</h2>

            <C.BoxImage src={img} alt={title} />

            <p>{description}</p>

            <C.BoxButton href='sa'>
                Saiba mais
            </C.BoxButton>
        </C.Box>
    )
}