class Player{
    constructor (){
        this.pokemon=null;
        this.type_pokemon=null;
        this.image_pokemon=null;
        this.level=1;
        this.lista_pokemon_atrapados=[];
    }
    
    funct_values_player(){
        if(this.pokemon=="bulbasaur"){
            this.type_pokemon="planta";
            this.image_pokemon="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png";
        }else if(this.pokemon=="charmander"){
            this.type_pokemon="fuego"
            this.image_pokemon="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png";
        }else if(this.pokemon=="squirtle"){
            this.type_pokemon="agua";
            this.image_pokemon="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png";
        }
    }

    subionivel(){
        this.level++;
        if(level==16){
            switch (this.type_pokemon){
                case "planta": this.image_pokemon="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png";
                    this.lista_pokemon_atrapados.push('ivysaur');
                    break;
                case "fuego": this.image_pokemon="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png";
                    this.lista_pokemon_atrapados.push('charmeleon');
                    break;
                case "agua": this.image_pokemon="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png";
                    this.lista_pokemon_atrapados.push('wartortle');
                    break;
            }
        }
        if(level==32 && this.type_pokemon=='planta'){
            this.image_pokemon="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png";
            this.lista_pokemon_atrapados.push('venusaur');
        }
        if(level==36){
            switch (this.type_pokemon){
                case "fuego": this.image_pokemon="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png";
                    this.lista_pokemon_atrapados.push('charizard');
                    break;
                case "agua": this.image_pokemon="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png";
                    this.lista_pokemon_atrapados.push('blastoise');
                    break;
            }
        }
    }

    set set_pokemon(nombre){
        this.pokemon=nombre;
        this.lista_pokemon_atrapados.push(nombre);
    }

    get get_image(){
        return this.image_pokemon;
    }

    static win_level(){
        this.level++;
        console.log("usted subio de nivel a "+this.level);
    }
}

let tarjetasDestapadas = 0;
let tarjeta1=null;
let tarjeta2=null;
let class_tipo_1=null;
let class_tipo_2=null;
let primer_resultado=null;
let segundo_resultado=null;
let asiertos;
let timer;
let contador=false;
let level=1;
let level_1;
let tiempoRegresivo=null;
let tiempoRegresivo2=null;
let mostrando_pokedex=false;
let mostrando_lista_pokedex=false;
let lista_pokemon_temporal=[];
let niveles=[
    ["pidgey","rattata","spearow","mankey",1,2,3,4],
    ["caterpie","weedle","metapod","kakuna",1,"pikachu",3,4],
    ["nidoran-m","nidoran-f","ekans","sandshrew","jigglypuff",1,3,4],
    ["zubat","geodude","paras","clefairy",1,2,3,4],
    ["meowth","oddish","bellsprout","abra",1,2,3,4],
    ["magikarp","poliwag","goldeen","slowpoke",1,2,3,4],
    ["machop","onix","graveler","drowzee",1,2,3,4],
    ["krabby","horsea","staryu",1,2,3,4,5],
    ["eevee","lapras","porygon","mr-mime",2,3,4,5],
    ["grimer","koffing","raticate","muk",2,3,4,5],
    ["butterfree","beedrill","gloom",1,2,3,4,5],
    ["diglett","dugtrio","cubone","weezing",2,3,4,5],
    ["machoke","hitmonlee","hitmonchan","lickitung",2,1,4,5],
    ["gastly","haunter","marowak","golbat",2,1,4,5],
    ["fearow","doduo","pidgeotto","dodrio",2,1,4,5],
    ["jynx","poliwhirl","starmie","tangela",2,1,4,5],
    ["rhyhorn","omanyte","kabuto","porygon",2,1,4,5],
    ["ponyta","growlithe","vulpix","ditto",2,1,4,5],
    ["exeggcute","nidorino","scyther","venonat",2,1,4,5],/*Zona Zafari*/
    ["seaking","chansey","dratini","psyduck",2,1,4,5],
    ["tauros","kangaskhan","pinsir","venomoth",2,1,4,5],
    ["dragonair","nidorina","parasect","rhydon",2,1,4,5],/*Fin Zona Zafari */
    ["farfetchd","wigglytuff","clefable","seadra",2,1,4,5],
    ["vileplume","nidoking","nidoqueen","ninetales",2,1,4,5],
    ["omastar","kabutops","aerodactyl","exeggutor",1,4,5,6],
    ["seel","shellder","golduck","slowbro",1,4,5,6],/*Islas Espuma*/
    ["kingler","dewgong","tentacool","articuno",1,4,5,6],/*Fin Islas Espuma*/
    ["tentacruel","vaporeon","poliwrath","squirtle",1,4,5,6],
    ["voltorb","magnemite","magneton","electabuzz",1,4,5,6],/*Central Energia*/
    ["raichu","electrode","zapdos",1,2,4,5,6],/*Fin Central Energia*/
    ["weepinbell","victreebel","jolteon","bulbasaur",1,4,5,6],
    ["rapidash","magmar","machamp","moltres",1,4,5,6],/*Monte Ascuas*/
    ["arcanine","flareon","charmander",1,2,4,5,6],
    ["gyarados","cloyster","wartortle",1,2,4,5,6],
    ["sandslash","persian","arbok","ivysaur",1,4,5,6],
    ["pidgeot","gengar","charmeleon",1,2,4,5,6],
    ["alakazam","hypno","snorlax","dragonite",1,4,6,7],/*Antepenultimo Nivel */
    ["primeape","kadabra","golem","mewtwo",1,4,6,7],/*Penultimo Nivel*/
    ["charizard","venusaur","blastoise","mew",2,5,6,7],/*Ultimo Nivel*/
];
let contenedor="";
let sound_select=new Audio('./sounds/select.wav');
let sound_lose= new Audio('./sounds/lose.wav');
let sound_equals=new Audio('./sounds/iguales.mp3');
let sound_win=new Audio('./sounds/win.mp3');

const jugador=new Player();


function reiniciar_nivel(){
    let temp=5;
    primer_resultado=null;
    segundo_resultado=null;
    lista_pokemon_temporal=[];
    tarjetasDestapadas = 0;
    document.getElementById("aviso").style.display="flex";
    document.getElementById("mensaje_juego").innerHTML=`
    <div class="indicador"></div>
    <img src="img/icons/bx-reset.svg" width=20>
    <p>Reiniciando Nivel</p>
    `;
    document.getElementById("imagen_pokemon").innerHTML="";
    document.getElementById("display_texto").value="...";
    tiempoRegresivo2 = setInterval(()=>{
        temp--;
        if(temp<0){
            document.getElementById("aviso").style.display="none";
            asiertos=0;
            document.getElementById('mesa_de_cartas').innerHTML=alistar_mesa();
            clearInterval(tiempoRegresivo2);
        }
    },1000,temp);
}

function duplicate_level(level){
    for(o=0;o<8;o++){
        niveles[level].push(niveles[level][o]);
    }
}

function pasar_pokemons(){
    for(aea=0;aea<lista_pokemon_temporal.length;aea++){
        if(jugador.lista_pokemon_atrapados.indexOf(lista_pokemon_temporal[aea])==-1){
            jugador.lista_pokemon_atrapados.push(lista_pokemon_temporal[aea]);
        }
    }
    lista_pokemon_temporal=[];
}

function iniciar_nivel(level){
    duplicate_level(level-1);
    asiertos=0;
    level_1=niveles[level-1];
    level_1=level_1.sort(()=>{return Math.random()-0.5});
    document.getElementById('mesa_de_cartas').innerHTML=alistar_mesa();
}

function siguiente_nivel(level){
    let temp=5;
    asiertos=0;
    contador=false;
    tarjetasDestapadas = 0;
    document.getElementById("aviso").style.display="flex";
    document.getElementById("mensaje_juego").innerHTML=`
    <div class="indicador"></div>
    <img src="img/icons/bx-next.svg" width=20>
    <p>Siguiente Nivel</p>
    `;
    pasar_pokemons();
    tiempoRegresivo2=setInterval(()=>{
        temp--;
        if(temp<0){
            document.getElementById("aviso").style.display="none";
            duplicate_level(level-1);
            level_1=niveles[level-1];
            level_1=level_1.sort(()=>{return Math.random()-0.5});
            document.getElementById('mesa_de_cartas').innerHTML=alistar_mesa();
            document.getElementById('player').style.animation='anim_evolucion 2s';
            clearInterval(tiempoRegresivo2);
        }
    },1000,temp);
}

function play(){
    location.href="play.html"
}

function contarTiempo(){
    tiempoRegresivo = setInterval(()=>{
        if(contador){
            document.getElementById("tiempo").innerHTML=`${timer} s`;
            timer--;
            if(timer<0){
                contador=false;
                reiniciar_nivel();
                bloquearTarjetas(level_1);
                sound_lose.play();
            }
        }else{
            clearInterval(tiempoRegresivo);
        }
    },1000,timer);
}

async function bloquearTarjetas(level_1){
    for(let i=0;i<=15;i++){
        let tarjetaBloqueada=document.getElementById(`btn_carta_${i}`);
        if(typeof level_1[i]=="string"){
            tarjetaBloqueada.innerHTML=`<img src="${await obtener_imagen_player(level_1[i],"front")}" class="imagen_pokemon" alt="Pokemon carta"><div class=circle></div>`;    
        }else{
            tarjetaBloqueada.innerHTML=`<img src="img/premios/${level_1[i]}.png" class="imagen_premio" alt="Pokemon carta"><div class=circle></div>`; 
        }
        tarjetaBloqueada.style.backgroundColor="red";
        tarjetaBloqueada.style.backgroundImage="none";
        tarjetaBloqueada.disabled=true;
    }
}

async function eligo(nombre){
    jugador.set_pokemon=nombre;
    jugador.funct_values_player();
    document.getElementById('main_juego').innerHTML=`
        <div class="conteiner_details_pokemon" id="conteiner_details_pokemon">
        
        </div>
        <div id="conteiner_pokedex" class="conteiner_pokedex">
            <div class="pant_carga">
                <img src="img/bx-loader-circle.svg" alt="">
            </div><button class="btn_cerrar fa-solid fa-circle-xmark" onclick="cerrar()"></button>
        </div>
    <section class="pant_juego" id="pant_juego">
            <div class="conteiner_pokedex_player" id="conteiner_pokedex_player">
                
                <div class="pokedex">
                    <div class="div_luces">
                        <div class="circle"></div>
                        <div class="bolita bolita__red"></div>
                        <div class="bolita bolita__yellow"></div>
                        <div class="bolita bolita__green"></div>
                    </div>
                    <div class="display_imagen">
                        <div class="bolitas">
                            <div class="bolita"></div>
                            <div class="bolita"></div>
                        </div>
                        
                        <div class="imagen_pokemon" id="imagen_pokemon">
                            
                        </div>
                    </div>
                    <input type="text" class="display_texto" id="display_texto" value="Bienvenido" disabled>
                    <div class="details_play">
                        <div class="details">
                            <div class="nivel">Nivel <p id="nivel">1</p></div>
                            <div class="tiempo">Tiempo <p id="tiempo">50 s</p></div>
                        </div>
                        <button class="details_play__button" onclick="ver_lista_pokedex()"><img src="img/icons/entrenador-pokemon.png" width="35"></button>
                    </div>
                </div>
            </div>
            <div class="mesa_de_cartas" id="mesa_de_cartas">
            </div>
        </section>
        <section class="aviso" id="aviso" style="display:none">
            <div id="mensaje_juego">

            </div>
        </section>`;
        
    iniciar_nivel(level);
}

function ver_pokedex(){
    if(mostrando_pokedex){
        document.getElementById('conteiner_pokedex_player').style.transform="translateX(-100%)";
        mostrando_pokedex=false;
    }else{
        document.getElementById('conteiner_pokedex_player').style.transform="translateX(0%)";
        mostrando_pokedex=true;
    }
}

async function func_pokemon(ind){
    let div_pokemon="";
    try{
        const respuesta= await fetch(`https://pokeapi.co/api/v2/pokemon/${ind}`);
        if(respuesta.status===200){
            const datos=await respuesta.json();
            div_pokemon=`
            <button class="pokemon no_atrapado ${datos.types[0].type.name}">
            <div class="img_pokemon">
                <div class="bolita"></div>
                <span class="signo_pregunta">?</span>
            </div>
            <span class="indice_pokemon"># ${ind}</span>
            <span class="nombre_pokemon">---</span>
            </button>
            `;
            for(aea=0;aea<jugador.lista_pokemon_atrapados.length;aea++){
                if(jugador.lista_pokemon_atrapados[aea]==datos.name){
                    div_pokemon=`
                    <button class="pokemon atrapado ${datos.types[0].type.name}" onclick="VerDatosPokemon('${datos.name}')">
                    <div class="img_pokemon">
                        <div class="bolita"></div>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ind}.png" alt=""/>
                    </div>
                    <span class="indice_pokemon"># ${ind}</span>
                    <span class="nombre_pokemon">${(datos.name).toUpperCase()}</span>
                    </button>
                    `;
                }
            }
            contenedor+=div_pokemon;
        }else if(respuesta.status===401){
            console.log("pusiste la llave mal");
        }else if(respuesta.status===404){
            console.log("Lo que buscas no existe");
        }else{
            console.log("Hubo un error y no sabemos que paso");
        }
    }catch(error){
        console.log(error);
    }
}


async function ver_lista_pokedex(){
    if(mostrando_lista_pokedex){
        document.getElementById('conteiner_pokedex').style.transform="translateX(-100%)";
        mostrando_lista_pokedex=false;
        document.getElementById('conteiner_pokedex').innerHTML=`<div class="pant_carga">
            <img src="img/bx-loader-circle.svg" alt="">
        </div><button class="btn_cerrar fa-solid fa-circle-xmark" onclick="cerrar()"></button>`;
        contenedor="";
    }else{
        document.getElementById('conteiner_pokedex').style.transform="translateX(0%)";
        mostrando_lista_pokedex=true;
        for(i=1;i<=151;i++){
            await func_pokemon(i);
        }
        document.getElementById('conteiner_pokedex').innerHTML="<h2>POKEDEX</h2>"+`<div class="contador_pokemons">${jugador.lista_pokemon_atrapados.length} / 151 </div>`+contenedor+`<button class="btn_cerrar fa-solid fa-circle-xmark" onclick="cerrar()"></button>`;
    }
      
}

function cerrar(){
    ver_lista_pokedex();
}

function cerrarDatosPokemon(){
    document.getElementById('conteiner_details_pokemon').innerHTML="";
    document.getElementById('conteiner_details_pokemon').style.zIndex=0;
}

async function VerDatosPokemon(id){
    try{
        const respuesta= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if(respuesta.status===200){
            const datos=await respuesta.json();
            console.log(datos);
            sound_select.play();
            cont=`<div class="pantalla_cerrar" onclick="cerrarDatosPokemon()"></div><div class="pokemonDetails ${datos.types[0].type.name}">
            <div class="pokemonDetails__display">
                <div class="pokemonDetails__texts">
                    <div class="number">N° ${datos.id}</div>
                    <div class="name">${(datos.name).toUpperCase()}</div>
                    <div class="type">${(datos.types[0].type.name).toUpperCase()}</div>
                </div>
                <div class="pokemonDetails__picture">
                    <img src="${datos.sprites.front_default}">
                </div>    
            </div>
                <table class="pokemontDetails__stats">
                    <tr>
                        <th>ATAQUE</th><td>${datos.stats[1].base_stat}</td>
                    </tr>
                    <tr>
                        <th>DEFENSA</th><td>${datos.stats[2].base_stat}</td>
                    </tr>
                    <tr>
                        <th>AT.ESPECIAL</th><td>${datos.stats[3].base_stat}</td>
                    </tr>
                    <tr>
                        <th>DEF.ESPECIAL</th><td>${datos.stats[4].base_stat}</td>
                    </tr>
                    <tr>
                        <th>VELOCIDAD</th><td>${datos.stats[5].base_stat}</td>
                    </tr>
                </table>
        </div>`
            document.getElementById('conteiner_details_pokemon').innerHTML=cont;
            document.getElementById('conteiner_details_pokemon').style.zIndex=200;
        }else if(respuesta.status===401){
            console.log("pusiste la llave mal");
        }else if(respuesta.status===404){
            console.log("Lo que buscas no existe");
        }else{
            console.log("Hubo un error y no sabemos que paso");
        }
    }catch(error){
        console.log(error);
    }
}



function alistar_mesa(){
    let mesa=`
    <div class="cont_player">
        <img src="${jugador.get_image}" alt="Player PokeMontoya" id="player">
    </div>
    <div class="mesa">`;
    let valor=0;
    for(c=0;c<4;c++){
        for(t=0;t<4;t++){
            mesa+=`<button class="btn_carta" id="btn_carta_${valor}" onclick="voltearCarta(${valor})"></button>`;
            valor++;
        }
    }
    mesa+="</div>";
    return mesa;
}


async function voltearCarta(n){
    tarjetasDestapadas++;
    if(tarjetasDestapadas==1){
        //Mostrar primer numero
        document.getElementById('player').style.animation = '';
        tarjeta1=document.getElementById(`btn_carta_${n}`);
        if(contador==false){
            timer=50;
            contador=true;
            contarTiempo();
        }        
        tarjeta1.style.backgroundImage="none";
        primer_resultado=level_1[n];
        if(typeof level_1[n]=="string"){
            class_tipo_1 = await obtener_imagen_player(level_1[n],"type");
            tarjeta1.classList.toggle(class_tipo_1);
            tarjeta1.innerHTML=`<img src="${await obtener_imagen_player(level_1[n],"front")}" class="imagen_pokemon" alt="Pokemon carta"><div class=circle></div>`;    
        }else{
            class_tipo_1 = 'bono';
            tarjeta1.classList.toggle(class_tipo_1);
            tarjeta1.innerHTML=`<img src="img/premios/${level_1[n]}.png" class="imagen_premio" alt="Pokemon carta"><div class=circle></div>`; 
        }
        sound_select.play();
        tarjeta1.disabled=true;
    }else if(tarjetasDestapadas==2){
        tarjeta2=document.getElementById(`btn_carta_${n}`);
        tarjeta2.style.backgroundImage="none";
        segundo_resultado=level_1[n];
        if(typeof level_1[n]=="string"){
            class_tipo_2= await obtener_imagen_player(level_1[n],"type");
            tarjeta2.classList.toggle(class_tipo_2);
            tarjeta2.innerHTML=`<img src="${await obtener_imagen_player(level_1[n],"front")}" class="imagen_pokemon" alt="Pokemon carta"><div class=circle></div>`;    
        }else{
            class_tipo_2= 'bono';
            tarjeta2.classList.toggle(class_tipo_2);
            tarjeta2.innerHTML=`<img src="img/premios/${level_1[n]}.png" class="imagen_premio" alt="Pokemon carta"><div class=circle></div>`; 
        }
        tarjeta2.disabled=true;
        if(primer_resultado==segundo_resultado){
            tarjetasDestapadas=0;
            document.getElementById('player').style.animation = 'anim_pokemon 1s';
            if(typeof level_1[n]=="string"){
                lista_pokemon_temporal.push(level_1[n]);
                document.getElementById("imagen_pokemon").innerHTML=`
                <img src="${await obtener_imagen_player(level_1[n],"front")}">
                `;
                document.getElementById("display_texto").value=primer_resultado.charAt(0).toUpperCase()+primer_resultado.slice(1)+" Atrapado";
            }
            asiertos++;
            if(asiertos<8){
                sound_equals.play();    
            }
        }else{
            sound_select.play();
            setTimeout(()=>{
            tarjeta1.innerHTML="";
            tarjeta2.innerHTML="";
            tarjeta1.classList.toggle(class_tipo_1);
            tarjeta2.classList.toggle(class_tipo_2);
            tarjeta1.style.backgroundColor="";
            tarjeta1.style.backgroundImage="url(img/fondo_carta.jpg)";
            tarjeta2.style.backgroundColor="";
            tarjeta2.style.backgroundImage="url(img/fondo_carta.jpg)";
            tarjeta1.disabled=false;
            tarjeta2.disabled=false;
            tarjetasDestapadas=0;
            },1000)
        }
    }
    if(asiertos==8){
        level++;
        jugador.subionivel();
        siguiente_nivel(level);
        sound_win.play();
        document.getElementById("nivel").innerHTML=level;
    }
}


// Mostrar los primeros 150 pokemon: https://pokeapi.co/api/v2/pokemon?offset=0&limit=151
async function obtener_imagen_player(nombre_pokemon,posicion){
    try{
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre_pokemon}`);
        if(respuesta.status === 200){
            const datos = await respuesta.json();
            if(posicion=="back"){
                return datos.sprites.back_default;
            }else if(posicion=="front"){
                return datos.sprites.front_default;
            }else if(posicion=="type"){
                return datos.types[0].type.name;
            }
            /*for(i=0;i<datos.results.length;i++){
                obtener_tipo_pokemon(datos.results[i].name);
            }*/
        }else if (respuesta.status === 401){
            console.log("Pusiste la llave mal");
        }else if (respuesta.status === 404){
            console.log("Lo que buscas no existe");
        }else{
            console.log("Hubo un error y no sabemos que paso");
        }
    }catch (error){
        console.log(error);
    }
}


async function infoPokemon(){
    try{
        const respuesta = await fetch(` https://pokeapi.co/api/v2/pokemon/pikachu`);
        if(respuesta.status === 200){
            const datos = await respuesta.json();
            console.log(datos);
            
        }else if (respuesta.status === 401){
            console.log("Pusiste la llave mal");
        }else if (respuesta.status === 404){
            console.log("Lo que buscas no existe");
        }else{
            console.log("Hubo un error y no sabemos que paso");
        }
    }catch (error){
        console.log(error);
    }
}

async function obtener_tipo_pokemon(nombre_pokemon){
    try{
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre_pokemon}`);
        if(respuesta.status === 200){
            const datos = await respuesta.json();
            console.log(datos.types[0].type.name);
        }else if (respuesta.status === 401){
            console.log("Pusiste la llave mal");
        }else if (respuesta.status === 404){
            console.log("Lo que buscas no existe");
        }else{
            console.log("Hubo un error y no sabemos que paso");
        }
    }catch (error){
        console.log(error);
    }
}