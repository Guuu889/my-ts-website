import gambar1 from "../../assets/images/remblong2.jpg";
import gambar2 from "../../assets/images/gambar1.jpg";
import gambarfood from "../../assets/images/gambarfood.png";
import hoptima from "../../assets/images/hoptima.png";
import agri from "../../assets/images/agri.png";
import posterta from "../../assets/images/posterta.png";
import sopotify from "../../assets/images/sopotify.png";

export const projectData = [
  {
    imageSrc: posterta,
    title:
      "Fuzzy Logic Based Early Warning System To Prevent Front Brake Overheating In Automatic Motorcycles",
    description:
      "An early warning solution designed to address accidents caused by front brake overheating in automatic motorcycles. It utilizes an embedded system with an ESP32 as microcontroller and the ESP-NOW communication protocol to transmit data, including the brake disc temperature and road slope values. When the system detects conditions that could potentially lead to an accident, it triggers an audible warning to alert the rider to temporarily stop the motorcycle.",
    technologies: ["C++", "ESP-NOW", "Fuzzy Logic"],
    url: "https://github.com/Guuu889/Early-Warning-System"
  },
  {
    imageSrc: agri,
    title: "PakAgri",
    description:
      "PakAgri is an agricultural guidance website for beginner farmers in Indonesia. It offers step-by-step farming guides, climate-based farming calendars, superior variety information, crop care and fertilization tips, as well as market price and marketing updates. The app also supports daily activity recording, tips, the latest news, and emergency issue reporting. The PAK AGRI website itself is built using HTML, CSS, and PHP.",
    technologies: ["HTML", "CSS", "PHP"],
    url: "https://github.com/Guuu889/PakAgri_Project_RekayasaPerangkatLunak"
  },
  {
    imageSrc: gambarfood,
    title: "Food Delivery App",
    description:
      "A Flutter-powered food delivery app interface that replicates an online ordering experience, featuring API-driven menu data and a sleek, user-friendly design.",
    technologies: ["Flutter & Dart", "REST API"],
    url: ""
  },
  {
    imageSrc: hoptima,
    title: "Hoptima",
    description:
      "An AI-driven property search chatbot leveraging RAG-based NLP to deliver accurate, personalized recommendations. Built on Google Cloud (Cloud Run, Firestore, Cloud Storage) with a Flask API, it streamlines property discovery through real-time insights and a localized focus on Yogyakarta.",
    technologies: [
      "Google Cloud Platform",
      "Cloud Storage",
      "Cloud Run",
      "NLP with Retrieval-Augmented Generation (RAG) ",
      "Flask",
      "Firestore",
    ],
    url: "https://github.com/Hoptima/cloud-computing"
  },
  {
    imageSrc: sopotify,
    title: "Spotify Clone App",
    description:
      "A Flutter & Dart–based Spotify clone app offering authentic Spotify login, music streaming, and playlist management via the Spotify Web API and SDK. The project applies MVCC architecture for clean, maintainable code, uses Provider for reactive state management, and delivers a pixel-perfect interface meticulously adapted from Figma for a production-ready user experience.",

    technologies: [
      "Flutter & Dart",
      "Spotify Web API",
      "Spotify SDK",
      "Provider",
      "MVCC",
    ],
    url: "https://github.com/Guuu889/spotifyclone"
  },
  // {
  //   imageSrc: gambar1,
  //   title: "Vibride",
  //   description:
  //     "Vibride is a system designed as a solution for hearing-impaired ride-hailing drivers. It delivers vibrations through special vibrating earphones to help them recognize the turning directions needed to reach the customer’s destination. The development of Vibride integrates the Google Maps SDK via GCP, using Bluetooth Low Energy as the protocol commmunication and the application itself is built using Flutter.",
  //   technologies: ["C++", "GCP", "Flutter", "BLE"],
  // },
];
