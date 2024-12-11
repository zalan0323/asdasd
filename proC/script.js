let tippelo=document.getElementById("tippelo");
const maxi=20;
const mini=0;
let team=[0, 0];
let jelenlegi=0;
let zene=Math.floor(Math.random() * (maxi - mini) ) + mini;
const zeneksz=[
    "a világ kicsi és ez életveszélyes",
    "Régen minden szebb volt este és az énekes nem tudja mi történt",
    "ú ez nehéz lett bocsi: az énekes keres valakit akinek a szíve a magáé",
    "van egy épület egy tágas szép réten",
    "Szia haver a kövi a szöveg: újra látunk mindenkit és ez a táj ismerősnek tűnik",
    "az alkohol a kezében van és nem szabad felejteni",
    "az álmai egy majdnem férjet tartalmaznak és arra kéri isten segítőjét adjon neki inni",
    "az égés legjobb orvosságáról szól",
    "a budapesti padok rossz őrök",
    "az emberek jönnek mennek és egy picit nagyon fúj a szél",
    "egy utazás elindul repülve",
    "nem volt elköszönés és ez szomorú",
    "nézz rá az arcomba és hajolj felém",
    "bocsika, hogy ilyen nehéz, de csak túl jó vagy sajnos:télen nehogy össze csomózd",
    "senki se tudja merre tart az autó, de sokat kanyarodik. Ja és pocséklóak az élőlények a mennyben",
    "szép szines dolog az égen nemes rangú nő személy",
    "a rossz férfi sosem nyer és a vége kontinentális",
    "karika szélétől a sugara távolságára vagyok és körülöttem ismerősök vannak",
    "A jó napoknál viszlát  nem jó veled",
    "nehéz, sok, sötét, jól égő anyag",
    "este nem vagyok hallgatok a józanokra és amúgy valaki tud segíteni eljutni haza?",
    "3 alkohol",
    "nem vagyok jó tanuló soha"
]
const zenek=[
    "Belehalok",
    "Mindenki táncol/90'/",
    "Hol van az a lány",
    "Van egy ház",
    "Visszajövök",
    "Mesélek a bornak",
    "Pálinka dal",
    "Jég dupla whiskyvel",
    "Ellopták a biciklim",
    "Reptér",
    "Az éjjel soha nem ér véget",
    "Darabokra törted a szívem",
    "Hajolj bele a hajamba",
    "Bogozd ki",
    "Autó egy szerpentinen",
    "Királylány",
    "Valami amerika",
    "A kör",
    "Azok a boldog szép napok",
    "16 tonna fekete szén",
    "Ki visz haza",
    "A sör a bor a pálinka",
    "Bukott diák"
]
let alma=0;
tippelo.addEventListener("submit", (event) => {
    let tipp=document.getElementById("tipp");
    event.preventDefault();
    console.log(zenek[zene]);
    if(tipp==zenek[zene]){
        team[jelenlegi]++;
        alma++;
        
    }
    if(jelenlegi==0){
        document.getElementById("ta").innerHTML=team[jelenlegi];
        jelenlegi++;
    }else{
        jelenlegi--;
        document.getElementById("tb").innerHTML=team[jelenlegi];
    }
    
});
function newsong(){
    zene=Math.floor(Math.random() * (maxi - mini) ) + mini;
    document.getElementById("szoveg").innerHTML=zeneksz[zene];
}
/*
"Belehalok"
"Mindenki táncol/90'/"
"Hol van az a lány"
"Van egy ház"
"Visszajövök"
"Mesélek a bornak"
"Pálinka dal"
"Jég dupla whiskyvel"
"Ellopták a biciklim"
"Reptér"
"Az éjjel soha nem ér véget"
"Darabokra törted a szívem"
"Hajolj bele a hajamba"
"Bogozd ki"
"Autó egy szerpentinen"
"Királylány"
"Valami amerika"
A kör"
"Azok a boldog szép napok"
"16 tonna fekete szén"
"Ki visz haza"
"A sör a bor a pálinka"
"Bukott diák"
*/