export interface Publication {
  id: string;
  authors: string;
  title: string;
  journal: string;
  year: number;
  volume?: number;
  number?: number;
  pages?: string;
  pdfUrl?: string;
  bibtex: string;
  type?: 'journal' | 'conference';
  location?: string;
  date?: string;
}

export const publications: Publication[] = [
  {
    id: "Shahrestani2026",
    authors: "S. Shahrestani, A. Ballatori, B. Nguyen, S. Riyaz, D. Lee, D. Harrington, A. Kumar, R. Ballou, B. Colloton, N. Sanossian",
    title: "An automated transcranial device for detecting hemispheric bioimpedance asymmetry during stroke: Normative human baselines, stability, and stroke modeling data",
    journal: "International Stroke Conference",
    year: 2026,
    type: "conference",
    date: "February 2026",
    location: "New Orleans, LA, United States",
    bibtex: `@inproceedings{Shahrestani2026,
  author = {Shahrestani, Soroush and Ballatori, Alex and Nguyen, Brian and Riyaz, Shayan and Lee, David and Harrington, Daniel and Kumar, Arjun and Ballou, Ryan and Colloton, Brian and Sanossian, Nerses},
  title = {An automated transcranial device for detecting hemispheric bioimpedance asymmetry during stroke: Normative human baselines, stability, and stroke modeling data},
  booktitle = {International Stroke Conference},
  year = {2026},
  month = {February},
  address = {New Orleans, LA, United States},
  note = {Poster presentation}
}`
  },
  {
    id: "Recinos2020",
    authors: "A. Recinos, J. Abella, S. Riyaz, E. Demircan",
    title: "Real-Time Vertical Ground Reaction Force Estimation in a Unified Simulation Framework Using Inertial Measurement Unit Sensors",
    journal: "Multidisciplinary Digital Publishing Institute (MDPI)",
    year: 2020,
    volume: 88,
    number: 9,
    pages: "12",
    pdfUrl: "https://www.mdpi.com/2218-6581/9/4/88#cite",
    bibtex: `@article{Recinos2020,
  author = {Elliot Recinos and John Abella and Shayan Riyaz and Emel Demircan},
  title = {Real-Time Vertical Ground Reaction Force Estimation in a Unified Simulation Framework Using Inertial Measurement Unit Sensors},
  year = {2020},
  number = {9},
  volume = {88},
  pages = {12},
  journal = {MDPI}
}`
  }
];
