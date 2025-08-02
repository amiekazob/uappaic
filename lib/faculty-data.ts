export interface AcademicProfile {
  platform: 'Google Scholar' | 'AcademicGate' | 'ORCID' | 'Academia.edu' | 'LinkedIn' | 'IEEE Xplore';
  url: string;
  profileId?: string;
}

export type FacultyMember = {
  id: string;
  name: string;
  title: string;
  role:
    | "HOD"
    | "Professor"
    | "Associate Professor"
    | "Assistant Professor"
    | "Lecturer"
    | "On Leave";
  image: string;
  bio: string;
  email: string;
  phone: string;
  room?: string | number;
  education: {
    degree: string;
    institution: string;
    year?: string;
  }[];
  academicInterests: string[];

  academicExperience?: {
    position: string;
    institute: string;
    period: string;
    description?: string;
  }[];

  professionalMemberships?: string[];

  recentPublications?: {
    type: "Journal" | "Conference";
    title: string;
    authors: string;
    venue: string;
    year: number;
    impactFactor?: number;
    doi?: string;
    url?: string;
  }[];

  administrativeRoles?: {
    title: string;
    organization: string;
    period: string;
    description?: string;
  }[];

  academicProfiles?: AcademicProfile[];
};

export const facultyMembers: FacultyMember[] = [
  // Head of Department
  {
    id: "mr-a-h-m-zadidul-karim",
    name: "Mr. A.H.M. Zadidul Karim",
    title: "Head of the Department & Associate Professor",
    role: "HOD",
    image: "/images/faculties/mr-a-h-m-zadidul-karim.jpg",
    bio: `Mr. A.H.M. Zadidul Karim is an accomplished academic currently serving as the Associate Professor and Head of the Department of Electrical and Electronic Engineering. He holds an M.Sc. in EEE from Bangladesh University of Engineering and Technology (BUET), earned in 2010, and a B.Sc. in EEE from Ahsanullah University of Science and Technology (AUST), completed in 2004. He is currently pursuing his Ph.D. in Electrical and Electronic Engineering at BUET.

With a specialization in Biomedical Signal and Image Processing, Mr. Karim is actively engaged in academic work and academic development in this emerging field. His leadership and extensive experience make him a key figure in shaping the academic and innovation direction of the department.`,
    email: "headeee@uap-bd.edu",
    phone: "",
    room: 601,
    education: [
      {
        degree: "Ph.D. (EEE)",
        institution: "BUET",
        year: "Ongoing"
      },
      {
        degree: "M.Sc. (EEE)",
        institution: "BUET",
        year: "2010"
      },
      {
        degree: "B.Sc. (EEE)",
        institution: "AUST",
        year: "2004"
      }
    ],
    academicInterests: [
      "Biomedical signal and image processing"

    ],
    academicExperience: [
      {
        position: "Head of Department & Professor",
        institute: "University of Asia Pacific",
        period: "[Year] - Present",
        description: "Leading the EEE department with focus on academic excellence and technological innovation"
      },
      {
        position: "Professor",
        institute: "University of Asia Pacific",
        period: "[Year] - [Year]",
        description: "Teaching and academic work in electrical engineering"
      }
    ],
    professionalMemberships: [
       "Publication Co-Chair of IEEE-EMBS, 2015, Dhaka, Bangladesh",
       "Member, Planning Committee, International Student-LED conference, IEEE, 2022",
       "Member Planning Committee International Symposium on Social Implications of Sustainable Technology 2022, (SympSIST-2022), IEEE",
       "Member Planning Committee ProCon 2022, IEEE Conference",
       "Member Planning Committee YPCON 2022, IEEE Conference"
     ],
    recentPublications: [
      {
        type: "Journal",
        title: "COVID-19, Pneumonia, and Healthy Lungs Classification Using CNN and Transfer Learning Model Using Chest X-Ray",
        authors: "Rafatul Alam Fahima A.H.M. Zadidul Karim, Tanima Tasmin Chowdhury, Kazi Bil Oual Mahmud*, Fahmida Khanam, Khondaker Md. Abdur Rahman",
        venue: "Scientific & Academic Publishing, American Journal of Biomedical Engineering, Vol. 12, pp. 1-6, USA",
        year: 2024
      },
      {
        type: "Conference",
        title: "Classification of Electrocardiogram Using Color Images with Pixel Method by Deep CNN",
        authors: "A. H. M. Zadidul Karim, Md. Badeuzzamal Sarker, Md. Rafiqul Alam Rejon, Md. Saimun Islam, Md. Rafatul Alam Fahima",
        venue: "Proceedings of 3rd International Conference on Artificial Intelligence: Advances and Applications, Vol.3, pp 289-301, Springer",
        year: 2023
      },
      {
        type: "Conference",
        title: "Effect of Number of Modes of EMD in Respiratory Rate Estimation from PPG Signal",
        authors: "AHM Zadidul Karim, Md Sazal Miah, GR Ahmed Jamal, Rafatul Alam Fahima, Rashik Rahman",
        venue: "2022 International Conference on Advancement in Electrical and Electronic Engineering (ICAEEE), pp. 1-6, IEEE",
        year: 2022
      },
      {
        type: "Conference",
        title: "Application of Chrominance Based rPPG in Estimation of Heart Rate from Video Signal",
        authors: "A.H.M. Zadidul Karim; Md. Sazal Miah; G. R. Ahmed Jamal; Rafatul Alam Fahima; Muhammad Towhidur Rahman",
        venue: "2021 24th International Conference on Computer and Information Technology (ICCIT), pp. 1-6, IEEE",
        year: 2021
      },
      {
        type: "Conference",
        title: "Application of Feature based Face Detection in Adaptive Skin Pixel Identification Using Signal Processing Techniques",
        authors: "AHM Zadidul Karim, Md Sazal Miah, GR Ahmed Jamal, Nusrat Jahan, Rafatul Alam Fahima, Muhammad Towhidur Rahman",
        venue: "2021 24th International Conference on Computer and Information Technology (ICCIT), pp. 1-5, IEEE",
        year: 2021
      },
      {
        type: "Conference",
        title: "Image Compression using Huffman Coding Scheme with Partial/Piecewise Color Selection",
        authors: "AHM Zadidul Karim, Md Sazal Miah, GR Ahmed Jamal, Nusrat Jahan, Rafatul Alam Fahima, Muhammad Towhidur Rahman",
        venue: "2021 IEEE 4th International Conference on computing and Communication Technologies (GUCON), pp. 1-6, IEEE",
        year: 2021
      },
      {
        type: "Journal",
        title: "Peak Detection and Tracking of PPG Signal: A Multi model approach using Empirical Mode Decomposition & Machine Learning",
        authors: "AHM Zadidul Karim, Md Abdullah Al Mahmud, Md Sazal Miah, Shikder Shafiul Bashar, Seungmin Oh, Jinsul Kim, Maliha Marium",
        venue: "The Journal of Contents Computing, Vol-2, pp. 153-163",
        year: 2020
      },
      {
        type: "Journal",
        title: "Biomedical Image Processing: Spine Tumor Detection from MRI image using MATLAB",
        authors: "Md Abdullah Al Mahmud, AHM Zadidul Karim, Md Sazal Miah, Yeonggwang Kim, Jinsul Kim, Shikder Shafiul Bashar",
        venue: "The Journal of Contents Computing, Vol-2, pp. 225-235",
        year: 2020
      },
      {
        type: "Conference",
        title: "Seizure Detection and Classification using different Decomposition Methods and Robust statistical Analysis from EEG Signals",
        authors: "Sumona S Islam, Md Sazal Miah, AHM Zadidul Karim, Shikder Shafiul Bashar",
        venue: "2020 International Symposium on Advanced Electrical and Communication Technologies (ISAECT), IEEE, pp. 1-6, Marrakech, Morocco",
        year: 2020
      },
      {
        type: "Conference",
        title: "Heart Rate Extraction from Photoplethysmography Signal: A Multi Model Machine Learning Approach",
        authors: "Md Sazal Miah, Shikder Shafiul Bashar, AHM Zadidul Karim, Zahid Hasan",
        venue: "2020 IEEE 2nd International Conference on Artificial Intelligence in Engineering and Technology (IICAIET), pp. 1-6, Kota Kinabalu, Malaysia",
        year: 2020
      },
      {
        type: "Conference",
        title: "Identification of seizure from single channel EEG using support vector machine & Hilbert vibration decomposition",
        authors: "AHM Zadidul Karim, Shikder Shafiul Bashar, Md Sazal Miah, Md Abdullah Al Mahmud, M Abdullah Al Amin",
        venue: "2020 IEEE Symposium on Industrial Electronics & Applications (ISIEA), pp. 1-6, TBD, Malaysia",
        year: 2020
      },
      {
        type: "Journal",
        title: "Determination of Green Spots (Trees) For Google Satellite Images Using MATLAB",
        authors: "Urmi Sultana, Mashrun Hoque, Popy Akter, Maruful Islam, Md Abdullah Al Mahmud, Muhammad Towhidur Rahman, AHM Zadidul Karim",
        venue: "Procedia Computer Science, Vol:171, pp: 1634-1641. Elsevier",
        year: 2020
      },
      {
        type: "Journal",
        title: "Analysis and Different Modifications of Empirical Mode Decomposition Method of Heart Rate Extraction from PPG Signal",
        authors: "AHM Zadidul Karim, Tabassum Hasnat Reshmi, Sabrina Sultana, Md Rakibul Islam, Shikder Shafiul Bashar, Md Abdullah Al Mahmud",
        venue: "American Journal of Biomedical Engineering, Vol: 10, pp. 9-15",
        year: 2020
      },
      {
         type: "Conference",
         title: "Extraction of heart rate from PPG Signal: a machine learning approach using decision tree regression algorithm",
         authors: "Shikder Shafiul Bashar, Md Sazal Miah, AHM Zadidul Karim, Md Abdullah Al Mahmud",
         venue: "2019 4th International Conference on Electrical Information and Communication Technology (EICT), IEEE, pp. 1-6",
         year: 2019
       },
       {
         type: "Journal",
         title: "Energy harvesting—technical analysis of evolution, control strategies, and future aspects",
         authors: "MD Shahrukh Adnan Khan, Md Tanbhir Hoq, AHM Zadidul Karim, Md Khairul Alam, Masum Howlader, Rajprasad Kumar Rajkumar",
         venue: "Journal of Electronic Science and Technology, Elsevier, Vol: 27(2) pp. 116-125",
         year: 2019
       },
       {
         type: "Journal",
         title: "A security system for kindergarten school using RFID technology",
         authors: "Salma Nazia Rahman, Shikder Shafiul Bashar, Md Abdullah Al Mahmud, Md Sazal Miah, AHM Zadidul Karim, Maliha Marium",
         venue: "Journal of Computer and Communications, Scientific Innovation Publishing, Vol: 7(4) pp. 21",
         year: 2019
       },
       {
         type: "Conference",
         title: "A machine learning approach for heart rate estimation from PPG signal using random forest regression algorithm",
         authors: "Shikder Shafiul Bashar, Md Sazal Miah, AHM Zadidul Karim, Md Abdullah Al Mahmud, Zahid Hasan",
         venue: "2019 International Conference on Electrical, Computer and Communication Engineering (ECCE), IEEE pp. 1-5",
         year: 2019
       },
       {
         type: "Journal",
         title: "Analysis of Empirical Mode Decomposition Method of Heart Rate Extraction from Motion Artifact Corrupted PPG Signal",
         authors: "Maliha Marium, A. H. M. Zadidul Karim, Muhammad Towhidur Rahman, Md. Abdullah Al Mahmud, Shikder Shafiul Bashar, Md. Sazal Miah",
         venue: "American Journal of Signal Processing, Scientific & Academic Publishing, Vol: 9(1) pp. 6-10",
         year: 2019
       },
       {
         type: "Journal",
         title: "Chemically converted graphene as a hole transport layer (HTL) inorganic photovoltaics (OPVS)",
         authors: "Farjana Haque, Md Moshiur Rahman, Md Abdullah Al Mahmud, M Subbir Reza, Munmun Akter, AHM Zadidul Karim",
         venue: "Engineering International, Vol: 6(1) pp. 7-20",
         year: 2018
       },
       {
         type: "Conference",
         title: "Respiration monitoring by using ECG",
         authors: "Muhammad Towhidur Rahman, Muhammad Abdul Kadir, AHM Zadidul Karim, Md Abdullah Al Mahmud",
         venue: "2017 20th International Conference of Computer and Information Technology (ICCIT), IEEE, pp. 1-5",
         year: 2017
       },
       {
         type: "Conference",
         title: "Navigation System Using GPS and GSM for Visually Impaired Personals with Nerve Stimulation Feedback",
         authors: "Sakhawat Hossen Rakib, Atika Farhana, A.H.M. Zadidul Karim, Galib Hashmi",
         venue: "international conference on Mechanical Engineering and Applied Science (ICMEAS), Bangladesh",
         year: 2017
       },
       {
         type: "Conference",
         title: "Bimodal Gaussian PDF of the Dominant IMFs of EEG Signals for Seizure Activity Classification",
         authors: "Tanima Tasmin Chowdhury, AHM Zadidul Karim, Shaikh Anowarul Fattah, Celia Shahnaz",
         venue: "2017 IEEE International WIE Conference on Electrical and Computer Engineering (WIECON-ECE), IEEE, pp. 180-183",
         year: 2017
       },
       {
         type: "Journal",
         title: "Classification of Electrocardiogram Signal Using Support Vector Machine Based on Fractal Extraction by FD",
         authors: "Farhana Akter Mou, Muhammed Abdullah Al Mahmud, AH M Zadidul Karim, Salma Nazia Rahman, Shaikh Rashedur Rahman",
         venue: "American Journal of Circuits, Systems and Signal Processing, Vol: 3(3), pp. 12-22, USA",
         year: 2017
       },
       {
         type: "Conference",
         title: "Brain Tumor Detection: A Comparison among Various Techniques",
         authors: "M. Abdullah Al Amin, Abdullah al Mahmud, A.H.M Zadidul Karim, Md. Subbir Reza and Munmun Akter",
         venue: "14th global engineering and technology conference, BIAM Foundation, Dhaka, Bangladesh",
         year: 2017
       },
       {
         type: "Journal",
         title: "Identification of abnormality in Electrocardiogram Using Fractal Dimension",
         authors: "Mishuk Mitra, A.H.M. Zadidul Karim, Md. Abdullah- Al Mahmud, Md. Mashiur Rahamn",
         venue: "International Journal of Bioinformatics and Biomedical Engineering, Vol:2, Issue:4, PP: 51-58, USA",
         year: 2016
       },
       {
         type: "Journal",
         title: "Detection of abnormality in Electrocardiogram signals based on Katz's and Higuchi's Method under fractal dimensions",
         authors: "Md. Mashiur Rahamn, A.H.M. Zadidul Karim, Md. Abdullah- Al Mahmud, Salma Nazia Rahman",
         venue: "Computational biology and Bioinformatics, Vol:4, Issue:4, PP: 27-36, USA",
         year: 2016
       },
       {
         type: "Journal",
         title: "Spine Tumor Detection Using MRI",
         authors: "Md. Abdullah- Al Mahmud, A.H.M. Zadidul Karim, Farhana Aktern Mou, Shaikh Rashedur Rahman",
         venue: "International Journal of Biomedical Materials Innovation, Vol:4, Issue:3, PP: 35-42, USA",
         year: 2016
       },
       {
         type: "Journal",
         title: "Brain Tumor Detection by Using Bounding Box methodology Based on Bhattacharyya Coefficient",
         authors: "A.H.M. Zadidul Karim, Md. Abdullah- Al Mahmud, M. Abdullah Al Amin, Mr. Muhammed Towhidur Rahman",
         venue: "American journal of engineering innovation, Vol:5, Issue:12, PP: 218-223, USA",
         year: 2016
       },
       {
         type: "Conference",
         title: "Electricity Generation by Using Amplitude of Ocean Wave",
         authors: "A.H.M. Zadidul Karim, MD.Mizanur Rahman, Subroto Kormokar",
         venue: "3rd International Conference on Green Energy and Technology (ICGET), Co-Sponsored by the IEEE PES, Dhaka University, Bangladesh",
         year: 2015
       },
       {
         type: "Journal",
         title: "Effects of Natural Dust on the Performance of PV Panels in Bangladesh",
         authors: "Mizanur Rahman, Asraful Haque Ronee, Abdullah-Al-Shafi, A.H.M. Zadidul Karim, and Nahyan Al Mahmud",
         venue: "Journal of Electrical Engineering, IEB, IEB for the Issue of 2013, Bangladesh",
         year: 2013
       },
       {
         type: "Journal",
         title: "Comparative Analysis of Image Registration Using Pixel, Wavelet and Translation Method",
         authors: "A.H.M. Zadidul Karim, Binoy Sarker, Nahyan Al Mahmud",
         venue: "Scientific and Academic Publishing Journal(SAP), Vol:4, Issue 2, USA",
         year: 2014
       },
       {
         type: "Journal",
         title: "LOW COST SMART BANGLA TOKEN NUMBER SPEAKER AND DISPLAY SYSTEM",
         authors: "Md.Mizanur Rahman, Md. Aminul Islam, A.H.M. Zadidul Karim, Asraful Haque Ronee, Rajib Sarkar Rajan",
         venue: "Canadian Journal on Electrical and Electronics Engineering, ISSN: 1923-0540, Vol. 3, No. 7, September 2012, Canada",
         year: 2012
       },
       {
         type: "Journal",
         title: "Classification of ECG Using Chaotic Models",
         authors: "Khandakar Mohammad Ishtiak, A. H. M. Zadidul Karim",
         venue: "International Journal of Modern Education and Computer Science (IJMECS) ISSN Print: 2075-0161 ISSN Online: 2075-017X, Vol:4, Issue 9,PP:30-38, Hong-Kong",
         year: 2012
       },
       {
         type: "Journal",
         title: "Industrial Application of PLCs in Bangladesh",
         authors: "Ahmed Ullah Abu Saeed, Md. Al-Mamun and A.H.M. Zadidul Karim",
         venue: "International Journal of Scientific & Engineering Innovation(IJSEI), Volume 3, Issue 6, June-2012 , ISSN 2229-5518, France",
         year: 2012
       },
       {
         type: "Journal",
         title: "Low Cost Digital Basic Mathematics Rules Learner Kit",
         authors: "MD.Mizanur Rahman, A.H.M. Zadidul Karim, Asraful Haque Ronee, Khandakar Mohammad Ishtiak",
         venue: "International Journal of Scientific & Engineering Innovation Volume 3, Issue 7, July-2012, ISSN 2229-5518, France",
         year: 2012
       },
       {
         type: "Journal",
         title: "Comparative analysis of RR interval of PVC signal with normal Heart beat using Fractal Dimension, Poincaré Plot and Sample Entropy method",
         authors: "Md. Meganur Rahman, A.H.M. Zadidul Karim",
         venue: "International Journal of Modern Education and Computer Science (IJMECS) ISSN Print: 2075-0161 ISSN Online: 2075-017X, Vol:4, Issue 12, Hong-Kong",
         year: 2012
       },
       {
         type: "Journal",
         title: "Identification of Atrial Fibrillation (AFIB) of Heart Using Robust Statistical Tools and Approximate Entropy Method",
         authors: "A. H. M. Zadidul Karim, Md. Meganur Rahman",
         venue: "International Journal of Computer and Information Technology (IJCIT), ISSN 2078-5828 (PRINT), ISSN 2218-5224 (ONLINE), VOLUME 01, ISSUE 02, pp.108-111, January 2011. Bangladesh",
         year: 2011
       },
       {
         type: "Journal",
         title: "Design and Implementation of a microcontroller based digital multi-language word master",
         authors: "Munzur-ul-Mamun, Md.Sharif Ullah, A.H.M. Zadidul Karim and Kazi Shamsul Arefin",
         venue: "International Journal of Computer and Information Technology (IJCIT), (ISSN 2078-5828) (PRINT), ISSN 2218-5224 (ONLINE), VOLUME 01, ISSUE 02, pp.112-117.January 2011, Bangladesh",
         year: 2011
       },
       {
         type: "Journal",
         title: "Designing a Microcontroller Based Smart Multilanguage Learning Word Master",
         authors: "Munzur-ul-Mamun, A.H.M. Zadidul Karim, Md.Sharif Ullah, Md.Istiaq Mahbub",
         venue: "IJEST(ISSN: 0975-5462), Volume 3 Issue 1, pp 84-88, January 2011, India",
         year: 2011
       },
       {
         type: "Journal",
         title: "Design a Corruption less Security System For Broadband Over Power Line",
         authors: "A.H. M Zadidul Karim, Md.Istiaq Mahbub, Munzur-ul-Mamun, Md. Meganur Rahman",
         venue: "International Journal of Science and Advanced Technology (ISSN 2221-8386), Volume 1 No 3, pp. 57-62, May 2011, Bangladesh",
         year: 2011
       },
       {
         type: "Journal",
         title: "Low power microcontroller based intelligent token number speaker and display system",
         authors: "Munzur-ul-Mamun , A.H.M. Zadidul Karim , Md.Istiaq Mahbub",
         venue: "International Journal of Engineering and Technology, Vol.3, No.2, pp.199-202, April 2011, China",
         year: 2011
       },
       {
         type: "Journal",
         title: "Design Implementation of a smart load timer to prevent insensible use of electricity",
         authors: "Munzur-ul-Mamun, A.H.M. Zadidul Karim, Md. Sharif Ulah",
         venue: "International Journal of Scientific and Engineering Innovation - IJSEI, France",
         year: 2011
       },
       {
         type: "Journal",
         title: "Identification of Premature Ventricular Contraction of Heart using Poincare Plot Parameters and Sample Entropy",
         authors: "A. H. M. Zadidul Karim, Md. Meganur Rahman, M.A Haque",
         venue: "Engineering e-Transaction (ISSN 1823-6379), Vol. 5, No. 1, pp 1-5,June 2010, Malaysia",
         year: 2010
       },
       {
         type: "Journal",
         title: "Detection of Cardiac Abnormality using Fractal Dimension",
         authors: "Md. Meganur Rahman, A. H. M. Zadidul Karim, M.A Haque",
         venue: "Engineering e-Transaction (ISSN 1823-6379), Vol. 5, No. 1, June 2010,pp 43-47, Malaysia",
         year: 2010
       }
    ],
    administrativeRoles: [
      {
        title: "Head of Department",
        organization: "EEE Department, University of Asia Pacific",
        period: "2025 - Present",
        description: "Strategic leadership and academic administration"
      }
    ],
    academicProfiles: [
      { platform: 'Google Scholar', url: 'https://scholar.google.com/citations?user=K2if9fUAAAAJ&hl=en' },
      { platform: 'ResearchGate', url: 'https://www.researchgate.net/profile/HOD-Name' },
      { platform: 'ORCID', url: 'https://orcid.org/0000-0000-0000-0000' },
      { platform: 'IEEE Xplore', url: 'https://ieeexplore.ieee.org/author/XXXXXXX' }
    ]
  },
  // Professors
  {
  id: "dr-g-r-ahmed-jamal",
  name: "Dr. G. R. Ahmed Jamal",
  title: "Professor",
  role: "Professor",
  image: "/images/faculties/dr-g-r-ahmed-jamal.jpg",
  bio: "Dr. G. R. Ahmed Jamal is a Professor in the Department of Electrical and Electronic Engineering at UAP. His academic focus includes nano materials and nano electronics. He has a strong background in both teaching and academic work in these fields.",
  email: "ahmed.eee@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Ph.D. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "2022"
    },
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "2012"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "2003"
    }
  ],
  academicInterests: [
    "Nano materials",
    "Nano electronics"
  ],
  academicExperience: [],
  professionalMemberships: [
    "Professional Member of IEEE, Bangladesh section. (Membership ID # 92566706)",
    "Life member of Bangladesh Physical Society (BPS)"
  ],
  recentPublications: [
    {
      type: "Journal",
      title: "Chirality Dependence of Gas Adsorption Property of Single Wall Carbon Nanotubes",
      authors: "G. R. Ahmed Jamal, M. Rezanur Islam, M. Adnan Rahman, J. Ferdous Meem and R. Akter Sathi",
      venue: "Materials Science Forum, Vol 889, pp. 248-252, Switzerland",
      year: 2017
    },
    {
      type: "Journal",
      title: "An Improved Technique for Chirality Assignment of SWCNTs Exploiting Their (2n+m) Family Behavior",
      authors: "G. R. Ahmed Jamal, M. Asraf Siddique, Sawon, Khalid Hasan and M. Jane Alam",
      venue: "Materials Science Forum, Vol 889, pp. 253-257, Switzerland",
      year: 2017
    },
    {
      type: "Journal",
      title: "Universal empirical formula for optical transition energies of semiconducting single-walled carbon nanotubes",
      authors: "G. R. Ahmed Jamal and S. M. Mominuzzaman",
      venue: "AIP Advances 6, 015012, American Institute of Physics (AIP)",
      year: 2016,
      impactFactor: 1.5
    },
    {
      type: "Journal",
      title: "Empirical Prediction of Optical Transitions in Metallic Armchair SWCNTs",
      authors: "G. R. Ahmed Jamal and S. M. Mominuzzaman",
      venue: "Cogent Physics, Taylor & Francis Journal, Vol. 2, Issue. 1",
      year: 2015
    },
    {
      type: "Journal",
      title: "Limitations of Tight Binding Model in Describing Electronic Properties of Single Wall Carbon Nanotubes",
      authors: "G. R. Ahmed Jamal, S. M. Mominuzzaman",
      venue: "Journal of Nanoscience and Nanoengineering, Vol. 1, No. 2, pp. 96-106",
      year: 2015
    },
    {
      type: "Journal",
      title: "Beyond the Basic Tight Binding Model to Calculate Optical Transition Energies of SWCNT",
      authors: "G. R. Ahmed Jamal, S. M. Mominuzzaman",
      venue: "Journal of Nanoscience and Nanoengineering, Vol. 1, No. 2, pp. 84-95",
      year: 2015
    },
    {
      type: "Journal",
      title: "Modified Parameter of Tight Binding Model to Calculate First and Second Optical Transition Energies of Semiconducting SWCNTs",
      authors: "G. R. Ahmed Jamal, S. M. Mominuzzaman",
      venue: "Journal of Nanoscience and Nanoengineering, Vol. 1, No. 2, pp. 56-65",
      year: 2015
    },
    {
      type: "Journal",
      title: "Empirical Ratio of First Two Optical Transition Energies in Semiconducting Single Wall Carbon Nanotubes",
      authors: "G. R. Ahmed Jamal, S. M. Mominuzzaman",
      venue: "Journal of Nanoscience and Nanoengineering, Vol. 1, No. 3, pp. 107-114",
      year: 2015
    },
    {
      type: "Journal",
      title: "Different Techniques for Chirality Assignment of Single Wall Carbon Nanotubes",
      authors: "G. R. Ahmed Jamal, S. M. Mominuzzaman",
      venue: "Journal of Nanoscience and Nanoengineering, Vol. 1, No. 2, pp. 74-83",
      year: 2015
    },
    {
      type: "Journal",
      title: "Simulation of Graphene Nanoribbon Based Gas Sensor",
      authors: "G. R. Ahmed Jamal, Mokter M. Chowdhury, Fahrin Rahman, M. Aminur Rahman, Sharika Shabnaz, Umma Habiba",
      venue: "Journal of Nanoscience and Nanoengineering, Vol. 1, No. 2, pp. 66-73",
      year: 2015
    },
    {
      type: "Journal",
      title: "Production of Low Scale Electric Power from Waste Heat of Conventional Kitchen Stoves",
      authors: "G. R. Ahmed Jamal, A. N. M. Masumuzzaman, M. Alomgir Hossain, A. Rahat Kaysher, Harun ur Rashid",
      venue: "American Journal of Renewable and Sustainable Energy, Vol. 1, No. 2, pp. 21-25",
      year: 2015
    },
    {
      type: "Journal",
      title: "An Alternative Approach to Wind Power Generation Using Piezoelectric Material",
      authors: "G. R. Ahmed Jamal, S. M. Lutfur Rahman, M. Masud Rana, S. A. S. Nafis, M. Monjurul Huda, Salma Nazia Rahman",
      venue: "American Journal of Renewable and Sustainable Energy, Vol. 1, No. 2, pp. 45-50",
      year: 2015
    },
    {
      type: "Journal",
      title: "Design and Construction of a Multipurpose Robot",
      authors: "M. Taher U. Zaman, M. Sazzad Ahmed, H. Sabbir, H. Shakhawat, G. R. Ahmed Jamal, M. Khairul Alam, M. M. Hossain Polash, M. Abdullah Al Amin",
      venue: "International Journal of Automation, Control and Intelligent Systems, Vol. 1, No. 2, pp. 34-46",
      year: 2015
    },
    {
      type: "Journal",
      title: "Designing Antenna Parameters for Reduction of Co-Channel Interference in Cellular Mobile Communication by Mechanical Antenna Downtilt",
      authors: "G. R. Ahmed Jamal, Toukir Ahmed, M. Elias Kanchon, S. M. Nahid Hossain",
      venue: "American Journal of Mobile Systems, Applications and Services, Vol. 1, No. 1, pp. 1-5",
      year: 2015
    },
    {
      type: "Journal",
      title: "Adjusting Blocking Probability of Handoff Calls in Cellular Mobile Communication",
      authors: "G. R. Ahmed Jamal, Tareq U. Ahmed, N. Shahadat, M. F. Islam, Marium B.",
      venue: "American Journal of Mobile Systems, Applications and Services, Vol. 1, No. 1, pp. 6-11",
      year: 2015
    },
    {
      type: "Journal",
      title: "Multipurpose Tactical Robot",
      authors: "M T Zaman, M S Ahmed, Shabbir H, Shakhawat H and G R Ahmed Jamal",
      venue: "Engineering International, Vol. 2, No 1",
      year: 2014
    },
    {
      type: "Journal",
      title: "Chirality (n, m) Dependence of Band Gap of Semiconducting SWCNT",
      authors: "G. R. Ahmed Jamal",
      venue: "ECTI Transactions on Electrical Engineering, Electronics, and Communications (ECTI-EEC), Vol. 11, No. 2, pp. 28-37",
      year: 2013
    },
    {
      type: "Journal",
      title: "Empirical Equation of Tight Binding Model Parameter to Calculate Bandgap of Semiconducting Single Wall Carbon Nanotubes",
      authors: "G. R. Ahmed Jamal and M. Shamsul Arefin",
      venue: "Journal of Electrical Engineering-The Institution of Engineers, Bangladesh (JEE-IEB), Vol. 37, No. 2, pp. 3-9",
      year: 2011
    },
    {
      type: "Conference",
      title: "Calculating Optical Transition Energies in Semiconducting Zigzag SWCNTs",
      authors: "G. R. Ahmed Jamal and S. M. Mominuzzaman",
      venue: "Proceeding of IEEE Sponsored International Conference on Advanced Mechatronics, Intelligent Manufacture and Industrial Automation (ICAMIMIA-2017), Surabaya, East Java, Indonesia",
      year: 2017
    },
    {
      type: "Conference",
      title: "Chirality Dependence of Gas Adsorption Property of Single Wall Carbon Nanotubes",
      authors: "G. R. Ahmed Jamal, M. Rezanur Islam, M. Adnan Rahman, J. Ferdous Meem and R. Akter Sathi",
      venue: "Proceeding of 5th International conference on Engineering and Innovative materials, Kuala Lumpur, Malaysia",
      year: 2016
    },
    {
      type: "Conference",
      title: "An Improved Technique for Chirality Assignment of SWCNTs Exploiting Their (2n+m) Family Behavior",
      authors: "G. R. Ahmed Jamal, M. Asraf Siddique, Sawon, Khalid Hasan and M. Jane Alam",
      venue: "Proceeding of 5th International conference on Engineering and Innovative materials, Kuala Lumpur, Malaysia",
      year: 2016
    },
    {
      type: "Conference",
      title: "Chirality Dependence of Single Wall Carbon Nanotube based Gas Sensor",
      authors: "G. R. Ahmed Jamal, M. Rezanur Islam, M. Adnan Rahman, J. Ferdous Meem and R. Akter Sathi",
      venue: "Proceeding of IEEE TENCON-2016 conference, Marina Bay, Singapore",
      year: 2016,
      doi: "10.1109/TENCON.2016.7848545",
      url: "http://ieeexplore.ieee.org/document/7848545/"
    },
    {
      type: "Conference",
      title: "Binding Energy of CNT-GNR Interface due to Different Orientation and Equilibrium Distance",
      authors: "Nabil Ahmed, G.R. Ahmed Jamal and Roman Ahmed",
      venue: "Proceeding of IEEE Sponsored 3rd International Conference on Electrical Information and Communication Technology (EICT), KUET, Khulna, Bangladesh",
      year: 2017
    },
    {
      type: "Conference",
      title: "Many Body Corrections for Higher Optical Transitions in Semiconducting SWCNTs",
      authors: "G. R. Ahmed Jamal and S. M. Mominuzzaman",
      venue: "Proceeding of IEEE Sponsored 9th International Conference on Electrical and Computer Engineering (ICECE-2016), BUET, Dhaka, Bangladesh",
      year: 2016
    },
    {
      type: "Conference",
      title: "Designing Network Parameters for Reduction of Blocking Probability of Handoff Calls in Cellular Mobile Communication",
      authors: "G. R. Ahmed Jamal, Tareq U. Ahmed, N. Shahadat, M. F. Islam, Marium B. and M. A. Haque",
      venue: "Proceeding of 10th Global Engineering, Science and Technology Conference, Dhaka, Bangladesh",
      year: 2015,
      url: "http://www.gistworldconpro.com/conference/3/5"
    },
    {
      type: "Conference",
      title: "Designing Antenna Parameters for Reduction of Co-channel Interference in Cellular Mobile Communication by Mechanical Antenna Downtilt",
      authors: "G. R. Ahmed Jamal, T. Ahmed, M. E. Kanchon, S. M. N. Hossain and M. A. Haque",
      venue: "Proceeding of 10th Global Engineering, Science and Technology Conference, Dhaka, Bangladesh",
      year: 2015,
      url: "http://www.gistworldconpro.com/conference/3/5"
    },
    {
      type: "Conference",
      title: "A Novel Battery Charger Operated from Sound Sources",
      authors: "G. R. Ahmed Jamal, H. Hassan, A. Das, J. Ferdous, S. A. Lisa",
      venue: "Proceeding of IEEE sponsored 3rd International Conference on Informatics, Electronics & Vision (ICIEV)-2014, Dhaka University",
      year: 2014,
      doi: "10.1109/ICIEV.2014.6850683"
    },
    {
      type: "Conference",
      title: "Empirical Prediction of Optical Transitions in Metallic Armchair SWCNTs",
      authors: "G. R. Ahmed Jamal and S. M. Mominuzzaman",
      venue: "Proceeding of IEEE Sponsored 8th International Conference on Electrical and Computer Engineering (ICECE), Pan Pacific Sonargaon, Dhaka, Bangladesh",
      year: 2014,
      doi: "10.1109/ICECE.2014.7026903"
    },
    {
      type: "Conference",
      title: "Generation of Usable Electric Power from Available Random Sound Energy",
      authors: "G. R. Ahmed Jamal, Hamidul Hassan, Amitav Das, Jannat ul Ferdous, Sharmin A. Lisa",
      venue: "Proceeding of IEEE sponsored 2nd International Conference of Informatics, Electronics & Vision (ICIEV-2013), University of Dhaka, Bangladesh",
      year: 2013,
      doi: "10.1109/ICIEV.2013.6572549"
    },
    {
      type: "Conference",
      title: "Quantum Electrodynamic Model of Carbon Nanotube Photovoltaic Device to Assess its Photo Absorption",
      authors: "G. R. Ahmed Jamal, Md. Gaffar and Asif Al-Rasheed",
      venue: "Proceeding of IEEE Sponsored 7th International Conference on Electrical and Computer Engineering (ICECE), Pan Pacific Sonargaon, Dhaka, Bangladesh",
      year: 2012,
      doi: "10.1109/ICECE.2012.6471557"
    },
    {
      type: "Conference",
      title: "Empirical Prediction of Bandgap in Semiconducting Single-Wall Carbon Nanotubes",
      authors: "G. R. Ahmed Jamal, M. Shamsul Arefin, and S. M. Mominuzzaman",
      venue: "Proceeding of IEEE Sponsored 7th International Conference on Electrical and Computer Engineering (ICECE), Pan Pacific Sonargaon, Dhaka, Bangladesh",
      year: 2012,
      doi: "10.1109/ICECE.2012.6471525"
    },
    {
      type: "Conference",
      title: "Empirical Way of Finding Proper Ratio of First and Second Optical Transition Energies in Semiconducting Single Wall Carbon Nanotubes",
      authors: "G. R. Ahmed Jamal",
      venue: "Proceeding of National Conference on Physics for Technology Development, Atomic Energy centre, Dhaka (Organized by Bangladesh Physical Society)",
      year: 2012
    }
  ],
  administrativeRoles: [
    {
      title: "Dean of School of Engineering",
      organization: "University of Asia Pacific",
      period: "2025 - Present"
    },
    {
      title: "Head of Department",
      organization: "EEE Department, University of Asia Pacific",
      period: "2023 - 2025"
    }
  ],
  academicProfiles: [
    {
      platform: "Google Scholar",
      url: "https://scholar.google.com/citations?user=i3ImV9EAAAAJ&hl=en"
    }
    // You can add more profiles as needed:
    // {
    //   platform: "ResearchGate",
    //   url: "https://www.researchgate.net/profile/Professor-Name"
    // },
    // {
    //   platform: "ORCID",
    //   url: "https://orcid.org/0000-0000-0000-0000"
    // }
  ]
},

{
  id: "dr-md-shofiqul-islam",
  name: "Dr. Md. Shofiqul Islam",
  title: "Professor",
  role: "Professor",
  image: "/images/faculties/dr-md-shofiqul-islam.jpg",
  bio: "Dr. Md. Shofiqul Islam is a Professor in the Department of Electrical and Electronic Engineering at UAP. His academic interests include organic solar cell devices, PCF-based plasmonic and terahertz sensors, and vertical devices such as silicon microneedles.",
  email: "dmsi@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Ph.D. in Electrical and Electronic Engineering",
      institution: "Toyohashi University of Technology, Japan",
      year: "2007"
    },
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "2002"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "1999"
    }
  ],
  academicInterests: [
    "Organic solar cell devices",
    "PCF-based plasmonic sensors",
    "Tera-Hertz sensors",
    "Vertical devices (Si microneedles)"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    {
      platform: "Google Scholar",
      url: "https://scholar.google.com/citations?user=3eVh9rYAAAAJ&hl=en"
    }
  ]
},

{
  id: "dr-tapan-kumar-chakraborty",
  name: "Dr. Tapan Kumar Chakraborty",
  title: "Professor",
  role: "Professor",
  image: "/images/faculties/dr-tapan-kumar-chakraborty.jpg",
  bio: "Dr. Tapan Kumar Chakraborty is a Professor in the Department of Electrical and Electronic Engineering at UAP. His areas of specialization include phase change memory, electronic devices and circuits, and power electronics. He has extensive experience in both academic work and higher education.",
  email: "tkc@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Ph.D.",
      institution: "Kanazawa University, Japan",
      year: "1998"
    },
    {
      degree: "M.Engg.",
      institution: "University of Roorkee, India",
      year: "1988"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "1984"
    }
  ],
  academicInterests: [
    "Phase Change Memory",
    "Electronic devices and circuits",
    "Power Electronics"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    {
     platform: "Google Scholar",
      url: "https://scholar.google.com/citations?hl=en&user=edvXv8YAAAAJ"
    }
  ],
},

{
    id: "dr-quazi-deen-mohd-khosru",
    name: "Dr. Quazi Deen Mohd Khosru",
    title: "Professor (Part-time)",
    role: "Professor",
  image: "/images/faculties/dr-quazi-deen-mohd-khosru.jpg",
  bio: "Dr. Quazi Deen Mohd Khosru is a Professor and the Dean of the Faculty of Electrical and Electronic Engineering at BUET. His area of expertise lies in solid-state electronic devices, and he has a long-standing academic career in semiconductor and device technology.",
  email: "qdmkhosru@eee.buet.ac.bd",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Ph.D. in Electrical Engineering",
      institution: "Osaka University, Osaka, Japan",
      year: "1994"
    },
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "1990"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Aligarh Muslim University, Aligarh, India",
      year: "1986"
    }
  ],
  researchInterests: [
    "Solid-state Electronic Devices"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},

{
    id: "dr-enamul-basher",
    name: "Dr. Enamul Basher",
    title: "Professor (Part-time)",
    role: "Professor",
  image: "/images/faculties/dr-enamul-basher.jpg",
  bio: "Dr. Enamul Basher is a Professor in the Department of Electrical and Electronic Engineering at UAP and the Vice Chancellor of the University of Scholars. His areas of expertise include electrical machines and drives, control engineering, and power systems.",
  email: "enamul.basher@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Ph.D.",
      institution: "Russia",
      year: ""
    }
  ],
  researchInterests: [
    "Electrical Machine and Drives",
    "Control Engineering",
    "Power System"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},
{
    id: "dr-md-abdus-salam-akanda",
    name: "Dr. Md. Abdus Salam Akanda",
    title: "Professor (Part-time)",
    role: "Professor",
  image: "/images/faculties/dr-md-abdus-salam-akanda.jpg",
  bio: "Dr. Md. Abdus Salam Akanda is a Professor at BUET. He has conducted postdoctoral academic work at Tohoku University in Japan under the JSPS Fellowship. His academic interests span applied mechanics, nondestructive testing and evaluation (NDT&E), and micro/nano mechanics.",
  email: "masalamakanda@me.buet.ac.bd",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Postdoctoral Fellowship (JSPS Fellow)",
      institution: "Tohoku University, Japan",
      year: "2010"
    },
    {
      degree: "Ph.D. in Electrical and Electronic Engineering",
      institution: "Tohoku University, Japan",
      year: "2002"
    },
    {
      degree: "M.Sc. Engg in Mechanical Engineering",
      institution: "BUET",
      year: "1997"
    },
    {
      degree: "B.Sc. Engg in Mechanical Engineering",
      institution: "BUET",
      year: "1993"
    }
  ],
  researchInterests: [
    "Applied Mechanics",
    "Nondestructive Testing and Evaluation (NDT&E)",
    "Micro/Nano Mechanics"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},



  // Associate Professors
  {
  id: "dr-tahsina-farah-sanam",
  name: "Dr. Tahsina Farah Sanam",
  title: "Associate Professor (Part-time)",
  role: "Associate Professor",
  image: "/images/faculties/dr-tahsina-farah-sanam.jpg",
  bio: "Dr. Tahsina Farah Sanam is an Associate Professor at BUET. Her academic interests span artificial intelligence, machine learning, Internet of Things (IoT), smart healthcare, assistive living technologies, and smart city connectivity. She earned her Ph.D. in Electrical and Computer Engineering from Rutgers University, USA.",
  email: "tahsina@iat.buet.ac.bd",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Ph.D. in Electrical and Computer Engineering",
      institution: "Rutgers University, New Brunswick, NJ, USA",
      year: "2020"
    },
    {
      degree: "M.Sc. in Electrical and Computer Engineering",
      institution: "BUET",
      year: "2012"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "2009"
    }
  ],
  researchInterests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Internet of Things (IoT)",
    "Smart Healthcare",
    "Assistive Living",
    "Smart City and Connectivity"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},
{
  id: "dr-shuva-ghosh",
  name: "Dr. Shuva Ghosh",
  title: "Associate Professor (Part-time)",
  role: "Associate Professor",
  image: "/images/faculties/dr-shuva-ghosh.jpg",
  bio: "Dr. Shuva Ghosh is an Associate Professor at BUET in the Department of Industrial and Production Engineering. He completed his Ph.D. in Engineering Management from Missouri University of Science & Technology, USA. His academic focus lies in operations management, supported by extensive experience in IPE education and academic work.",
  email: "shuvaghosh@ipe.buet.ac.bd",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Ph.D. in Engineering Management",
      institution: "Missouri University of Science & Technology, Rolla, MO, USA",
      year: "2013"
    },
    {
      degree: "M.Sc. in Industrial and Production Engineering",
      institution: "BUET",
      year: "2009"
    },
    {
      degree: "B.Sc. in Industrial and Production Engineering",
      institution: "BUET",
      year: "2006"
    }
  ],
  researchInterests: [
    "Operations Management"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},



  // Assistant Professors
  {
  id: "dr-tasnia-hossain",
  name: "Dr. Tasnia Hossain",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/dr-tasnia-hossain.jpg",
  bio: "Dr. Tasnia Hossain is an Assistant Professor at the University of Asia Pacific. She completed her Ph.D. from CNRS-CHREA, University of Nice Sophia Antipolis, France, with a focus on photovoltaic and semiconductor materials. Her academic interests include thin film photovoltaic materials, plasmonic solar cells, and Group-III nitride semiconductors.",
  email: "tasnia@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Ph.D.",
      institution: "CNRS-CHREA, University of Nice Sophia Antipolis, France",
      year: "2012"
    },
    {
      degree: "M.Sc. in Applied Physics, Electronics and Communication Engineering (APECE)",
      institution: "University of Dhaka",
      year: "2006"
    },
    {
      degree: "B.Sc. in Applied Physics, Electronics and Communication Engineering (APECE)",
      institution: "University of Dhaka",
      year: "2004"
    }
  ],
  researchInterests: [
    "Thin film photovoltaic materials",
    "Plasmonic solar cell",
    "Group-III Nitride Semiconductors"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},
{
  id: "dr-tishna-sabrina",
  name: "Dr. Tishna Sabrina",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/dr-tishna-sabrina.jpg",
  bio: "Dr. Tishna Sabrina is an Assistant Professor at the University of Asia Pacific. She completed her Ph.D. from Monash University, Australia, with a specialization in communication. She has a solid academic background and experience in the field of Electrical and Electronic Engineering.",
  email: "tishna@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Ph.D.",
      institution: "Monash University, Australia",
      year: "2014"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "2005"
    }
  ],
  researchInterests: [
    "Communication"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},

{
  id: "dr-md-sultan-mahmud",
  name: "Dr. Md Sultan Mahmud",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/dr-md-sultan-mahmud.jpg",
  bio: "Dr. Md Sultan Mahmud is an Assistant Professor at the University of Asia Pacific. He completed his Ph.D. in Micro-Nano Engineering from Nagoya University, Japan. His academic interests span a wide range of energy-related fields, including semiconductor materials, solar PV, energy storage systems, fuel cells, and thermoelectric devices.",
  email: "sultan_mahmud@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "Ph.D. in Micro-Nano Engineering",
      institution: "Nagoya University, Japan",
      year: "2024"
    },
    {
      degree: "M.Tech in Energy Engineering",
      institution: "Pondicherry University, India",
      year: "2017"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "University of Asia Pacific",
      year: "2014"
    }
  ],
  researchInterests: [
    "Semiconductor materials",
    "Solar PV",
    "Energy Storage systems",
    "Fuel cells",
    "Thermoelectric"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},
{
  id: "ms-salma-nazia-rahman",
  name: "Ms. Salma Nazia Rahman",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/ms-salma-nazia-rahman.jpg",
  bio: "Ms. Salma Nazia Rahman is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. She holds an M.Sc. in Electrical and Electronic Engineering from BUET and a B.Sc. from RUET. Her area of specialization is Power Electronics.",
  email: "salma@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "2013"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "RUET",
      year: "2006"
    }
  ],
  researchInterests: [
    "Power Electronics"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},
{
  id: "mr-muhammad-towhidur-rahman",
  name: "Mr. Muhammad Towhidur Rahman",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/mr-muhammad-towhidur-rahman.jpg",
  bio: "Mr. Muhammad Towhidur Rahman is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He holds a Master's degree in Biomedical Physics and Technology from the University of Dhaka and a Bachelor's degree in Electrical and Electronic Engineering from AUST. His academic interests include biomedical signal analysis and data analysis.",
  email: "towhid@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "M.Sc. in Biomedical Physics and Technology",
      institution: "University of Dhaka",
      year: "2014"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "AUST",
      year: "2008"
    }
  ],
  researchInterests: [
    "Biomedical Signal Analysis",
    "Data Analysis"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},
{
  id: "mr-m-abdullah-al-amin",
  name: "Mr. M. Abdullah Al Amin",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/mr-m-abdullah-al-amin.jpg",
  bio: "Mr. M. Abdullah Al Amin is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He obtained his M.Sc. in Electrical and Electronic Engineering from IUT and his B.Sc. from AUST. His academic specialization focuses on Renewable Energy.",
  email: "masumeee@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "IUT",
      year: "2019"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "AUST",
      year: "2008"
    }
  ],
  academicInterests: [
    "Renewable Energy"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},
{
  id: "mr-masum-howlader",
  name: "Mr. Masum Howlader",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/mr-masum-howlader.jpg",
  bio: "Mr. Masum Howlader is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his M.Sc. degrees from Karlsruhe Institute of Technology (KIT), Germany and KTH, Sweden. He obtained his B.Sc. in Electrical and Electronic Engineering from IUT. His specialization includes power system stability and HVDC systems.",
  email: "masum_eee@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "M.Sc. in Electrical Engineering",
      institution: "Karlsruhe Institute of Technology (KIT), Germany",
      year: "2014"
    },
    {
      degree: "M.Sc. in Electrical Engineering",
      institution: "KTH, Sweden",
      year: ""
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "IUT",
      year: "2009"
    }
  ],
  academicInterests: [
    "Power System Stability",
    "HVDC"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},
{
  id: "mr-muhammad-ahad-rahman-miah",
  name: "Mr. Muhammad Ahad Rahman Miah",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/mr-muhammad-ahad-rahman-miah.jpg",
  bio: "Mr. Muhammad Ahad Rahman Miah is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his M.Engg. from the Asian Institute of Technology (AIT), Thailand, and his B.Sc. from UAP. His academic interests lie in Power Systems and Renewable Energy.",
  email: "ahad@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "M.Engg. in Electrical Engineering",
      institution: "Asian Institute of Technology (AIT), Thailand",
      year: "2013"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "University of Asia Pacific (UAP)",
      year: "2010"
    }
  ],
  academicInterests: [
    "Power System",
    "Renewable Energy"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},
{
  id: "mr-shaikh-rashedur-rahman",
  name: "Mr. Shaikh Rashedur Rahman",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/mr-shaikh-rashedur-rahman.jpg",
  bio: "Mr. Shaikh Rashedur Rahman is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He obtained his M.Sc. from IUT and B.Sc. from UAP. His areas of specialization include Power Systems and Renewable Energy.",
  email: "shaikh.eee@uap-bd.edu",
  phone: "+880-17****-***",
  room: "",
  education: [
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "Islamic University of Technology (IUT)",
      year: "2016"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "University of Asia Pacific (UAP)",
      year: "2012"
    }
  ],
  academicInterests: [
    "Power System",
    "Renewable Energy"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: [
    // {
    //   platform: "Google Scholar",
    //   url: ""
    // }
  ]
},

{
  id: "mr-khandaker-sultan-mahmood",
  name: "Mr. Khandaker Sultan Mahmood",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/mr-khandaker-sultan-mahmood.jpg", // Use this path or update if you have the actual image
  bio: "Mr. Khandaker Sultan Mahmood is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his B.Sc. in Electrical and Electronic Engineering from the Islamic University of Technology (IUT) in 2011. His areas of specialization include Power Electronics and Control Systems.",
  email: "khandaker.eee@uap-bd.edu",
  phone: "",  // Add if available
  room: "",   // Add if available
  education: [
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Islamic University of Technology (IUT)",
      year: "2011"
    }
  ],
  researchInterests: [
    "Power Electronics",
    "Control Systems"
  ],
  academicExperience: [], // Add details if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available, e.g., Google Scholar link
},
{
  id: "ms-tanima-tasmin-chowdhury",
  name: "Ms. Tanima Tasmin Chowdhury",
  title: "Assistant Professor and Advisor, IEEE UAP WIE AG",
  role: "Assistant Professor",
  image: "/images/faculties/ms-tanima-tasmin-chowdhury.jpg", // Update if you have a photo
  bio: "Ms. Tanima Tasmin Chowdhury is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific and serves as Advisor for the IEEE UAP Women in Engineering Affinity Group (WIE AG). She earned her M.Sc. and B.Sc. degrees in Electrical and Electronic Engineering from BUET, in 2019 and 2013 respectively. Her specialization is in Biomedical Signal Processing.",
  email: "tanima-eee@uap-bd.edu",
  phone: "",  // Add if available
  room: "",   // Add if available
  education: [
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      year: "2019"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      year: "2013"
    }
  ],
  researchInterests: [
    "Biomedical Signal Processing"
  ],
  academicExperience: [], // Add if available
  professionalMemberships: [
    "Advisor, IEEE UAP Women in Engineering Affinity Group (WIE AG)"
  ],
  recentPublications: [], // Add if available
  administrativeRoles: [
    "Advisor, IEEE UAP WIE AG"
  ],
  academicProfiles: [] // Add if available
},

{
  id: "mr-md-khairul-alam",
  name: "Mr. Md. Khairul Alam",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/mr-md-khairul-alam.jpg", // Update if you have an image
  bio: "Mr. Md. Khairul Alam is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his M.Sc. in Electrical and Electronic Engineering from the Islamic University of Technology (IUT) in 2019 and his B.Sc. from the University of Asia Pacific in 2010. His specialization is Embedded Systems.",
  email: "khairul@uap-bd.edu",
  phone: "",  // Add if available
  room: "",   // Add if available
  education: [
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "Islamic University of Technology (IUT)",
      year: "2019"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "University of Asia Pacific (UAP)",
      year: "2010"
    }
  ],
  researchInterests: [
    "Embedded Systems"
  ],
  academicExperience: [], // Add if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available
},
{
  id: "mr-md-abdullah-al-mahmud",
  name: "Mr. Md. Abdullah Al Mahmud",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/mr-md-abdullah-al-mahmud.jpg", // Update with actual image if available
  bio: "Mr. Md. Abdullah Al Mahmud is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He earned his M.Sc. in Electrical and Electronic Engineering from the Islamic University of Technology (IUT) in 2021 and his B.Sc. from the University of Asia Pacific in 2013. His specializations include Optical Fiber Designing and Biomedical Image Processing.",
  email: "abdullah-eee@uap-bd.edu",
  phone: "",  // Add if available
  room: "",   // Add if available
  education: [
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "Islamic University of Technology (IUT)",
      year: "2021"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "University of Asia Pacific (UAP)",
      year: "2013"
    }
  ],
  academicInterests: [
    "Optical Fiber Designing",
    "Biomedical Image Processing"
  ],
  academicExperience: [], // Add if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available
},
{
  id: "mr-kazi-mahtab-kadir",
  name: "Mr. Kazi Mahtab Kadir",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/mr-kazi-mahtab-kadir.jpg", // Update if you have the actual image
  bio: "Mr. Kazi Mahtab Kadir is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He obtained his M.Engg. from the University of Houston, TX, USA in 2013 and his B.Sc. in Electrical and Electronic Engineering from the Islamic University of Technology (IUT) in 2010. His areas of specialization include Power Systems and Renewable Energy.",
  email: "kmkadir@uap-bd.edu",
  phone: "",  // Add if available
  room: "",   // Add if available
  education: [
    {
      degree: "M.Engg.",
      institution: "University of Houston, TX, USA",
      year: "2013"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Islamic University of Technology (IUT)",
      year: "2010"
    }
  ],
  researchInterests: [
    "Power System",
    "Renewable Energy"
  ],
  academicExperience: [], // Add if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available
},
{
  id: "sakhawat-hossen-rakib",
  name: "Mr. Sakhawat Hossen Rakib",
  title: "Assistant Professor",
  role: "Assistant Professor",
  image: "/images/faculties/sakhawat-hossen-rakib.jpg", // update with actual path or URL
  bio: "Mr. Sakhawat Hossen Rakib is an Assistant Professor in the Department of Electrical and Electronic Engineering at UAP. His specialization is in Biomedical Engineering.",
  email: "rakib.h.eee@uap-bd.edu",
  phone: "",
  room: "",
  education: [
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "University of Asia Pacific (UAP)",
      year: "2015"
    }
  ],
  researchInterests: [
    "Biomedical Engineering"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: []
},
{
  id: "dr-mohammad-jane-alam-khan",
  name: "Dr. Mohammad Jane Alam Khan",
  title: "Assistant Professor (Part-time)",
  role: "Assistant Professor",
  image: "/images/faculties/dr-mohammad-jane-alam-khan.jpg", // Update if you have the image
  bio: "Dr. Mohammad Jane Alam Khan is an Assistant Professor at BUET. He earned his Ph.D. from Rensselaer Polytechnic Institute, USA in 2020, his M.Sc. Engg. from BUET in 2015, and his B.Sc. Engg. from BUET in 2012. His academic work specializes in Dislocations and Plasticity, Mechanics of Materials, Energetic Materials, and Molecular Dynamics.",
  email: "ronin@me.buet.ac.bd",
  phone: "",  // Add if available
  room: "",   // Add if available
  education: [
    {
      degree: "Ph.D.",
      institution: "Rensselaer Polytechnic Institute, USA",
      year: "2020"
    },
    {
      degree: "M.Sc. Engg.",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      year: "2015"
    },
    {
      degree: "B.Sc. Engg.",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      year: "2012"
    }
  ],
  researchInterests: [
    "Dislocations and Plasticity",
    "Mechanics of Materials",
    "Energetic Materials",
    "Molecular Dynamics"
  ],
  academicExperience: [], // Add if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available
},



  // Lecturers
{
  id: "ms-munmun-akter",
  name: "Ms. Munmun Akter",
  title: "Lecturer",
  role: "Lecturer",
  image: "/images/faculties/ms-munmun-akter.jpg", // Update with actual image path if available
  bio: "Ms. Munmun Akter is a Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. She completed her B.Sc. in Electrical and Electronic Engineering from the University of Asia Pacific in 2016. Her areas of specialization include Thin Film Solar Cells and Communication.",
  email: "munuapeee@uap-bd.edu",
  phone: "",  // Add if available
  room: "",   // Add if available
  education: [
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "University of Asia Pacific (UAP)",
      year: "2016"
    }
  ],
  researchInterests: [
    "Thin Film Solar Cell",
    "Communication"
  ],
  academicExperience: [], // Add if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available
},
{
  id: "dewan-ashikur-rahaman",
  name: "Dewan Ashikur Rahaman",
  title: "Lecturer",
  role: "Lecturer",
  image: "/images/faculties/dewan-ashikur-rahaman.jpg", // Update with actual image path if available
  bio: "Dewan Ashikur Rahaman is a Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his B.Sc. in Electrical and Electronic Engineering from UAP in 2022 and is currently pursuing his M.Sc. in the same field. His areas of specialization include Power System Analysis, Power System Contingency Analysis, Power System Stability, Renewable Energy, and Power Electronics.",
  email: "ashikdewan.eee@gmail.com",
  phone: "",  // Add if available
  room: "",   // Add if available
  education: [
    {
      degree: "M.Sc. in Electrical and Electronic Engineering (Ongoing)",
      institution: "University of Asia Pacific (UAP)",
      year: ""
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "University of Asia Pacific (UAP)",
      year: "2022"
    }
  ],
  researchInterests: [
    "Power System Analysis",
    "Power System Contingency Analysis",
    "Power System Stability",
    "Renewable Energy",
    "Power Electronics"
  ],
  academicExperience: [], // Add if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available
},

{
  id: "mr-ibnun-nur-akash",
  name: "Mr. Ibnun Nur Akash",
  title: "Lecturer",
  role: "Lecturer",
  image: "/images/faculties/mr-ibnun-nur-akash.jpg", // Replace with actual image path if available
  bio: "Mr. Ibnun Nur Akash is a Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his B.Sc. in Electrical and Electronic Engineering from the Islamic University of Technology (IUT) in 2024. Further details about his specialization will be provided soon.",
  email: "akash@uap-bd.edu", // Email will be provided soon
  phone: "",  // Add if available
  room: "",   // Add if available
  education: [
    {
      degree: "M.Sc. in Optics and Photonics",
      institution: "Karlsruhe Institute of Technology",
      year: "2025"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Islamic University of Technology (IUT)",
      year: "2019"
    }
  ],
  academicInterests: [], // Will be provided soon
  academicExperience: [], // Add if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available
},

{
  id: "khaled-mahmud",
  name: "Khaled Mahmud",
  title: "Lecturer",
  role: "Lecturer",
  image: "/images/faculties/khaled-mahmud.jpg",
  bio: "Khaled Mahmud is a Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his B.Sc. in Electrical and Electronic Engineering from BUET in 2023. His areas of specialization include Nanomaterials, Semiconductor Devices, and Valleytronics.",
  email: "khaled_mahmud@uap-bd.edu",
  phone: "",
  room: "",
  education: [
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      year: "2023"
    }
  ],
  researchInterests: [
    "Nanomaterials",
    "Semiconductor Devices",
    "Valleytronics"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: []
},

{
  id: "usama-ibna-alam",
  name: "Usama Ibna Alam",
  title: "Lecturer",
  role: "Lecturer",
  image: "/images/faculties/usama-ibna-alam.jpg", // Replace with actual image path if available
  bio: "Usama Ibna Alam is a Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his B.Sc. in Electrical and Electronic Engineering from BUET in 2024 and is currently pursuing his M.Sc. in the same field. His areas of specialization include Signal Processing and Large Language Models (LLMs).",
  email: "usama@uap-bd.edu",
  phone: "",  // Add if available
  room: "",   // Add if available
  education: [
    {
      degree: "M.Sc. in Electrical and Electronic Engineering (Ongoing)",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      year: ""
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      year: "2024"
    }
  ],
  researchInterests: [
    "Signal Processing",
    "Large Language Models (LLMs)"
  ],
  academicExperience: [], // Add if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available
},
{
  id: "mr-md-sharif-uddin",
  name: "Mr. Md. Sharif Uddin",
  title: "Lecturer",
  role: "Lecturer",
  image: "/images/faculties/mr-md-sharif-uddin.jpg", // Replace with actual image path if available
  bio: "Mr. Md. Sharif Uddin is a Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his B.Sc. in Electrical and Electronic Engineering from BUET in 2024. Further details about his specialization will be provided soon.",
  email: "", // Email will be provided soon
  phone: "", // Add if available
  room: "",  // Add if available
  education: [
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      year: "2024"
    }
  ],
  researchInterests: [], // Will be provided soon
  academicExperience: [], // Add if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available
},
{
  id: "mr-md-sabbir-ahmed",
  name: "Mr. Md. Sabbir Ahmed",
  title: "Lecturer",
  role: "Lecturer",
  image: "/images/faculties/mr-md-sabbir-ahmed.jpg", // Replace with actual image path if available
  bio: "Mr. Md. Sabbir Ahmed is a Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his B.Sc. in Electrical and Electronic Engineering from BUET in 2024. Further details about his specialization will be provided soon.",
  email: "", // Email will be provided soon
  phone: "", // Add if available
  room: "",  // Add if available
  education: [
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      year: "2024"
    }
  ],
  researchInterests: [], // Will be provided soon
  academicExperience: [], // Add if available
  professionalMemberships: [], // Add if available
  recentPublications: [], // Add if available
  administrativeRoles: [], // Add if available
  academicProfiles: [] // Add if available
},

  // On Leave Faculty
  {
  id: "dr-md-shafiul-alam",
  name: "Dr. Md. Shafiul Alam",
  title: "Associate Professor (On Leave)",
  role: "Associate Professor",
  image: "/images/faculties/dr-md-shafiul-alam.jpg",
  bio: "Dr. Md. Shafiul Alam is currently on leave from his position as Associate Professor in the Department of Electrical and Electronic Engineering at UAP. He completed a prestigious Postdoctoral Fellowship at the K.A.CARE Energy Technology and Innovation Center, King Fahd University of Petroleum & Minerals (KFUPM), Saudi Arabia, in 2022. He earned his Ph.D. in Electrical Engineering from KFUPM in 2018, following an M.Sc. in EEE from BUET in 2012 and a B.Sc. in EEE from DUET in 2007. Dr. Alam is recognized among the world's top 2% scientists. His academic work focuses on renewable energy integration, smart grids, energy management, and advanced power systems.",
  email: "shafiul@uap-bd.edu",
  phone: "",
  room: "",
  education: [
    {
      degree: "Postdoctoral Fellowship",
      institution: "K.A.CARE Energy Technology and Innovation Center, KFUPM, Saudi Arabia",
      year: "2022"
    },
    {
      degree: "Ph.D. in Electrical Engineering",
      institution: "KFUPM, Saudi Arabia",
      year: "2018"
    },
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "2012"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "DUET",
      year: "2007"
    }
  ],
  researchInterests: [
    "Renewable Energy Integration and Control",
    "Distributed Generations and Energy Storage Systems",
    "Smart Grids and Energy Management",
    "AC/DC Microgrids",
    "Power System Stability",
    "Energy Sustainability and Greenhouse Gas Emissions Management",
    "HVDC Systems",
    "Artificial Intelligence",
    "Optimization"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: []
},
{
  id: "dr-md-moshiur-rahman",
  name: "Dr. Md. Moshiur Rahman",
  title: "Associate Professor (On Leave)",
  role: "Associate Professor",
  image: "/images/faculties/dr-md-moshiur-rahman.jpg",
  bio: "Dr. Md. Moshiur Rahman is an Associate Professor (currently on leave) in the Department of Electrical and Electronic Engineering at the University of Asia Pacific (UAP). He earned his Ph.D. in Electrical and Electronic Engineering from BUET in 2023. He completed his M.Sc. from the Islamic University of Technology (IUT) in 2015 and his B.Sc. from UAP in 2011. His area of specialization is Photonic Devices.",
  email: "sourov.eee@uap-bd.edu",
  phone: "",
  room: "",
  education: [
    {
      degree: "Ph.D. in Electrical and Electronic Engineering",
      institution: "BUET",
      year: "2023"
    },
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "Islamic University of Technology (IUT)",
      year: "2015"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "University of Asia Pacific (UAP)",
      year: "2011"
    }
  ],
  researchInterests: [
    "Photonic Devices"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: []
},
{
    id: "ms-farhana-akter-mou",
    name: "Ms. Farhana Akter Mou",
    title: "Assistant Professor (On Leave)",
    role: "Assistant Professor",
  image: "/images/faculties/ms-farhana-akter-mou.png",
  bio: "Ms. Farhana Akter Mou is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific (UAP). She completed her M.Sc. in Electrical and Electronic Engineering from the Islamic University of Technology (IUT) in 2019 and her B.Sc. in EEE from UAP in 2016. Her area of specialization is Photonic Devices.",
  email: "farhanamou36@uap-bd.edu",
  phone: "",
  room: "",
  education: [
    {
      degree: "M.Sc. in Electrical and Electronic Engineering",
      institution: "Islamic University of Technology (IUT)",
      year: "2019"
    },
    {
      degree: "B.Sc. in Electrical and Electronic Engineering",
      institution: "University of Asia Pacific (UAP)",
      year: "2016"
    }
  ],
  researchInterests: [
    "Photonic Devices"
  ],
  academicExperience: [],
  professionalMemberships: [],
  recentPublications: [],
  administrativeRoles: [],
  academicProfiles: []
},





];
  
   // Helper functions
   export const getFacultyById = (id: string): FacultyMember | undefined => {
  return facultyMembers.find(faculty => faculty.id === id);
};

export const getFacultyByRole = (role: FacultyMember['role']): FacultyMember[] => {
  return facultyMembers.filter(faculty => faculty.role === role);
};

export const getAllRoles = (): FacultyMember['role'][] => {
  return Array.from(new Set(facultyMembers.map(faculty => faculty.role)));
};

// Fixed type export
export type Faculty = typeof facultyMembers[0];
