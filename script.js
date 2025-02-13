//Récupération des Box
const waterBoil = document.getElementById("waterBoil");
const coffeeCase = document.getElementById("coffeeCase");
const monitor = document.getElementById("monitor");
const launcher = document.getElementById("launcher");
const mugCase = document.getElementById("mugCase");
const timer = document.getElementById("timer");
//Attendre
const wait = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

//Que l'eau Boue !!!!!

async function boiledWater() {
  try {
    monitor.textContent = "l'eau est en train de chauffer...";
    waterBoil.setAttribute("id", "waterBoilWarm");
    mugCase.setAttribute("id", "mugCaseWithMug");

    timer.textContent = "3";
    await wait(1000);

    monitor.textContent = "l'eau est en train de chauffer.";
    timer.textContent = "2";
    await wait(1000);

    monitor.textContent = "l'eau est en train de chauffer..";
    timer.textContent = "1";
    await wait(1000);

    monitor.textContent = "Eau chaude!";
    timer.textContent = "0";
    await wait(2000);
  } catch (error) {
    console.error("Erreur lors du chauffage de l'eau:", error.message);
    monitor.textContent("Erreur lors du chauffage de l'eau.");
    throw error; //stop le process
  }
}

//Que le café soit moulu

async function crushCoffee() {
  try {
    monitor.textContent = "Début de la procédure de moulure...";

    timer.textContent = "3";
    await wait(1000);
    monitor.textContent = "Début de la procédure de moulure.";
    timer.textContent = "2";
    await wait(1000);
    monitor.textContent = "Début de la procédure de moulure..";
    timer.textContent = "1";
    await wait(1000);
    monitor.textContent = "Café broyé!";
    coffeeCase.setAttribute("id", "coffeeCaseEmpty");
    timer.textContent = "0";
    await wait(1000);
  } catch (error) {
    console.error("Erreur lors de la moulure de café:", error.message);
    monitor.textContent = "Erreur lors de la moulure de café";
    throw error; //stop le process
  }
}

//Coulage du ristretto

async function runningRistretto() {
  try {
    waterBoil.setAttribute("id", "waterBoilEmpty");
    timer.textContent = "3";
    monitor.textContent = "café en cours de préparation...";
    await wait(1000);
    timer.textContent = "2";
    monitor.textContent = "café en cours de préparation.";
    await wait(1000);
    timer.textContent = "1";
    monitor.textContent = "café en cours de préparation..";
    await wait(1000);
    timer.textContent = "0";

    mugCase.setAttribute("id", "mugCaseWithMugFull");
  } catch (error) {
    console.error("Erreur lors de la préparation:", error.message);
    monitor.textContent = "Erreur lors de la préparation";
    throw error; //stop le process
  }
}

// Fonction globale lancement

async function newRistretto() {
  try {
    monitor.textContent =
      "Votre commande à bien été prise en compte, veuillez patienter...";
    await wait(1000);
    monitor.textContent =
      "Votre commande à bien été prise en compte, veuillez patienter.";
    await wait(1000);
    monitor.textContent =
      "Votre commande à bien été prise en compte, veuillez patienter..";
    await wait(1000);
    monitor.textContent = "Etape 1/3";
    await wait(2000);
    await boiledWater();
    monitor.textContent = "Etape 2/3";
    await wait(2000);
    await crushCoffee();
    monitor.textContent = "Etape 3/3";
    await wait(2000);
    await runningRistretto();
    monitor.textContent = "Votre Café est prêt, veuillez vous servir!";
  } catch {
    console.error("Erreur lors de la procédure:", error.message);
    monitor.textContent = "Erreur lors de la procédure";
    throw error;
  }
}

launcher.addEventListener("click", newRistretto);
