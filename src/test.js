'use strict';
var convert = require('xml-js');
const fs = require('fs');
var xml = fs.readFileSync('699.xml')
var result1 = convert.xml2js(xml, {compact: true, spaces: 4});
console.log(result1.Weakness_Catalog.Weaknesses.Weakness[0]._attributes.ID)
if(Array.isArray(result1.Weakness_Catalog.Weaknesses.Weakness[0].Related_Weaknesses.Related_Weakness))
console.log(result1.Weakness_Catalog.Weaknesses.Weakness[0].Related_Weaknesses.Related_Weakness[0]._attributes.CWE_ID)
else
console.log(result1.Weakness_Catalog.Weaknesses.Weakness[0].Related_Weaknesses.Related_Weakness[0]._attributes.CWE_ID)
//fs.writeFileSync('699.json', result1);

//------------------------------map---------------- mu
{this.state.graphfitered.map((graph, index) => (
    <App 
    
    id={'graph'+index}
    links={graph.links}
    nodes={graph.nodes}
    focusedNodeId={this.state.focusedValue}
    />
   
))} 