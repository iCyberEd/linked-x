import React from 'react';
import s from './Profile.module.css';



const Profile = (props) => {
    let wolvProfile = props.udb[4];

debugger;
/*     let ModalWindow = (props) => {
        document.body.style.overflowY = 'hidden';
        const dispWindow =  promptWindow.current;
        dispWindow.style.display = "block";
    
        return (
            <div className={s.modalWindow} ref={promptWindow} style={s.modalWindow.display = "block"}>
                <textarea></textarea>
                <button>Ok</button>
                <button>Chancel</button>
            </div>
        )
    } */

    let AddButton = (attrs) => {

        let addContent = () => {
            props.dispatch({type: "ADD-PROFILE-CONTENT", user: wolvProfile, attribute: attrs.attr});
        }

        return (
            
                <svg viewBox="0 0 16 16" onClick={addContent}>  
                    <line x1="0" y1="8" x2="16" y2="8" strokeWidth="1" stroke="#115775"/>
                    <line x1="8" y1="0" x2="8" y2="16" strokeWidth="1" stroke="#115775"/>  
                </svg>
            
        )
    }
    
    let EditButton = () => {
        return (
            <a href="#">
                <svg viewBox="0 0 16 16">                           
                    <line x1="15" y1="0" x2="3" y2="13" strokeWidth="1" stroke="#115775"/>
                    <line x1="16" y1="1" x2="5" y2="13" strokeWidth="1" stroke="#115775"/>
                    <line x1="3" y1="13" x2="5" y2="13" strokeWidth="1" stroke="#115775"/>
                    <polyline points="0,16 2,14 4,16 6,14 8,16 10,14 12,16 14,14 16,16" fill="rgb(249,249,249)" strokeWidth="1" stroke="#115775"/>
                </svg>
            </a>
        )
    }

    return (
        <div className="profile">
            <div className={s.name+" "+s.content} >
                <header>
                    <h2>name: <span>Logan</span></h2>
                    <h2>alias: <span>WOLVERINE</span></h2>
                    <div className={s.controls}>
                        <AddButton />
                        <EditButton />
                    </div>                    
                </header>
                <img src="#" alt='Logan'></img>
            </div>
            <div className={s.motto+" "+s.content} >
                <header>
                    <h2>Motto</h2>
                    <div className={s.controls}>
                        <EditButton />
                    </div>
                </header>
                Rob the rich, give the poor
            </div>
            <div className={s.biography+" "+s.content} >
                <header>
                    <h2>Biography</h2>
                    <div className={s.controls}>
                        <EditButton />
                    </div>
                </header>
                <p>A mutant with an unstoppable healing power, adamantium metal claws and no-nonsense 
                attitude makes the man called Logan, one of the most ferocious heroes in the universe.</p>

                <p>From the northern wilderness of Canada hails one of the gruffest, most irascible, totally 
                cynical and brooding member of the X-Men ever to grace the team with his presence.</p>

                <p>The result of both genetic mutation and the horrific capabilities of man, the man known to 
                many solely as Wolverine has fought past unspeakable traumas to become one of the most dedicated 
                forces for good in the Marvel Universe!</p>
            </div>
            <div className={s.skills+" "+s.content}>
                <header>
                    <h2>Skills</h2>
                    <div className={s.controls}>
                        <AddButton attr="skills" />
                        <EditButton />
                    </div> 
                </header>
                    <SkillsList wolvProfile={wolvProfile} />             
            </div>
            <div className={s.achievements+" "+s.content} >
                <header>
                    <h2>Achievements</h2>
                    <div className={s.controls}>
                        <AddButton />
                        <EditButton />
                    </div> 
                </header>
                Mutant of the year
            </div>
            <div className={s.reviews+" "+s.content} >
                <header><h2>Reviews</h2></header>
                <div>profile</div>
                <div><blockquote>Best of the Best</blockquote></div>
            </div>
        </div>
    );
}



let SkillsList = (props) => {
    let skills = props.wolvProfile.profile.skills;
    let skillsArr = [];
    for (let key in skills) {
        skillsArr.push(<EachSkill skills={skills} keyName={key} />);
    }
    return <div className={s.skillsList}>{skillsArr}</div>;
}

let EachSkill = (props) => {   
    return (<div title={props.skills[props.keyName]} >{props.keyName}</div>)
}


export default Profile;