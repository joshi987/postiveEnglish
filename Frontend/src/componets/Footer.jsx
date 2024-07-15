import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  return (
    <div className="bg-black text-white p-4 text-center">
      Copyright © {currentYear} Alpha Code Labs. All rights reserved.
    </div>
  );
}

export default Footer;

