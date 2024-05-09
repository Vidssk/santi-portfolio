
import CardItem from '@components/CardItem.js';
import '@styles/projects-page.css';

const projects = [
  
  {
    src: 'pictures/Icons/PaintingPickerIcon.png',
    text: 'Painting in VR',
    label:'VR Painter',
    path:'/projects/PaintingPicker'
  },
  {
    src: 'pictures/Icons/statsIcon.jpg',
    text: 'Project Manager of statistics site',
    label: 'Descriptive Statistics',
    path: '/projects/descriptiveStatistics',
  },
  {
    src: 'pictures/Icons/ToonTanksIcon.png',
    text: 'Command a tank to destroy turrets',
    label: 'Toon Tanks',
    path: '/projects/ToonTanks',
  },
  {
    src: 'pictures/Icons/PathFinding.png',
    text: 'Pathfinding Algorithm Program',
    label: 'Pathfinding Visualizer',
    path: '/projects/pathfindingvisualizer',
  },
  // {
    //   src: 'pictures/Icons/RenegadesLogo.jpeg',
    //   text: 'Sword based Hero Game',
    //   label: 'Renegade: Kai',
    //   path: '/projects/Renegades',
    // },
  {
    src: 'pictures/Icons/BuildingEscapeIcon.png',
    text: 'Escape the Building to win',
    label: 'Building Escape',
    path: '/projects/buildingescape',
  },
  {
    src: 'pictures/Icons/SimpleShooterIcon.png',
    text: 'Shoot and kill all enemy AI to win',
    label: 'Simple Shooter',
    path: '/projects/simpleshooter',
  },

];

const Page = () => {
  return (
    <>
      <div className="project_cards_container">

        {/* <video src={require('@public/videos/Grey_Plexus_Networking.mp4')} autoPlay muted loop className="backgroundVideo" /> */}
          {/* <video src={require('@public/videos/video.mp4')} autoPlay muted loop className="backgroundVideo" /> */}
        <div className="cards">
          <div className="cards_container">
            <div className="cards__wrapper">
                     <ul className="showcase_card">
                        <CardItem
                          src= 'pictures/Icons/ArchitectureExplorerIcon.png'
                          text= 'Explore Different forms of VR Locomotion'
                          label= 'VR Architecture Explorer'
                          path= '/projects/Explorer'
                        />
                     </ul>
              {projects.map((project, index) => (
                <ul className="cards__items" key={index}>
                  { (index %2 == 0)&&(
                    <CardItem {...projects[index]} />
                    )}
                    {index + 1 < projects.length && (index %2 == 0) && (
                      <CardItem {...projects[index + 1]} />
                    )}

                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;

// import CardItem from '@components/CardItem.js'
// import '@styles/projects-page.css'

// const page = () => {
//   return (
//     <div className="project_cards_container">
//            {/* <h1 className="title">PROJECTS</h1>   */}    
//                 <video src={require('@public/videos/Grey_Plexus_Networking.mp4')} autoPlay muted loop className="backgroundVideo" />
                
//         <div className="cards">
//             <div className="cards_container">
//                 <div className="cards__wrapper">
//                     <ul className="cards__items">
//                         <CardItem
//                         src= 'pictures/Icons/PaintingPickerIcon.png'
//                         text= 'UE4 project focused on painting in VR'
//                         label='VR Painter'
//                         path='/projects/PaintingPicker'
//                         />
//                     </ul>
//                     <ul className="cards__items">
//                         <CardItem
//                         src= 'pictures/Icons/ArchitectureExplorerIcon.png'
//                         text='Explore Different forms of VR Locomotion'
//                         label='VR Architecture Explorer'
//                         path='/projects/Explorer'
//                         />
//                         <CardItem 
//                         src= 'pictures/Icons/ToonTanksIcon.png'
//                         text='Command a tank to destroy turrets'
//                         label='Toon Tanks'
//                         path='/projects/ToonTanks'
//                         />
//                     </ul>
//                     <ul className="cards__items">
//                         <CardItem 
//                         src= 'pictures/Icons/RenegadesLogo.jpeg'
//                         text='Sword based Hero Game'
//                         label='Renegade: Kai'
//                         path='/projects/Renegades'
//                         />
//                         <CardItem 
//                         src= 'pictures/Icons/PathFinding.png'
//                         text='Pathfinding Algorithm Program'
//                         label='Pathfinding Visualizer'
//                         path='/projects/pathfindingvisualizer'
//                         />
//                     </ul>
//                     <ul className="cards__items">
//                         <CardItem 
//                         src= 'pictures/Icons/SimpleShooterIcon.png'
//                         text='Shoot and kill all enemy AI to win'
//                         label='Simple Shooter'
//                         path='/projects/simpleshooter'
//                         />
//                         <CardItem 
//                         src= 'pictures/Icons/BuildingEscapeIcon.png'
//                         text='Escape the Building to win'
//                         label='Building Escape'
//                         path='/projects/buildingescape'
//                         />
//                     </ul>

//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default page