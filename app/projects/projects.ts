export interface Project {
  slug: string
  title: string
  card: {
    icon: string
    label: string
    text: string
  }
  hero: {
    image: string
    video?: string
    media?: 'image' | 'video'
    textColor?: string
    backgroundSize?: 'cover' | 'contain'
    backgroundColor?: string
    fontSize?: string
  }
  description: string
  notableFeatures?: string[]
  lessonsLearned?: string[]
  projectDifficulties?: string[]
  githubUrl?: string
  websiteUrl?: string
  showOnListing?: boolean
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'N.O.V.A',
    title: 'N.O.V.A',
    card: {
      icon: '/pictures/Icons/Nova.png',
      label: 'N.O.V.A',
      text: 'AI-Assistant',
    },
    hero: {
      image: '/pictures/projects/Nova.png',
      textColor: 'var(--secondaryTextColor)',
    },
    description: 'Wake-word Intent Driven AI-Assistant capable of running various agents.',
    notableFeatures: [
      'Wake Word Detection',
      'Intent-Driven System',
      'Mutliple llm models for reasoning dependent on task',
      'Capable of running various agents based on intent',
      'Admin Dashboard',
    ],
    lessonsLearned: [
      'Full-Stack Development',
      'SQLite',
      'Prompt Driven Workflows',
      'AI-Workflows',
      'Creating Reusable frames with 9-slice technique',
    ],
    projectDifficulties: [
      'Sending data Through websockets',
      'Scaling the frame accurately to be a reusable component.',
      'optimizing for low latency with text-to speech',
    ],
    githubUrl: 'https://github.com/Vidssk/AI-Assistant',
    websiteUrl: 'https://sh-project-nova.vercel.app',
    featured: true,
  },
  {
    slug: 'AccessVR',
    title: 'AccessVR',
    card: {
      icon: '/pictures/Icons/AccessVR.png',
      label: 'VR Wheelchair Simulation',
      text: 'Utilizing a wheelchair to navigate virtual environments and obstacles.',
    },
    hero: {
      image: '/pictures/projects/AcessVR.png',
      video: '/videos/AccessVRDemo.mp4',
    },
    description:
      'A virtual reality system designed to assist wheelchair users by providing a safe, controlled environment to practice navigation and physical therapy. ',
    notableFeatures: [
      'Physical Wheelchair used for Navigation.',
      '3D models: Made utilizing Blender.',
      'Users being able to navigate up and down stairs with the wheelchair.',
    ],
    lessonsLearned: [
      'Integrating Hardware with Unreal Engine',
      'How to handle VR Collisions.',
      'Building Environments tailored for specific goals.',
      'Working togethere with hardware and software engineers to accomplish a goal.',
    ],
    projectDifficulties: [
      'Collisions in unreal engine, especially with VR were hard to debug.',
      'Finding a time that works with all team members for meetings.',
    ],
  },
  {
    slug: 'ASLClassifier',
    title: 'ASL Classifier',
    card: {
      icon: '/pictures/Icons/ASLClassifier.png',
      label: 'ASL Classifier',
      text: 'Using a model trained on ASL hand data for classification. ',
    },
    hero: {
      image: '/pictures/projects/ASLClassifier.png',
      textColor: 'green',
    },
    description:
      'ASL video translator created from a model trained in a neural network to classify the 26 letters of the asl alphabet.',
    notableFeatures: [
      'System can gather, train, and use hand data for a classification model to be used in applications.',
      'Applied model to a live feed program to test the live classification of the asl language through hand gestures.',
      'preprocessed hand data to give the neural network better hand data to work with.',
    ],
    lessonsLearned: [
      'How to build Machine Learning pipelines for classification.',
      'Learned how the quantity and quality of data can affect the quality of the trained model.',
      'Learned of hybrid approaches for better machine learning models like user calibration for higher accuracy.',
      'Learned how to make programs to automate the pipeline process to improve upon models or use those models in other applications.',
    ],
    projectDifficulties: [
      'Gathering the right quantity and quality of hand-data to decrease the false positives.',
      'Letters that require motion would need a frame to capture that movement for classification.',
    ],
    showOnListing: false,
  },
  {
    slug: 'PaintingPicker',
    title: 'VR Painting',
    card: {
      icon: '/pictures/Icons/PaintingPickerIcon.png',
      label: 'VR Painter',
      text: 'Painting in VR',
    },
    hero: {
      image: '/pictures/projects/VRPainterPic.png',
      textColor: 'green',
    },
    description: 'Virtual Reality Painting game built using Unreal Engine.',
    notableFeatures: [
      'Canvas: Create New, Save, Load, and Select.',
      '3D models: Made utilizing Blender.',
      'Painting: Through the use of Static Mesh instances.',
    ],
    lessonsLearned: [
      'Ergonomics of VR UI.',
      'Utilizing Figma for UI design.',
      'Unreal Motion Graphics (UMG) for UI Design.',
      'FrameRate in VR.',
      'Handling Performance Bottlenecks.',
    ],
    projectDifficulties: [
      'Draw calls causing FrameRate to drop dues to spline meshes.',
      "Creating unique ID's for each save slot.",
    ],
    githubUrl: 'https://github.com/Vidssk/LightPainter',
  },
  {
    slug: 'CyberWear',
    title: 'Cyberwear',
    card: {
      icon: '/pictures/Icons/Cyberwear.png',
      label: 'Full-Stack E-Commerce Site',
      text: 'E-commerce specialized in selling custom 3d-printed charm bracelets for festivals.',
    },
    hero: {
      image: '/pictures/projects/cyberwear.png',
      textColor: 'green',
    },
    description: 'E-commerce website that sells 3d-printed charms design in with blender.',
    notableFeatures: [
      'MySQL Backend for database schema implementation.',
      '3D models: Made utilizing Blender.',
      'Next.js Front-end for selling merchandise.',
    ],
    lessonsLearned: [
      'How to build backend guided by a schema.',
      'SVG Logo creation.',
      'How e-commerce webstited are generally built.',
      'How to create charms from scratch.',
    ],
    projectDifficulties: [
      'Making enough Charms to sell on the website prior to launch',
      'Making the charms with minimal color pallete to ensure not too much time was spent in the painting process.',
      'Making sure authentication is secure.',
    ],
  },
  {
    slug: 'descriptiveStatistics',
    title: 'Statistiscs Website',
    card: {
      icon: '/pictures/Icons/statsIcon.jpg',
      label: 'Descriptive Statistics',
      text: 'Project Manager of statistics site',
    },
    hero: {
      image: '/pictures/projects/StatisticPic.png',
      textColor: 'var(--secondaryTextColor)',
    },
    description:
      'A statistics website that accepts an array of user-input integers, processes them through statistical functions, and presents the data graphically.',
    notableFeatures: [
      'Project Manager for the Project.',
      'A Next.js website integrated with a Python Flask backend for optimal performance and seamless functionality.',
    ],
    lessonsLearned: [
      'Utilizing flask to use python as the backend.',
      'Setting up the architecture for the team.',
      'Communicating with the team.',
      'Risk Analysis.',
      'The importance of splitting up work to accomplish tasks faster.',
    ],
    projectDifficulties: ['Some team mates lacked communication.'],
    githubUrl: 'https://github.com/Vidssk/Project3.git',
  },
  {
    slug: 'Explorer',
    title: 'Architecture Explorer',
    card: {
      icon: '/pictures/Icons/ArchitectureExplorerIcon.png',
      label: 'VR Architecture Explorer',
      text: 'Explore Different forms of VR Locomotion',
    },
    hero: {
      image: '/pictures/projects/ArchitectureExplorerPic.png',
      textColor: '#fff',
    },
    description:
      'Virtual Reality Locomotion Demo built using Unreal Engine. You can use various forms of locomotion to explore this map.',
    notableFeatures: ['Locomotion: Teleportation, climbing, walking, and blinkers.'],
    lessonsLearned: [
      'Motion Sickness in VR.',
      'Collisions in VR.',
      'How climbing works in VR.',
      'Faders and Timers for teleporting.',
      'Creating Haptic Effects.',
    ],
    projectDifficulties: ['VR Headset movement causing collider problems.'],
    githubUrl: 'https://github.com/Vidssk/ArchitectureExplorer.git',
  },
  {
    slug: 'ToonTanks',
    title: 'Toon Tanks',
    card: {
      icon: '/pictures/Icons/ToonTanksIcon.png',
      label: 'Toon Tanks',
      text: 'Command a tank to destroy turrets',
    },
    hero: {
      image: '/pictures/projects/ToonTanksPic.png',
      textColor: '#fff',
    },
    description:
      "3rd-Person Tank game. The objective is to destroy all enemy turrets before your tank's destroyed.",
    notableFeatures: [
      'modular setup to create multiple levels based off healt and number of enemy AI.',
    ],
    lessonsLearned: [
      'Creating Actor class to be used as a projectile base class.',
      'Creating GameMode classes.',
      'Creating Health Component.',
      'Creating Widget Blueprints.',
      'Spawning Actors at runtime.',
      'Spawning Particle System.',
      'Understanding UPROPERTY Specifiers.',
      'Using Dynamic Delegates.',
      'Using Timers for events based on elapsed time.',
      'Utilizing the Reflection System in Unreal for Casting.',
    ],
    projectDifficulties: [
      'Draw calls causing FrameRate to drop dues to spline meshes.',
      "Creating unique ID's for each save slot.",
    ],
    githubUrl: 'https://github.com/Vidssk/ToonTanks.git',
    showOnListing: false,
  },
  {
    slug: 'pathfindingvisualizer',
    title: 'Path Finding Visualizer',
    card: {
      icon: '/pictures/Icons/PathFinding.png',
      label: 'Pathfinding Visualizer',
      text: 'Pathfinding Algorithm Program',
    },
    hero: {
      image: '/pictures/projects/PathfindingPic.png',
      textColor: '#fff',
      backgroundSize: 'contain',
      fontSize: '90px',
    },
    description: 'Creates a graph that calculates the shortest route between two points.',
    notableFeatures: [
      'Pathfinding Visualizer is a React based web application.',
      'Pathfinding Algorithm: A*Star.',
      'Walls: block out nodes.',
    ],
    lessonsLearned: ['Animating a graph based utilizing React and CSS.'],
    projectDifficulties: ['Resizing node graph to take into account different screen sizes.'],
    githubUrl: 'https://github.com/Vidssk/Pathfind_Visualizer',
  },
  {
    slug: 'buildingescape',
    title: 'Building Escape',
    card: {
      icon: '/pictures/Icons/BuildingEscapeIcon.png',
      label: 'Building Escape',
      text: 'Escape the Building to win',
    },
    hero: {
      image: '/pictures/projects/BuildingEscapePic.png',
      textColor: 'rgb(110, 94, 0)',
    },
    description: 'Building Escape is a first person escape room game built using Unreal Engine.',
    lessonsLearned: ['Utilizing Trigger Volumes.'],
    projectDifficulties: ['VR Headset movement causing collider problems.'],
    githubUrl: 'https://github.com/Vidssk/BuildingEscapeGame.git',
    showOnListing: false,
  },
  {
    slug: 'simpleshooter',
    title: 'Simple Shooter',
    card: {
      icon: '/pictures/Icons/SimpleShooterIcon.png',
      label: 'Simple Shooter',
      text: 'Shoot and kill all enemy AI to win',
    },
    hero: {
      image: '/pictures/projects/SimpleShooterPic.png',
      textColor: '#fff',
    },
    description:
      '3rd-Person Shooter game build using Unreal Engine. Enemy AI will chase you down, take them out to win.',
    lessonsLearned: [
      'Skeletal Animations.',
      'Using Animation Blueprints.',
      'Connecting Animations to gameplay.',
      'Using sockets to interact with meshes.',
      'Making Gun Actors.',
      'Spawning Particle Effects.',
      'Using Behaviour Trees to create smart AI.',
    ],
    projectDifficulties: ['Figuring out how Behaviour Trees and Blackboards worked.'],
    githubUrl: 'https://github.com/Vidssk/SimpleShoter.git',
    showOnListing: false,
  },
  {
    slug: 'Renegades',
    title: 'Renegades',
    card: {
      icon: '/pictures/Icons/RenegadesLogo.jpeg',
      label: 'Renegade: Kai',
      text: 'Sword based Hero Game',
    },
    hero: {
      image: '/pictures/Icons/RenegadesLogo.jpeg',
      textColor: '#fff',
      backgroundSize: 'contain',
      backgroundColor: 'black',
    },
    description: 'Virtual Reality Sword fighting game built using Unreal Engine.',
    notableFeatures: [
      'Survival Game Mode (currently programming).',
      'Katana weapon made from Blender and Substance Painter.',
    ],
    lessonsLearned: ['3D game Asset Workflow.'],
    projectDifficulties: ['Utilizing Inverse Kinematics for VR body rigging.'],
    githubUrl: 'https://github.com/Vidssk/RenegadeKai',
    showOnListing: false,
  },
  {
    slug: 'bashprojects',
    title: 'Bash Projects',
    card: {
      icon: '/pictures/Icons/statsIcon.jpg',
      label: 'Bash Projects',
      text: 'Bash automation scripts',
    },
    hero: {
      image: '/pictures/projects/StatisticPic.png',
      textColor: 'var(--secondaryTextColor)',
    },
    description:
      'A collection of Bash scripts designed to automate various system administration tasks, enhance productivity, and streamline workflows.',
    notableFeatures: [
      'Automated Backup Scripts',
      'job search automation',
      'System Monitoring Tools',
      'File Management Utilities',
      'Customizable Workflows',
    ],
    lessonsLearned: [
      'Bash Scripting Fundamentals',
      'Automation Techniques',
      'System Administration',
      'Error Handling in Scripts',
      'Optimizing Script Performance',
    ],
    projectDifficulties: ['Debugging complex scripts', 'Handling user input and errors gracefully'],
    githubUrl: 'https://github.com/Vidssk/CyberWear',
    showOnListing: false,
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getListedProjects(): Project[] {
  return projects.filter((project) => project.showOnListing !== false)
}
