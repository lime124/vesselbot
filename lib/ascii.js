'use strict';

var Ascii = function () {
  var faces = {
    tec27: "MMMMN'........';;,,'..    ....\n\
MMMWc......':lokOdoxkk:.  ....\n\
MMWc......:;,;,,,;:::c:,. ....\n\
MMd......c:',,,cdkkxkOOxc,.. .\n\
M0......':,;okxOO0OOOOKXK:.. .\n\
Ml......cl:d00kolcldxkOXX... .\n\
M;.....'ddk00Oxc,,;ldl:ox.   .\n\
M0'.....ok000OkxxdkOOl:cl'.  .\n\
MMX;.....lOOkdolclok0dxOl.,'..\n\
MMMMXx''cOOkddl:lolcccll......\n\
X0xk0kcdokxxxxxxololloxd:'...,\n\
x:''',c:,odoodxdddddoclKkll;'c\n\
;loc.,x:.;llccc:::,'d;c:lo:;''\n\
':lc.cl.,',;,,,'..'.d.l,cxd,:c\n\
.:oc.l;..,''',,,c:....;'.ol.,:",
    ednapiranha: "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n\
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMM\n\
MMMMMMMMMMMMMMMWNXXKKKNWMMMMMM\n\
MMMMMMMMMMMMM0l'.......,lOWMMM\n\
MMMMMMMMMMMWd;'....   ....;KMM\n\
MMMMMMMMMMWkc:,....   .. ..'0M\n\
MMMMMMMMMM0c:,.... .  ... ..;W\n\
MMMMMMMMMMd;.  ::'',;cocc:, .0\n\
MMMMMMMMMWo' .,XNKodkKKOdoc..d\n\
MMMMMMMMMNc. .'NWWWNNWWX000'.k\n\
MMMMMMMMMN;. . ONNNNKNXX00O.oN\n\
MMMMMMMMMMK;., ;XNNNXKOxx0lOWM\n\
MMMMMMMMMWNKxkl:cOKK00kdxoOWMM\n\
MMMMWWNNX00kkkxOOxOkdoc;,,:d0N\n\
MMMWN0OOOkkkcc0XX0kxdoc.',';;l",
    llkats: "....      ..ldlcxxdlccclddo;:d\n\
..        'looxdxddolloododxo:\n\
'''.     'coddlkNNNWWWWMWWNXKO\n\
:.',.....:ooc:0MMMMMMMMMMMMMNO\n\
ol,.....;lc''OWMMMMMMMMMMMMMWO\n\
oddl;,'':'..:KXK0KNWWWNXKKXXNk\n\
odxxxdxo:. ..dxdoxkxkxdxdoxkxl\n\
codol::c:'.;lNNNXXKxKkdK000Kx0\n\
.,c::;:ccc'oXXXXK00WMMOOKKKKKx\n\
lOKKKKK0klclXXK00NNWWWXOOKKXXl\n\
xk0000OOo;:,kXOOKNNXKKK0xk000O\n\
OkOOOkdxc''',XXX0XNNXXKxx0Kxxk\n\
kkOkOOxdo,,'.OXNXKKKK0O0XKo,:x\n\
dxO000kOo.:,.;0XNNX000KXO',:co\n\
ooO0K0xkl.'c'.l00XNXXXXk;.';:l",
    contrahacks: "..........',''...''...........\n\
..........','.''''''.''''.....\n\
...................'''''''''''\n\
............,:::;. ...........\n\
.......'...;00Okdo,.......'...\n\
....','...'kOokxlll,..........\n\
.........'xOKK0xoxoc,.........\n\
..........':k0Oxol:,'.........\n\
............d00kol,...........\n\
.....'...,;c0KKOkxl''''''.....\n\
.....,,,,;;;;cllc;''''''..... \n\
....,'',,,,,,,''''''......... \n\
...,...,;,''''''''''......... \n\
...'...,,,'''..'''........... \n\
..''...',,'............ .....",
    kid_icarus: "MMMMMMMMMWK0KNWWMMMMMWMMWWWMMM\n\
MMMMMMMWx,.''.oWMWWMMMMMWWWMMM\n\
MMMMMMMO,:dkxc.kMMWMMMMWWWWMMM\n\
MMMMMMMOckX00OcKMWWMMMMWWWWMMM\n\
MMMMMMMWXKKKXKXWMMMMMMMWWWWMMM\n\
MMMMMMMMNKKKKNMMMMMMMMMWWWWMMM\n\
MMMMMMMWNXXKKWMMMMMMMMWWWWWMMM\n\
MMMMWWNNNNNXXNXXNNWWWWWWWNWMMM\n\
MMMWWWNX0NXXNXXXKXXNNNWNNNNMMM\n\
MMWWWWNKKNXXXXXXX0XXXNNNNNNMMM\n\
MW0OXXXKKXNXXXXX0kKXKKXXXXNMMM\n\
MXxkXXKK0KXXXXXXKO0O00OKXXXMMM\n\
MMMWNKK0O0KXXXXXXXNNK0OkOXXMMM\n\
MMMWWXXKK0KXXXXXNNNWMWkkxOXMWM\n\
WWWWWNXK000KKKKXNNNWMMKkkkXMWM",
    jden: "00000OOkkxxxxxdl,;,,,:cdxdodxx\n\
kkkkxxkkOOxddoc'.....;,;oddldx\n\
ddxxddxxkkxo,...   ..',':l:cld\n\
dddxdddxxkxc.          ..,c;,,\n\
ddollcccc:;.           ..::;';\n\
:,..'.....'. .,'.........;cc.'\n\
;'........,;.,'.........'::O,o\n\
   .......'.,:,............dco\n\
  .........;;:,......:;.':xKO,\n\
..'',,'''',;,;:;,'..'lx',lOd'.\n\
.......'''..'';,..''.''..,:ol'\n\
'''','...     ''.........,..:K\n\
cccllc'       ....'...'..,..cN\n\
''',,'.       ..........,,.'kW\n\
.....          ....... .kk,oXN\n\
                 ...   .;d,oXW",
    avree: "XXXNXXXXXXX0dllx0KK000K000koxd\n\
KKXXXXXXXXx;ccc:l0KKKKKKK00kkx\n\
0KXXXKXXKKo:xOkkoxKKKKKKK0000O\n\
KKX00OO0KKOk0OOOkO00OO0000000O\n\
OKKXXKKKKKKk0OkOkO000KKK00000O\n\
00KKKK00OOOdd00OOOkkO000OOkxkO\n\
00KK0000O00OOOkkOO0OdoO0OOkkxx\n\
OOO0OkOkO0000OkOOOkxllo0OOkkkk\n\
OkkOOxkdO0O00kkOkkdo:loxkkkkxk\n\
kkO0OOOlkOOO0OOOOkxl;odxkkkkO0\n\
O000kOkldkkxxxkkkOOoclddllloxk\n\
OO00xkocxxl:cdxkkkko;;;;,;;ldx\n\
00KKO0xokd:ccldxxkkxo:;,,,;:cd\n\
0000kxo,xdcdoloddxxxl:lc:;ccld\n\
0Okxxod,cc:lddxoodl;,:odoc:cdx",
    skalnik: "OOkO00KXKKXKXXNNNXKXXX0kk0l:'.\n\
dxxxkkkkOOO00KKXX0XKKXXKKXKxl.\n\
odddxxxxxxkOO000K00000K000Oddl\n\
lloodxkkxddxxk000OOOO00OOOOo:c\n\
,clooodddxxxxodkkxkkOOkOOOkxl:\n\
::;,;llcldxddl:lxkxkkxkOkkxkl,\n\
',:c;:c::l,:';,;loxxkkkkxdol;;\n\
:cloddolllool:;,,:kxxxxxdl';c'\n\
:cooxkxooodollllxxddddol;. ,lc\n\
:lodddoloddl;:ocdooolc'.   ..,\n\
;coodoc::ccl;;l:c:,..      ...\n\
;;:cllcccl:;';:'.           ..\n\
,,;,;;;:;;;;...             ..\n\
::;;'......   .             ''\n\
;;::;'.....  .              .."
  };

  faces.trav = faces.tec27;
  faces.contra = faces.contrahacks;
  faces.contrahax = faces.contracks;
  faces.jen = faces.ednapiranha;
  faces.lydia = faces.llkats;
  faces.rayn = faces.kid_icarus;
  faces.ryan = faces.kid_icarus;
  faces.mike = faces.skalnik;

  this.draw = function (nick) {
    return faces[nick];
  };
};

module.exports = Ascii;
