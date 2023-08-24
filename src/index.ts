import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import PVP from './Battle/PVP';
import PVE from './Battle/PVE';
import Battle from './Battle';

// criando objetos do tipo Character
const player1 = new Character('player1');
const player2 = new Character('player2');
const player3 = new Character('player3');
player1.levelUp();
player1.levelUp();
player1.levelUp();

// criando objetos do tipo Monster
const monster1 = new Monster();
const monster2 = new Dragon();

// criando objeto do tipo PVP
const pvp = new PVP(player2, player3);

// criando objeto do tipo PVE
const pve = new PVE(player1, [monster1, monster2]);

// função para imprimir o resultado da batalha
const runBattles = (battles: Battle[]) => {
  const result = battles.map((battle) => battle.fight());
  return result;
};

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };