'use client'

export default function PublicationsPage() {
  // 2020 Publications Data
  const publications2019 = [
    {
      id: 1,
      sl: 1,
      author: "Dr. Tapan Kumar Chakraborty",
      designation: "Professor",
      papers: [
        {
          title: "Study of Single-Phase Hybrid Multilevel Inverter for Obtaining 13-Level output Voltage Using Three H-Bridge Units",
          journal: "Proceedings of the 4th IEEE International Conference on Electrical Energy Systems (ICEES 2019), Chennai, India, February 21-22, 2019",
          type: "International"
        },
        {
          title: "An Experimental Study of Cascaded H-Bridge Multilevel Inverter for Obtaining Multiple Voltage Waveforms Containing Different Number of Levels",
          journal: "Proceedings of the 10th IEEE International Symposium on Power Electronics for Distributed Generation Systems (PEDG2019), Xian, Shaanxi, China, pp. 1017-1020, June 3-6, 2019",
          type: "International"
        },
        {
          title: "A Simple Technique for Generating Gate Drive Signals for MOSFET-Based Single-Phase Multilevel Inverter",
          journal: "Proceedings of the 2nd International conference on Energy, Electrical and Power Engineering (CEEPE 2019), University of California, Berkeley, USA, June 25-28, 2019",
          type: "International"
        },
        {
          title: "A review on graph search algorithms for optimal energy efficient path planning for an unmanned air vehicle",
          journal: "Indonesian Journal of Electrical Engineering and Computer Science, Vol.15, No. 2, pp. 743-749, August, 2019",
          type: "International"
        },
        {
          title: "Development of Single-Phase Multilevel Inverter Consisting of Four H-Bridge Units for Generating Nine-Level Output Voltage from Equal Independent dc Sources",
          journal: "Proceedings of the IEEE 2nd International Conference on Renewable Energy and Power Engineering (REPE 2019), Toronto, Canada, pp. 20-21, November 2-4, 2019",
          type: "International"
        }
      ]
    },
    {
      id: 2,
      sl: 2,
      author: "Mr. G. R. Ahmed Jamal",
      designation: "Associate Professor",
      papers: [
        {
          title: "Effect of Dust on Output Power of Conventional Solar Panels in Bangladesh",
          journal: "Asian Journal For Convergence In Technology (AJCT), Vol-V, Issue-I, April, 2019 (Indexed by ICI Journals master list- Index Copernicus)",
          type: "International"
        },
        {
          title: "Empirical Ratio of Higher Optical Transitions in Semiconducting SWCNTs",
          journal: "Asian Journal For Convergence In Technology (AJCT), Vol-V, Issue-I, April, 2019 (Indexed by ICI Journals master list- Index Copernicus)",
          type: "International"
        }
      ]
    },
    {
      id: 3,
      sl: 3,
      author: "Mr. A. H. M. Zadidul Karim",
      designation: "Associate Professor",
      papers: [
        {
          title: "A Security System for Kindergarten School Using RFID Technology",
          journal: "Journal of Computer and Communications, 7(4)",
          type: "International"
        },
        {
          title: "Analysis of Empirical Mode Decomposition Method of Heart Rate Extraction from Motion Artifact Corrupted PPG Signal",
          journal: "American Journal of Signal Processing, Vol. 9 No. 1, 2019, pp. 6-10",
          type: "International"
        },
        {
          title: "A Machine Learning Approach for Heart Rate Estimation from PPG Signal using Random Forest Regression Algorithm",
          journal: "2019 International Conference on Electrical, Computer and Communication Engineering (ECCE), Cox's Bazar, Bangladesh, IEEE, 2019, pp. 1-5",
          type: "International"
        },
        {
          title: "Extraction of Heart Rate from PPG Signal: A Machine Learning Approach using Decision Tree Regression Algorithm",
          journal: "4th International Conference on Electrical Information and Communication Technology (EICT), 20-22 December 2019, Khulna, Bangladesh",
          type: "International"
        },
        {
          title: "Energy Harvesting—Technical Analysis of Evolution, Control Strategies, and Future Aspects",
          journal: "JOURNAL OF ELECTRONIC SCIENCE AND TECHNOLOGY, VOL. 17, NO. 2, JUNE 2019, Digital Object Identifier:10.11989/JEST.1674-862X.80314201",
          type: "International"
        }
      ]
    },
    {
      id: 4,
      sl: 4,
      author: "Ms. Salma Nazia Rahman",
      designation: "Assistant Professor",
      papers: [
        {
          title: "A Security System for Kindergarten School Using RFID Technology",
          journal: "Journal of Computer and Communications (2019): 21-30",
          type: "International"
        }
      ]
    },
    {
      id: 5,
      sl: 5,
      author: "Mr. Md Sazzadur Rahman",
      designation: "Assistant Professor",
      papers: [
        {
          title: "Plasmon Enhanced Semitransparent Planar Perovskite Solar Cells with Copper Nanocubes: FDTD Study",
          journal: "Presented in the 11th IEEE PES Asia-Pacific Power and Energy Engineering Conference 2019 (APPEEC), The Parisian Macao, Cotai Central, Macao, China, 1st-4th December 2019",
          type: "International"
        },
        {
          title: "Position Dependent Impact of Plasmonic Nanocubes on the Optical Performance of Perovskite Solar Cells: A Simulation",
          journal: "Presented in the 11th IEEE PES Asia-Pacific Power and Energy Engineering Conference 2019 (APPEEC), The Parisian Macao, Cotai Central, Macao, China, 1st-4th December 2019",
          type: "International"
        },
        {
          title: "Simulation based Investigation of Inverted Planar Perovskite Solar Cell with All Metal Oxide Inorganic Transport Layers",
          journal: "Proceedings in the 2019 International Conference on Electrical, Computer and Communication Engineering (ECCE), Cox's Bazar, Bangladesh, 2019, pp. 1–6, doi: 10.1109/ECACE.2019.8679283",
          type: "International"
        }
      ]
    },
    {
      id: 6,
      sl: 6,
      author: "Mr. Md. Masum Howlader",
      designation: "Assistant Professor",
      papers: [
        {
          title: "Extraction of Heart Rate from PPG Signal: A Machine Learning Approach using Decision Tree Regression Algorithm",
          journal: "4th International Conference on Electrical Information and Communication Technology (EICT), 20-22 December 2019, Khulna, Bangladesh",
          type: "International"
        }
      ]
    },
    {
      id: 7,
      sl: 7,
      author: "M. Abdullah Al-Amin",
      designation: "Assistant Professor",
      papers: [
        {
          title: "Comparison of ARIMA and SVM for Short-term Load Forecasting",
          journal: "Proceeding of IEEE Sponsored International Conference on The 9th Annual Information Technology, Electromechanical and Microelectronics Conference, 13th – 15th March, 2019, Jaipur, India",
          type: "International"
        }
      ]
    },
    {
      id: 8,
      sl: 8,
      author: "Muhammad Towhidur Rahman",
      designation: "Assistant Professor",
      papers: [
        {
          title: "Determination of Green Spots (Trees) for Google Satellite Images Using MATLAB",
          journal: "Proceeding of Third International Conference on Computing and Network Communications (CoCoNet'19)",
          type: "International"
        }
      ]
    },
    {
      id: 9,
      sl: 9,
      author: "Dr. Tishna Sabrina",
      designation: "Assistant Professor",
      papers: [
        {
          title: "Simulation based Investigation of Inverted Planar Perovskite Solar Cell with All Metal Oxide Inorganic Transport Layers",
          journal: "Proceedings of IEEE International Conference on Electrical, Computer and Communication Engineering (ECCE), 2019, pp. 1-6. 7-9 Feb. 2019, IEEE Xplore, DOI: 10.1109/ECACE.2019.8679283",
          type: "International"
        },
        {
          title: "Design and Economic Analysis of Hybrid Renewable Energy System",
          journal: "Proceedings of International Conference on Power, Electrical, and Electronics and Industrial Applications (PEEIACON), 29 Nov – 1 Dec, 2019",
          type: "International"
        }
      ]
    },
    {
      id: 10,
      sl: 10,
      author: "Mr. Shaikh Rashedur Rahman",
      designation: "Assistant Professor",
      papers: [
        {
          title: "Determining Critical Clearing Time in Transient Stability Assessment for Hybrid Power System",
          journal: "2019 IEEE 6th International Conference on Engineering Technologies and Applied Sciences (ICETAS) December 20-21, 2019 Kuala Lumpur Malaysia",
          type: "International"
        },
        {
          title: "A Novel Method of Coherency Identification for Multi-Machine Power System",
          journal: "2019 IEEE 6th International Conference on Engineering Technologies and Applied Sciences (ICETAS) December 20-21, 2019 Kuala Lumpur Malaysia",
          type: "International"
        }
      ]
    },
    {
      id: 11,
      sl: 11,
      author: "Mr. Md. Moshiur Rahman",
      designation: "Assistant Professor",
      papers: [
        {
          title: "Photonic Crystal Fiber based Terahertz Sensor for Alcohol Detection in Beverages: Design and Analysis",
          journal: "Proceedings of 3rd IEEE International Conference of Communication and Photonics (ICTP' 2019), 28-30 December, Dhaka, Bangladesh, 2019",
          type: "International"
        },
        {
          title: "Design and Characterization of a Low Loss Polarization Maintaining Photonic Crystal Fiber for THz Regime",
          journal: "Proceedings of 3rd IEEE International Conference of Communication and Photonics (ICTP' 2019), 28-30 December, Dhaka, Bangladesh, 2019",
          type: "International"
        },
        {
          title: "Single Mode Porous Core Photonic Crystal Fiber for Terahertz Wave Propagation with Extremely Low Losses",
          journal: "Proceedings of 7th IEEE R10 Humanitarian Technology Conference (IEEE R10 HTC'2019), 12-14 November, Depok, Indonesia, 2019",
          type: "International"
        },
        {
          title: "Extremely low effective Material loss of air core photonic crystal fiber for THz guidance",
          journal: "Proceedings of IEEE region 10 symposium (TENSYMP), India, June, 2019. https://ieeexplore.ieee.org/document/8971297",
          type: "International"
        }
      ]
    },
    {
      id: 12,
      sl: 12,
      author: "Tanima Tasmin Chowdhury",
      designation: "Assistant Professor",
      papers: [
        {
          title: "Design and Control of a Standalone Microgrid System for Saint Martin's Island in Bangladesh",
          journal: "5th International Conference on Advances in Electrical Engineering (ICAEE), pp. 463-467. IEEE, 2019",
          type: "International"
        },
        {
          title: "Seizure and Non-Seizure EEG Signals Detection Using 1-D Convolutional Neural Network Architecture of Deep Learning Algorithm",
          journal: "1st International Conference on Advances in Science, Engineering and Robotics Technology (ICASERT), pp. 1-4. IEEE, 2019",
          type: "International"
        }
      ]
    },
    {
      id: 13,
      sl: 13,
      author: "Mr. Muhammad Ahad Rahman Miah",
      designation: "Assistant Professor",
      papers: [
        {
          title: "Determining Critical Clearing Time in Transient Stability Assessment for Hybrid Power System",
          journal: "2019 IEEE 6th International Conference on Engineering Technologies and Applied Sciences (ICETAS) December 20-21, 2019 Kuala Lumpur Malaysia",
          type: "International"
        },
        {
          title: "A technical analysis of security management in terms of crowd energy and smart living",
          journal: "Journal of Electronic Science and Technology 2018, Vol. 16 Issue (4): 367-378 DOI: 10.11989/JEST.1674-862X",
          type: "International"
        }
      ]
    },
    {
      id: 14,
      sl: 14,
      author: "Mr. Khandaker Sultan Mahmood",
      designation: "Assistant Professor",
      papers: [
        {
          title: "Modeling and Closed Loop Voltage Mode Control of a Forward Converter",
          journal: "Indian Journal of Science and Technology, Vol 12(1), DOI: 10.17485/ijst/2019/v12i1/139860, January 2019",
          type: "International"
        }
      ]
    },
    {
      id: 15,
      sl: 15,
      author: "Mr. Mirza Mursalin Iqbal",
      designation: "Assistant Professor",
      papers: [
        {
          title: "Modeling and Closed Loop Voltage Mode Control of a Forward Converter",
          journal: "Indian Journal of Science and Technology, Vol 12(1), DOI: 10.17485/ijst/2019/v12i1/139860, January 2019",
          type: "International"
        }
      ]
    },
    {
      id: 16,
      sl: 16,
      author: "Mr. Md. Khairul Alam",
      designation: "Lecturer",
      papers: [
        {
          title: "Extraction of Heart Rate from PPG Signal: A Machine Learning Approach using Decision Tree Regression Algorithm",
          journal: "4th International Conference on Electrical Information and Communication Technology (EICT), 20-22 December 2019, Khulna, Bangladesh",
          type: "International"
        }
      ]
    },
    {
      id: 17,
      sl: 17,
      author: "Ms. Farhana Akter Mou",
      designation: "Lecturer",
      papers: [
        {
          title: "Photonic Crystal Fiber based Terahertz Sensor for Alcohol Detection in Beverages: Design and Analysis",
          journal: "Proceedings of 3rd IEEE International Conference of Communication and Photonics (ICTP' 2019), 28-30 December, Dhaka, Bangladesh, 2019",
          type: "International"
        },
        {
          title: "Design and Characterization of a Low Loss Polarization Maintaining Photonic Crystal Fiber for THz Regime",
          journal: "Proceedings of 3rd IEEE International Conference of Communication and Photonics (ICTP' 2019), 28-30 December, Dhaka, Bangladesh, 2019",
          type: "International"
        },
        {
          title: "Single Mode Porous Core Photonic Crystal Fiber for Terahertz Wave Propagation with Extremely Low Losses",
          journal: "Proceedings of 7th IEEE R10 Humanitarian Technology Conference (IEEE R10 HTC'2019), 12-14 November, Depok, Indonesia, 2019",
          type: "International"
        },
        {
          title: "Extremely low effective Material loss of air core photonic crystal fiber for THz guidance",
          journal: "Proceedings of IEEE region 10 symposium (TENSYMP), India, June, 2019. https://ieeexplore.ieee.org/document/8971297",
          type: "International"
        }
      ]
    },
    {
      id: 18,
      sl: 18,
      author: "Mr. Md. Abdullah Al Mahmud",
      designation: "Lecturer",
      papers: [
        {
          title: "Photonic Crystal Fiber based Terahertz Sensor for Alcohol Detection in Beverages: Design and Analysis",
          journal: "Proceedings of 3rd IEEE International Conference of Communication and Photonics (ICTP' 2019), 28-30 December, Dhaka, Bangladesh, 2019",
          type: "International"
        },
        {
          title: "Design and Characterization of a Low Loss Polarization Maintaining Photonic Crystal Fiber for THz Regime",
          journal: "Proceedings of 3rd IEEE International Conference of Communication and Photonics (ICTP' 2019), 28-30 December, Dhaka, Bangladesh, 2019",
          type: "International"
        },
        {
          title: "Single Mode Porous Core Photonic Crystal Fiber for Terahertz Wave Propagation with Extremely Low Losses",
          journal: "Proceedings of 7th IEEE R10 Humanitarian Technology Conference (IEEE R10 HTC'2019), 12-14 November, Depok, Indonesia, 2019",
          type: "International"
        },
        {
          title: "A Security System for Kindergarten School Using RFID Technology",
          journal: "Journal of Computer and Communications, 7(4)",
          type: "International"
        },
        {
          title: "Analysis of Empirical Mode Decomposition Method of Heart Rate Extraction from Motion Artifact Corrupted PPG Signal",
          journal: "American Journal of Signal Processing, Vol. 9 No. 1, 2019, pp. 6-10",
          type: "International"
        },
        {
          title: "A Machine Learning Approach for Heart Rate Estimation from PPG Signal using Random Forest Regression Algorithm",
          journal: "2019 International Conference on Electrical, Computer and Communication Engineering (ECCE), Cox's Bazar, Bangladesh, IEEE, 2019, pp. 1-5",
          type: "International"
        },
        {
          title: "Extraction of Heart Rate from PPG Signal: A Machine Learning Approach using Decision Tree Regression Algorithm",
          journal: "4th International Conference on Electrical Information and Communication Technology (EICT), 20-22 December 2019, Khulna, Bangladesh",
          type: "International"
        }
      ]
    },
    {
      id: 19,
      sl: 19,
      author: "Mr. Nahid Haque Shazon",
      designation: "Lecturer",
      papers: [
        {
          title: "Frequency Response and Its Improvement Using BESS in a Low Inertia Power System",
          journal: "Proceedings of TENCON 2019 - 2019 IEEE Region 10 Conference (TENCON), 17-20 Oct. 2019, Kochi, Kerala, India. DOI: 10.1109/TENCON.2019.8929239",
          type: "International"
        }
      ]
    }
  ];

  const publications2020 = [
    {
      author: "Dr. Tasnia Hossain",
      papers: [
        {
          title: "A systematic study on chemically deposited cadmium sulfide (CdS) thin film",
          journal: "Journal of Theoretical and Applied Physics",
          type: "International"
        }
      ]
    },
    {
      author: "Dr. Tapan Kumar Chakraborty",
      papers: [
        {
          title: "Different Cell Decomposition Path Planning Methods for Unmanned Air Vehicles-A Review",
          journal: "Springer Nature, LNEE, Vol.666",
          type: "International"
        },
        {
          title: "Generation of Eleven-Level Output Voltage from Cascaded Multilevel Inverter Consisting of Three H-Bridge Units Connected to Unequal dc Sources",
          journal: "IEEE 4th International Conference on Green Energy and Applications (ICGEA 2020), NTU, Singapore",
          type: "International"
        }
      ]
    },
    {
      author: "A.H.M Zadidul Karim",
      papers: [
        {
          title: "Determination of Green Spots (Trees) For Google Satellite Images Using MATLAB",
          journal: "Third International Conference on Computing and Network Communications (CoCoNet'19)",
          type: "International"
        },
        {
          title: "Identification of seizure from single channel EEG using Support Vector Machine & Hilbert Vibration",
          journal: "2020 IEEE Symposium on Industrial Electronics & Applications (ISIEA)",
          type: "International"
        },
        {
          title: "Heart Rate Extraction from Photoplethysmography Signal: A Multi Model Machine Learning Approach",
          journal: "2020 IEEE 2nd International Conference on Artificial Intelligence in Engineering and Technology (IICAIET)",
          type: "International"
        },
        {
          title: "Biomedical Image Processing: Spine Tumor Detection from MRI image using MATLAB",
          journal: "The Journal of Contents Computing, 2020, 2(2), 225-2235",
          type: "International"
        },
        {
          title: "Peak Detection and Tracking of PPG Signal: A Multi model approach using Empirical Mode Decomposition & Machine Learning",
          journal: "The Journal of Contents Computing, 2020, 2(2), 153-163",
          type: "International"
        },
        {
          title: "Seizure Detection and Classification using different Decomposition Methods and Robust statistical Analysis from EEG Signals",
          journal: "2020, IEEE, International Symposium on Advanced Electrical and Communication Technologies (ISAECT), Marrakech, Morocco",
          type: "International"
        },
        {
          title: "Analysis and Different Modifications of Empirical Mode Decomposition Method of Heart Rate Extraction from PPG Signal",
          journal: "American Journal of Biomedical Engineering 2020, 10(1): 9-15",
          type: "International"
        }
      ]
    },
    {
      author: "M. Abdullah Al-Amin",
      papers: [
        {
          title: "Identification of seizure from single channel EEG using Support Vector Machine and Hilbert Vibration Decomposition",
          journal: "2020 IEEE Symposium on Industrial Electronics and Applications (ISIEA)",
          type: "International"
        }
      ]
    },
    {
      author: "Md. Sazzadur Rahman",
      papers: [
        {
          title: "Numerical Simulation of CsSnI3-based Perovskite Solar Cells: Influence of doped-ITO Front Contact",
          journal: "IEEE Region 10 Annual International Conference, Proceedings/TENCON, 2020",
          type: "International"
        }
      ]
    },
    {
      author: "Muhammad Towhidur Rahman",
      papers: [
        {
          title: "Determination of Green Spots (Trees) For Google Satellite Images Using MATLAB",
          journal: "Third International Conference on Computing and Network Communications (CoCoNet'19)",
          type: "International"
        }
      ]
    },
    {
      author: "Masum Howlader",
      papers: [
        {
          title: "Approach for Grid Connected PV Management: Advance Solar Prediction and Enhancement of Voltage Stability Margin Using FACTS Device",
          journal: "Journal of Electronic Science and Technology",
          type: "International"
        }
      ]
    },
    {
      author: "Md. Moshiur Rahman",
      papers: [
        {
          title: "Hollow Core Photonic Crystal Fiber for Chemicals Sensing in Liquid Analytes: Design and Analysis",
          journal: "International Journal of Modern Physics B",
          type: "International"
        },
        {
          title: "Photonic crystal fiber based terahertz sensor for cholesterol detection in human blood and liquid foodstuffs",
          journal: "Sensing and Bio-Sensing Research",
          type: "International"
        },
        {
          title: "Development of a photonic crystal fiber for THz wave guidance and environmental pollutants detection",
          journal: "Sensing and Bio-Sensing Research",
          type: "International"
        },
        {
          title: "Design and characterization of a circular sectored core cladding structured photonic crystal fiber with ultra-low EML and flattened dispersion in the THz regime",
          journal: "Optical Fiber Technology",
          type: "International"
        },
        {
          title: "Highly Sensitive Hollow Core Photonic Crystal Fiber Based Methyl-Alcohol Detector for Liquid Analytes in THz Regime",
          journal: "IEEE region 10 symposium (TENSYMP), 2020",
          type: "International"
        }
      ]
    },
    {
      author: "Muhammad Ahad Rahman Miah",
      papers: [
        {
          title: "Techno-Economic Assessment of Net Energy Metering Implementation for Rooftop Solar PV in a Commercial Building in Bangladesh",
          journal: "4th International Conference on Green Energy and Applications (ICGEA 2020)",
          type: "International"
        }
      ]
    },
    {
      author: "Khandaker Sultan Mahmood",
      papers: [
        {
          title: "Technical investigation on V2G, S2V, and V2I for next generation smart city planning",
          journal: "Journal of Electronic Science and Technology",
          type: "International"
        }
      ]
    },
    {
      author: "Dr. Tishna Sabrina",
      papers: [
        {
          title: "Forecasting Solar Irradiance Using Machine Learning",
          journal: "Sustainable Technologies for Industry 4.0 (STI), 2020",
          type: "International"
        }
      ]
    },
    {
      author: "Shaikh Rashedur Rahman",
      papers: [
        {
          title: "Techno-Economic Assessment of Net Energy Metering Implementation for Rooftop Solar PV in a Commercial Building in Bangladesh",
          journal: "4th International Conference on Green Energy and Applications (ICGEA 2020)",
          type: "International"
        }
      ]
    },
    {
      author: "Farhana Akter Mou",
      papers: [
        {
          title: "Hollow Core Photonic Crystal Fiber for Chemicals Sensing in Liquid Analytes: Design and Analysis",
          journal: "International Journal of Modern Physics B",
          type: "International"
        },
        {
          title: "Photonic crystal fiber based terahertz sensor for cholesterol detection in human blood and liquid foodstuffs",
          journal: "Sensing and Bio-Sensing Research",
          type: "International"
        },
        {
          title: "Development of a photonic crystal fiber for THz wave guidance and environmental pollutants detection",
          journal: "Sensing and Bio-Sensing Research",
          type: "International"
        },
        {
          title: "Design and characterization of a circular sectored core cladding structured photonic crystal fiber with ultra-low EML and flattened dispersion in the THz regime",
          journal: "Optical Fiber Technology",
          type: "International"
        },
        {
          title: "Highly Sensitive Hollow Core Photonic Crystal Fiber Based Methyl-Alcohol Detector for Liquid Analytes in THz Regime",
          journal: "IEEE region 10 symposium (TENSYMP), 2020",
          type: "International"
        }
      ]
    }
  ];

  // 2021 Publications Data
  const publications2021 = [
    {
      id: 1,
      sl: 1,
      author: "Dr. Tasnia Hossain",
      papers: [
        {
          title: "Efficiency enhancement of CIGS solar cell by cubic silicon carbide as prospective buffer layer",
          journal: "Solar Energy (Scopus-indexed Q1 Journal, Impact Factor = 5.742)",
          type: "International"
        },
        {
          title: "Bilayer CZTS/Si absorber for obtaining highly efficient CZTS solar cell",
          journal: "Solar Energy (Scopus-indexed Q1 Journal, Impact Factor = 5.742)",
          type: "International"
        }
      ]
    },
    {
      id: 2,
      sl: 2,
      author: "Dr. Tapan Kumar Chakraborty",
      papers: [
        {
          title: "Harmonics Mitigation in Cascaded Multilevel Inverter Consisting of Four H-Bridge Units Connected to Unequal Dc Sources",
          journal: "IEEE 5th International Conference on Green Energy and Applications, NTU, Singapore",
          type: "International"
        }
      ]
    },
    {
      id: 3,
      sl: 3,
      author: "A.H.M Zadidul Karim",
      papers: [
        {
          title: "Image Compression using Huffman Coding Scheme with Partial/Piecewise Color Selection",
          journal: "IEEE 4th International Conference on Computing, Power and Communication Technologies (GUCON), Malaysia",
          type: "International"
        },
        {
          title: "Application of Chrominance Based rPPG in Estimation of Heart Rate from Video Signal",
          journal: "IEEE 24th International Conference on Computer and Information Technology (ICCIT)",
          type: "International"
        },
        {
          title: "Application of Feature based Face Detection in Adaptive Skin Pixel Identification Using Signal Processing Techniques",
          journal: "IEEE 24th International Conference on Computer and Information Technology (ICCIT)",
          type: "International"
        }
      ]
    },
    {
      id: 4,
      sl: 4,
      author: "Md. Sazzadur Rahman",
      papers: [
        {
          title: "Self-doped carrier as a performance limiting factor of perovskite solar cells: study on tandem-junction cells with SCAPS",
          journal: "Indonesian Journal of Electrical Engineering and Computer Science (Scopus-indexed Q3 Journal)",
          type: "International"
        },
        {
          title: "Bilayer CZTS/Si absorber for obtaining highly efficient CZTS solar cell",
          journal: "Solar Energy (Scopus-indexed Q1 Journal, Impact Factor = 5.742)",
          type: "International"
        }
      ]
    },
    {
      id: 5,
      sl: 5,
      author: "Muhammad Ahad Rahman Miah",
      papers: [
        {
          title: "Techno-Economic Analysis of Floating Solar PV Integrating with Hydropower Plant in Bangladesh",
          journal: "IEEE Green Technologies Conference, USA",
          type: "International"
        }
      ]
    },
    {
      id: 6,
      sl: 6,
      author: "Md. Moshiur Rahman",
      papers: [
        {
          title: "Design of a Topas-based ultrahigh-sensitive PCF biosensor for blood component detection",
          journal: "Applied Physics A (SCI, SCIE & Scopus-indexed Q2 Journal, Impact Factor: 2.58)",
          type: "International"
        }
      ]
    },
    {
      id: 7,
      sl: 7,
      author: "Shaikh Rashedur Rahman",
      papers: [
        {
          title: "Techno-Economic Analysis of Floating Solar PV Integrating with Hydropower Plant in Bangladesh",
          journal: "IEEE Green Technologies Conference, USA",
          type: "International"
        }
      ]
    },
    {
      id: 8,
      sl: 8,
      author: "Tanima Tasmin Chowdhury",
      papers: [
        {
          title: "Seizure activity classification based on bimodal Gaussian modeling of the gamma and theta band IMFs of EEG signals",
          journal: "Biomedical Signal Processing and Control (Q2 journal)",
          type: "International"
        }
      ]
    },
    {
      id: 9,
      sl: 9,
      author: "Mirza Mursalin Iqbal",
      papers: [
        {
          title: "Biomedical Image Processing Technique Using N Cut Theorem",
          journal: "International Journal of Bioinformatics and Biomedical Engineering",
          type: "International"
        }
      ]
    },
    {
      id: 10,
      sl: 10,
      author: "Farhana Akter Mou",
      papers: [
        {
          title: "Design of a Topas-based ultrahigh-sensitive PCF biosensor for blood component detection",
          journal: "Applied Physics A (SCI, SCIE & Scopus-indexed Q2 Journal, Impact Factor: 2.58)",
          type: "International"
        }
      ]
    },
    {
      id: 11,
      sl: 11,
      author: "Md Abdullah Al-Mahmud",
      papers: [
        {
          title: "Image Compression using Huffman Coding Scheme with Partial/Piecewise Color Selection",
          journal: "IEEE 4th International Conference on Computing, Power and Communication Technologies (GUCON), Malaysia",
          type: "International"
        }
      ]
    },
    {
      id: 12,
      sl: 12,
      author: "Sakhawat Hossen Rakib",
      papers: [
        {
          title: "Design and Development of a low cost Ultraviolet Disinfection system to reduce the cross infection of SARS-CoV-2 in ambulances",
          journal: "Electronics, Communications and Information Technology (ICECIT), IEEE",
          type: "International"
        }
      ]
    },
    {
      id: 13,
      sl: 13,
      author: "Kazi Mahtab Kadir",
      papers: [
        {
          title: "An analytical approach to real-time cloud services on IoT-based applications for smart city planning",
          journal: "International Journal of Grid and Utility Computing",
          type: "International"
        },
        {
          title: "Analysis of Different Mobile IoT Models in Smart City Planning: A Technical Investigation of Software & Hardware Architecture",
          journal: "IEEE 12th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON)",
          type: "International"
        }
      ]
    }
  ];

  // 2022 Publications Data
  const publications2022 = [
    {
      id: 1,
      sl: 1,
      author: "Dr. Tapan Kumar Chakraborty",
      papers: [
        {
          title: "Harmonics Mitigation in Cascaded Multilevel Inverter Consisting of Four H-Bridge Units Connected to Unequal Dc Sources",
          journal: "IEEE 5th International Conference on Green Energy and Applications, NTU, Singapore, March 6-8, 2021",
          type: "International"
        }
      ]
    },
    {
      id: 2,
      sl: 2,
      author: "A.H.M Zadidul Karim",
      papers: [
        {
          title: "Classification of Electrocardiogram Using Color Images with Pixel Method by Deep CNN",
          journal: "Springer 3rd International Conference on Artificial Intelligence: Advances and Applications, India, April 23-24. 2022",
          type: "International"
        },
        {
          title: "Effect of Number of Modes of EMD in Respiratory Rate Estimation from PPG Signal",
          journal: "IEEE 2022 International Conference on Advancement in Electrical and Electronic Engineering (ICAEEE), 24-26 February 2022",
          type: "International"
        }
      ]
    },
    {
      id: 3,
      sl: 3,
      author: "Salma Nazia Rahman",
      papers: [
        {
          title: "Performance analysis and simulation design of a soft switching Cuk DC/DC converter with controllers",
          journal: "IEEE 2nd International Maghreb Meeting of the Conference on Sciences and Techniques of Automatic Control and Computer Engineering (MI-STA), 2022, May 23-25",
          type: "International"
        }
      ]
    },
    {
      id: 4,
      sl: 4,
      author: "Md. Moshiur Rahman",
      papers: [
        {
          title: "Design and characterization of a photonic crystal fiber for improved THz wave propagation and analytes sensing",
          journal: "Opt Quant Electron, 54, 669 (2022). [Scopus Indexed, Impact factor: 2.794]",
          type: "International"
        },
        {
          title: "Refractometric THz Sensing of Blood Components in a Photonic Crystal Fiber Platform",
          journal: "Braz J Phys, 52, 47 (2022). [Scopus Indexed, Impact factor: 1.364]",
          type: "International"
        },
        {
          title: "Design and numerical analysis of a porous core photonic crystal fiber for refractometric THz sensing",
          journal: "Microsyst Technol 29, 115–126 (2022) [Scopus Indexed, Impact factor: 2.012]",
          type: "International"
        }
      ]
    },
    {
      id: 5,
      sl: 5,
      author: "Farhana Akter Mou",
      papers: [
        {
          title: "Square Photonic Crystal Fiber Sensor for Detecting Toxic Chemical in Liquid Foodstuffs Preserved in Plastic Bottles",
          journal: "12th International Conference on Electrical and Computer Engineering (ICECE 2022), December 21-23, 2022",
          type: "International"
        },
        {
          title: "Design and characterization of a photonic crystal fiber for improved THz wave propagation and analytes sensing",
          journal: "Opt Quant Electron, 54, 669 (2022). [Scopus Indexed, Impact factor: 2.794]",
          type: "International"
        },
        {
          title: "Refractometric THz Sensing of Blood Components in a Photonic Crystal Fiber Platform",
          journal: "Braz J Phys, 52, 47 (2022). [Scopus Indexed, Impact factor: 1.364]",
          type: "International"
        },
        {
          title: "Design and numerical analysis of a porous core photonic crystal fiber for refractometric THz sensing",
          journal: "Microsyst Technol 29, 115–126 (2022) [Scopus Indexed, Impact factor: 2.012]",
          type: "International"
        }
      ]
    },
    {
      id: 6,
      sl: 6,
      author: "Shaikh Rashedur Rahman",
      papers: [
        {
          title: "Sustainable Building Energy Conservation and Efficiency Management Using IOT",
          journal: "International Conference on Electronics and Renewable Systems (ICEARS 2022), March 16-18, 2022, Tuticorin, India",
          type: "International"
        }
      ]
    },
    {
      id: 7,
      sl: 7,
      author: "Muhammad Ahad Rahman Miah",
      papers: [
        {
          title: "Sustainable Building Energy Conservation and Efficiency Management Using IOT",
          journal: "International Conference on Electronics and Renewable Systems (ICEARS 2022), March 16-18, 2022, Tuticorin, India",
          type: "International"
        }
      ]
    },
    {
      id: 8,
      sl: 8,
      author: "Mr. Sakhawat Hossen Rakib",
      papers: [
        {
          title: "Design of a low cost Ultraviolet Disinfection unit to minimize the cross-contamination of COVID-19 in transport",
          journal: "International Conference on Advancement in Electrical and Electronic Engineering (ICAEEE) 24-26 Feb. 2022",
          type: "International"
        }
      ]
    }
  ]

  // 2023 Publications Data
  const publications2023 = [
    {
      id: 1,
      sl: 1,
      author: "Dr. G. R. Ahmed Jamal",
      papers: [
        {
          title: "Empirical Model for Optical Transitions in Inner Semiconducting Tubes of Double Wall Carbon Nanotubes",
          journal: "AIP Advances, Vol. 13, Issue 6, 065015 2023",
          type: "International"
        },
        {
          title: "Empirical model for bandgaps of armchair graphene nanoribbons",
          journal: "AIP Advances, Vol. 13, Issue 10, 105024 2023",
          type: "International"
        }
      ]
    },
    {
      id: 2,
      sl: 2,
      author: "Dr. Tapan Kumar Chakraborty, Professor",
      papers: [
        {
          title: "A New Control Strategy for Multilevel Inverter to Reduce THD",
          journal: "IEEE proceedings of 2023 13th International Conference on Power, Energy and Electrical Engineering, Tokyo, Japan February 25-27, 2023, pp. 166-169, IEEE Xplore, 10.1109/CPEEE56777.2023.10217747",
          type: "International"
        },
        {
          title: "A Comparative Study Between Two Switching Angle Techniques for Cascaded H-Bridge Multilevel Inverter",
          journal: "IEEE proceedings of 2023 International Conference on Power and Renewable Energy Engineering (PREE 2023) Tokyo, Japan, October 20-22, 2023, pp.162-167, IEEE Xplore, 10.1109/PREE57903.2023.10370268",
          type: "International"
        }
      ]
    },
    {
      id: 3,
      sl: 3,
      author: "A. H. M. Zadidul Karim",
      papers: [
        {
          title: "Classification of Electrocardiogram Using Color Images with Pixel Method by Deep CNN",
          journal: "Proceedings of 3rd International Conference on Artificial Intelligence: Advances and Applications, Springer, Vol. 3, pp., 289-301, April, 2023. 10.1007/978-981-19-7041-2_22",
          type: "International"
        }
      ]
    },
    {
      id: 4,
      sl: 4,
      author: "Dr. Md. Moshiur Rahman",
      papers: [
        {
          title: "Refractometric Sensing of Protein in Urine by Photonic Crystal Fiber Biosensor in THz Regime",
          journal: "International Journal of Optics, 6652333, pp. 1-12, 2023",
          type: "International"
        },
        {
          title: "Design and numerical analysis of a porous core photonic crystal fiber for refractometric THz sensing",
          journal: "Microsystem Technologies, Vol-29, pp-115-126, 2023",
          type: "International"
        },
        {
          title: "Refractometric Sensing of Waterborne Pathogens by Photonic Crystal Fiber Sensor in THz Platform",
          journal: "IEEE International Conference of Communication and Photonics (ICTP'2023), Dhaka, Bangladesh. 2023",
          type: "International"
        },
        {
          title: "Fabrication Feasible Photonic Crystal Fiber for Improved THz Wave Guidance",
          journal: "IEEE International Conference of Communication and Photonics (ICTP'2023), Dhaka, Bangladesh. 2023",
          type: "International"
        }
      ]
    },
    {
      id: 5,
      sl: 5,
      author: "Dr. Tasnia Hossain",
      papers: [
        {
          title: "Modeling and performance study of CZTS solar cell with novel cupric oxide (CuO) as a bilayer absorber",
          journal: "Memories - Materials, Devices, Circuits and Systems, Volume 5, October 2023, 100083",
          type: "International"
        }
      ]
    },
    {
      id: 6,
      sl: 6,
      author: "Muhammad Ahad Rahman Miah",
      papers: [
        {
          title: "Techno-economic assessment of solar photovoltaic (PV) waste management in Bangladesh",
          journal: "6th International Conference on Clean Energy and Technology, June 7-8, 2023, Bayview Hotel Penang, Malaysia",
          type: "International"
        },
        {
          title: "Energy Savings Forecast for Solid-State Lighting in Residential and Commercial Buildings in Bangladesh",
          journal: "2023 IEEE PES 15th Asia-Pacific Power and Energy Engineering Conference, December",
          type: "International"
        },
        {
          title: "Selection of the sustainable lightning protection technology for Solar PV system",
          journal: "2023 IEEE PES 15th Asia-Pacific Power and Energy Engineering Conference, December",
          type: "International"
        }
      ]
    },
    {
      id: 7,
      sl: 7,
      author: "Shaikh Rashedur Rahman",
      papers: [
        {
          title: "Techno-economic assessment of solar photovoltaic (PV) waste management in Bangladesh",
          journal: "6th International Conference on Clean Energy and Technology, June 7-8, 2023, Bayview Hotel Penang, Malaysia",
          type: "International"
        },
        {
          title: "Enhancement of Transient Stability for Coherent Generators in Multi-Machine Power Systems Using Static Var Compensator",
          journal: "10th IEEE International Conference on Power Systems (ICPS), 13-15 December, Cox's Bazar, Bangladesh",
          type: "International"
        }
      ]
    },
    {
      id: 8,
      sl: 8,
      author: "Farhana Akter Mou",
      papers: [
        {
          title: "Refractometric Sensing of Protein in Urine by Photonic Crystal Fiber Biosensor in THz Regime",
          journal: "International Journal of Optics, 6652333, pp. 1-12, 2023",
          type: "International"
        },
        {
          title: "Design and numerical analysis of a porous core photonic crystal fiber for refractometric THz sensing",
          journal: "Microsystem Technologies, Vol-29, pp-115-126, 2023",
          type: "International"
        },
        {
          title: "Refractometric Sensing of Waterborne Pathogens by Photonic Crystal Fiber Sensor in THz Platform",
          journal: "IEEE International Conference of Communication and Photonics (ICTP'2023), Dhaka, Bangladesh. 2023",
          type: "International"
        },
        {
          title: "Fabrication Feasible Photonic Crystal Fiber for Improved THz Wave Guidance",
          journal: "IEEE International Conference of Communication and Photonics (ICTP'2023), Dhaka, Bangladesh. 2023",
          type: "International"
        }
      ]
    },
    {
      id: 9,
      sl: 9,
      author: "Md. Masum Howlader",
      papers: [
        {
          title: "Integration of cloud computing: a new transition for Bangladesh power grid empowerment from reliability to grid resiliency",
          journal: "Energy Systems, 9 November, 2023, Springer Journal, Berlin Heidelberg",
          type: "International"
        },
        {
          title: "Design and Business Modelling of an IoT Based Cost-Efficient Solar Data Logger with Cellular Monitoring Interface for Decentralized Renewables",
          journal: "2023 International Conference on Electrical, Computer and Energy Technologies (ICECET), South Africa",
          type: "International"
        },
        {
          title: "Holistic Methodology for Analyzing Power System Contingencies of 33KV Network for Grid Reliability Assessment: A Comprehensive Study",
          journal: "2023 7th International Symposium on Innovative Approaches in Smart Technologies (ISAS), Turkey",
          type: "International"
        }
      ]
    },
    {
      id: 10,
      sl: 10,
      author: "Md. Khairul Alam",
      papers: [
        {
          title: "Integration of cloud computing: a new transition for Bangladesh power grid empowerment from reliability to grid resiliency",
          journal: "Energy Systems, 9 November, 2023, Springer Journal",
          type: "International"
        },
        {
          title: "Design and Business Modelling of an IoT Based Cost-Efficient Solar Data Logger with Cellular Monitoring Interface for Decentralized Renewables",
          journal: "2023 International Conference on Electrical, Computer and Energy Technologies (ICECET), South Africa",
          type: "International"
        }
      ]
    },
    {
      id: 11,
      sl: 11,
      author: "Kazi Mahtab Kadir",
      papers: [
        {
          title: "Integration of Cloud Computing: A New Transition for Bangladesh Power Grid",
          journal: "Energy Systems, 9 November, 2023",
          type: "International"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Publications</h1>
          <p className="text-center text-xl text-blue-100">
            Research Publications from the Department of Electrical and Electronic Engineering
          </p>
        </div>
      </div>

      {/* Publications Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Year 2023 Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="h-1 bg-blue-600 flex-grow"></div>
              <h2 className="text-3xl font-bold text-gray-800 mx-6">2023 Publications</h2>
              <div className="h-1 bg-blue-600 flex-grow"></div>
            </div>
            
            <div className="space-y-8">
              {publications2023.map((author) => (
                <div key={author.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                          SL# {author.sl}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {author.author}
                        </h3>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
                        {author.papers.length} Publication{author.papers.length > 1 ? 's' : ''}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      {author.papers.map((paper, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                          <h4 className="text-lg font-medium text-gray-900 mb-2 leading-relaxed">
                            {paper.title}
                          </h4>
                          <p className="text-gray-700 mb-2 text-sm leading-relaxed">
                            <strong>Published in:</strong> {paper.journal}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                              {paper.type}
                            </span>
                            <span className="text-xs text-gray-500">
                              Year: 2023
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Year 2022 Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="h-1 bg-purple-600 flex-grow"></div>
              <h2 className="text-3xl font-bold text-gray-800 mx-6">2022 Publications</h2>
              <div className="h-1 bg-purple-600 flex-grow"></div>
            </div>
            
            <div className="space-y-8">
              {publications2022.map((author) => (
                <div key={author.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="inline-block bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                          SL# {author.sl}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {author.author}
                        </h3>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
                        {author.papers.length} Publication{author.papers.length > 1 ? 's' : ''}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      {author.papers.map((paper, index) => (
                        <div key={index} className="border-l-4 border-purple-500 pl-4 py-2">
                          <h4 className="text-lg font-medium text-gray-900 mb-2 leading-relaxed">
                            {paper.title}
                          </h4>
                          <p className="text-gray-700 mb-2 text-sm leading-relaxed">
                            <strong>Published in:</strong> {paper.journal}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                              {paper.type}
                            </span>
                            <span className="text-xs text-gray-500">
                              Year: 2022
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

           {/* Year 2021 Section */}
           <div className="mb-16">
             <div className="flex items-center mb-8">
               <div className="h-1 bg-green-600 flex-grow"></div>
               <h2 className="text-3xl font-bold text-gray-800 mx-6">2021 Publications</h2>
               <div className="h-1 bg-green-600 flex-grow"></div>
             </div>
            
            <div className="space-y-8">
              {publications2021.map((author) => (
                <div key={author.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                          SL# {author.sl}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {author.author}
                        </h3>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
                        {author.papers.length} Publication{author.papers.length > 1 ? 's' : ''}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      {author.papers.map((paper, index) => (
                        <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                          <h4 className="text-lg font-medium text-gray-900 mb-2 leading-relaxed">
                            {paper.title}
                          </h4>
                          <p className="text-gray-700 mb-2 text-sm leading-relaxed">
                            <strong>Published in:</strong> {paper.journal}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                              {paper.type}
                            </span>
                            <span className="text-xs text-gray-500">
                              Year: 2021
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Year 2020 Section */}
           <div className="mb-16">
             <div className="flex items-center mb-8">
               <div className="h-1 bg-orange-600 flex-grow"></div>
               <h2 className="text-3xl font-bold text-gray-800 mx-6">2020 Publications</h2>
               <div className="h-1 bg-orange-600 flex-grow"></div>
             </div>
             
             <div className="space-y-8">
               {publications2020.map((author, index) => (
                 <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                   <div className="p-6">
                     <div className="flex items-start justify-between mb-4">
                       <div>
                         <span className="inline-block bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                           SL# {index + 1}
                         </span>
                         <h3 className="text-xl font-semibold text-gray-900">
                           {author.author}
                         </h3>
                       </div>
                       <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
                         {author.papers.length} Publication{author.papers.length > 1 ? 's' : ''}
                       </span>
                     </div>
                     
                     <div className="space-y-4">
                       {author.papers.map((paper, paperIndex) => (
                         <div key={paperIndex} className="border-l-4 border-orange-500 pl-4 py-2">
                           <h4 className="text-lg font-medium text-gray-900 mb-2 leading-relaxed">
                             {paper.title}
                           </h4>
                           <p className="text-gray-700 mb-2 text-sm leading-relaxed">
                             <strong>Published in:</strong> {paper.journal}
                           </p>
                           <div className="flex items-center gap-2">
                             <span className="inline-block bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded">
                               {paper.type}
                             </span>
                             <span className="text-xs text-gray-500">
                               Year: 2020
                             </span>
                           </div>
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>

          {/* Year 2019 Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="h-1 bg-red-600 flex-grow"></div>
              <h2 className="text-3xl font-bold text-gray-800 mx-6">2019 Publications</h2>
              <div className="h-1 bg-red-600 flex-grow"></div>
            </div>
            
            <div className="space-y-8">
              {publications2019.map((author) => (
                <div key={author.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                          SL# {author.sl}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {author.author}
                        </h3>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
                        {author.papers.length} Publication{author.papers.length > 1 ? 's' : ''}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      {author.papers.map((paper, index) => (
                        <div key={index} className="border-l-4 border-red-500 pl-4 py-2">
                          <h4 className="text-lg font-medium text-gray-900 mb-2 leading-relaxed">
                            {paper.title}
                          </h4>
                          <p className="text-gray-700 mb-2 text-sm leading-relaxed">
                            <strong>Published in:</strong> {paper.journal}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="inline-block bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                              {paper.type}
                            </span>
                            <span className="text-xs text-gray-500">
                              Year: 2019
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Publication Statistics (2019-2023)</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {publications2023.reduce((total, author) => total + author.papers.length, 0) + publications2022.reduce((total, author) => total + author.papers.length, 0) + publications2021.reduce((total, author) => total + author.papers.length, 0) + publications2020.reduce((total, author) => total + author.papers.length, 0) + publications2019.reduce((total, author) => total + author.papers.length, 0)}
                </div>
                <div className="text-gray-700 font-medium">Total Publications</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {new Set([...publications2023.map(a => a.author), ...publications2022.map(a => a.author), ...publications2021.map(a => a.author), ...publications2020.map(a => a.author), ...publications2019.map(a => a.author)]).size}
                </div>
                <div className="text-gray-700 font-medium">Contributing Authors</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {publications2023.reduce((total, author) => total + author.papers.length, 0) + publications2022.reduce((total, author) => total + author.papers.length, 0) + publications2021.reduce((total, author) => total + author.papers.length, 0) + publications2020.reduce((total, author) => total + author.papers.length, 0) + publications2019.reduce((total, author) => total + author.papers.length, 0)}
                </div>
                <div className="text-gray-700 font-medium">International Publications</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg">
                <div className="text-3xl font-bold text-yellow-600 mb-2">5</div>
                <div className="text-gray-700 font-medium">Years Covered</div>
              </div>
            </div>
            
            {/* Year-wise breakdown */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-2 border-blue-200">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {publications2023.reduce((total, author) => total + author.papers.length, 0)}
                </div>
                <div className="text-gray-700 font-medium">2023 Publications</div>
                <div className="text-sm text-gray-500 mt-1">{publications2023.length} Authors</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border-2 border-purple-200">
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  {publications2022.reduce((total, author) => total + author.papers.length, 0)}
                </div>
                <div className="text-gray-700 font-medium">2022 Publications</div>
                <div className="text-sm text-gray-500 mt-1">{publications2022.length} Authors</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-2 border-green-200">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {publications2021.reduce((total, author) => total + author.papers.length, 0)}
                </div>
                <div className="text-gray-700 font-medium">2021 Publications</div>
                <div className="text-sm text-gray-500 mt-1">{publications2021.length} Authors</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border-2 border-orange-200">
                <div className="text-2xl font-bold text-orange-600 mb-2">
                  {publications2020.reduce((total, author) => total + author.papers.length, 0)}
                </div>
                <div className="text-gray-700 font-medium">2020 Publications</div>
                <div className="text-sm text-gray-500 mt-1">{publications2020.length} Authors</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border-2 border-red-200">
                <div className="text-2xl font-bold text-red-600 mb-2">
                  {publications2019.reduce((total, author) => total + author.papers.length, 0)}
                </div>
                <div className="text-gray-700 font-medium">2019 Publications</div>
                <div className="text-sm text-gray-500 mt-1">{publications2019.length} Authors</div>
              </div>
            </div>
          </div>

          {/* Research Areas Highlight */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Key Research Areas (2019-2023)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 font-semibold">Renewable Energy</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-green-600 font-semibold">Solar Cell Technology</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-purple-600 font-semibold">Power Electronics</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-orange-600 font-semibold">Machine Learning</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-red-600 font-semibold">Signal Processing</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-indigo-600 font-semibold">Image Processing & Compression</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-pink-600 font-semibold">Photonic Crystal Fiber</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-teal-600 font-semibold">Biosensor Technology</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-cyan-600 font-semibold">Biomedical Engineering</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-amber-600 font-semibold">THz Technology</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-lime-600 font-semibold">Smart Grid Technology</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-violet-600 font-semibold">Multilevel Inverters</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}