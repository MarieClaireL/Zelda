const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrYm1mcG1mbmVxaGJodGtxZHR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4ODMxNzQsImV4cCI6MjAxNTQ1OTE3NH0.8_HlKppyuGEohj5aJa9yqWV35mF9gcXSxwFPptwbwgw';
const SUPABASE_URL = 'https://gkbmfpmfneqhbhtkqdty.supabase.co';

const  SUPABASE_CLIENT = supabase.createClient(SUPABASE_URL,SUPABASE_KEY);

let scenes = undefined;

let images = undefined;


window.onload= function(){
    recupererImages();
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



function afficherScenes(numero){
    recupererScenes(numero).then(
        function(value) {listerScenes(value)},
        function(error) {afficherErreurs(error)}
            );

}

function listerScenes(donnees){

    console.log(scenes['Numéro de scène']);
    let zoneScenes = document.getElementById('zone-scenes');
    let Btn1 = document.getElementById('choix1');
    let Btn2 = document.getElementById('choix2');
    let numeroImage= scenes['Numéro dimages'];
    let textChoix1 = scenes['Texte du choix 1'];
    let textChoix2 = scenes['Texte du choix 2'];
    let URLImage= trouverURL(scenes['Numéro dimages']);
    zoneScenes.innerHTML='<img src="'+ URLImage+'" width=100%>' ;
    if (typeof scenes['Texte'] == 'string') {
        console.log("QQQQQQ")
        Btn1.innerHTML='<input type="button" onclick="afficherScenes(' + scenes['Numéro de scène où mène le choix 1'] + ')" value="'+textChoix1+'" id="bouton-jouer">'
        Btn2.innerHTML='<input type="button" onclick="afficherScenes(' + scenes['Numéro de scène où mène le choix 2'] + ')" value="'+textChoix2+'" id="bouton-jouer2">'
    }

}


function trouverURL(numeroRecherche){
for(let i=0; i<images.length; i++){
    if(numeroRecherche== images[i]['Numéro']){
        return images[i]['URL'];
 }
}
}
    

function afficherErreurs(erreur){
    console.log(erreur);
}