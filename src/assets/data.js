import img1 from "./img/img1.svg";
import img2 from "./img/img2.svg";
import img3 from "./img/img3.svg";
import img4 from "./img/img4.svg";
import img5 from "./img/img5.svg";
import img6 from "./img/img6.svg";
import img7 from "./img/img7.svg";
import img8 from "./img/img8.svg";
import img9 from "./img/img9.svg";
import img10 from "./img/img10.svg";
import img11 from "./img/img11.svg";
import img12 from "./img/img12.svg";
import img13 from "./img/img13.svg";
import img14 from "./img/img14.svg";
import img15 from "./img/img15.svg";
import img16 from "./img/img16.svg";
import img17 from "./img/img17.svg";
import img18 from "./img/img18.svg";

const text = [
    `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
    `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
    `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
    `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
    `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
    `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
    `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
    `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
    `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
];

export const produtos = [
    {
        id: 1,
        categoria: "star wars",
        img: img4,
        nome: "caneca stormtrooper",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 2,
        categoria: "star wars",
        img: img3,
        nome: "fantasia stormtrooper",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 3,
        categoria: "star wars",
        img: img2,
        nome: "fantasia kylo ren",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 4,
        categoria: "star wars",
        img: img7,
        nome: "funko pop darth vader",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 5,
        categoria: "star wars",
        img: img13,
        nome: "funko pop baby yoda",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 6,
        categoria: "star wars",
        img: img10,
        nome: "miniatura mestre yoda",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 7,
        categoria: "consoles",
        img: img1,
        nome: "controle xbox series x",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 8,
        categoria: "consoles",
        img: img6,
        nome: "console playstation 5",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 9,
        categoria: "consoles",
        img: img18,
        nome: "console retro",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 10,
        categoria: "consoles",
        img: img16,
        nome: "nintendo switch",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 11,
        categoria: "consoles",
        img: img17,
        nome: "console xbox series x",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 12,
        categoria: "consoles",
        img: img11,
        nome: "game boy color personalizado",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 13,
        categoria: "diversos",
        img: img8,
        nome: "camisa atari",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 14,
        categoria: "diversos",
        img: img5,
        nome: "camisa geek retro",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 15,
        categoria: "diversos",
        img: img15,
        nome: "miniatura sonic",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 16,
        categoria: "diversos",
        img: img9,
        nome: "radio retro",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 17,
        categoria: "diversos",
        img: img12,
        nome: "oculos realidade virtual",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
    {
        id: 18,
        categoria: "diversos",
        img: img14,
        nome: "fantasia pikachu",
        descricao: gerarDescricao(),
        preco: `R$ ${gerarPreco()},${gerarPreco()}`,
    },
];

function gerarPreco() {
    let aleatorio = (Math.random() * 100).toFixed(0);

    if (aleatorio < 10) {
        return "0" + aleatorio;
    } else {
        return aleatorio;
    }
}

function gerarDescricao() {
    let num = Math.floor(Math.random() * text.length);

    return text[num];
}

export const categorias = produtos.reduce(function (ac, item) {
    if (!ac.includes(item.categoria)) {
        ac.push(item.categoria);
    }

    return ac;
}, []);

export function filtrarPorCategoria(categorias) {
    return produtos.filter(({ categoria }) => categoria == categorias);
}
