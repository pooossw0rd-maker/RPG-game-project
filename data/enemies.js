// --- Enemy Scaling ---
const ENEMY_TYPES = {
    Skeleton: { HP: 8, ATK: 2, xpReward: 10, },
    Ghoul: { HP: 12, ATK: 3, xpReward: 20 },
    Werewolf: { HP: 15, ATK: 4, xpReward: 25 },
    Zombie: { HP: 10, ATK: 2, xpReward: 15 }
}

// Active dungeon enemy
const currentEnemy = {
    name: "",
    HP: 0,
    ATK: 0,
    xpReward: 0
}