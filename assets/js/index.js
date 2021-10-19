let data = null;
let clients = ["Choose"];
let employees = ["Choose"];
var index;
var url = "https://sheets.googleapis.com/v4/spreadsheets/1hOx2TiTaeMMG4CwSd1KVB4hBYer4PpH_h_j5xvshONY/values/responses?key="
var apiKey = "AIzaSyBpaORBU9bCcAMmAbawXlxTpXr1LuAGjWw";

// moment.locale('in')

function apiCall() {

  index = false;

  fetch(url + apiKey).then((response) => response.json()).then((values) => {

    data = values;
    for (var i = 1; i < data.values.length; i++) {

      // join.push(data.values[i][0]);
      if (data.values[i][1] == "Client") {

        clients.push(data.values[i][2]);
      }

      if (data.values[i][1] == "Employee") {

        employees.push(data.values[i][2]);
      }
    }
  });
}

function dataGet() {

  setTimeout(function() {

    for (var x = 0; x < employees.length; x++) {

      document.getElementById("employeeOption").innerHTML += '<option>'+ employees[x] +'</option>';
    }

    for (var y = 0; y < clients.length; y++) {

      document.getElementById("clientOptionOne").innerHTML += '<option>'+ clients[y] +'</option>';
      document.getElementById("clientOptionTwo").innerHTML += '<option>'+ clients[y] +'</option>';
    }

    index = true;
  }, 2000);
}

function attendencePut() {

  document.getElementById("attendenceData").innerHTML = '<div class="mb-4 mt-2"><label for="inputState" class="form-label">Time</label><select name="Session" class="form-select" required><option selected>Choose...</option><option>Morning</option><option>Afternoon</option></select></div>';

  for (var a = 1; a < employees.length; a++) {

    document.getElementById("attendenceData").innerHTML += '<div class="mb-3 mt-3 employeeRadio"><label for="inputState" class="form-label mx-3">'+ employees[a] +': </label><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="'+ employees[a] +'" value="Present"><label class="form-check-label" for="inlineRadio1">Present</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="'+ employees[a] +'" value="Absent"><label class="form-check-label" for="inlineRadio2">Absent</label></div></div>';
  }
}

apiCall();
dataGet();

$('.close-button').click(function() {

  clients = clients.slice(0, 1);
  employees = employees.slice(0, 1);

  document.getElementById("employeeOption").innerHTML = '';
  document.getElementById("clientOptionOne").innerHTML = '';
  document.getElementById("clientOptionTwo").innerHTML = '';
  document.getElementById("attendenceData").innerHTML = '';

  apiCall();
  dataGet();
  index = true;
});

$('#attendenceButton').click(function() {

  attendencePut();
});

// document.getElementById("userbase").innerHTML
