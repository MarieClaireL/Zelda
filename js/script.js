const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrYm1mcG1mbmVxaGJodGtxZHR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4ODMxNzQsImV4cCI6MjAxNTQ1OTE3NH0.8_HlKppyuGEohj5aJa9yqWV35mF9gcXSxwFPptwbwgw';
const SUPABASE_URL = 'https://gkbmfpmfneqhbhtkqdty.supabase.co';

const  SUPABASE_CLIENT = supabase.createClient(SUPABASE_URL,SUPABASE_KEY);

let scenes = undefined;

let images = undefined;

window.onload= function(){
    recupererImages();
}
async function recupererScenes(){

    let { data, error } = await SUPABASE_CLIENT.from('Scenes').select('*');

    console.log(JSON.stringify(data));

    scenes=data;
}

async function recupererImages(){

    let { data, error } = await SUPABASE_CLIENT.from('Images').select('*');

    console.log(JSON.stringify(data));

    images=data;
}



function afficherScenes(){
    recupererScenes().then(
        function(value) {listerScenes(value)},
        function(error) {afficherErreurs(error)}
            );

}

function listerScenes(donnees){

    console.log(scenes[0]['Numéro de scène']);
    let zoneScenes = document.getElementById('zone-scenes');
    let Btn1 = document.getElementById('choix1');
    let Btn2 = document.getElementById('choix2');
    let numeroImage= scenes[0]['Numéro dimages'];
    let textChoix1 = scenes[0]['Texte du choix 1'];
    let textChoix2 = scenes[0]['Texte du choix 2'];
    let URLImage=images[numeroImage]["URL"];
    zoneScenes.innerHTML='<img src="'+ URLImage+'" width=100%>' ;
    Btn1.innerHTML='<input type="button" onclick="afficherZelda()" value="'+textChoix1+'" id="bouton-jouer">'
    Btn2.innerHTML='<input type="button" onclick="afficherGanon()" value="'+textChoix2+'" id="bouton-jouer2">'
}
function afficherZelda(){
    console.log(scenes[1]['Numéro de scène']);
    let zoneScenes = document.getElementById('zone-scenes');
    let Btn1 = document.getElementById('choix1');
    let Btn2 = document.getElementById('choix2');
    let numeroImage= scenes[1]['Numéro dimages'];
    let textChoix1 = scenes[1]['Texte du choix 1'];
    let textChoix2 = scenes[1]['Texte du choix 2'];
    let URLImage=images[numeroImage]["URL"];
    zoneScenes.innerHTML='<img src="'+ URLImage+'" width=100%>' ;
    Btn1.innerHTML='<input type="button" onclick="afficherZelda()" value="'+textChoix1+'" id="bouton-jouer">'
    Btn2.innerHTML='<input type="button" onclick="afficherGanon()" value="'+textChoix2+'" id="bouton-jouer2">'
}

function afficherGanon(){
    console.log(scenes[2]['Numéro de scène']);
    let zoneScenes = document.getElementById('zone-scenes');
    let Btn1 = document.getElementById('choix1');
    let Btn2 = document.getElementById('choix2');
    let numeroImage= scenes[2]['Numéro dimages'];
    let textChoix1 = scenes[2]['Texte du choix 1'];
    let textChoix2 = scenes[2]['Texte du choix 2'];
    let URLImage=images[numeroImage]["URL"];
    zoneScenes.innerHTML='<img src="'+ URLImage+'" width=100%>' ;
    Btn1.innerHTML='<input type="button" onclick="afficherZelda()" value="'+textChoix1+'" id="bouton-jouer">'
    Btn2.innerHTML='<input type="button" onclick="afficherGanon()" value="'+textChoix2+'" id="bouton-jouer2">'
}
    

function afficherErreurs(erreur){
    console.log(erreur);
}