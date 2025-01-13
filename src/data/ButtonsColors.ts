interface IButtonColor {
    id: number;
    name: string;
    svgArr: string;
    color: string;
}

export const arrButtons:IButtonColor[] = [
    {
        id:1,
        name:'blue',
        svgArr:'/svg/arr-blue.svg',
        color:'text-AdBlue'
    },
    {
        id:2,
        name:'darkBlue',
        svgArr:'/svg/Arr-darkBlue.svg',
        color:'text-AdDarkBlue'
    },
    {
        id:3,
        name:'grey',
        svgArr:'/svg/Arr-grey.svg',
        color:'text-textGray'
    }
]