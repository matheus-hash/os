// Espera o DOM ser carregado antes de executar o código
document.addEventListener("DOMContentLoaded", function() {

    // Preenche o campo "ORIENTAÇÃO PARA OS TÉCNICOS" com o texto inicial
    var orientacaoInput = document.getElementById("orientacao");
    var tipoOS = document.getElementById("tipoos");
  
    tipoOS.addEventListener("change", function() {
      if (tipoOS.value === "manutencao") {
        var fraseOrientacao = "Verificar a integridade do equipamento e dos cabos, fazer todos os testes possíveis junto ao cliente para estar tirando qualquer dúvida que ele venha ter";
        orientacaoInput.value = fraseOrientacao;
      } else if (tipoOS.value === "suporte" || tipoOS.value === "suporteint") {
        var fraseOrientacao = "Verificar a integridade do equipamento, Verificar a integridade dos conectores. Caso necessário EFETUAR A TROCA DO EQUIPAMENTO. Efetuar todos os testes de velocidade junto ao cliente.";
        orientacaoInput.value = fraseOrientacao;
      } else {
        orientacaoInput.value = ""; // Limpa o campo caso o tipo de O.S. seja diferente de manutencao, suporte ou suporteint
      }
    });
  
    // Preenche o campo "RELATO" com o texto inicial de acordo com o tipo de O.S.
    var tipoOS = document.getElementById("tipoos");
    var relatoInput = document.getElementById("relato");
  
    tipoOS.addEventListener("change", function() {
      if (tipoOS.value === "suporte") {
        relatoInput.value = "Cliente informa estar sem conexão. Foi verificado que o mesmo teve diversas quedas de conexão. Mesmo após as configurações remotas, sua conexão não retornou.";
      } else if (tipoOS.value === "manutencao") {
        relatoInput.value = "Cliente sem conexão. Foi verificado que o equipamento está com LOS em alerta.";
      } else if (tipoOS.value === "suporteint") {
        relatoInput.value = "Cliente informa lentidão em sua conexão. Foram realizadas diversas configurações remotas em seu equipamento, no entanto, sua conexão não normalizou.";
      } else {
        relatoInput.value = ""; // Caso o tipo de O.S. não seja suporte, manutencao ou suporteint, deixa o campo vazio
      }
    });
  
    // Obtém referência aos elementos do formulário que serão mostrados/ocultados de acordo com o tipo de O.S.
  
    var potenciaONU = document.getElementById("potencia-onu");
    var nomePotenciaONU = document.getElementById("nome-potencia-onu");
    var alarmesEquipamento = document.getElementById("alarmes-equipamento");
    var nomeAlarmesEquipamento = document.getElementById("nome-alarmes-equipamento");
    var dispositivosSemInternet = document.getElementById("dispositivos-sem-internet");
    var nomeDispositivosSemInternet = document.getElementById("nome-dispositivos-sem-internet");
  
  
  
  });
  // Função para verificar se um checkbox está marcado
  function isChecked(checkboxId) {
    return document.getElementById(checkboxId).checked;
  }
  
  // Função para exibir/ocultar campos com base nas opções marcadas
  function toggleCampos() {
    // Potência ONU
    if (isChecked('chkPotenciaOnu')) {
      document.getElementById('campoPotenciaOnu').style.display = 'block';
    } else {
      document.getElementById('campoPotenciaOnu').style.display = 'none';
    }
  
    // GPON
    if (isChecked('chkGpon')) {
      document.getElementById('campoGpon').style.display = 'block';
    } else {
      document.getElementById('campoGpon').style.display = 'none';
    }
  
    // PPPoE
    if (isChecked('chkPPPoE')) {
      document.getElementById('campoPPPoE').style.display = 'block';
    } else {
      document.getElementById('campoPPPoE').style.display = 'none';
    }
  
    if (isChecked('chkAlarmes')) {
      document.getElementById('campoAlarmes').style.display = 'block';
    } else {
      document.getElementById('campoAlarmes').style.display = 'none';
    }
  
    if (isChecked('chkModelo')) {
      document.getElementById('campoModelo').style.display = 'block';
    } else {
      document.getElementById('campoModelo').style.display = 'none';
    }
  
    if (isChecked('chkocorre')) {
      document.getElementById('campoOcorre').style.display = 'block';
    } else {
      document.getElementById('campoOcorre').style.display = 'none';
    }
  
    if (isChecked('chkTemperatura')) {
      document.getElementById('campoTemp').style.display = 'block';
    } else {
      document.getElementById('campoTemp').style.display = 'none';
    }
  
    if (isChecked('chkOutros')) {
      document.getElementById('campoOutros').style.display = 'block';
    } else {
      document.getElementById('campoOutros').style.display = 'none';
    }
  
    if (isChecked('chkModelo')) {
      document.getElementById('campoModelo').style.display = 'block';
    } else {
      document.getElementById('campoModelo').style.display = 'none';
    }
    // Potência OLT
    if (isChecked('chkPotenciaOlt')) {
      document.getElementById('campoPotenciaOlt').style.display = 'block';
    } else {
      document.getElementById('campoPotenciaOlt').style.display = 'none';
    }
  }
  
  // Adicione um ouvinte de evento para os checkboxes
  document.getElementById('chkPotenciaOnu').addEventListener('change', toggleCampos);
  document.getElementById('chkGpon').addEventListener('change', toggleCampos);
  document.getElementById('chkPPPoE').addEventListener('change', toggleCampos);
  document.getElementById('chkPotenciaOlt').addEventListener('change', toggleCampos);
  document.getElementById('chkAlarmes').addEventListener('change', toggleCampos);
  document.getElementById('chkocorre').addEventListener('change', toggleCampos);
  document.getElementById('chkTemperatura').addEventListener('change', toggleCampos);
  document.getElementById('chkModelo').addEventListener('change', toggleCampos);
  document.getElementById('chkOutros').addEventListener('change', toggleCampos);
  
  
  // Adiciona um listener para o evento "submit" do formulário
  document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Obtém os valores dos campos do formulário
    var tipoOS = document.getElementById("tipoos").value;
    var potenciaONU = document.getElementById("potencia-onu").value;
    var alarmesEquipamento = document.getElementById("alarmes-equipamento").value;
    var dispositivosSemInternet = document.getElementById("dispositivos-sem-internet").value;
  
    var prioridade = document.getElementById("prioridade").value;
    var responsavel = document.getElementById("responsavel").value;
    var telefone = document.getElementById("telefone").value;
    var horarioElement = document.getElementById("horario");
    var horario = horarioElement.options[horarioElement.selectedIndex].text;
    var relato = document.getElementById("relato").value;
    var causa = document.getElementById("causa").value;
    var orientacao = document.getElementById("orientacao").value;
    var cidade = document.getElementById("cidade").value;
    var bairro = document.getElementById("bairro").value;
    var logradouro = document.getElementById("logradouro").value;
    var complemento = document.getElementById("complemento").value;
    var localizacao = document.getElementById("localizacao").value;
    var modelo = document.getElementById("modelo").value;
    var gpon = document.getElementById("gpon").value;
    var pppoe = document.getElementById("pppoe").value;
    var Temp = document.getElementById("Temp").value;
    var polt = document.getElementById("potenciaOlt").value;
    var Outros = document.getElementById("Outros").value;
    var validador = document.getElementById("validador").value;
  
    // Definindo variáveis do tipo checkbox
    var checkboxPotenciaONU = document.getElementById("chkPotenciaOnu");
    var checkboxGPON = document.getElementById("chkGpon");
    var checkboxPPPoE = document.getElementById("chkPPPoE");
    var checkboxPotenciaOLT = document.getElementById("chkPotenciaOlt");
    var checkboxAlarmesEquipamento = document.getElementById("chkAlarmes");
    var checkboxDispositivosSemInternet = document.getElementById("chkocorre");
    var checkboxTemperatura = document.getElementById("chkTemperatura");
    var checkboxModeloEquipamento = document.getElementById("chkModelo");
    var checkboxOutros = document.getElementById("chkOutros");
  
    // Obtém referência ao botão "Concluir"
    var btnConcluir = document.getElementById("btnConcluir");
  
    // Adiciona um listener para o evento de clique no botão "Concluir"
    btnConcluir.addEventListener("click", function() {
      // Monta o conteúdo a ser exibido na janela modal
      var conteudoExibido = "PRIORIDADE: " + prioridade + "\n\n" +
        "RESPONSÁVEL QUE RECEBERÁ A EQUIPE: " + responsavel + "\n\n" +
        "TELEFONE: " + telefone + "\n\n" +
        "MELHOR HORÁRIO PARA ATENDIMENTO: " + horario + "\n\n" +
        "RELATO: " + relato + "\n\n" +
        "POSSÍVEL CAUSA: " + causa + "\n\n" +
        "ORIENTAÇÃO PARA OS TÉCNICOS: " + orientacao + "\n\n";
      // Verifica se o campo cidade foi preenchido
      if (cidade.trim() !== "") {
        conteudoExibido += "Cidade: " + cidade + "\n";
      }
  
      // Verifica se o campo bairro foi preenchido
      if (bairro.trim() !== "") {
        conteudoExibido += "Bairro: " + bairro + "\n";
      }
  
      // Verifica se o campo logradouro foi preenchido
      if (logradouro.trim() !== "") {
        conteudoExibido += "Logradouro: " + logradouro + "\n";
      }
  
      // Verifica se o campo complemento foi preenchido
      if (complemento.trim() !== "") {
        conteudoExibido += "Complemento: " + complemento + "\n\n";
      }
      conteudoExibido +=
        "Localização e cto: " + localizacao + "\n\n";
  
  
      // Verifica se os checkboxes estão marcados
      if (checkboxPotenciaONU.checked) {
        conteudoExibido += "POTÊNCIA ONU: " + potenciaONU + "\n";
      }
      if (checkboxDispositivosSemInternet.checked) {
        conteudoExibido += "DISPOSITIVOS EM QUE OCORRE: " + dispositivosSemInternet + "\n";
      }
      if (checkboxModeloEquipamento.checked) {
        conteudoExibido += "MODELO DO EQUIPAMENTO: " + modelo + "\n";
      }
      if (checkboxGPON.checked) {
        conteudoExibido += "GPON: " + gpon + "\n";
      }
      if (checkboxPPPoE.checked) {
        conteudoExibido += "PPPoE: " + pppoe + "\n";
      }
      if (checkboxPotenciaOLT.checked) {
        conteudoExibido += "POTÊNCIA OLT: " + polt + "\n";
      }
  
      if (checkboxAlarmesEquipamento.checked) {
        conteudoExibido += "ALARMES DO EQUIPAMENTO: " + alarmesEquipamento + "\n";
      }
      if (checkboxTemperatura.checked) {
        conteudoExibido += "Temperatura: " + Temp + "\n";
      }
      if (checkboxOutros.checked) {
        conteudoExibido += "Outros: " + Outros + "\n";
      }
      if (validador.trim() !== "") {
        conteudoExibido += "VALIDADOR: " + validador + "\n";
      }
  
  
      // Exibe a janela modal
      var modal = document.getElementById("modal");
      modal.style.display = "block";
  
      // Exibe o conteúdo preenchido na janela modal
      var textoExibido = document.getElementById("textoExibido");
      textoExibido.value = conteudoExibido;
  
      // Adiciona um listener para o botão Copiar
      document.getElementById("btnCopiar").addEventListener("click", function() {
        textoExibido.select();
        document.execCommand("copy");
      });
    });
  
  
    // Fecha a janela modal ao clicar no botão Fechar
    document.getElementById("btnFecharModal").addEventListener("click", function() {
      var modal = document.getElementById("modal");
      modal.style.display = "none";
  
      // Recarrega a página automaticamente
      location.reload();
    });
  });
  