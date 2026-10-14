import {useState} from 'react';
export default function ThemeChoice(){
 const [theme,setTheme]=useState(()=>document.documentElement.dataset.canvasTheme||'dark');
 const [error,setError]=useState('');
 return <div className="global-theme-choice"><button aria-label={`Switch to ${theme==='dark'?'light':'dark'} theme`} title={`Switch to ${theme==='dark'?'light':'dark'} theme`} onClick={()=>{
  const next=theme==='dark'?'light':'dark';
  try{localStorage.setItem('canvas-lyrics-theme',next);document.documentElement.dataset.canvasTheme=next;document.documentElement.style.background=next==='dark'?'#101214':'#eef3f7';setTheme(next);setError('');}catch{setError('Appearance could not be saved.');}
 }}><span aria-hidden="true">{theme==='dark'?'☀':'☾'}</span></button>{error&&<span role="status">{error}</span>}</div>;
}
