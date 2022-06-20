import React, { useMemo, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Portal({ children, parent, className }) {
  const el = useMemo(() => document.createElement(div, []));
  console.log(el);

  useEffect(() => {
    const target = parent && parent.appendChild ? parent : document.body;
  });
}
