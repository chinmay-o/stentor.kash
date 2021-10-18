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
  }, 3000);
}

apiCall();
dataGet();

$('.close-button').click(function() {

  clients = clients.slice(0, 1);
  employees = employees.slice(0, 1);

  document.getElementById("employeeOption").innerHTML = '';
  document.getElementById("clientOptionOne").innerHTML = '';
  document.getElementById("clientOptionTwo").innerHTML = '';

  apiCall();
  dataGet();
  index = true;
});

// document.getElementById("userbase").innerHTML
