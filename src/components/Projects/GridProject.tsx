import type { Project } from "../../data/ProjectsData";

interface SlideProjectProps {
  dataProject: Project[];
}


const GridProject: React.FC<SlideProjectProps> = ({dataProject}) => {
    return ( 
        <div className="grid grid-cols-3 gap-4 max-w-screen-lg mx-auto">
            {dataProject.map((projectOne) => (
                <div key={projectOne.id} className="">
                    <img 
                        src={typeof projectOne.urlImg === 'string' ? projectOne.urlImg : ''} 
                        alt={`Picture of ${projectOne.title} client`} 
                        className='background-cover w-full h-[500px] object-cover rounded-md'
                    />
                     <div className='flex justify-between items-start gap-4 mt-2'>
                        <h2 className='text-AdBlue text-xl whitespace-pre-line leading-[1.2rem] '>
                        {projectOne.title}
                        </h2>
                        <p className='font-bold text-AdBlue text-xs block pt-2 whitespace-pre-line leading-[0.8rem]  '>
                        {projectOne.maker}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GridProject;