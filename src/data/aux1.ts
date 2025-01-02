import { getImage } from 'astro:assets';

import SwissImg from '../../assets/projects/img/Swiss.png';
import ComafiImg from '../../assets/projects/img/Comafi.jpeg';
import MaterImg from '../../assets/projects/img/Mater.png';
import EfectyImg from '../../assets/projects/img/Efecty.png';
import GadorImg from '../../assets/projects/img/Gador.jpg';
import GasnorImg from '../../assets/projects/img/Gasnor.jpg';
import TgnImg from '../../assets/projects/img/Tgn.jpg';
import AnkImg from '../../assets/projects/img/Ank.png';

import SwissMark from '../../assets/projects/marks/Swiss.png';
import ComafiMark from '../../assets/projects/marks/Comafi.png';
import MaterMark from '../../assets/projects/marks/Meter.png';
import EfectyMark from '../../assets/projects/marks/Efecty.png';
import GadorMark from '../../assets/projects/marks/Gador.png';
import GasnorMark from '../../assets/projects/marks/Gasnor.png';
import TgnMark from '../../assets/projects/marks/Tgn.png';
import AnkMark from '../../assets/projects/marks/Ank.png';

const getSwissImg = await getImage({src: SwissImg});
const getComafiImg = await getImage({src: ComafiImg});
const getMaterImg = await getImage({src: MaterImg});
const getEfectyImg = await getImage({src: EfectyImg});

export interface Project {
    id: number;
    title: string;
    maker: string;
    urlImg: string | ImageMetadata;
    urlMarks: string | ImageMetadata;
}

export const dataProject: Project[] = [
    {
        id: 1,
        title: 'Swiss Medicals',
        maker: 'Cloud, Integrations, Web, IA',
        urlImg: getSwissImg.src,
        urlMarks: SwissMark,
    },
    {
        id: 2,
        title: 'Comafi',
        maker: 'Cloud Solution, Business Integration, Web',
        urlImg: ComafiImg,
        urlMarks: ComafiMark,
    },
    {
        id: 3,
        title: 'Mater Dei',
        maker: 'Cloud, Integrations, Dev, UX/UI, Product Design',
        urlImg: MaterImg,
        urlMarks: MaterMark,
    },
    {
        id: 4,
        title: 'Efecty',
        maker: 'Cloud Solution/ Scalability, Business Integration, Cultural Hacking & Agility, Cybersecurity, Web & Mobile App Dev, UX/UI, Product Design',
        urlImg: EfectyImg,
        urlMarks: EfectyMark,
    },
    {
        id: 5,
        title: 'Gador',
        maker: 'Cloud, Data, Dev, UX/UI',
        urlImg: GadorImg,
        urlMarks: GadorMark,
    },
    {
        id: 6,
        title: 'Gasnor',
        maker: 'Web/Mobile app Dev, Business Integration, CyberSecurity, Product Design, Cloud Solution/Scalability',
        urlImg: GasnorImg,
        urlMarks: GasnorMark,
    },
    {
        id: 7,
        title: 'Tgn',
        maker: 'Web/Mobile app Dev, Business Integration, CyberSecurity, Product Design, Cloud Solution/Scalability ',
        urlImg: TgnImg,
        urlMarks: TgnMark,
    },
    {
        id: 8,
        title: 'Ank',
        maker: 'Cloud Solution, Business Integration, Web, Product Design',
        urlImg: AnkImg,
        urlMarks: AnkMark,
    }
];