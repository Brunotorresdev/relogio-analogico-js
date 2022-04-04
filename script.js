// variaveis dos elementos que serão selecionados
let digitalElement = document.querySelector(".digital");
let sElement = document.querySelector(".p_s");
let mElement = document.querySelector(".p_m");
let hElement = document.querySelector(".p_h");

// Função que fará o relógio funcionar
function updateClock() {
  // variáveis de funções que recebem as informações das horas/minutos/segundos atuais
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  // Manipulando o relogio digital exibindo na tela as informações da hora atual
  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(
    second
  )}`;

  // variaveis de calculo das horas/minutos/segundos
  let sDeg = (360 / 60) * second - 90;
  let mDeg = (360 / 60) * minute - 90;
  let hDeg = (360 / 12) * hour - 90;

  // manipulando os ponteiros com base nas horas atuais
  sElement.style.transform = `rotate(${sDeg}deg)`;
  mElement.style.transform = `rotate(${mDeg}deg)`;
  hElement.style.transform = `rotate(${hDeg}deg)`;
}

// função que adiciona o zero quando o valor da hora for menor que 10, para seguir o padrao de 2 digitos
function fixZero(time) {
  return time < 10 ? `0${time}` : time;
}

// setando o intervalo da função para ser executada a cada segundo
setInterval(updateClock, 1000);
updateClock()