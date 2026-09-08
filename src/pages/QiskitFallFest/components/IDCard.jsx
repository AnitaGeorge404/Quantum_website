import React from 'react';
import { motion } from 'framer-motion';
import { Link as LinkIcon } from 'lucide-react';

export default function IDCard({ member }) {
  if (!member) return (
    <div className="w-full h-full bg-[var(--panel-bg)] border border-[var(--border-color)] border-dashed flex items-center justify-center opacity-50">
      <p className="text-sm text-[var(--muted-foreground)]">Hover over a team member</p>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full bg-[var(--panel-bg)] border border-[var(--border-color)] rounded-md p-6 flex flex-col md:flex-row gap-6 relative overflow-hidden h-full"
    >
      <div className="w-full flex justify-center absolute top-2 left-0">
        <div className="w-12 h-1.5 bg-[var(--accent-blue)]" />
      </div>
      
      <div className="w-32 h-40 md:w-48 md:h-56 shrink-0 bg-[var(--background)] overflow-hidden border border-[var(--border-color)] flex items-center justify-center text-xs text-center text-[var(--muted-foreground)]">
        {member.image}
      </div>

      <div className="flex flex-col justify-center flex-1">
        <h3 className="font-bold text-2xl mb-1 text-[var(--text-primary)]">{member.name}</h3>
        <p className="text-[var(--accent-pink)] text-sm font-medium mb-4">{member.role}</p>
        
        <div className="w-full space-y-3 text-sm mt-4">
          <div className="flex flex-col border-b border-[var(--border-color)] pb-2">
            <span className="text-[var(--muted-foreground)] text-xs uppercase tracking-wider mb-1">ID Number</span>
            <span className="font-mono font-medium">{member.idNumber}</span>
          </div>
          <div className="flex flex-col border-b border-[var(--border-color)] pb-2">
            <span className="text-[var(--muted-foreground)] text-xs uppercase tracking-wider mb-1">Department</span>
            <span className="font-medium">{member.department}</span>
          </div>
        </div>

        <a 
          href={member.linkedin || "#"} 
          target="_blank" 
          rel="noreferrer"
          className="mt-6 flex items-center gap-2 text-[var(--accent-blue)] hover:text-blue-600 transition-colors w-max"
        >
          <LinkIcon className="w-5 h-5" />
          <span className="text-sm font-semibold">LinkedIn Profile</span>
        </a>
      </div>
    </motion.div>
  );
}
