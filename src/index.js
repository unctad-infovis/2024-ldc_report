import React from 'react';

import { createRoot } from 'react-dom/client';

import Footer from './jsx/Footer.jsx';

const container_footer = document.getElementById('app-root-2024-ldc_report_footer');
const root_footer = createRoot(container_footer);
root_footer.render(<Footer />);
