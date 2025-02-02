document.addEventListener("DOMContentLoaded", function () {
  const tipoOS = document.getElementById("tipoos");
  const relatoField = document.getElementById("relato-field");
  const outrasInfoField = document.getElementById("outrasinfo-field");
  const causaField = document.getElementById("causa-field");
  const orientacaoInput = document.getElementById("orientacao");
  const relatoInput = document.getElementById("relato");

  // Objetos para armazenar textos repetitivos
  const orientacoes = {
    manutencao: "Verificar a integridade do equipamento, dos cabos e dos conectores. Efetuar todos os testes de velocidade junto ao cliente e com o setor de Autenticação.",
    manutencaolink: "Verificar a integridade do equipamento, dos cabos e dos conectores. Efetuar todos os testes de velocidade junto ao cliente e com o setor de Autenticação.",
    manutencaopotencia: "Verificar a integridade do equipamento, dos cabos e dos conectores com o intuito de normalizar a potência que chega até o equipamento. Realizar todos os testes possíveis com o cliente para esclarecer qualquer dúvida que ele possa ter.",
    up: "Equipamento precisa ser trocado por um modelo compatível com o seu plano. De preferência um dispositivo com tecnologia WI-FI 6, garantindo que o teste de velocidade alcance o plano contratado.",
    manutencaodrop: "Fazer o lançamento do cabo drop verificando a melhor rota para restabelecer a conexão do cliente. Efetuar todos os testes de velocidade junto ao cliente e com o setor de Autenticação.",
    suportetrocasenha: "LIBERAR O ACESSO REMOTO E TROCAR A SENHA. Verificar a integridade do equipamento. Efetuar todos os testes de velocidade junto ao cliente e com o setor de Autenticação.",
    suporte: "Verificar a integridade do equipamento, Verificar a integridade dos conectores. Caso necessário EFETUAR A TROCA DO EQUIPAMENTO. Efetuar todos os testes de velocidade junto ao cliente e com o setor de Autenticação.",
    suportetroca: "EFETUAR A TROCA DO EQUIPAMENTO. Após isso efetuar todos os testes de velocidade junto ao cliente e com o setor de Autenticação.",
    suportereset: "RECONFIGURAR O EQUIPAMENTO. Após isso efetuar todos os testes de velocidade junto ao cliente e com o setor de Autenticação.",
  };

  const relatos = {
    suporte: "O cliente nos informou que está sem conexão com a internet. Verificamos que ele já havia relatado quedas de conexão em outras ocasiões. Mesmo após tentarmos configurar a conexão remotamente, o problema não foi resolvido.",
    suporte1: "O cliente nos informou que está com problemas com sua internet. Tentamos configurar sua conexão remotamente, porém o problema não foi resolvido.",
    suportereset: "Cliente relatava estar sem conexão. Foi verificado que o equipamento está RESETADO. Tentamos reconfigurar remotamente com a ajuda do cliente, porém sem sucesso.",
    suportetrocasenha: "O cliente deseja TROCAR DE SENHA. Tentamos configurar sua remotamente, porém sem acesso ao equipamento e o cliente também não tem acesso.",
    suporteint: "Cliente informa lentidão em sua conexão. Foram realizadas diversas configurações remotas em seu equipamento, no entanto, sua conexão não normalizou.",
    suporteplano: "Cliente informa que sua velocidade não está de acordo com o seu plano contratado. Foram realizadas diversas configurações remotas em seu equipamento, no entanto, a velocidade do plano contratado não foi atingida.",
    suporteping: "O cliente relata problemas persistentes de ping alto durante suas sessões de jogo. Observamos que ele já havia mencionado experiências semelhantes anteriormente. Tentamos resolver o problema ajustando as configurações de rede remotamente, mas infelizmente, o ping alto persiste.",
    suportealc: "O cliente entrou em contato para relatar problemas com o alcance do sinal Wi-Fi em sua residência. Ele notou dificuldades em conectar dispositivos em áreas específicas da casa. Após tentativas de ajustes remotamente, não foi possível resolver completamente a questão do alcance do Wi-Fi",
    suportetroca: "Cliente entrou em contato para relatar problemas constantes em sua conexão. Após algumas análises verificamos que o equipamento precisa ser trocado devido o mesmo estar queimado.",
    manutencao: "O cliente entrou em contato informando a falta de conexão. Após análise, constatamos que o equipamento está sinalizando o alerta de LOS o que indica um possível rompimento na fibra ou defeito no conector.",
    manutencao1: "O cliente entrou em contato informando a falta de conexão. Após análise, não foi possível identificar a causa raiz da perda de conexão.",
    manutencaodrop: "Cliente entrou em contato para relatar a falta de conexão à internet. Foi verificado que os cabos da fibra foram rompidos por um caminhão resultando na interrupção do serviço.",
    manutencaolink: "Cliente relata estar sem conexão, foi verificado que o status do equipamento está em link-loss o que indica um possível rompimento da fibra ou defeito no equipamento.",
    manutencaopotencia: "O Cliente comunicou constante instabilidade em sua rede. Foi verificado que a potência que chega até o equipamento está atenuada resultando na interrupção do serviço.",
  };

  // Função para exibir/ocultar campos
  function toggleFields() {
    const isUp = tipoOS.value === "up";
    relatoField.style.display = isUp ? "none" : "block";
    outrasInfoField.style.display = isUp ? "none" : "block";
    causaField.style.display = isUp ? "none" : "block";
  }

  // Função para preencher orientação
  function fillOrientacao() {
    orientacaoInput.value = orientacoes[tipoOS.value] || "";
  }

  // Função para preencher relato
  function fillRelato() {
    relatoInput.value = relatos[tipoOS.value] || "";
  }

  // Event listener para mudanças no tipo de OS
  tipoOS.addEventListener("change", function () {
    toggleFields();
    fillOrientacao();
    fillRelato();
  });

  // Função para exibir/ocultar campos com base em checkboxes
  function toggleCampos() {
    const campos = {
      chkPotenciaOnu: "campoPotenciaOnu",
      chkGpon: "campoGpon",
      chkPPPoE: "campoPPPoE",
      chkPotenciaOlt: "campoPotenciaOlt",
      chkAlarmes: "campoAlarmes",
      chkocorre: "campoOcorre",
      chkTemperatura: "campoTemp",
      chkModelo: "campoModelo",
      chkOutros: "campoOutros",
    };

    Object.keys(campos).forEach((checkboxId) => {
      const campoId = campos[checkboxId];
      const campo = document.getElementById(campoId);
      campo.style.display = document.getElementById(checkboxId).checked ? "block" : "none";
    });
  }

  // Adiciona listeners para os checkboxes
  Object.keys({
    chkPotenciaOnu: "campoPotenciaOnu",
    chkGpon: "campoGpon",
    chkPPPoE: "campoPPPoE",
    chkPotenciaOlt: "campoPotenciaOlt",
    chkAlarmes: "campoAlarmes",
    chkocorre: "campoOcorre",
    chkTemperatura: "campoTemp",
    chkModelo: "campoModelo",
    chkOutros: "campoOutros",
  }).forEach((checkboxId) => {
    document.getElementById(checkboxId).addEventListener("change", toggleCampos);
  });

  // Função para gerar o conteúdo exibido na modal
  function generateContent() {
    const campos = {
      prioridade: document.getElementById("prioridade").value,
      titular: document.getElementById("titular").value,
      localizacao: document.getElementById("localizacao").value,
      responsavel: document.getElementById("responsavel").value,
      horario: document.getElementById("horario").options[document.getElementById("horario").selectedIndex].text,
      relato: document.getElementById("relato").value,
      causa: document.getElementById("causa").value,
      orientacao: document.getElementById("orientacao").value,
      potenciaONU: document.getElementById("potencia-onu").value,
      dispositivosSemInternet: document.getElementById("dispositivos-sem-internet").value,
      modelo: document.getElementById("modelo").value,
      gpon: document.getElementById("gpon").value,
      pppoe: document.getElementById("pppoe").value,
      polt: document.getElementById("potenciaOlt").value,
      alarmesEquipamento: document.getElementById("alarmes-equipamento").value,
      Temp: document.getElementById("Temp").value,
      Outros: document.getElementById("Outros").value,
      validador: document.getElementById("validador").value,
    };

    let conteudoExibido = `PRIORIDADE: ${campos.prioridade}\n\n`;
    conteudoExibido += `TITULAR: \n${campos.titular}\n\n`;
    conteudoExibido += `ENDEREÇO, Localização e cto: \n${campos.localizacao}\n\n`;
    conteudoExibido += `RESPONSÁVEL QUE RECEBERÁ A EQUIPE: ${campos.responsavel}\n\n`;
    conteudoExibido += `MELHOR HORÁRIO PARA ATENDIMENTO: ${campos.horario}\n\n`;

    if (campos.relato.trim() !== "") conteudoExibido += `RELATO: ${campos.relato}\n\n`;
    if (campos.causa.trim() !== "") conteudoExibido += `POSSÍVEL CAUSA: ${campos.causa}\n\n`;
    if (campos.orientacao.trim() !== "") conteudoExibido += `ORIENTAÇÃO PARA OS TÉCNICOS: ${campos.orientacao}\n\n`;

    if (document.getElementById("chkPotenciaOnu").checked) conteudoExibido += `POTÊNCIA ONU: ${campos.potenciaONU}\n`;
    if (document.getElementById("chkocorre").checked) conteudoExibido += `DISPOSITIVOS EM QUE OCORRE: ${campos.dispositivosSemInternet}\n`;
    if (document.getElementById("chkModelo").checked) conteudoExibido += `MODELO DO EQUIPAMENTO: ${campos.modelo}\n`;
    if (document.getElementById("chkGpon").checked) conteudoExibido += `GPON: ${campos.gpon}\n`;
    if (document.getElementById("chkPPPoE").checked) conteudoExibido += `PPPoE: ${campos.pppoe}\n`;
    if (document.getElementById("chkPotenciaOlt").checked) conteudoExibido += `POTÊNCIA OLT: ${campos.polt}\n`;
    if (document.getElementById("chkAlarmes").checked) conteudoExibido += `ALARMES DO EQUIPAMENTO: ${campos.alarmesEquipamento}\n`;
    if (document.getElementById("chkTemperatura").checked) conteudoExibido += `Temperatura: ${campos.Temp}\n`;
    if (document.getElementById("chkOutros").checked) conteudoExibido += `Outros: ${campos.Outros}\n`;
    if (campos.validador.trim() !== "") conteudoExibido += `VALIDADOR: ${campos.validador}\n`;

    return conteudoExibido;
  }

  // Event listener para o botão "Concluir"
  document.getElementById("btnConcluir").addEventListener("click", function () {
    const modal = document.getElementById("modal");
    const textoExibido = document.getElementById("textoExibido");
    textoExibido.value = generateContent();
    modal.style.display = "block";
  });

  // Event listener para o botão "Copiar"
  document.getElementById("btnCopiar").addEventListener("click", function () {
    const textoExibido = document.getElementById("textoExibido");
    textoExibido.select();
    document.execCommand("copy");
  });

  // Event listener para o botão "Fechar"
  document.getElementById("btnFecharModal").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
    location.reload();
  });
});