
import CardItem from '@components/CardItem.js'
import '@styles/projects-page.css'

const page = () => {
  return (
    <div className="project_cards_container">
           {/* <h1 className="title">PROJECTS</h1>   */}         
        <div className="cards">
            <div className="cards_container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src= 'pictures/Icons/PaintingPickerIcon.png'
                        text= 'UE4 project focused on painting in VR'
                        label='VR Painter'
                        path='/projects/PaintingPicker'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src= 'pictures/Icons/ArchitectureExplorerIcon.png'
                        text='Explore Different forms of VR Locomotion'
                        label='VR Architecture Explorer'
                        path='/projects-page/architectureexplorer'
                        />
                        <CardItem 
                        src= 'pictures/Icons/ToonTanksIcon.png'
                        text='Command a tank to destroy turrets'
                        label='Toon Tanks'
                        path='/projects-page/toontanks'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src= 'pictures/Icons/RenegadesLogo.jpeg'
                        text='Sword based Hero Game'
                        label='Renegade: Kai'
                        path='/projects-page/Renegades'
                        />
                        <CardItem 
                        src= 'pictures/Icons/PathFinding.png'
                        text='Pathfinding Algorithm Program'
                        label='Pathfinding Visualizer'
                        path='/projects-page/pathfindingvisualizer'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src= 'pictures/Icons/SimpleShooterIcon.png'
                        text='Shoot and kill all enemy AI to win'
                        label='Simple Shooter'
                        path='/projects-page/simpleshooter'
                        />
                        <CardItem 
                        src= 'pictures/Icons/BuildingEscapeIcon.png'
                        text='Escape the Building to win'
                        label='Building Escape'
                        path='/buildingescape'
                        />
                    </ul>

                </div>
            </div>
        </div>
    </div>
  )
}

export default page