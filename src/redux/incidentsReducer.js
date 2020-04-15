import avatars from '../img/users-photo/avatars';

let initialIncidents = {
    incidentsDB: [
        {id: 1, headline: "My cat in trouble", expirationDate: "20.03.2020", location: "Berlin", likesCount: 0,
            details: "", 
            photo: avatars.photo || avatars.noimage,
            comments: [
                {name: "spider", comment: "ho-ho"}
        ]},
        {id: 2, headline: "Asteroid!", expirationDate: "01.01.2025", location: "Earth", likesCount: 0,
            photo: avatars.photo || avatars.noimage,
            comments: [
            {name: "heracles", comment: "yo-yo"}
        ]}
    ],
    tempComment: "i-i-i-i"
};


const incidentsReducer = (incidents = initialIncidents, action) => {
    switch (action.type){
        case "ADD-INCIDENT-COMMENT":
            let newComment = {
                id: incidents.incidentsDB.length,
                name: "username",
                comment: incidents.tempComment
            };
            incidents.incidentsDB[action.identifier-1].comments.push(newComment);
            incidents.tempComment = '';
            break;
        case "UPDATE-INCIDENT-COMMENT":
            incidents.tempComment= action.value;
            break;
        default:
            console.log("default");
    }

    return incidents;
}

export default incidentsReducer;