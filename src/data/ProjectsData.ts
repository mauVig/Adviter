
export interface Project {
    id: number;
    title: string;
    maker: string;
    urlImg: string;
    urlCellImg: string;
    urlMarks: string;
    pdf: string;
}

export const dataProject: Project[] = [
    {
        id:1,
        title:'Swiss\nMedicals',
        maker:'Cloud,\nIntegrations,\nWeb,\nIA',
        urlImg:'/projects/img/Swiss.jpg',
        urlCellImg:'/projects/img/cell/Swiss.jpg',
        urlMarks:'/projects/marks/Swiss.png',
        pdf:'/projects/pdf/SMG.pdf',
    },
    {
        id:2,
        title:'Comafi',
        maker:'Cloud Solution,\nBusiness Integration,\nWeb',
        urlImg:'/projects/img/Comafi.jpeg',
        urlCellImg:'/projects/img/cell/Comafi.jpg',
        urlMarks:'/projects/marks/Comafi.png',
        pdf:'/projects/pdf/Comafi.pdf',
    },
    {
        id:3,
        title:'Mater\nDei',
        maker:'Cloud, Integrations\nProduct Design,\nDev, UX/UI,',
        urlImg:'/projects/img/Mater.jpg',
        urlCellImg:'/projects/img/cell/Mater.jpg',
        urlMarks:'/projects/marks/Meter.png',
        pdf:'/projects/pdf/MATERDEI.pdf',
    },
    {
        id:4,
        title:'Efecty',
        maker:'Cloud Solution/ Scalability,\nBusiness Integration,\nCultural Hacking & Agility,\nWeb & Mobile App Dev,\nProduct Design,\nCybersecurity, \nUX/UI',
        urlImg:'/projects/img/Efecty.png',
        urlCellImg:'/projects/img/cell/Efecty.jpg',
        urlMarks:'/projects/marks/Efecty.png',
        pdf:'/projects/pdf/EFECTY.pdf',
    },
    {
        id:5,
        title:'Gador',
        maker:'Cloud, Data, Dev,\nUX/UI',
        urlImg:'/projects/img/Gador.jpg',
        urlCellImg:'/projects/img/cell/Gador.jpg',
        urlMarks:'/projects/marks/Gador.png',
        pdf:'/projects/pdf/GADOR.pdf',
    },
    {
        id:6,
        title:'Gasnor',
        maker:'Cloud Solution/Scalability,\nWeb/Mobile app Dev,\nBusiness Integration,\nProduct Design,\nCyberSecurity',
        urlImg:'/projects/img/Gasnor.jpg',
        urlCellImg:'/projects/img/cell/Gasnor.jpg',
        urlMarks:'/projects/marks/Gasnor.png',
        pdf:'/projects/pdf/GASNOR.pdf',
    },
    {
        id:7,
        title:'Tgn',
        maker:'Web/Mobile app Dev,\nCloud Solution/Scalability\nBusiness Integration,\nCyberSecurity,\nProduct Design',
        urlImg:'/projects/img/Tgn.jpg',
        urlCellImg:'/projects/img/cell/Tgn.jpg',
        urlMarks:'/projects/marks/Tgn.png',
        pdf:'/projects/pdf/TGN.pdf',
    },
    {
        id:8,
        title:'Ank',
        maker:'Business Integration,\nCloud Solution,\nProduct Design,\nWeb',
        urlImg:'/projects/img/Ank.png',
        urlCellImg:'/projects/img/cell/Ank.jpg',
        urlMarks:'/projects/marks/Ank.png',
        pdf:'/projects/pdf/ANK.pdf',
    }
]