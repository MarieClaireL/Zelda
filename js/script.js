const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrYm1mcG1mbmVxaGJodGtxZHR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4ODMxNzQsImV4cCI6MjAxNTQ1OTE3NH0.8_HlKppyuGEohj5aJa9yqWV35mF9gcXSxwFPptwbwgw';
const SUPABASE_URL = 'https://gkbmfpmfneqhbhtkqdty.supabase.co';

const  SUPABASE_CLIENT = supabase.createClient(SUPABASE_URL,SUPABASE_KEY);

let scenes = undefined;

let images = undefined;
let sons = undefined;

window.onload= function(){
    recupererImages();
    recupererSons();
}
async function recupererScenes(numero){

    let { data, error } = await SUPABASE_CLIENT.from('Scenes').select('*').eq('Numéro de scène', numero.toString());

    console.log(JSON.stringify(data));

    scenes=data[0];
}

async function recupererImages(){

    let { data, error } = await SUPABASE_CLIENT.from('Images').select('*');

    console.log(JSON.stringify(data));

    images=data;
}

async function recupererSons(){

    let { data, error } = await SUPABASE_CLIENT.from('Sons').select('*');

    console.log(JSON.stringify(data));

    sons=data;
}



function afficherScenes(numero){
    recupererScenes(numero).then(
        function(value) {listerScenes(value)},
        function(error) {afficherErreurs(error)}
            );

}

function listerScenes(donnees){

    console.log(scenes['Numéro de scène']);
    let zoneScenes = document.getElementById('zone-scenes');
    let zoneTexte = document.getElementById('zone-texte');
    let Btn1 = document.getElementById('choix1');
    let Btn2 = document.getElementById('choix2');
    let Btn3 = document.getElementById('choix3');
    let numeroImage= scenes['Numéro dimages'];
    let textChoix1 = scenes['Texte du choix 1'];
    let textChoix2 = scenes['Texte du choix 2'];
    let textChoix3 = scenes['Texte du choix 3'];
    let Texte = scenes['Texte'];
    let URLImage= trouverURL(scenes['Numéro dimages']);
    zoneScenes.innerHTML='<img src="'+ URLImage+'" height=500px>' ;
    zoneTexte.innerHTML= Texte;
    let URLMusique= trouverURLMusique(scenes['Numéro de musique']);
    let URLEffetSonore= trouverURLMusique(scenes['Effet sonore associé au choix 1']);
    let URLEffetSonore2= trouverURLMusique(scenes['Effet sonore associé au choix 2']);
    let URLEffetSonore3= trouverURLMusique(scenes['Effet sonore associé au choix 3']);
    let musiqueTheme = new Audio(URLMusique);
    musiqueTheme.play();
    musiqueTheme.loop=true;
    console.log(URLMusique);
    if (typeof scenes['Texte du choix 1'] == 'string') {
        console.log("QQQQQQ")
        Btn1.innerHTML='<input type="button" onclick="afficherScenes(' + scenes['Numéro de scène où mène le choix 1'] + ')" value="'+textChoix1+'" id="bouton-jouer">'
    }
    else{
        Btn1.innerHTML=' '
    }

    if (typeof scenes['Texte du choix 2'] == 'string') {
        console.log("PPPPP")
        Btn2.innerHTML='<input type="button" onclick="afficherScenes(' + scenes['Numéro de scène où mène le choix 2'] + ')" value="'+textChoix2+'" id="bouton-jouer2">'
    }
    else{
        Btn2.innerHTML=' '
    }

    if (typeof scenes['Texte du choix 3'] == 'string') {
        console.log("WWWW")
        Btn3.innerHTML='<input type="button" onclick="afficherScenes(' + scenes['Numéro de scène où mène le choix 2'] + ')" value="'+textChoix3+'" id="bouton-jouer3">'
    }
    else{
        Btn3.innerHTML=' '
    }
    if (typeof scenes['Effet sonore associé au choix 1'] == 'number') {
        console.log("YYYY")
        effetSonore = new Audio(URLEffetSonore);
        musiqueTheme.pause();
        effetSonore.play();
       console.log(URLEffetSonore);
    }

    if (typeof scenes['Effet sonore associé au choix 2'] == 'number') {
        console.log("YYYY")
        effetSonore = new Audio(URLEffetSonore2);
        musiqueTheme.pause();
        effetSonore.play();
       console.log(URLEffetSonore2);
    }

    if (typeof scenes['Effet sonore associé au choix 3'] == 'number') {
        console.log("YYYY")
        effetSonore = new Audio(URLEffetSonore3);
        musiqueTheme.pause();
        effetSonore.play();
       console.log(URLEffetSonore3);
    }

}


function trouverURL(numeroRecherche){
for(let i=0; i<images.length; i++){
    if(numeroRecherche== images[i]['Numéro']){
        return images[i]['URL'];
 }
}
}

function jouerMusique(donnees){
    let URLMusique= trouverURLMusique(scenes['Numéro de musique']);
    let musiqueTheme = new Audio(URLMusique);
    musiqueTheme.play();
    musiqueTheme.loop=true;
    console.log("LLLL"+URLMusique);
}

function trouverURLMusique(numeroRecherche){
    for(let i=0; i<sons.length; i++){
        if(numeroRecherche== sons[i]['Numéro']){
            return sons[i]['URL'];
     }
    }
    }
    

function afficherErreurs(erreur){
    console.log(erreur);
}