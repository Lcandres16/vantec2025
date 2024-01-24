/*import React,{ useState } from ´react´
function SpookyCounter() {
    const[SpookyCount, setSpookyCount ]= useState(0);

    return (
        <div>
          <p>Canteo espeluzante: {SpookyCount}</p>
          <button>ocClick={()=> setSpookyCount(spookyCount + 1)}>Aumentar miedo</button>
        </div>
    )
}
*/

import React, { useState } from 'react';

function SpookyCounter() {
    const [SpookyCount, setSpookyCount] = useState(0);

    return (
        <div>
            <p>Canteo espeluzante: {SpookyCount}</p>
            <button onClick={() => setSpookyCount(SpookyCount - 1)}>Reducir miedo</button>
        </div>
    );
}


export default SpookyCounter;
