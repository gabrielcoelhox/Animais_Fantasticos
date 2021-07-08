export default function initFuncionamento() {

    const funcionamento = document.querySelector('[data-semana]');
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
    
    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getHours();
    
    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1; // Checa o dia da semana, se for diferente de 1,2,3,4,5 retornará -1. Se retornar -1 irá mostrar fechado
    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);
    
    if(semanaAberto && horarioAberto) {
        funcionamento.classList.add('aberto');
    }
}