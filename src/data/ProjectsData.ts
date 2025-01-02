
export interface Project {
    id: number;
    title: string;
    maker: string;
    urlImg: string;
    urlMarks: string;
}

export const dataProject: Project[] = [
    {
        id:1,
        title:'Swiss\nMedicals',
        maker:'Cloud,\nIntegrations,\nWeb,\nIA',
        urlImg:'/projects/img/Swiss.jpg',
        urlMarks:'/projects/marks/Swiss.png',
    },
    {
        id:2,
        title:'Comafi',
        maker:'Cloud Solution,\nBusiness Integration,\nWeb',
        urlImg:'/projects/img/Comafi.jpeg',
        urlMarks:'/projects/marks/Comafi.png',
    },
    {
        id:3,
        title:'Mater Dei',
        maker:'Cloud, Integrations\nProduct Design,\nDev, UX/UI,',
        urlImg:'/projects/img/Mater.png',
        urlMarks:'/projects/marks/Meter.png',
    },
    {
        id:4,
        title:'Efecty',
        maker:'Cloud Solution/ Scalability,\nBusiness Integration,\nCultural Hacking & Agility,\nWeb & Mobile App Dev,\nProduct Design,\nCybersecurity, \nUX/UI',
        urlImg:'/projects/img/Efecty.png',
        urlMarks:'/projects/marks/Efecty.png',
    },
    {
        id:5,
        title:'Gador',
        maker:'Cloud, Data, Dev,\nUX/UI',
        urlImg:'/projects/img/Gador.jpg',
        urlMarks:'/projects/marks/Gador.png',
    },
    {
        id:6,
        title:'Gasnor',
        maker:'Web/Mobile app Dev,\nCloud Solution/Scalability,\nBusiness Integration,\nProduct Design,\nCyberSecurity',
        urlImg:'/projects/img/Gasnor.jpg',
        urlMarks:'/projects/marks/Gasnor.png',
    },
    {
        id:7,
        title:'Tgn',
        maker:'Web/Mobile app Dev,\nCloud Solution/Scalability\nBusiness Integration,\nCyberSecurity,\nProduct Design',
        urlImg:'/projects/img/Tgn.jpg',
        urlMarks:'/projects/marks/Tgn.png',
    },
    {
        id:8,
        title:'Ank',
        maker:'Business Integration,\nCloud Solution,\nProduct Design,\nWeb',
        urlImg:'/projects/img/Ank.png',
        urlMarks:'/projects/marks/Ank.png',
    }
]