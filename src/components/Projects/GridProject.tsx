import React, { useEffect, useRef, useState } from 'react'; 

interface Project { 
  id: number; 
  title: string; 
  maker: string; 
  urlImg: string; 
  urlMarks?: string; 
  pdf?: string; 
} 

interface GridProjectProps { 
  dataProject: Project[]; 
} 

const GridProject: React.FC<GridProjectProps> = ({dataProject}) => { 
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]); 
    const [visibleProjects, setVisibleProjects] = useState<boolean[]>( 
        new Array(dataProject.length).fill(false) 
    ); 

    useEffect(() => { 
        const observerOptions = { 
            root: null, 
            rootMargin: '0px', 
            threshold: 0.1  
        }; 

        const observers = projectRefs.current.map((ref, index) => { 
            const observer = new IntersectionObserver((entries) => { 
                entries.forEach(entry => { 
                    // Actualizamos el estado basado en si el elemento es visible o no
                    setVisibleProjects(prev => { 
                        const newState = [...prev]; 
                        newState[index] = entry.isIntersecting; // Cambiamos esto para que se actualice en ambas direcciones
                        return newState; 
                    }); 
                    // Eliminamos el unobserve para que siga observando
                }); 
            }, observerOptions); 

            if (ref) { 
                observer.observe(ref); 
            } 

            return observer; 
        }); 

        // Limpieza de observers
        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, [dataProject.length]); 

    return ( 
        <div className="grid grid-cols-3 gap-y-12 gap-x-8 max-w-screen-2xl mx-auto mt-12"> 
            {dataProject.map((projectOne, index) => ( 
                <a  
                    key={projectOne.id} 
                    href={projectOne.pdf}  
                    target='_blank'  
                    rel='noreferrer'  
                    download 
                    className='group' 
                > 
                    <div  
                        ref={el => { 
                            projectRefs.current[index] = el; 
                        }} 
                        className={` 
                            relative overflow-hidden rounded-md hover:cursor-pointer 
                            transform transition-all duration-700 ease-out 
                            ${visibleProjects[index] ? 
                                'opacity-100 ' : 
                                'opacity-30 '
                            } 
                        `} 
                    > 
                        <div className="relative h-[550px] w-full overflow-hidden"> 
                            <img 
                                src={typeof projectOne.urlImg === 'string' ? projectOne.urlImg : ''} 
                                alt={`Picture of ${projectOne.title} client`} 
                                className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-110" 
                                loading="lazy"
                           /> 
                            <div className="absolute inset-0 bg-textGray opacity-0 group-hover:opacity-90 transition-all duration-300 group-hover:scale-150 flex items-center justify-center"> 
                                {projectOne.urlMarks && ( 
                                    <img 
                                        src={projectOne.urlMarks} 
                                        alt={`Marks for ${projectOne.title}`} 
                                        className="w-1/2 h-auto relative z-40" 
                                    /> 
                                )} 
                            </div> 
                        </div> 
                        <div className="flex justify-between items-start gap-4 mt-2"> 
                            <h2 className="text-AdBlue group-hover:text-AdDarkBlue transition-all duration-300 text-xl whitespace-pre-line leading-[1.2rem]"> 
                                {projectOne.title} 
                            </h2> 
                            <p className="font-bold text-AdBlue group-hover:text-AdDarkBlue transition-all duration-300 text-xs block pt-2 whitespace-pre-line leading-[0.8rem]"> 
                                {projectOne.maker} 
                            </p> 
                        </div> 
                    </div> 
                </a> 
            ))} 
        </div> 
    ); 
}; 

export default GridProject;