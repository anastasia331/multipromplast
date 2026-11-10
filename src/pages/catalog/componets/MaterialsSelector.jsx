// Выбор полимерного материала
import { useState } from 'react';
import { MATERIALS } from '../data/DataServices';

export default function MaterialsSelector() {
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIALS[0]);
  return (
    <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs">
      <div className="max-w-3xl mb-8"><span className="text-xs font-bold uppercase tracking-wider text-blue-600">Материалы</span><h3 className="text-2xl font-bold text-slate-900 mt-1">Подбор полимерных материалов</h3><p className="text-sm text-slate-600 mt-2">Подбираем полимер под задачи: нагрузка, температура, УФ, контакты с химией.</p></div>
      <div className="flex flex-wrap gap-2 mb-6">{MATERIALS.map(material => <button key={material.code} onClick={() => setSelectedMaterial(material)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-xs ${selectedMaterial.code === material.code ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200'}`}>{material.code}</button>)}</div>
      <div className="p-6 rounded-xl bg-slate-50 border border-slate-200"><h4 className="text-lg font-bold text-slate-900">{selectedMaterial.code} — {selectedMaterial.name}</h4><p className="text-sm text-slate-600 mt-2">{selectedMaterial.desc}</p></div>
    </div>
  );
}
