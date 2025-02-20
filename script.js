//Récupération des Box
const waterBoil = document.getElementById("waterBoil");
const coffeeCase = document.getElementById("coffeeCase");
const monitor = document.getElementById("monitor");
const launcher = document.getElementById("launcher");
const mugCase = document.getElementById("mugCase");
const timer = document.getElementById("timer");

const wait = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function generateMonitorMessage(content) {
  for (let i = 1; i < 4; i++) {
    monitor.textContent = `${content}${".".repeat(i)}`;
    timer.textContent = i;
    await wait(1000);
  }
}

//Que l'eau boue
async function boilingWater() {
  try {
    waterBoil.setAttribute("id", "waterBoilWarm");
    mugCase.setAttribute("id", "mugCaseWithMug");
    monitor.textContent = "Etape 1/3, chauffage de l'eau";
    await wait(1000);
    await generateMonitorMessage("L'eau est en train de chauffer");
  } catch (error) {
    console.error("Erreur lors du chauffage de l'eau:", error.message);
    monitor.textContent("Erreur lors du chauffage de l'eau.");
    throw error; //stop le process
  }
}
//Que le café soit moulu
async function crushCoffee() {
  try {
    monitor.textContent = "Etape 2/3, moulure du café";
    await wait(1000);
    await generateMonitorMessage("Début de la procédure de moulure");
    coffeeCase.setAttribute("id", "coffeeCaseEmpty");
  } catch (error) {
    console.error("Erreur lors de la procédure de moulure:", error.message);
    monitor.textContent("Erreur lors de la procédure de moulure.");
    throw error; //stop le process
  }
}
//Coulage du ristretto
async function runningRistretto() {
  try {
    monitor.textContent = "Etape 3/3, coulage";
    waterBoil.setAttribute("id", "waterBoilEmpty");
    await wait(1000);
    await generateMonitorMessage("café en cours de préparation");
    mugCase.setAttribute("id", "mugCaseWithMugFull");
  } catch (error) {
    console.error("Erreur lors de la préparation :", error.message);
    monitor.textContent("Erreur lors de la préparation ");
    throw error; //stop le process
  }
}
// Fonction globale lancement
async function runNewRistretto() {
  try {
    await generateMonitorMessage(
      "Votre commande à bien été prise en compte, veuillez patienter"
    );
    await boilingWater();
    await crushCoffee();
    await runningRistretto();
    timer.textContent = 0;
    monitor.textContent = "Votre Café est prêt, veuillez vous servir!";
  } catch (error) {
    console.error("Erreur lors de la préparation :", error.message);
    monitor.textContent("Erreur lors de la préparation ");
    throw error; //stop le process
  }
}

launcher.addEventListener("click", runNewRistretto);
