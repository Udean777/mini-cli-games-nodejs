import readline from "readline-sync";

class BatuGuntingKertas {
  constructor() {
    this.pilihan = ["Batu", "Gunting", "Kertas"];
    this.playerScore = 0;
    this.computerScore = 0;
  }

  play() {
    console.log("Selamat datang di Mini Games Batu Gunting Kertas by Udean");
    console.log(
      "Kamu akan ngelawan komputer, yang pertama kali mencapai 3 point yang menang"
    );
    while (true) {
      console.log(
        `Skor anda: ${this.playerScore} - Skor Komputer: ${this.computerScore}`
      );
      const pilihanPlayer = readline.question(
        "Pilih (Batu, Gunting, Kertas): "
      );

      if (!this.pilihan.includes(pilihanPlayer)) {
        console.log(
          "Pilihan ga valid. Silahkan pilih antara Batu, Gunting, Kertas"
        );
        continue;
      }

      const pilihanKomputer =
        this.pilihan[Math.floor(Math.random() * this.pilihan.length)];

      console.log(
        `Anda memilih ${pilihanPlayer}. Komputer memilih ${pilihanKomputer}`
      );

      const hasil = this.menentukanPemenang(pilihanPlayer, pilihanKomputer);

      if (hasil === "player") {
        this.playerScore++;
        console.log("Anda menang");
      } else if (hasil === "komputer") {
        this.computerScore++;
        console.log("Komputer menang");
      } else {
        console.log("Kalian seri");
      }

      if (this.playerScore === 3 || this.computerScore === 3) {
        console.log("Permainan selesai");
        if (this.playerScore > this.computerScore) {
          console.log("Ente menang, selamat!");
        } else {
          console.log("Yahh, kalah sama komputer, coba lagi.");
        }
        break;
      }
    }
  }

  menentukanPemenang(pilihanPlayer, pilihanKomputer) {
    if (
      (pilihanPlayer === "Batu" && pilihanKomputer === "Gunting") ||
      (pilihanPlayer === "Gunting" && pilihanKomputer === "Kertas") ||
      (pilihanPlayer === "Kertas" && pilihanKomputer === "Batu")
    ) {
      return "player";
    } else if (
      (pilihanKomputer === "Batu" && pilihanPlayer === "Gunting") ||
      (pilihanKomputer === "Gunting" && pilihanPlayer === "Kertas") ||
      (pilihanKomputer === "Kertas" && pilihanPlayer === "Batu")
    ) {
      return "komputer";
    } else {
      return "draw";
    }
  }
}

const game = new BatuGuntingKertas();
game.play();
