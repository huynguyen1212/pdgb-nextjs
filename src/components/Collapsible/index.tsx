import React, { useState } from 'react';
import styled from 'styled-components';

interface TCollapsible {
  header: any;
  content: any;
  timing?: number;
}

export default function Collapsible({ header, content }: TCollapsible) {
  const [show, setShow] = useState<boolean>(true);

  return (
    <SCollapsible className="collapsible">
      <div className="header" onClick={() => setShow(!show)}>
        {header}
      </div>
      <div className={`content ${show ? 'active' : ''}`}>{content}</div>
    </SCollapsible>
  );
}

const SCollapsible = styled.div`
  .header {
    cursor: pointer;
    user-select: none;
  }

  .content {
    max-height: 0px;
    overflow: hidden;
    transition: all 0.3s;

    &.active {
      max-height: 500px;
      overflow: unset;
    }
  }
`;
