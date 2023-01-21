import React,{useState} from 'react';
import Nav from "./Nav";
function Topic() {
    const [menu, setMenu] = useState(false);
    return (
        <div>
            <div>
                <span className="the">The</span>
                <span className="siren">Siren</span>
            </div>

            {menu && <Nav />}
            <div id="menu" onClick={() =>setMenu(!menu)
            }>Menu</div>
        </div>
    )
}
export default Topic;
