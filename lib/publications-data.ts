export type Publication = {
    id: number;
    title: string;
    authors: string[];
    journal: string;
    publicationDate: string;
    abstract: string;
    link: string;
    doi: string;
  };
  
  export const publications: Publication[] = [
    {
      id: 1,
      title: 'A Novel Approach to Smart Grid Energy Management Using AI',
      authors: ['Dr. A.H.M. Zadidul Karim', 'Dr. John Smith', 'et al.'],
      journal: 'IEEE Transactions on Smart Grid',
      publicationDate: '2023-11-15',
      abstract: 'This paper presents a novel artificial intelligence-based approach for optimizing energy distribution and consumption in modern smart grids. Our model demonstrates a significant improvement in efficiency and reliability over existing methods.',
      link: 'https://ieeexplore.ieee.org/abstract/document/1234567',
      doi: '10.1109/TSG.2023.1234567',
    },
    {
        id: 2,
        title: 'Advanced Signal Processing Techniques for 5G Communication Systems',
        authors: ['Professor Dr. Tapan Kumar Chakraborty', 'Dr. Jane Doe'],
        journal: 'Journal of Communications and Networks',
        publicationDate: '2023-09-02',
        abstract: 'This research explores advanced signal processing algorithms designed to enhance the performance and capacity of 5G and future wireless communication systems. We introduce a new modulation scheme that shows promising results.',
        link: 'https://www.comsoc.org/publications/journals/jcn/2023-09-02',
        doi: '10.1234/jcn.2023.098765',
      },
      {
        id: 3,
        title: 'Design and Analysis of a High-Efficiency Resonant Converter for Electric Vehicles',
        authors: ['Dr. Michael Brown', 'et al.'],
        journal: 'IEEE Transactions on Power Electronics',
        publicationDate: '2023-07-21',
        abstract: 'We propose a new topology for a resonant DC-DC converter aimed at electric vehicle battery charging applications. The design achieves over 98% efficiency across a wide load range, confirmed through simulation and experimental results.',
        link: 'https://ieeexplore.ieee.org/abstract/document/2345678',
        doi: '10.1109/TPEL.2023.2345678',
      },
      {
        id: 4,
        title: 'Low-Power VLSI Architecture for Real-Time Object Detection',
        authors: ['Dr. Jane Doe', 'Ms. Emily White'],
        journal: 'IEEE International Conference on Computer Design (ICCD)',
        publicationDate: '2023-05-10',
        abstract: 'This paper details the architecture of a low-power VLSI chip for real-time object detection in mobile devices. The proposed design minimizes power consumption without compromising detection accuracy.',
        link: 'https://ieeexplore.ieee.org/abstract/document/3456789',
        doi: '10.1109/ICCD.2023.3456789',
      },
      {
        id: 5,
        title: 'Autonomous Navigation for Unmanned Aerial Vehicles in Cluttered Environments',
        authors: ['Dr. John Smith'],
        journal: 'Journal of Field Robotics',
        publicationDate: '2023-03-30',
        abstract: 'A novel sensor fusion and path-planning algorithm for UAVs is presented, enabling autonomous navigation in complex and dynamic environments. The algorithm has been successfully tested in both simulated and real-world scenarios.',
        link: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/rob.12345',
        doi: '10.1002/rob.12345',
      },
  ]; 