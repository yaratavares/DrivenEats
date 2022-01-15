export default function FinishPage() {
  return (
    <div class="tela">
      <div class="confirm">
        <p class="header">Confirme seu pedido</p>
        <div></div>
        <div class="button-1">
          <button class="ok">Tudo certo, pode pedir!</button>
        </div>
        <div class="button-2">
          <button class="cancel" onclick="close_1()">
            cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
