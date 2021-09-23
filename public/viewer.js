// Read PDB file using Jquery.
class Centroid{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
class Contact{
    constructor(protein,chain1,chain2,resi1,resn1,resi2,resn2,atom1,atom2,serial1,serial2,centroid1,centroid2){
        this.protein = protein;
        this.chain1 = chain1;
        this.chain2 = chain2;
        this.resi1 = resi1;
        this.resn1 = resn1;
        this.resi2 = resi2;
        this.resn2 = resn2;
        this.atom1 = atom1;
        this.atom2 = atom2;
        this.serial1 = serial1;
        this.serial2 = serial2;
        this.centroid1 = centroid1;
        this.centroid2 = centroid2;
    }
}

function header(protein1, protein2, colorscheme){
    var vi = document.getElementById("viewer")
    if (vi){
        vi.remove();
    }
    var tab = document.getElementById("tablediv");
    if (tab){
        tab.remove();
    }
    
    var plotdiv = document.getElementById("plotcase");

    var div = document.createElement('div');
    div.style = "height: 400px; width: 100%px; position: relative;";
    div.id = 'viewer';
    div.classList.add('container');
    plotdiv.appendChild(div);

    $.get(protein1, function(data) {

        // Select any div or other html object here.
        var myDiv = 'viewer'

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

function plot(rtt_contact,stc_contact,colorsscheme){
    var vi = document.getElementById("viewer")
    if (vi){
        vi.remove();
    }
    var tab = document.getElementById("tablediv");
    if (tab){
        tab.remove();
    }
    
    var plotdiv = document.getElementById("plotcase");

    var div = document.createElement('div');
    div.style = "height: 400px; width: 100%px; position: relative;";
    div.id = 'viewer';
    div.classList.add('container');
    plotdiv.appendChild(div);

    var div = document.createElement('div');
    div.id = 'tablediv';
    div.classList.add('container');
    plotdiv.appendChild(div);


    $.get(rtt_contact.protein, function(data) {

        // Select any div or other html object here.
        var myDiv = 'viewer'

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

        $.get(stc_contact.protein, function(data) {
            var m = glviewer.addModel(data, "pdb");
                glviewer.mapAtomProperties($3Dmol.applyPartialCharges);
                glviewer.setStyle({}, { cartoon: { opacity: 0.4 } });
            
            if (colorsscheme == "cyareen"){
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
            var residueSelection = {model: 0, resn: rtt_contact.resn1, resi: rtt_contact.resi1, chain: rtt_contact.chain1 }
                glviewer.setStyle(residueSelection, { stick: {colorscheme:mcolor1, hidden: false } });
                glviewer.addResLabels(residueSelection, {
                    fontColor: "white",
                    fontSize: 12
            });

            var residueSelection = {model: 0, resn: rtt_contact.resn2, resi: rtt_contact.resi2, chain: rtt_contact.chain2 };
                glviewer.addStyle(residueSelection, { stick: {colorscheme:mcolor1, hidden: false } });
                glviewer.addResLabels(residueSelection, {
                    fontColor: "white",
                    fontSize: 12
            });
            // Load the PDB into the 3DMol viewer.
                
                
            var residueSelection = {model: 1, resn: stc_contact.resn1, resi: stc_contact.resi1, chain: stc_contact.chain1 }
                glviewer.addStyle(residueSelection, { stick: {colorscheme:mcolor2, hidden: false } });
                glviewer.addResLabels(residueSelection, {
                    fontColor: "white",
                    fontSize: 12
            });

            var residueSelection = {model: 1, resn: stc_contact.resn2, resi: stc_contact.resi2, chain: stc_contact.chain2 };
                glviewer.addStyle(residueSelection, { stick: {colorscheme:mcolor2, hidden: false } });
                glviewer.addResLabels(residueSelection, {
                    fontColor: "white",
                    fontSize: 12
            });

            //        LIGAND EXAMPLE...
            //
            // Select atoms from the ligand.
            var ligandAtomSelection = {
                model: 0,
                chain: rtt_contact.chain1,
                resn: rtt_contact.resn1,
                resi: rtt_contact.resi1,
                serial: rtt_contact.serial1,
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
                serial: rtt_contact.serial2,
            };
            var rtt_atom2 = glviewer.selectedAtoms(ligandAtomSelection);
            // Depending on your selection, it may return more than one atom.
            // Add labels to the ligand atom.
            glviewer.addStyle(ligandAtomSelection, { stick: {colorscheme:mcolor1, hidden: false } });
            var ligandAtomSelection = {
                model: 1,
                chain: stc_contact.chain1,
                resn: stc_contact.resn1,
                resi: stc_contact.resi1,
                serial: stc_contact.serial1,
            };
            console.log(stc_contact.chain1);
            console.log(stc_contact.resn1);
            console.log(stc_contact.resi1);
            console.log(stc_contact.atom1);
            console.log(stc_contact.serial1);


            console.log(stc_contact.chain2);
            console.log(stc_contact.resn2);
            console.log(stc_contact.resi2);
            console.log(stc_contact.atom2);
            console.log(stc_contact.serial2);

            console.log(rtt_contact.chain1);
            console.log(rtt_contact.resn1);
            console.log(rtt_contact.resi1);
            console.log(rtt_contact.atom1);
            console.log(rtt_contact.serial1);


            console.log(rtt_contact.chain2);
            console.log(rtt_contact.resn2);
            console.log(rtt_contact.resi2);
            console.log(rtt_contact.atom2);
            console.log(rtt_contact.serial2);


            var stc_atom1 = glviewer.selectedAtoms(ligandAtomSelection);
            // Depending on your selection, it may return more than one atom.
            // Add labels to the ligand atom.
            glviewer.addStyle(ligandAtomSelection, { stick: {colorscheme:mcolor2, hidden: false } });
            var ligandAtomSelection = {
                model: 1,
                chain: stc_contact.chain2,
                resn: stc_contact.resn2,
                resi: stc_contact.resi2,
                serial: stc_contact.serial2,
            };
            var stc_atom2 = glviewer.selectedAtoms(ligandAtomSelection);
            // Depending on your selection, it may return more than one atom.
            // Add labels to the ligand atom.
            glviewer.addStyle(ligandAtomSelection, { stick: {colorscheme:mcolor2, hidden: false } });

            if (rtt_contact.centroid1){
                if (rtt_contact.centroid2){
                    glviewer.addArrow({
                        start: {
                            x: rtt_contact.centroid1.x,
                            y: rtt_contact.centroid1.y,
                            z: rtt_contact.centroid1.z
                        },
                        end: {
                            x: rtt_contact.centroid2.x,
                            y: rtt_contact.centroid2.y,
                            z: rtt_contact.centroid2.z
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
            if (stc_contact.centroid1){
                if (stc_contact.centroid2){
                    glviewer.addArrow({
                        start: {
                            x: stc_contact.centroid1.x,
                            y: stc_contact.centroid1.y,
                            z: stc_contact.centroid1.z
                        },
                        end: {
                            x: stc_contact.centroid2.x,
                            y: stc_contact.centroid2.y,
                            z: stc_contact.centroid2.z
                        },
                        radius: 0.1,
                        color: ecolor2,
                        mid: 0.99
                    });
                }
            }else{
                glviewer.addArrow({
                    start: {
                        x: stc_atom1[0].x,
                        y: stc_atom1[0].y,
                        z: stc_atom1[0].z
                    },
                    end: {
                        x: stc_atom2[0].x,
                        y: stc_atom2[0].y,
                        z: stc_atom2[0].z
                    },
                    radius: 0.1,
                    color: ecolor2,
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

    });
}

function legend(d1,d2,avd,p1,p2,colorscheme){
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