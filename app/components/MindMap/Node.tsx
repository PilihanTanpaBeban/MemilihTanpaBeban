// components/Node.tsx
import React, { ReactNode } from 'react';

interface NodeProps {
  label: string;
  children?: ReactNode;
}

const Node: React.FC<NodeProps> = ({ label, children }) => {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '50%', width: '200px', height: '200px', backgroundColor: '#3498db', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
        {label}
      </div>
      <div style={{ position: 'relative', marginLeft: '60px' }}>{children}</div>
    </div>
  );
};

export default Node;
