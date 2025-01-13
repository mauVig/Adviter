import { useEffect, useState } from 'react';
import GridProject from '@/components/Projects/GridProject';
import SlideProject from '@/components/Projects/SlideProject';
import { dataProject } from '@/data/ProjectsData';

const Projects: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const lg = 1024;
    
    useEffect(() => {
        setIsMobile(window.innerWidth <= lg);
        
        const handleResize = () => {
            setIsMobile(window.innerWidth <= lg);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section>
            <h2 className="text-AdBlue font-semibold text-2xl text-center pt-4 leading-5 ">Some of <br />our projects</h2>
            <p className="text-center text-[3.5rem] font-medium leading-10 mt-8">Effective solutions</p>
            <div className="projects-list pb-32 px-0 lg:px-10 2xl:px-0 ">
                {isMobile ? <SlideProject dataProject={dataProject} /> : <GridProject dataProject={dataProject}  />}
            </div>
        </section>
    );
};

export default Projects;