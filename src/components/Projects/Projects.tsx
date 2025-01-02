
import GridProject from './GridProject';
import SlideProject from './SlideProject';
import { dataProject } from '../../data/ProjectsData';


const Projects = () => {
    const width = window.innerWidth
    
    return (
        <section className='bg-[#dcdcdc]'>
            <h2 className="text-AdBlue font-semibold text-center pt-[15rem] leading-4">Some of <br />our projects</h2>
            <p className="text-center text-4xl font-medium leading-8 mt-4">Effective <br /> solutions</p>
            <div className="projects-list">
              {width > 768 ? <GridProject /> : <SlideProject dataProject={dataProject} />}
            </div>
        </section>
    );
};

export default Projects;