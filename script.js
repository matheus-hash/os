// Espera o DOM ser carregado antes de executar o código
document.addEventListener("DOMContentLoaded", function() {

  var tipoOS = document.getElementById("tipoos");

  // Oculta ou exibe campos conforme o tipoOS

  tipoOS.addEventListener("change", function() {
    var relatoField = document.getElementById("relato-field");
    var outrasInfoField = document.getElementById("outrasinfo-field");
    var causaField = document.getElementById("causa-field");

    if (tipoOS.value === "up") {
      // Ocultar campos relato, outrasinfo e causa
      relatoField.style.display = "none";
      outrasInfoField.style.display = "none";
      causaField.style.display = "none";
    } else {
      // Mostrar campos relato, outrasinfo e causa
      relatoField.style.display = "block";
      outrasInfoField.style.display = "block";
      causaField.style.display = "block";
    }
  });
  // Preenche o campo "ORIENTAÇÃO PARA OS TÉCNICOS" com o texto inicial
  var orientacaoInput = document.getElementById("orientacao");

  tipoOS.addEventListener("change", function() {
    if (tipoOS.value === "manutencao" || tipoOS.value === "manutencaolink" ) {
      var fraseOrientacao = "Verificar a integridade do equipamento ,dos cabos e dos conectores. Efetuar todos os testes de velocidade junto ao cliente e com o setor de Autenticação";
      orientacaoInput.value = fraseOrientacao;

      } else if (tipoOS.value === "manutencaopotencia") {
        var fraseOrientacao = "Verificar a integridade do equipamento, dos cabos e dos conectores com o intuito de normalizar a potência que chega até o equipamento. Realizar todos os testes possíveis com o cliente para esclarecer qualquer dúvida que ele possa ter.";
        orientacaoInput.value = fraseOrientacao;
      
      } else if (tipoOS.value === "up") {
        var fraseOrientacao = "Equipamento precisa ser trocado por um modelo compatível com o seu plano. De preferência um dispositivo com tecnologia WI-FI 6, garantindo que o teste de velocidade alcance o plano contratado.";
        orientacaoInput.value = fraseOrientacao;


      } else if (tipoOS.value === "manutencaodrop") {
        var fraseOrientacao = "Fazer o lançamento do cabo drop verificando a melhor rota para restabelecer a conexão do cliente. Efetuar todos os testes de velocidade junto ao cliente e com o setor de Autenticação";
        orientacaoInput.value = fraseOrientacao;
    } else if (tipoOS.value === "suportetrocasenha"){

    var fraseOrientacao = "LIBERAR O ACESSO REMOTO E TROCAR A SENHA. Verificar a integridade do equipamento. Efetuar todos os testes de velocidade junto ao cliente e com o setor de Autenticação";
        orientacaoInput.value = fraseOrientacao;
      
      
      
    } else if (tipoOS.value === "suporte" || tipoOS.value === "suporteint" || tipoOS.value === "suportealc" || tipoOS.value === "suporteping" || tipoOS.value === "suporteplano" || tipoOS.value === "suporte1") {
      var fraseOrientacao = "Verificar a integridade do equipamento, Verificar a integridade dos conectores. Caso necessário EFETUAR A TROCA DO EQUIPAMENTO. Efetuar todos os testes de velocidade junto ao cliente e com o setor de Autenticação";
      orientacaoInput.value = fraseOrientacao;

      } else if (tipoOS.value === "suportetroca") {
        var fraseOrientacao = "EFETUAR A TROCA DO EQUIPAMENTO. Após isso efetuar todos os testes de velocidade junto ao cliente e com o setor de Autenticação.";
        orientacaoInput.value = fraseOrientacao;
      
    } 
    else if (tipoOS.value === "suportereset") {
        var fraseOrientacao = "RECONFIGURAR O EQUIPAMENTO. Após isso efetuar todos os testes de velocidade junto ao cliente e com o setor de Autenticação.";
        orientacaoInput.value = fraseOrientacao;

    }else {
      orientacaoInput.value = ""; // Limpa o campo caso o tipo de O.S. seja diferente de manutencao, suporte ou suporteint
    }
  });

  // Preenche o campo "RELATO" com o texto inicial de acordo com o tipo de O.S.
  var tipoOS = document.getElementById("tipoos");
  var relatoInput = document.getElementById("relato");

  tipoOS.addEventListener("change", function() {
    if (tipoOS.value === "suporte") {
      relatoInput.value = "O cliente nos informou que está sem conexão com a internet. Verificamos que ele já havia relatado quedas de conexão em outras ocasiões. Mesmo após tentarmos configurar a conexão remotamente, o problema não foi resolvido.";

    } 
      else if (tipoOS.value === "suporte1") {
          relatoInput.value = "O cliente nos informou que está com problemas com sua internet. Tentamos configurar sua conexão remotamente, porém o problema não foi resolvido.";

      }
    
        else if (tipoOS.value === "suportereset") {
            relatoInput.value = "Cliente relatava estar sem conexão. Foi verificado que o equipamento está RESETADO. Tentamos reconfigurar remotamente com a ajuda do cliente, porém sem sucesso.";

        }

          else if  ( tipoOS.value === "suportetrocasenha"){
            relatoInput.value = "O cliente deseja TROCAR DE SENHA. Tentamos configurar sua remotamente, porém sem acesso ao equipamento e o cliente também não tem acesso."
            
          }
    
    else if (tipoOS.value === "suporteint") {
          relatoInput.value = "Cliente informa lentidão em sua conexão. Foram realizadas diversas configurações remotas em seu equipamento, no entanto, sua conexão não normalizou.";

      } else if (tipoOS.value === "suporteplano") {
        relatoInput.value = "Cliente informa que sua velocidade não está de acordo com o seu plano contratado. Foram realizadas diversas configurações remotas em seu equipamento, no entanto, a velocidade do plano contratado não foi atingida.";

      
    } else if (tipoOS.value === "suporteping") {
            relatoInput.value = "O cliente relata problemas persistentes de ping alto durante suas sessões de jogo. Observamos que ele já havia mencionado experiências semelhantes anteriormente. Tentamos resolver o problema ajustando as configurações de rede remotamente, mas infelizmente, o ping alto persiste.";
    } else if (tipoOS.value === "suportealc") {
        relatoInput.value = "O cliente entrou em contato para relatar problemas com o alcance do sinal Wi-Fi em sua residência. Ele notou dificuldades em conectar dispositivos em áreas específicas da casa. Após tentativas de ajustes remotamente, não foi possível resolver completamente a questão do alcance do Wi-Fi";

     } else if (tipoOS.value === "suportetroca") {
        relatoInput.value = "Cliente entrou em contato para relatar problemas constantes em sua conexão. Após algumas análises verificamos que o equipamento precisa ser trocado devido o mesmo estar queimado.";
    
    } else if (tipoOS.value === "manutencao") {
      relatoInput.value = "O cliente entrou em contato informando a falta de conexão. Após análise, constatamos que o equipamento está sinalizando o alerta de LOS o que indica um possível rompimento na fibra ou defeito no conector.";

      
    
      } 
    else if (tipoOS.value === "manutencao1") {
      relatoInput.value = "O cliente entrou em contato informando a falta de conexão. Após análise, não foi possível identificar a causa raiz da perda de conexão.";



      }else if (tipoOS.value === "manutencaodrop") {
        relatoInput.value = "Cliente entrou em contato para relatar a falta de conexão à internet.  foi verificado que os cabos da fibra foram rompidos por um caminhão resultando na interrupção do serviço.";

      } else if (tipoOS.value === "manutencaolink") {
        relatoInput.value = "Cliente relata estar sem conexão, foi verificado que o status do equipamento está em link-loss o que indica um possível rompimento da fibra ou defeito no equipamento.";

      } else if (tipoOS.value === "manutencaopotencia") {
        relatoInput.value = "O Cliente comunicou constante instabilidade em sua rede. Foi verificado que a potência que chega até o equipamento está atenuada resultando na interrupção do serviço.";

      
      
      
      
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
    document.getElementById('campoPPPoE').style.display = 'none';  }
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
  
  var horarioElement = document.getElementById("horario");
  var horario = horarioElement.options[horarioElement.selectedIndex].text;
  var relato = document.getElementById("relato").value;
  var causa = document.getElementById("causa").value;
  var orientacao = document.getElementById("orientacao").value;
 
  var localizacao = document.getElementById("localizacao").value;
  var titular = document.getElementById("titular").value;
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
    var conteudoExibido = "PRIORIDADE: " + prioridade + "\n\n" ;
    
    conteudoExibido +=
      "TITULAR: " + "\n" + titular + "\n\n" +
      "ENDEREÇO, Localização e cto: " + "\n" + localizacao + "\n\n" +
    
      "RESPONSÁVEL QUE RECEBERÁ A EQUIPE: " + responsavel + "\n\n" +
      
      "MELHOR HORÁRIO PARA ATENDIMENTO: " + horario + "\n\n";
    if (relato.trim() !== "") {
      conteudoExibido += "\n" + "RELATO: " + relato + "\n\n";
    }
    if (causa.trim() !== "") {
      conteudoExibido += "\n" + "POSSÍVEL CAUSA: " + causa + "\n\n";
    }
    if (orientacao.trim() !== "") {
      conteudoExibido += "\n" + "ORIENTAÇÃO PARA OS TÉCNICOS: " + orientacao + "\n\n";
    }
      
    


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
      conteudoExibido += "\n" + "VALIDADOR: " + validador + "\n";
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
