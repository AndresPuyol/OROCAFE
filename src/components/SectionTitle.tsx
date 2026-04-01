import React from 'react';

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  className?: string;
  highlightCount?: number;
}

export default function SectionTitle({ children, className, highlightCount = 1, ...props }: SectionTitleProps) {
  if (typeof children !== 'string' || highlightCount === 0) {
    return <h2 className={className} {...props}>{children}</h2>;
  }

  const words = children.split(' ');
  if (words.length <= highlightCount) {
    return (
      <h2 className={className} {...props}>
        <span className="text-[#e6b810]">{children}</span>
      </h2>
    );
  }

  const highlightedWords = words.slice(0, highlightCount).join(' ');
  const rest = words.slice(highlightCount).join(' ');

  return (
    <h2 className={className} {...props}>
      <span className="text-[#e6b810]">{highlightedWords}</span> {rest}
    </h2>
  );
}
