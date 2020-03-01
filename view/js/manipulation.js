const iptEmail = $("#email");
const iptCep = $("#cep");
const passwd = $("#pwd"); 
const statiElem = $("#stati");
const iptCity = $("#city");
const iptAddre = $("#addre");
const iptCpf= $("#cpf");

$('#search').click(() => searchCep());

iptCep.keypress((evt) => {
    if(evt.keyCode === 13) {
        evt.preventDefault();
        searchCep();
    }   
});

$("#btnPwd").click(() => {
   if(passwd[0].type === "password") {
    passwd.attr('type','text');
    $("#btnPwd").attr('value','Ocultar');
   }else{
    passwd.attr('type','password');
    $("#btnPwd").attr('value','Ver');
   }   
});

iptCpf.focusout((evt) => {
    let cpf = evt.target.value;
    iptCpf.val(cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4"));
});

iptCpf.focusin((evt) =>{
    let cpf = evt.target.value;
    iptCpf.val(cpf.replace(/[.-]/g,""));

})

iptEmail.focusout(() =>{   
    try{
        const array_Exp = new Array(
            ".com",
            ".br",
            ".org",
            ".net",
            ".sp",
            ".info",
            ".biz",
            ".name",
            ".cc",
            ".ws",
            ".mobi",
            ".in",
            ".me",
            ".co",
            ".online",
            ".site",
            ".top",
            ".club",
            ".club",
            ".website",
            ".link",
            ".vc",
            ".click",
            ".cool",
            ".men",
            ".gratis",
            ".plus",
            ".legal",
            ".email",
            ".host",
            ".tech",
            ".download",
            ".cloud",
            ".digital",
            ".software",
            ".webcam",
            ".chat",
            ".blog",
            ".network",
            ".vlog",
            ".flog",
            ".sale",
            ".store",
            ".shopping",
            ".shop",
            ".promo",
            ".news",
            ".live",
            ".review",
            ".love",
            ".capital",
            ".trade",
            ".work",
            ".business",
            ".ltda",
            ".company",
            ".ind",
            ".bar",
            ".pizza",
            ".beer",
            ".fit",
            ".pub",
            ".vodka",
            ".cafe",
            ".diet",
            ".wine",
            ".delivery",
            ".studio",
            ".hospital",
            ".stream",
            ".dog",
            ".pet",
            ".camera",
            ".gardem",
            ".global",
            ".sc",
            ".us",
            ".city",
            ".world",
            ".contagem",
            ".sampa",
            ".bsb",
            ".campinas",
            ".curitiba",
            ".floripa",
            ".goiana",
            ".joinville",
            ".poa",
            ".recife",
            ".rio",
            ".pro",
            ".taxi",
            ".bio",
            ".vet",
            ".coach",
            ".adm",
            ".adv",
            ".arq",
            ".cnt",
            ".eng",
            ".eti",
            ".med",
            ".mus",
            ".odo",
            ".gov"
            );
        const expDomain = array_Exp.join("|"); 
        const regExp =  new RegExp("(.)+\@[a-z]+("+expDomain+"){1,3}$","g");

        if(!regExp.test(iptEmail.val())) throw new TypeError("Invalid format");

    }catch(error) {
        alert("Formato inválido");
        console.log(error);
    }
});

function clearInput() {
    iptCep.val("");
    iptCity.val("");
    iptAddre.val("");
    statiElem.val("");
}