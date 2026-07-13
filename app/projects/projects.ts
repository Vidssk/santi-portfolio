export interface Project {
  slug: string;
  title: string;
  card: {
    icon: string;
    label: string;
    text: string;
  };
  hero: {
    image: string;
    textColor?: string;
    backgroundSize?: 'cover' | 'contain';
    backgroundColor?: string;
    fontSize?: string;
  };
  description: string;
  notableFeatures?: string[];
  lessonsLearned?: string[];
  projectDifficulties?: string[];
  githubUrl: string;
  websiteUrl?: string;
  showOnListing?: boolean;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'CyberWear',
    title: 'CyberWear',
    card: {
      icon: 'pictures/Icons/PaintingPickerIcon.png',
      label: 'CyberWear',
      text: 'Bracelet Ecommerce Site',
    },
    hero: {
      image: '/pictures/projects/StatisticPic.png',
      textColor: 'var(--secondaryTextColor)',
    },
    description:
      'An e-commerce website specializing in 3D printed bracelets, utilizing the power of Next.js for the frontend and Flask for the backend. Integrated with mysql database to manage products, user accounts, and orders.',
    notableFeatures: [
      'User Authentication and Authorization',
      'Product Management System',
      'Shopping Cart and Checkout Process',
      'Responsive Design',
      'Admin Dashboard',
    ],
    lessonsLearned: [
      'Full-Stack Development',
      'Database Management',
      'API Development',
      'E-commerce Best Practices',
      'Team Collaboration',
    ],
    projectDifficulties: [
      'Having enough models to 3D print the bracelets',
      'Integrating frontend and backend seamlessly',
      'Ensuring data security and user privacy',
      'deciding on the payment api to use',
    ],
    githubUrl: 'https://github.com/Vidssk/CyberWear',
    featured: true,
  },
  {
    slug: 'PaintingPicker',
    title: 'VR Painting',
    card: {
      icon: 'pictures/Icons/PaintingPickerIcon.png',
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
    slug: 'descriptiveStatistics',
    title: 'Statistiscs Website',
    card: {
      icon: 'pictures/Icons/statsIcon.jpg',
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
    websiteUrl:
      'https://statisticssite-ispmj5vhg-vidssks-projects.vercel.app/',
  },
  {
    slug: 'Explorer',
    title: 'Architecture Explorer',
    card: {
      icon: 'pictures/Icons/ArchitectureExplorerIcon.png',
      label: 'VR Architecture Explorer',
      text: 'Explore Different forms of VR Locomotion',
    },
    hero: {
      image: '/pictures/projects/ArchitectureExplorerPic.png',
      textColor: '#fff',
    },
    description:
      'Virtual Reality Locomotion Demo built using Unreal Engine. You can use various forms of locomotion to explore this map.',
    notableFeatures: [
      'Locomotion: Teleportation, climbing, walking, and blinkers.',
    ],
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
      icon: 'pictures/Icons/ToonTanksIcon.png',
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
  },
  {
    slug: 'pathfindingvisualizer',
    title: 'Path Finding Visualizer',
    card: {
      icon: 'pictures/Icons/PathFinding.png',
      label: 'Pathfinding Visualizer',
      text: 'Pathfinding Algorithm Program',
    },
    hero: {
      image: '/pictures/projects/PathfindingPic.png',
      textColor: '#fff',
      backgroundSize: 'contain',
      fontSize: '90px',
    },
    description:
      'Creates a graph that calculates the shortest route between two points.',
    notableFeatures: [
      'Pathfinding Visualizer is a React based web application.',
      'Pathfinding Algorithm: A*Star.',
      'Walls: block out nodes.',
    ],
    lessonsLearned: ['Animating a graph based utilizing React and CSS.'],
    projectDifficulties: [
      'Resizing node graph to take into account different screen sizes.',
    ],
    githubUrl: 'https://github.com/Vidssk/Pathfind_Visualizer',
  },
  {
    slug: 'buildingescape',
    title: 'Building Escape',
    card: {
      icon: 'pictures/Icons/BuildingEscapeIcon.png',
      label: 'Building Escape',
      text: 'Escape the Building to win',
    },
    hero: {
      image: '/pictures/projects/BuildingEscapePic.png',
      textColor: 'rgb(110, 94, 0)',
    },
    description:
      'Building Escape is a first person escape room game built using Unreal Engine.',
    lessonsLearned: ['Utilizing Trigger Volumes.'],
    projectDifficulties: ['VR Headset movement causing collider problems.'],
    githubUrl: 'https://github.com/Vidssk/BuildingEscapeGame.git',
  },
  {
    slug: 'simpleshooter',
    title: 'Simple Shooter',
    card: {
      icon: 'pictures/Icons/SimpleShooterIcon.png',
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
    projectDifficulties: [
      'Figuring out how Behaviour Trees and Blackboards worked.',
    ],
    githubUrl: 'https://github.com/Vidssk/SimpleShoter.git',
  },
  {
    slug: 'Renegades',
    title: 'Renegades',
    card: {
      icon: 'pictures/Icons/RenegadesLogo.jpeg',
      label: 'Renegade: Kai',
      text: 'Sword based Hero Game',
    },
    hero: {
      image: '/pictures/Icons/RenegadesLogo.jpeg',
      textColor: '#fff',
      backgroundSize: 'contain',
      backgroundColor: 'black',
    },
    description:
      'Virtual Reality Sword fighting game built using Unreal Engine.',
    notableFeatures: [
      'Survival Game Mode (currently programming).',
      'Katana weapon made from Blender and Substance Painter.',
    ],
    lessonsLearned: ['3D game Asset Workflow.'],
    projectDifficulties: [
      'Utilizing Inverse Kinematics for VR body rigging.',
    ],
    githubUrl: 'https://github.com/Vidssk/RenegadeKai',
    showOnListing: false,
  },
  {
    slug: 'bashprojects',
    title: 'Bash Projects',
    card: {
      icon: 'pictures/Icons/statsIcon.jpg',
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
    projectDifficulties: [
      'Debugging complex scripts',
      'Handling user input and errors gracefully',
    ],
    githubUrl: 'https://github.com/Vidssk/CyberWear',
    showOnListing: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getListedProjects(): Project[] {
  return projects.filter((project) => project.showOnListing !== false);
}
