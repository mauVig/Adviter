import type { Project } from "@/data/ProjectsData";


interface SlideProjectProps {
  dataProject: Project[];
}


const GridProject: React.FC<SlideProjectProps> = ({dataProject}) => {
    return ( 
        <div className="grid grid-cols-3 gap-y-12 gap-x-4 gap max-w-screen-lg mx-auto mt-12"> 
            {dataProject.map((projectOne) => ( 
                <a href={projectOne.pdf} target='_blank' rel='noreferrer' download>
                    <div key={projectOne.id} className="relative group overflow-hidden rounded-md hover:cursor-pointer"> 
                        <div className="relative h-[500px] w-full overflow-hidden">
                            <img  
                            src={typeof projectOne.urlImg === 'string' ? projectOne.urlImg : ''}  
                            alt={`Picture of ${projectOne.title} client`}  
                            className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-110 "
                            />
                            <div className="absolute inset-0 bg-textGray opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                            {projectOne.urlMarks && (
                                <img 
                                src={projectOne.urlMarks} 
                                alt={`Marks for ${projectOne.title}`}
                                className="w-1/2 h-auto relative z-10 "
                                />
                            )}
                            </div>
                        </div>
                        <div className="flex justify-between items-start gap-4 mt-2"> 
                            <h2 className="text-AdBlue text-xl whitespace-pre-line leading-[1.2rem]"> 
                                {projectOne.title} 
                            </h2> 
                            <p className="font-bold text-AdBlue text-xs block pt-2 whitespace-pre-line leading-[0.8rem]"> 
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