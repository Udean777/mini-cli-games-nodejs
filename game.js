import readline from "readline-sync";

class GameTebakAngka {
  constructor() {
    this.angkaDitebak = Math.floor(Math.random() * 100) + 1;
    this.percobaan = 0;
    this.nyawa = 3;
  }

  play() {
    console.log("Selamat datang di game Tebak Angka!");
    console.log(
      "Saya telah memilih sebuah angka antara 1 hingga 100. Coba tebak angka tersebut."
    );

    while (this.nyawa > 0) {
      const tebak = parseInt(readline.question("Masukkan tebakan Anda: "));

      if (isNaN(tebak) || tebak < 1 || tebak > 100) {
        console.log("Mohon masukkan angka antara 1 hingga 100.");
        continue;
      }

      this.percobaan++;

      if (tebak === this.angkaDitebak) {
        console.log(
          `Selamat! Anda berhasil menebak angka ${this.angkaDitebak} dalam ${this.percobaan} percobaan.`
        );
        break;
      } else if (tebak < this.angkaDitebak) {
        console.log("Angka yang Anda tebak terlalu kecil. Coba lagi.");
      } else {
        console.log("Angka yang Anda tebak terlalu besar. Coba lagi.");
      }

      this.nyawa--;

      if (this.nyawa === 0) {
        console.log("Anda kehabisan nyawa. Coba lagi untuk memulai");
        console.log(`Angka yang benar adalah: ${this.angkaDitebak}`);
        break;
      } else {
        console.log(`Sisa nyawa: ${this.nyawa}`);
      }
    }
  }
}

const game = new GameTebakAngka();
game.play();
