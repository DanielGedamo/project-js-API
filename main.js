let url = " https://my-json-server.typicode.com/Jeck99/fake-server/devices";
let container = document.getElementById(`container`);

async function getDevices() {
  try {
    let devices = await fetch(url).then((res) => res.json());
    devices.forEach((device) => {
      container.innerHTML += cardTemplate(device);
    });
  } catch (err) {
  } finally {
  }
}

function cardTemplate(device) {
  return `
    <div class ="card">
     <p>price:${device.price}</p>
     <p>isAvilable:${device.isAvailable}</p>
     <p>createdAd:${device.createdAt}</p>
     <p>color:${device.color}</p>
     <p> brand:${device.brand}</p>
     <p> ram:${device.ram}</p>
     <div id="phonePic"><img src="/imag/iphonVSandroid.avif" heigth=18 width=150></div>

    </div>`;
}
async function deleteUser(device) {
  try {
    return await fetch(`${url}/${device}`, { method: "DELETE" });
  } catch (err) {
    alert(err);
  }
}
const togglebuton = document.getElementsByClassName("toggle-button")[0];
const navbarlinks = document.getElementsByClassName("nav_links")[0];

togglebuton.addEventListener("click", () => {
  navbarlinks.classList.toggle("active");
});

// -----------users page--------
let userUrl = "https://my-json-server.typicode.com/Jeck99/fake-server/users";
let userTable = document.getElementById("userTable");
let loading = document.getElementById("loading");
async function getUsers() {
  loading.innerText = "Loading..."

  let users = await fetch(userUrl).then(
    (res) => res.json(),
    (e) => alert(e)
  );
  if (users && users.length) {
    users.forEach((user) => {
      userTable.innerHTML += createTable(user);
    });
  }
  loading.innerText=""
}
function createTable(user) {
  return `
<tr><td>${user.email}</td> 
<td>${user.phone}</td> 
<td>${user.age}</td>
<td>${user.name.last}</td>
<td>${user.name.first}</td>
<td><img src="/imag/הורדה.png" heigth=40 width=40></td></tr>
`;
}

function logError(error) {
  console.log("logError");
  console.log(error);
}

const myAPI= "https://my-json-server.typicode.com/Jeck99/fake-server/users "
async function creatuser() {
   const data = {
    id: firstName.value,
    age: lastName.value
    ,
    name: {
      last: num.value,
      first: num.value,
    },
    email: 'dani.buchanan@undefined.biz',
    index: 40,
    phone: '+1 (888) 494-2462',
    picture: 'http://placehold.it/32x32',
  };
  
  const res =  await fetch (`${myAPI}`,
{
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    },
})
const response= await res.json()
console.log(response);
}