const bobsFollowers = ['George'
, 'Fred', 'Bianca', 'Alex']
const tinasFollowers = ['Bianca', 'Lyle', 'Alex']
const mutualFollowers = []
for (let b = 0; b < bobsFollowers.length; b++) {
  for (let t = 0; t < tinasFollowers.length; t++) {
  if (bobsFollowers[b] === tinasFollowers[t]) {mutualFollowers.push(bobsFollowers[b])
    }
  }
}
console.log(mutualFollowers)