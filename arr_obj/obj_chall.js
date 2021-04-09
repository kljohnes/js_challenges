
let house = {
    rooms :[
        {
            name: "bedroom",
            doors: 3,
            windows: 4,
            flooring: "carpet",
            current_occupants: []
        },
        {
            name: "bath",
            doors: 2,
            windows: 0,
            flooring: "tile",
            current_occupants: []
        },
        {
            name: "kitchen",
            doors: 0,
            windows: 2,
            flooring: "hardwood",
            current_occupants: []
        },
        
    ],
    people: [
        {
            name: "Justin",
            age: 28
        },
        {
            name: "Tony",
            age: 8
        }
    ]
}

house.rooms[2].current_occupants = [
    "hello"
]

// 1 - get the word bath to print out
console.log(house.rooms[1].name)
console.log(house.rooms.map((room) => room.name))

console.log(house.rooms[2])
house.rooms[2].current_occupants = house.people