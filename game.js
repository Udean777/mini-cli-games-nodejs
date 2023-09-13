import readline from "readline-sync";

class GuessingGame {
  constructor() {
    this.numberToGuess = Math.floor(Math.random() * 100) + 1;
    this.attempts = 0;
  }

  play() {
    console.log("Selamat datang di game Tebak Angka!");
    console.log(
      "Saya telah memilih sebuah angka antara 1 hingga 100. Coba tebak angka tersebut."
    );

    while (true) {
      const guess = parseInt(readline.question("Masukkan tebakan Anda: "));

      if (isNaN(guess) || guess < 1 || guess > 100) {
        console.log("Mohon masukkan angka antara 1 hingga 100.");
        continue;
      }

      this.attempts++;

      if (guess === this.numberToGuess) {
        console.log(
          `Selamat! Anda berhasil menebak angka ${this.numberToGuess} dalam ${this.attempts} percobaan.`
        );
        break;
      } else if (guess < this.numberToGuess) {
        console.log("Angka yang Anda tebak terlalu kecil. Coba lagi.");
      } else {
        console.log("Angka yang Anda tebak terlalu besar. Coba lagi.");
      }
    }
  }
}

const game = new GuessingGame();
game.play();
