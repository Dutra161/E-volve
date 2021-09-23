function centroid(resA,atomsA,resB,atomsB){
    //search for the aromatic ring and calculate distance between rings centroids to avoid redundance and miss matches in future
    //console.log(atomsA);
    if (resA == 'PHE'){
        var coords = atomsA.filter(select);

        function select(value, index, array){
            
            if (value.atom == 'CZ'){
                return value
            }else if (value.atom == 'CG'){
                return value
            }
            
        }

        centroid1 = new Centroid((coords[0].x + coords[1].x)/2,(coords[0].y + coords[1].y)/2,(coords[0].z + coords[1] .z)/2)
    }else if(resA == 'TYR'){
        var coords = atomsA.filter(select);
        console.log(coords)
        function select(value, index, array){
            if (value.atom == 'CZ'){
                return value
            }else if (value.atom == 'CG'){
                return value
            }
        }

        centroid1 = new Centroid((coords[0].x + coords[1].x)/2,(coords[0].y + coords[1].y)/2,(coords[0].z + coords[1] .z)/2)

    }else if (resA == 'HIS'){
        var coords = atomsA.filter(select);

        function select(value, index, array){
            if (value.atom == 'ND1'){
                return value
            }else if (value.atom == 'CG'){
                return value
            }else if (value.atom == 'CD2'){
                return value
            }else if (value.atom == 'CE1'){
                return value
            }else if (value.atom == 'NE2'){
                return value
            }
            ;
        }

        centroid1 = new Centroid((coords[0].x + coords[1].x + coords[2].x + coords[3].x + coords[4].x)/5,
                             (coords[0].y + coords[1].y + coords[2].y + coords[3].y + coords[4].y)/5,
                             (coords[0].z + coords[1].z + coords[2].z + coords[3].z + coords[4].z)/5);

    }else if(resA == 'HID'){
        var coords = atomsA.filter(select);

        function select(value, index, array){
            if (value.atom == 'ND1'){
                return value
            }else if (value.atom == 'CG'){
                return value
            }else if (value.atom == 'CD2'){
                return value
            }else if (value.atom == 'CE1'){
                return value
            }else if (value.atom == 'NE2'){
                return value
            }
            ;
        }

        centroid1 = new Centroid((coords[0].x + coords[1].x + coords[2].x + coords[3].x + coords[4].x)/5,
                             (coords[0].y + coords[1].y + coords[2].y + coords[3].y + coords[4].y)/5,
                             (coords[0].z + coords[1].z + coords[2].z + coords[3].z + coords[4].z)/5);

    }else if (resA == 'HIE'){
        var coords = atomsA.filter(select);

        function select(value, index, array){
            if (value.atom == 'ND1'){
                return value
            }else if (value.atom == 'CG'){
                return value
            }else if (value.atom == 'CD2'){
                return value
            }else if (value.atom == 'CE1'){
                return value
            }else if (value.atom == 'NE2'){
                return value
            }
            ;
        }

        centroid1 = new Centroid((coords[0].x + coords[1].x + coords[2].x + coords[3].x + coords[4].x)/5,
                             (coords[0].y + coords[1].y + coords[2].y + coords[3].y + coords[4].y)/5,
                             (coords[0].z + coords[1].z + coords[2].z + coords[3].z + coords[4].z)/5);

    }else if (resA == 'TRP'){
        var coords = atomsA.filter(select);

        function select(value, index, array){
            if (value.atom == 'CE2'){
                return value
            }else if (value.atom == 'CD2'){
                return value
            }
            
        }

        centroid1 = new Centroid((coords[0].x + coords[1].x)/2,
                             (coords[0].y + coords[1].y)/2,
                             (coords[0].z + coords[1].z)/2);

    }
//-------------------------------------------------------------------------------------------------------------------------------
    //console.log(atomsB);
    if (resB == 'PHE'){
        var coords = atomsB.filter(select);

        function select(value, index, array){
            if (value.atom == 'CZ'){
                return value
            }else if (value.atom == 'CG'){
                return value
            }
            
        }

        centroid2 = new Centroid((coords[0].x + coords[1].x)/2,(coords[0].y + coords[1].y)/2,(coords[0].z + coords[1] .z)/2)
    }else if(resB == 'TYR'){
        var coords = atomsB.filter(select);

        function select(value, index, array){
            if (value.atom == 'CZ'){
                return value
            }else if (value.atom == 'CG'){
                return value
            }
            
        }

        centroid2 = new Centroid((coords[0].x + coords[1].x)/2,(coords[0].y + coords[1].y)/2,(coords[0].z + coords[1].z)/2)

    }else if (resB == 'HIS'){
        var coords = atomsB.filter(select);

        function select(value, index, array){
            if (value.atom == 'ND1'){
                return value
            }else if (value.atom == 'CG'){
                return value
            }else if (value.atom == 'CD2'){
                return value
            }else if (value.atom == 'CE1'){
                return value
            }else if (value.atom == 'NE2'){
                return value
            }
            ;
        }

        centroid2 = new Centroid((coords[0].x + coords[1].x + coords[2].x + coords[3].x + coords[4].x)/5,
                            (coords[0].y + coords[1].y + coords[2].y + coords[3].y + coords[4].y)/5,
                            (coords[0].z + coords[1].z + coords[2].z + coords[3].z + coords[4].z)/5);

    }else if(resB == 'HID'){
        var coords = atomsB.filter(select);

        function select(value, index, array){
            if (value.atom == 'ND1'){
                return value
            }else if (value.atom == 'CG'){
                return value
            }else if (value.atom == 'CD2'){
                return value
            }else if (value.atom == 'CE1'){
                return value
            }else if (value.atom == 'NE2'){
                return value
            }
            ;
        }

        centroid2 = new Centroid((coords[0].x + coords[1].x + coords[2].x + coords[3].x + coords[4].x)/5,
                            (coords[0].y + coords[1].y + coords[2].y + coords[3].y + coords[4].y)/5,
                            (coords[0].z + coords[1].z + coords[2].z + coords[3].z + coords[4].z)/5);

    }else if (resB == 'HIE'){
        var coords = atomsB.filter(select);

        function select(value, index, array){
            if (value.atom == 'ND1'){
                return value
            }else if (value.atom == 'CG'){
                return value
            }else if (value.atom == 'CD2'){
                return value
            }else if (value.atom == 'CE1'){
                return value
            }else if (value.atom == 'NE2'){
                return value
            }
            ;
        }

        centroid2 = new Centroid((coords[0].x + coords[1].x + coords[2].x + coords[3].x + coords[4].x)/5,
                            (coords[0].y + coords[1].y + coords[2].y + coords[3].y + coords[4].y)/5,
                            (coords[0].z + coords[1].z + coords[2].z + coords[3].z + coords[4].z)/5);

    }else if (resB == 'TRP'){
        var coords = atomsB.filter(select);

        function select(value, index, array){
            if (value.atom == 'CE2'){
                return value
            }else if (value.atom == 'CD2'){
                return value
            }
            
        }

        centroid2 = new Centroid((coords[0].x + coords[1].x)/2,
                             (coords[0].y + coords[1].y)/2,
                             (coords[0].z + coords[1].z)/2);

    }    
    
    return [centroid1, centroid2];
}

function header_unmatched(protein1, protein2, colorscheme){
    var vi = document.getElementById("viewer-unmatched")
    if (vi){
        vi.remove();
    }
    var tab = document.getElementById("tablediv");
    if (tab){
        tab.remove();
    }
    
    var plotdiv = document.getElementById("plotcase-unmatched");

    var div = document.createElement('div');
    div.style = "height: 400px; width: 100%px; position: relative;";
    div.id = 'viewer-unmatched';
    div.classList.add('container');
    plotdiv.appendChild(div);

    $.get(protein1, function(data) {

        // Select any div or other html object here.
        var myDiv = 'viewer-unmatched';

        // Create a new viewer with 3DMol.
        var glviewer = $3Dmol.createViewer(myDiv, {
            defaultcolors: $3Dmol.elementColors['Jmol']
        });

        if (colorscheme == "cyareen"){
            var mcolor1 = "cyanCarbon";
            var mcolor2 = "greenCarbon";
            var ecolor1 = "0x000068";
            var ecolor2 = "0x006800";
        } else {
            var mcolor1 = "yellowCarbon";
            var mcolor2 = "purpleCarbon"
            var ecolor1 = "0x989700";
            var ecolor2 = "0x320071";
        }

        // Set the background color
        glviewer.setBackgroundColor(0xFFFFFF);
        
        // Load the PDB into the 3DMol viewer.
        var m = glviewer.addModel(data, "pdb");
        glviewer.mapAtomProperties($3Dmol.applyPartialCharges);
        glviewer.setStyle({model: 0}, { cartoon: { colorscheme:mcolor1 } });

        $.get(protein2, function(data) {
            var m = glviewer.addModel(data, "pdb");
                glviewer.mapAtomProperties($3Dmol.applyPartialCharges);
                glviewer.setStyle({model: 1}, { cartoon: {colorscheme:mcolor2 } });
            // Load the PDB into the 3DMol viewer.
            glviewer.zoomTo({
                model: 0,
            });
            glviewer.zoom(1);
            glviewer.render();
        });
    });
}

function plot_contact(rtt_contact){
    var colorsscheme = window.color

    var vi = document.getElementById("viewer-unmatched")
    if (vi){
        vi.remove();
    }
    var tab = document.getElementById("tablediv-unmatched");
    if (tab){
        tab.remove();
    }
    
    var plotdiv = document.getElementById("plotcase-unmatched");

    var div = document.createElement('div');
    div.style = "height: 400px; width: 100%px; position: relative;";
    div.id = 'viewer-unmatched';
    div.classList.add('container');
    plotdiv.appendChild(div);

    var div = document.createElement('div');
    div.id = 'tablediv-unmatched';
    div.classList.add('container');
    plotdiv.appendChild(div);


    $.get(rtt_contact.protein, function(data) {

        // Select any div or other html object here.
        var myDiv = 'viewer-unmatched'

        // Create a new viewer with 3DMol.
        var glviewer = $3Dmol.createViewer(myDiv, {
            defaultcolors: $3Dmol.elementColors['Jmol']
        });

        // Set the background color
        glviewer.setBackgroundColor(0xFFFFFF);
        
        // Load the PDB into the 3DMol viewer.
        var m = glviewer.addModel(data, "pdb");
        glviewer.mapAtomProperties($3Dmol.applyPartialCharges);
        glviewer.setStyle({}, { cartoon: { opacity: 0.4 } });

            
        if (colorsscheme == "cyareen"){
            var mcolor1 = "cyanCarbon";
            var ecolor1 = "0x000068";
        } else {
            var mcolor1 = "yellowCarbon";
            var ecolor1 = "0x989700";
        }
        var residueSelection1 = {model: 0, resn: rtt_contact.resn1, resi: rtt_contact.resi1, chain: rtt_contact.chain1 }
            glviewer.setStyle(residueSelection1, { stick: {colorscheme:mcolor1, hidden: false } });
            glviewer.addResLabels(residueSelection1, {
                fontColor: "white",
                fontSize: 12
        });

        var residueSelection2 = {model: 0, resn: rtt_contact.resn2, resi: rtt_contact.resi2, chain: rtt_contact.chain2 };
            glviewer.addStyle(residueSelection2, { stick: {colorscheme:mcolor1, hidden: false } });
            glviewer.addResLabels(residueSelection2, {
                fontColor: "white",
                fontSize: 12
        });
        // Load the PDB into the 3DMol viewer.

        //        LIGAND EXAMPLE...
        //
        // Select atoms from the ligand.

        var ligandAtomSelection = {
            model: 0,
            chain: rtt_contact.chain1,
            resn: rtt_contact.resn1,
            resi: rtt_contact.resi1,
            atom: rtt_contact.atom1,
        };
        var rtt_atom1 = glviewer.selectedAtoms(ligandAtomSelection);
        // Depending on your selection, it may return more than one atom.
        // Add labels to the ligand atom.
        glviewer.addStyle(ligandAtomSelection, { stick: {colorscheme:mcolor1, hidden: false } });
        var ligandAtomSelection = {
            model: 0,
            chain: rtt_contact.chain2,
            resn: rtt_contact.resn2,
            resi: rtt_contact.resi2,
            atom: rtt_contact.atom2,
        };
        var rtt_atom2 = glviewer.selectedAtoms(ligandAtomSelection);
        // Depending on your selection, it may return more than one atom.
        // Add labels to the ligand atom.
        glviewer.addStyle(ligandAtomSelection, { stick: {colorscheme:mcolor1, hidden: false } });
    
        if (rtt_contact.centroid1){
            if (rtt_contact.centroid2){
                
                centroids = centroid(rtt_contact.resn1, glviewer.selectedAtoms(residueSelection1),
                                     rtt_contact.resn2, glviewer.selectedAtoms(residueSelection2));

                console.log(centroids)

                glviewer.addArrow({
                    start: {
                        x: centroids[0].x,
                        y: centroids[0].y,
                        z: centroids[0].z
                    },
                    end: {
                        x: centroids[1].x,
                        y: centroids[1].y,
                        z: centroids[1].z
                    },
                    radius: 0.1,
                    color: ecolor1,
                    mid: 0.99
                });
            }
        }else{
            glviewer.addArrow({
                start: {
                    x: rtt_atom1[0].x,
                    y: rtt_atom1[0].y,
                    z: rtt_atom1[0].z
                },
                end: {
                    x: rtt_atom2[0].x,
                    y: rtt_atom2[0].y,
                    z: rtt_atom2[0].z
                },
                radius: 0.1,
                color: ecolor1,
                mid: 0.99
            });
        }
        
        glviewer.zoomTo({
            model: 0,
            chain: rtt_contact.chain1,
            resn: rtt_contact.resn1,
            resi: rtt_contact.resi1,
        });
        glviewer.zoom(0.4);
    

        glviewer.render();

    });

}

function legend2(d1,d2,avd,p1,p2,colorscheme){
    if (colorscheme == "cyareen"){
        var mcolor1 = "#00FFFF";
        var mcolor2 = "#00FF00";
        var ecolor1 = "#000068";
        var ecolor2 = "#006800";
    } else {
        var mcolor1 = "#EBEB00";
        var mcolor2 = "#6E006E"
        var ecolor1 = "#989700";
        var ecolor2 = "#320071";
    }
    var myTableDiv = document.getElementById("tablediv");

    var table = document.createElement('table');

    var tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    var tr = document.createElement('tr');
    tableBody.appendChild(tr);

    var td = document.createElement('td');
    var span = document.createElement('span');
    span.style='background-color:'.concat(ecolor1).concat('; padding: 2px 10px; margin: 10px 5px; border: 1px solid #777; border-radius: 2px;');
    span.appendChild(document.createTextNode(' '));
    td.appendChild(span);
    td.appendChild(document.createTextNode(d1));
    tr.appendChild(td);

    var td = document.createElement('td');
    var span = document.createElement('span');
    span.style='background-color:'.concat(ecolor2).concat('; padding: 2px 10px; margin: 10px 5px; border: 1px solid #777; border-radius: 2px;');
    span.appendChild(document.createTextNode(' '));
    td.appendChild(span);
    td.appendChild(document.createTextNode(d2));
    tr.appendChild(td);

    var td = document.createElement('td');
    td.appendChild(document.createTextNode(avd));
    tr.appendChild(td);

    var tr = document.createElement('tr');
    tableBody.appendChild(tr);

    var td = document.createElement('td');
    var span = document.createElement('span');
    span.style='background-color:'.concat(mcolor1).concat('; padding: 2px 10px; margin: 10px 5px; border: 1px solid #777; border-radius: 2px;');
    span.appendChild(document.createTextNode(' '));
    td.appendChild(span);
    td.appendChild(document.createTextNode(p1));
    tr.appendChild(td);

    var td = document.createElement('td');
    var span = document.createElement('span');
    span.style='background-color:'.concat(mcolor2).concat('; padding: 2px 10px; margin: 10px 5px; border: 1px solid #777; border-radius: 2px;');
    span.appendChild(document.createTextNode(' '));
    td.appendChild(span);
    td.appendChild(document.createTextNode(p2));
    tr.appendChild(td);

    myTableDiv.appendChild(table);
}