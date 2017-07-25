function createPlayer() {

  let playerID = 0;

  return class{
    constructor(name, hometown, age, points, team){
      this.name = name;
      this.hometown = hometown;
      this.age = age;
      this.points = points;
      this.id = ++playerID
      this.teamID = team.id
      store.players.push(this)
    }

    playerHTML(){
      return `<tr id=player-${this.id}>
        <td>${this.name}</td>
        <td>${this.hometown}</td>
        <td>${this.age}</td>
        <td>${this.points}</td>
        <td><button class="destroy-player" id=${this.id}>X</button></td>
      </tr>`
    }

      static find(id){
        return store.players.filter(function(player) {
          return player.id === id
        })
      }

      destroy(){
        let index = store.players.indexOf(this)
        store.players.splice(index, 1)
    }

  }

}

Player = createPlayer()
