const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrYm1mcG1mbmVxaGJodGtxZHR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4ODMxNzQsImV4cCI6MjAxNTQ1OTE3NH0.8_HlKppyuGEohj5aJa9yqWV35mF9gcXSxwFPptwbwgw';
const SUPABASE_URL = 'https://gkbmfpmfneqhbhtkqdty.supabase.co';

const  SUPABASE_CLIENT = supabase.createClient(SUPABASE_URL,SUPABASE_KEY);

let scenes = undefined;

async function recupererScenes(){

    let { data, error } = await SUPABASE_CLIENT.from('Scenes').select('*');

    console.log(JSON.stringify(data));

    scenes=data;
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
    scenes[0]['Numéro dimages']= '<img src="images/Triforce.png" width=600px height=600px>'
    scenes[1]['Numéro dimages']= '<img src="images/Link.jpg" width=600px height=600px>'
    zoneScenes.innerHTML= scenes[1]['Numéro dimages'];
    }
    

function afficherErreurs(erreur){
    console.log(erreur);
}