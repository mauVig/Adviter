

export interface Arrow {
    id: number;
    name: string;
    src: string | ImageMetadata;
}

export const backArrows:Arrow[] = [
    {
        id:1,
        name:'simple',
        src: '/svg/Arr-simple.svg',
    },
    {
        id:2,
        name:'double',
        src: '/svg/Ar-double.svg',
    },
]



interface Icon {
    id: number;
    name: string;
    src: string;
}


export const adIcons:Icon[] =[
    {
        id:1,
        name:'blueGrey',
        src:'/icons/logo-blueGrey.svg', //0
    },
    {
        id:2,
        name:'blueDark',
        src:'/icons/logo-darkDark.svg',// 1
    },
    {
        id:3,
        name:'green',
        src:'/icons/logo-blueDark.svg',// 2
    },
    {
        id:4,
        name:'darkDark',
        src:'/icons/logo-darkDark.svg',// 3
    },
   

]