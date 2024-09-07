const cloudsSkills = document.getElementById("clouds-skills");
const serversSkills = document.getElementById("servers-skills");
const toolsSkills = document.getElementById("tools-skills");
const apisSkills = document.getElementById("apis-skills");

const clouds = document.getElementById("clouds");
const servers = document.getElementById("servers");
const tools = document.getElementById("tools");
const apis = document.getElementById("apis");

cloudsSkills.classList.add("skills");
clouds.addEventListener("click", function () {
  cloudsSkills.classList.add("skills");
  serversSkills.classList.remove("skills");
  toolsSkills.classList.remove("skills");
  apisSkills.classList.remove("skills");
});
servers.addEventListener("click", function () {
  serversSkills.classList.add("skills");
  cloudsSkills.classList.remove("skills");
  toolsSkills.classList.remove("skills");
  apisSkills.classList.remove("skills");
});
tools.addEventListener("click", function () {
  toolsSkills.classList.add("skills");
  cloudsSkills.classList.remove("skills");
  serversSkills.classList.remove("skills");
  apisSkills.classList.remove("skills");
});
apis.addEventListener("click", function () {
  apisSkills.classList.add("skills");
  cloudsSkills.classList.remove("skills");
  serversSkills.classList.remove("skills");
  toolsSkills.classList.remove("skills");
});
