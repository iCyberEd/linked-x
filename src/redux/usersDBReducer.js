import avatars from '../img/users-photo/avatars';

let initialUsersDB = [
    {id: 1, 
        name: "Ivan",
        avatar: avatars.ivan || avatars.noimage, 
        birthplace: "Moscow", 
        fiends: 12,
        profile: {
                    id: 1, name: "Ivan", bio: "Long long time ago...", power: 126, elements: "rock"},
            notifications: ["times out", "you invited", "Congratulations"],
        items: []
    },
    {id: 2, name: "major Paine", avatar: avatars.paine || avatars.noimage, birthplace: "Los Angeles"},
    {id: 3, name: "Superman", avatar: avatars.spr || avatars.noimage, birthplace: "Krypton"},
    {id: 4, name: "avatar", avatar: avatars.avatar || avatars.noimage, birthplace: "Pandora"},
    {id: 5, 
        name: "wolverine", 
        avatar: avatars.wolv || avatars.noimage, 
        birthplace: "USA",
        fiends: 10,
        profile: {  name: "Ivan", 
                    biography: "<p>A mutant with an unstoppable healing power, adamantium metal claws and no-nonsense attitude makes the man called Logan, one of the most ferocious heroes in the universe.</p><p>From the northern wilderness of Canada hails one of the gruffest, most irascible, totally cynical and brooding member of the X-Men ever to grace the team with his presence.</p><p>The result of both genetic mutation and the horrific capabilities of man, the man known to many solely as Wolverine has fought past unspeakable traumas to become one of the most dedicated forces for good in the Marvel Universe!</p>", 
                    skills: {
                        "ADAMANTIUM SKELETON": "Wolverine's skeleton is encased in adamantium, including his lethal retractable claws.",
                        "IMPERMEABLE SKIN": "Wolverine’s nearly impermeable skin protects him from projectiles and sharp weapons.",
                        "HEALING POWERS": "If he does get into a scuffle, Wolverine’s healing powers kick in.",
                        "ENHANCED SENSES": "Wolverine’s enhanced senses enable him to sense fear, lies, and a host of other hard-to-detect sensations.",
                        "SAMURAI-TRAINED": "Trained as a samurai, Wolverine knows his way around a sword and hand-to-hand combat.",
                    },
                    achievements: ["Mutant of the year"],
                    reviews: {
                        "Superman": "You are best!"
                    },
                    power: 126, 
                    elements: "rock"
                },
        notifications: ["times out", "you invited", "Congratulations"],
        items: []
    },
];

const usersDBReducer = (usersDB = initialUsersDB, action) => {
    switch (action.type){
        case "ADD-PROFILE-CONTENT":
            if (action.attribute === "skills"){
                let newSkill = prompt('Add new Skill', "");
                newSkill = newSkill != null && newSkill !== "" ? action.user.profile.skills[newSkill] = newSkill : alert("You have entered an empty field!");
            }
            break;
        default:
            console.log("default");
    }

    return usersDB;
}

export default usersDBReducer;