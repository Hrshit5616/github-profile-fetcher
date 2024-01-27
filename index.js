const apiUrl = "https://api.github.com/users";

async function fetchData() {
  try {
    // Get the first element with the "txt" class
    const inputElement = document.getElementsByClassName("txt")[0];

    // Get the value of the input element
    const username = inputElement.value;

    const res = await fetch(`${apiUrl}/${username}`);
    
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    document.getElementById("nameofperson").innerText=data.login;
    document.getElementById("aboutinfo").innerText=data.bio;
    document.getElementById("imgg").src = data.url;
    document.getElementById("follower").innerHTML=data.followers;
    document.getElementById("following").innerHTML=data.following;
    document.getElementById("repos").innerHTML=data.public_repos;
    console.log(data);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}
const btn=document.getElementById("btn");
btn.addEventListener("click",fetchData);
  