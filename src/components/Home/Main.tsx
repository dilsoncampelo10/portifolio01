import * as M from './styles';

export default function main() {
    return (
        <div className="container">
            <M.MainTitle>Olá Mundo!</M.MainTitle>
            <M.Text>
                A ideia desse primeiro portifólio é avaliar minha experiência na área de desenvolvimento até agora (Meio de 2023). <br />
                A ideia é criar três portifólios, o primeiro é esse, no qual assumo um cargo de desenolvedor júnior e os outros virão conforme eu sinta que assumi um novo nível.
                Atualmente trabalho na Conted.tech, tenho 19 anos e alguns meses de experiência no mercado de trabalho.
            </M.Text>
            <M.Text>
                O projeto foi criado usando <strong>TypeScript</strong>, com a biblioteca <strong>React</strong> e o framework <strong>Next</strong>. <br />
                Algumas considerações a mais que posso fazer é mencionar o Syled Components e React Icons para ajudar na estilização. Na parte de consumo de Api utilizo o axios.
            </M.Text>
            <M.Text>
                Enfim, o tem algumas sessões para explorar e minha meta é que daqui, um, dois, três anos eu consiga construir algo bem melhor.
            </M.Text>
        </div>
    )
}