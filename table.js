function editData(id) {
    document.getElementById("edit_button"+id).style.display="none";
    document.getElementById("save_button"+id).style.display="block";
        
    var name      = document.getElementById("new_name"+id);
    var surname   = document.getElementById("new_surname"+id);
    var email     = document.getElementById("new_email"+id);
    var telephone = document.getElementById("new_telephone"+id);
    var country   = document.getElementById("new_country"+id);
        
    var edit_name      = name.innerHTML;
    var edit_surname   = surname.innerHTML;
    var edit_email     = email.innerHTML;
    var edit_telephone = telephone.innerHTML;
    var edit_country   = country.innerHTML;
        
    name.innerHTML="<input class='form-control' type='text' id='name_text"+id+"' value='"+edit_name +"'>";
    surname.innerHTML="<input class='form-control' type='text' id='surname_text"+id+"' value='"+edit_surname +"'>";
    email.innerHTML="<input class='form-control' type='email' id='email_text"+id+"' value='"+edit_email +"'>";
    telephone.innerHTML="<input class='form-control' type='text' id='telephone_text"+id+"' value='"+edit_telephone +"'>";
    country.innerHTML="<input class='form-control' type='text' id='country_text"+id+"' value='"+edit_country +"'>";
}

function update(id) {
    var name      = document.getElementById("name_text"+id).value;
    var surname   = document.getElementById("surname_text"+id).value;
    var email     = document.getElementById("email_text"+id).value;
    var telephone = document.getElementById("telephone_text"+id).value;
    var country   = document.getElementById("country_text"+id).value;

    document.getElementById("new_name"+id).innerHTML = name;
    document.getElementById("new_surname"+id).innerHTML = surname;
    document.getElementById("new_email"+id).innerHTML = email;
    document.getElementById("new_telephone"+id).innerHTML = telephone;
    document.getElementById("new_country"+id).innerHTML = country;

    document.getElementById("edit_button"+id).style.display="block";
    document.getElementById("save_button"+id).style.display="none";
}

function deleteRegister(id) {
    document.getElementById("row"+id+"").outerHTML="";
}

function addRegister() {

    var name      = document.getElementById("name").value;
    var surname   = document.getElementById("surname").value;
    var email     = document.getElementById("email").value;
    var telephone = document.getElementById("telephone").value;
    var country   = document.getElementById("country").value;
        
    var table  = document.getElementById("data");
    var table_len = (table.rows.length)-1;
    var row = table.insertRow(table_len)
              .outerHTML="<tr id='row"+table_len+"'><td id='new_name"+table_len+"'>"+name+
              "</td><td id='new_surname"+table_len+"'>"+surname+
              "</td><td id='new_email"+table_len+"'>"+email+
              "</td><td id='new_telephone"+table_len+"'>"+telephone+
              "</td><td id='new_country"+table_len+"'>"+country+
              "</td><td><input type='button' id='edit_button"+table_len+
              "' value='Editar' class='btn btn-warning' onclick='editData("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Actualizar' class='btn btn-primary' onclick='update("+table_len+")'> <input type='button' value='Eliminar' class='btn btn-danger' onclick='deleteRegister("+table_len+")'></td></tr>";
    cleanData();
}

function cleanData() {
    document.getElementById("name").value="";
    document.getElementById("surname").value="";
    document.getElementById("email").value="";
    document.getElementById("telephone").value="";
    document.getElementById("country").value="";
}