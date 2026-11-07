import {
  SiDart,
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiFlutter,
  SiGithubactions,
  SiGo,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
} from 'react-icons/si';

// Official brand colours, used for the logo strip and the stack tiles.
export const tech = [
  { name: 'Go', Icon: SiGo, color: '#00ADD8' },
  { name: 'Dart', Icon: SiDart, color: '#0175C2' },
  { name: 'Flutter', Icon: SiFlutter, color: '#02569B' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'Firebase', Icon: SiFirebase, color: '#F58220' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'GitHub Actions', Icon: SiGithubactions, color: '#2088FF' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'FastAPI', Icon: SiFastapi, color: '#009688' },
  { name: 'React', Icon: SiReact, color: '#149ECA' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#D9B400' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
];

export const coreTech = tech.slice(0, 8);
