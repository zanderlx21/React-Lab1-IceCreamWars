import React, { useState } from "react";


function Votes() {
const [flavor, setFlavor] = useState("")
// const [count, setCount] = useState(0)
const [SupermanVotes, setSupermanVotes] = useState(0);
const [RockyRoadVotes, setRockyRoadVotes] = useState(0);
const [VanillaVotes, setVanillaVotes] = useState(0);
const totalVotes = (SupermanVotes + RockyRoadVotes + VanillaVotes);

const SupermanPercentage = (SupermanVotes/totalVotes) * 100;
const RockyRoadPercentage = (RockyRoadVotes/totalVotes) * 100;
const VanillaPercentage = (VanillaVotes/totalVotes) * 100;

const [width, setWidth] = useState(0);

const SupermanStyles = {
    width: SupermanPercentage + "px",
    height: "15px",
    borderRadius: "12px"
};

const RockyRoadStyles = {
    width: RockyRoadPercentage + "px",
    height: "15px",
    borderRadius: "12px"
};

const VanillaStyles = {
    width: VanillaPercentage + "px",
    height: "15px",
    borderRadius: "12px"
};

    return(
        <div className="Votes">
            <button onClick={() => setSupermanVotes((count) => count = SupermanVotes + 1)}>SuperMan</button>

            <button onClick={() => setRockyRoadVotes((count) => count = RockyRoadVotes + 1)}>Rocky Road</button>

            <button onClick={() => setVanillaVotes((count) => count = VanillaVotes + 1)}>Vanilla</button>
            
            { totalVotes === 0 &&
            <div>No Votes Yet</div>
            }

            { SupermanVotes > 0 &&
            <p>Superman: {SupermanVotes} {SupermanPercentage}%</p>
            }
            <div className="SupermanBar" style={SupermanStyles}>
        
            </div>

            { RockyRoadVotes > 0 &&
            <p>Rocky Road: {RockyRoadVotes} {RockyRoadPercentage}%</p>
            }
            <div className="RockyRoadBar" style={RockyRoadStyles}>
             
            </div>

            { VanillaVotes > 0 && 
            <p>Vanilla: {VanillaVotes} {VanillaPercentage}%</p>
            }
            <div className="VanillaBar" style={VanillaStyles}>
                
            </div>
        </div>
    )
}

export default Votes;