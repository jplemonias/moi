function mev(txt_defaut,ctrl){
    var longueur = document.getElementById(ctrl).value.length;
  
    if(ctrl=='Email'){
      if(document.getElementById(ctrl).value.indexOf('@') == -1 || document.getElementById(ctrl).value.indexOf('.') == -1){
        document.getElementById(ctrl).style.border = '#B400B4 1px solid';
        document.getElementById('mesgInfo').innerText = 'Saisissez un mail au format exemple@exemple.ex';
        b_mail=false;
      }
      else if(document.getElementById('cEmail').value != '' && document.getElementById('cEmail').value != 'Confirmer le mail'){
        if(document.getElementById(ctrl).value != document.getElementById('cEmail').value){
          document.getElementById(ctrl).style.border = '#B400B4 1px solid';
          document.getElementById('mesgInfo').innerText = 'Les deux mails ne correspondent pas';
          b_mail=false;
        }
        else{
          document.getElementById('mesgInfo').innerText = 'Jusqu\'ici tout va bien...';
          document.getElementById(ctrl).style.border = '#04c4b4 1px solid';
        }
      }
      else{
        document.getElementById('mesgInfo').innerText ='Jusqu\'ici tout va bien...';
        document.getElementById(ctrl).style.border='#04c4b4 1px solid';
      }
    }
    else if(ctrl=='cEmail'){
      if(document.getElementById(ctrl).value.indexOf('@') == -1 || document.getElementById(ctrl).value.indexOf('.') == -1){
        document.getElementById(ctrl).style.border = '#B400B4 1px solid';
        document.getElementById('mesgInfo').innerText = "Vous n'avez pas confirmé votre mail.";
        b_mail=false;
      }
      else if(document.getElementById(ctrl).value != document.getElementById('Email').value){
        document.getElementById(ctrl).style.border = '#B400B4 1px solid';
        document.getElementById('mesgInfo').innerText = 'Dissemblance des mails';
        b_mail=false;
      }
      else{
        document.getElementById('mesgInfo').innerText = 'Jusqu\'ici tout va bien...';
        document.getElementById(ctrl).style.border = '#04c4b4 1px solid';
        b_mail=true;
      }
    }
    else if(longueur<3 || document.getElementById(ctrl).value == txt_defaut){
      document.getElementById(ctrl).style.border='#B400B4 1px solid';
      switch(ctrl){
        case 'Name':
          document.getElementById('mesgInfo').innerText = 'Veuillez saisir un nom';
        b_nom=false;
        break;
        case 'Email':
        b_mail=false;
        break;
        case 'Message':
      document.getElementById('mesgInfo').innerText = 'Veuillez saisir un texte';
        b_msg=false;
        break;
      }
    }
    else{
      document.getElementById(ctrl).style.border='#04c4b4 1px solid';
      switch(ctrl){
        case 'Name':
          document.getElementById('mesgInfo').innerText = 'Jusqu\'ici tout va bien...';
        b_nom=true;
        break;
        case 'Message':
          document.getElementById('mesgInfo').innerText = 'Jusqu\'ici tout va bien...';
        b_msg=true;
        break;
      }
    }
  }