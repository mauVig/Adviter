import { useEffect, useState } from 'react';
import GridProject from '@/components/Projects/GridProject';
import SlideProject from '@/components/Projects/SlideProject';
import { dataProject } from '@/data/ProjectsData';

const Projects: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const md = 768;
    
    useEffect(() => {
        setIsMobile(window.innerWidth <= md);
        
        const handleResize = () => {
            setIsMobile(window.innerWidth <= md);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section>
            <h2 className="text-AdBlue font-semibold text-center pt-[32rem] leading-4">Some of <br />our projects</h2>
            <p className="text-center text-4xl font-medium leading-8 mt-4">Effective <br /> solutions</p>
            <div className="projects-list pb-32">
                {isMobile ? <SlideProject dataProject={dataProject} /> : <GridProject dataProject={dataProject}  />}
            </div>
        </section>
    );
};

export default Projects;