import { arrButtons as importedArrButtons } from '@/data/ButtonsColors';

interface ArrButtonsProps {
    whitch: string;
    myClass?: string;
}

export const ArrButtons: React.FC<ArrButtonsProps> = ({ whitch, myClass }) => {
    const oneButtom = importedArrButtons.find((item) => item.name === whitch);

    return (
        <div 
            className={`
                w-16 
                border-2 
                ${oneButtom.color} 
                ${myClass ? myClass : ''} 
                rounded-3xl 
                flex 
                items-center 
                justify-center 
                px-4 
                py-2 
                overflow-hidden 
                group
                hover:cursor-pointer
            `}
        >
            <img 
                src={oneButtom.svgArr} 
                alt="Arrow to right" 
                className="
                   transform 
                    translate-x-0
                    transition-transform
                    duration-300
                    ease-out
                    group-hover:animate-slide-loop
                "
            />
        </div>
    );
}