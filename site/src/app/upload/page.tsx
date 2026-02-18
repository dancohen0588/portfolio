'use client';
import { useRef, useState } from 'react';

export default function UploadPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [log, setLog] = useState<string[]>([]);

  async function handleFiles(files: FileList | null) {
    if (!files) return;
    for (const file of Array.from(files)) {
      const fd = new FormData();
      fd.append('file', file, file.name);
      const res = await fetch('/api/upload', { method: 'POST', body: fd });
      const json = await res.json();
      setLog(prev => [...prev, res.ok ? `✅ ${json.saved} (total: ${json.total})` : `❌ ${json.error}`]);
    }
  }

  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100vh', background:'#0f0f1a', gap: 20 }}>
      <h2 style={{ color:'#7c3aed', fontFamily:'sans-serif' }}>🎬 Frame Uploader</h2>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={e => handleFiles(e.target.files)}
        style={{ display: 'block', color: '#fff', fontFamily:'sans-serif', fontSize:16, padding: 12, border:'2px dashed #7c3aed', borderRadius:8, background:'#1a1a2e', cursor:'pointer', width:400 }}
      />
      <div style={{ color:'#aaa', fontFamily:'monospace', fontSize:13, maxHeight:200, overflowY:'auto', width:400 }}>
        {log.map((l, i) => <div key={i}>{l}</div>)}
        {log.length === 0 && <div>Waiting for uploads…</div>}
      </div>
    </div>
  );
}
