import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private player2: Fighter;

  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this.player2 = player2;
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this.player2.lifePoints > 0) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
    }
    // Deve retornar 1 se o "player" vencer, -1 caso contrário
    return super.fight();
  }
}