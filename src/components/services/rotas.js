
import Principal from '../Principal.vue'
import Dashboard from '../paginas/Dashboard.vue';
import Perfil from '../paginas/Perfil.vue';
import Usuarios from '../usuarios/Index.vue';
import TelaLogin from '../TelaLogin.vue'
import Conteudo from '../conteudo_produtos/Index.vue'
import AlterarMenu from '../conteudo_produtos/AlterarMenu.vue'
import PerguntaRespostas from '../perguntas_respostas/Index.vue'
export const routes = [    
    {path:'/admin/', name:'tela-login',component: TelaLogin},  
    {path:'/admin/', name:'principal',component: Principal,
    children: [
        {path:'dashboard', name:'dashboard',component: Dashboard}, 
        {path:'perfil', name:'perfil',component: Perfil}, 
        {path:'usuarios', name:'usuarios',component: Usuarios},  
        {path:'conteudoProdutos/alterarMenu', name:'alterarMenu',component: AlterarMenu},  
        {path:'conteudoProdutos', name:'produtosConteudo',component: Conteudo},  
        {path:'perguntasRespostas', name:'perguntasRespostas',component: PerguntaRespostas},
    ]},  
    
];


