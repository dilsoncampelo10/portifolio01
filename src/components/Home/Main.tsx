import Card from './Card';
import * as M from './styles';


export default function main() {
    return (
        <div className="container">
            <M.MainTitle>Olá Mundo!</M.MainTitle>
            <M.Text>
                Seja bem-vindo! <br /> Confira abaixo alguns projetos que criei.
            </M.Text> <br />
            <h2>Principais projetos:</h2> <br />
            <M.Container>
                <Card title="Odonto Shield" description='Trata-se de um gerenciador de consultório de dentista, no qual o administrador vai ter o controle de cadastro de pacientes, consultas e cancelamento das mesmas' img='palcoNuarte.png' />
                <Card title="Palco Nuarte" description='Projeto feito para meu trabalho de conclusão de curso, a ideia se concretizou em um site com adm para os responsáveis pelo projeto Nuarte, que é um núcleo do IFRN que realiza tarefas socio-culturais' img='palcoNuarte.png' />
                <Card title="RDCA Project" description='Meu primeiro projeto de TCC, trata-se de um gerenciador de aulas extra-curriculares, no qual o objetivo é conciliar horários de professores e alunos' />

            </M.Container>

            <h2>Menções honrosas:</h2>


        </div>
    )
}