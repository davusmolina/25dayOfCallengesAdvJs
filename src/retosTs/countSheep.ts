type Sheep = { name: string; color: string };

function countSheep(ovejas: Sheep[]): Sheep[] {
  const sheepInRed = ovejas.filter((oveja) => oveja.color === 'rojo');
  const sheepFiltered = sheepInRed.filter((oveja) => {
    let nameLc = oveja.name.toLowerCase();
    return nameLc.includes('a') && nameLc.includes('n');
  });
  return sheepFiltered;
}

export { countSheep };
